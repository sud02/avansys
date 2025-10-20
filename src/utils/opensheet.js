// Lightweight helpers to consume OpenSheet (elk.sh) JSON and map rows to UI models

/**
 * Fetches rows from an OpenSheet URL.
 * @param {string} sheetUrl - The OpenSheet URL (https://opensheet.elk.sh/<sheetId>/<sheetName>)
 * @param {AbortSignal} [signal] - Optional AbortController signal
 * @returns {Promise<Array<Record<string, string>>>}
 */
export async function fetchOpenSheetRows(sheetUrl, signal) {
    if (!sheetUrl) {
        throw new Error('Missing OpenSheet URL. Provide a valid sheet URL.');
    }

    const response = await fetch(sheetUrl, { signal });
    if (!response.ok) {
        throw new Error(`Failed to fetch sheet: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

/**
 * Maps generic sheet rows into the Projects UI model.
 * Expected columns in the sheet (case-insensitive):
 * - title
 * - description
 * - imageUrl (or image)
 * - technologies (comma-separated)
 * - link
 * - stat1_label, stat1_value, stat2_label, stat2_value, stat3_label, stat3_value (optional)
 *
 * @param {Array<Record<string, string>>} rows
 * @returns {Array<{title:string, description:string, image:string, technologies:string[], link:string, stats:Record<string,string>}>}
 */
export function mapRowsToProjects(rows) {
    if (!Array.isArray(rows)) return [];

    return rows
        .filter((row) => row && (row.title || row.Title))
        .map((raw) => {
            // Robust key normalization: lower-case and remove spaces/underscores
            const normalized = Object.keys(raw).reduce((acc, key) => {
                const value = raw[key];
                const lower = String(key).toLowerCase();
                const compact = lower.replace(/[\s_]+/g, '');
                acc[lower] = value;
                acc[compact] = value;
                return acc;
            }, {});

            const get = (...keys) => {
                for (const k of keys) {
                    const lower = String(k).toLowerCase();
                    const compact = lower.replace(/[\s_]+/g, '');
                    if (normalized[compact] != null && normalized[compact] !== '') return normalized[compact];
                    if (normalized[lower] != null && normalized[lower] !== '') return normalized[lower];
                }
                return '';
            };

            const title = get('title');
            const description = get('description', 'desc');
            const image = get('imageurl', 'image url', 'image');
            const link = get('link', 'project link', 'url');
            const technologiesStr = get('technologies');
            const technologies = (technologiesStr || '')
                .split(',')
                .map((t) => t.trim())
                .filter(Boolean);

            const stats = {};
            for (let i = 1; i <= 5; i += 1) {
                const label = get(`stat${i}_label`, `stat${i} label`, `stat${i}label`);
                const value = get(`stat${i}_value`, `stat${i} value`, `stat${i}value`);
                if (label && value) {
                    stats[label] = value;
                }
            }

            return {
                title: title || '',
                description: description || '',
                image: image || '',
                technologies,
                link: link || '#',
                stats,
            };
        });
}



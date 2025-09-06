import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "@/pages/Splash/Splash";
import Muse from "@/pages/Landing/Muse";
import Mood from "@/pages/Landing/Mood";
import Login from "@/pages/Auth/Login";
import Home from "@/pages/Home/Home";
import ProductDetail from "@/pages/PDP/ProductDetail";
import AddOn from "@/pages/AddOn/AddOn";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/landing/muse" element={<Muse />} />
        <Route path="/landing/mood" element={<Mood />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/addon" element={<AddOn />} />
      </Routes>
    </BrowserRouter>
  );
}

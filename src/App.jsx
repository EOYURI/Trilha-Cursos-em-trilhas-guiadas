import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Catalogo from "./pages/Catalogo/Catalogo.jsx";
import Conteudo from "./pages/Conteudo/Conteudo.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/conteudo" element={<Conteudo />} />
        </Routes>
      </main>
    </div>
  );
}

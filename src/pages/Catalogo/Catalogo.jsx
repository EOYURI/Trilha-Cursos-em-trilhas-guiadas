import CatalogCard from "../../components/CatalogCard/CatalogCard.jsx";
import cursos from "../../data/cursos.js";
import "./Catalogo.css";

export default function Catalogo() {
  return (
    <div className="catalogo">
      <header className="catalogo__header">
        <span className="eyebrow">Catálogo</span>
        <h1>Escolha sua próxima trilha</h1>
        <p className="catalogo__lead">
          {cursos.length} cursos organizados por área. Cada trilha é dividida
          em módulos curtos para encaixar na sua rotina.
        </p>
      </header>

      <div className="catalogo__grid">
        {cursos.map((curso) => (
          <CatalogCard key={curso.id} curso={curso} />
        ))}
      </div>
    </div>
  );
}

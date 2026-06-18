import { Link } from "react-router-dom";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel.jsx";
import destaques from "../../data/destaques.js";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="home__hero">
        <span className="eyebrow">Bem-vindo à trilha</span>
        <h1 className="home__title">
          Aprenda em trilhas guiadas, <br />
          um passo de cada vez.
        </h1>
        <p className="home__lead">
          Reunimos cursos de tecnologia e design em percursos modulares.
          Escolha uma trilha, avance no seu ritmo e acompanhe o progresso a
          cada etapa concluída.
        </p>
        <Link to="/catalogo" className="home__cta">
          Explorar catálogo
        </Link>
      </section>

      <section className="home__carousel" aria-label="Trilhas em destaque">
        <ImageCarousel items={destaques} />
      </section>
    </div>
  );
}

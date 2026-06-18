import { Link } from "react-router-dom";
import "./CatalogCard.css";

export default function CatalogCard({ curso }) {
  const { categoria, titulo, descricao, duracao, nivel } = curso;

  return (
    <article className="catalog-card">
      <div className="catalog-card__top">
        <span className="eyebrow">{categoria}</span>
        <span className="catalog-card__level">{nivel}</span>
      </div>

      <h3 className="catalog-card__title">{titulo}</h3>
      <p className="catalog-card__desc">{descricao}</p>

      <div className="catalog-card__footer">
        <span className="catalog-card__duration">{duracao}</span>
        <Link to="/conteudo" className="catalog-card__button">
          Ver conteúdo
        </Link>
      </div>
    </article>
  );
}

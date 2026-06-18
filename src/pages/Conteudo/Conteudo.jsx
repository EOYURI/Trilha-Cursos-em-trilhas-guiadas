import MediaBlock from "../../components/MediaBlock/MediaBlock.jsx";
import TextBlock from "../../components/TextBlock/TextBlock.jsx";
import ModuleMarker from "../../components/ModuleMarker/ModuleMarker.jsx";
import modulos from "../../data/conteudoModulos.js";
import "./Conteudo.css";

export default function Conteudo() {
  return (
    <div className="conteudo">
      <header className="conteudo__header">
        <span className="eyebrow">React na Prática</span>
        <h1>Conteúdo da trilha</h1>
        <p className="conteudo__lead">
          Três módulos, cada um com um bloco de mídia e um texto explicativo
          logo abaixo — pensados para ser consumidos em sequência.
        </p>
      </header>

      <div className="conteudo__lista">
        {modulos.map((modulo, i) => (
          <div className="conteudo__item" key={modulo.id}>
            <ModuleMarker index={i + 1} isLast={i === modulos.length - 1} />

            <div className="conteudo__modulo">
              <MediaBlock
                image={modulo.image}
                alt={modulo.titulo}
                duration={modulo.duracao}
              />
              <TextBlock
                title={modulo.textoTitulo}
                paragraph={modulo.textoParagrafo}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

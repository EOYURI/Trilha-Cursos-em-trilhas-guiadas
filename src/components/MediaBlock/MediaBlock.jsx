import "./MediaBlock.css";

export default function MediaBlock({ image, alt, duration }) {
  return (
    <div className="media-block">
      <img src={image} alt={alt} />
      <div className="media-block__scrim" />
      <button className="media-block__play" aria-label={`Reproduzir ${alt}`}>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path d="M8 5v14l11-7z" fill="currentColor" />
        </svg>
      </button>
      {duration && <span className="media-block__duration">{duration}</span>}
    </div>
  );
}

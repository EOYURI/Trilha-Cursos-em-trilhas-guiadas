import "./ModuleMarker.css";

export default function ModuleMarker({ index, isLast }) {
  return (
    <div className="module-marker">
      <span className="module-marker__dot">{String(index).padStart(2, "0")}</span>
      {!isLast && <span className="module-marker__line" aria-hidden="true" />}
    </div>
  );
}

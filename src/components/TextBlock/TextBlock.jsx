import "./TextBlock.css";

export default function TextBlock({ title, paragraph }) {
  return (
    <div className="text-block">
      <h4 className="text-block__title">{title}</h4>
      <p className="text-block__paragraph">{paragraph}</p>
    </div>
  );
}

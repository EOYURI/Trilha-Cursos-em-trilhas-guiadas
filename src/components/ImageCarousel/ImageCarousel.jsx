import Carousel from "react-bootstrap/Carousel";
import "./ImageCarousel.css";

export default function ImageCarousel({ items }) {
  return (
    <Carousel className="trail-carousel" fade>
      {items.map((item) => (
        <Carousel.Item key={item.id} interval={4500}>
          <img className="d-block w-100" src={item.image} alt={item.title} />
          <Carousel.Caption className="trail-carousel__caption">
            <span className="eyebrow">{item.eyebrow}</span>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

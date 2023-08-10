export default function Cards({ img, text, optionalClass }) {
  return (
    <div className={`polaroid hover:scale-105 ${optionalClass}`}>
      <img src={img} alt={text} className="img-city" />
      <span className="textoCarousel flex justify-center items-center">{text}</span>
    </div>
  );
}
import "./Features.scss";

function Features ({image, copy}) {
  return (
    <div className="features">
      <img className="features__images" src={image} alt="Icon"/>
      <p className="features__copy">{copy}</p>
    </div>
  )
};

export default Features;
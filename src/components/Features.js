import "./Features.scss";

function Features ({link, copy}) {
  return (
    <div className="features">
      <a className="features__link" href="/">{link}</a>
      <p className="features__copy">{copy}</p>
    </div>
  )
};

export default Features;
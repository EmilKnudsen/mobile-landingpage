import "./InfoCard.scss";

function InfoCard({category, header, copy, link, image}) {
  return (
    <div className="info">
      <p className="info__category">{category}</p>
      <h3 className="info__header">{header}</h3>
      <p className="info__copy">{copy}</p>
      <a href="/" className="info__link">{link}</a>
    </div>
  )
};

export default InfoCard;
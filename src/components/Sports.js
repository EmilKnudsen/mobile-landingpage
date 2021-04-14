import "./Sports.scss";

function Sports () {
  return (
    <div className="sports">
      <h3 className="sports__header">We have been featured in</h3>
      <div className="sports__images">
        <img className="sports__image" src="./images/sport.svg" alt="Company"/>
        <img className="sports__image" src="./images/sport1.svg" alt="Company"/>
        <img className="sports__image" src="./images/sport2.svg" alt="Company"/>
        <img className="sports__image" src="./images/sport3.svg" alt="Company"/>
        <img className="sports__image" src="./images/sport4.svg" alt="Company"/>
        <img className="sports__image" src="./images/sport5.svg" alt="Company"/>
      </div>
    </div>
  )
};

export default Sports;
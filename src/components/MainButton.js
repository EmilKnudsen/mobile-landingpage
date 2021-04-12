import "./MainButton.scss";

function MainButton ({download, name, logo}) {
  return(
    <div className="mainButton">
      <div className="mainButton__wrap">
      <img className="mainButton__logo" src={logo} alt="Logo"/>
      <div className="mainButton__content">
        <p className="mainButton__contentDw">{download}</p>
        <p className="mainButton__contentName">{name}</p>   
      </div>
      </div>
    </div>
  )
};

export default MainButton;
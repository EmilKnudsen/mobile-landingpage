import "./Main.scss";
import MainButton from "./MainButton";

function Main({head, copy}) {
  return (
      <div className="main">
        <h1 className="main__head">{head}</h1>
        <p className="main__copy">{copy}</p>

        <div className="main__buttons">
        <MainButton download="Download on the" name="App Store" logo="./images/apple.png" />
        <MainButton download="Download on the" name="Google Play" logo="./images/gplay.png" />
        </div>
      </div>
      
  )
};

export default Main;
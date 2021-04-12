import "./Main.scss";
import MainButton from "./MainButton";

function Main() {
  return (
      <div className="main">
        <div className="main__header">
          <img className="main__headerImg" src="./images/football.png" alt="Logo"/>
          <h2 className="main__headerText">Sports</h2>
        </div>

        <h1 className="main__head">Get a personalized football experience tailored just for you</h1>
        <p className="main__copy">Achieve super-fan status by getting tailored updates and up-to-the-minute information on your team.</p>

        <div className="main__buttons">
        <MainButton download="Download on the" name="App Store" logo="./images/apple.png" />
        <MainButton download="Download on the" name="Google Play" logo="./images/gplay.png" />
        </div>

      </div>
  )
};

export default Main;
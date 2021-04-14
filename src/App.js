import './App.css';
import Features from './components/Features';
import Footer from './components/Footer';
import InfoCard from './components/InfoCard';
import Main from './components/Main';
import Slider from './components/Slider';
import Sports from './components/Sports';
import VideoCard from './components/VideoCard';
import { FaYoutube, FaBell, FaPlusSquare, FaFontAwesomeFlag, FaPhoneSquareAlt, FaCheckSquare, FaRssSquare, FaShareAltSquare, FaPenSquare} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <div className="main__heading">
      <img className="main__header" src="./images/sportHead.png" alt="Sport icon"/>
      <Main head="Get a personalized football experience tailored just for you" copy="Achieve super-fan status by getting tailored updates and up-to-the-minute information on your team."/>
      <img className="main__image" src="./images/phones.png" alt="Phones"/>
      </div>
      <div className="infoVid">
      <InfoCard category="WHAT IT DOES" header="An Enhanced Football Experience" copy="The Guardian Live Scores app is your go to app for live scores and watching Premier League goals… Get in there, what a result! As well as videos of all the goals, you can watch match highlights, check out the latest scores and results and stay bang-up-to-date with the big football stories from The Guardian publication." link="Learn more"/>
      <VideoCard />
      </div>
      <div className="infoImg">
      <InfoCard category="GET STARTED" header="User-friendly Interface" copy="The in-game goal clips from every Premier League match are available to Guardian TV customers with a Guardian subscription. So, if you’re not a subscriber, now’s the time to make that savvy call. If that’s a step too far for you, you can still watch loads of firecracker Premier League action as long as you sign in with a free Guardian iD." link="Learn more"/>
      <img className="phoneImage" src="/phone.svg" alt="Phones"/>
      </div>
      <div className="features__container">
      <Features link={<FaYoutube/>} copy="Video highlights for every Premier League and English Football League game" />
      <Features link={<FaBell/>} copy="Notifications for your teams, including in-game goal clips and Premier League match highlights for Sky TV subscribers with Guardian" />
      <Features link={<FaPlusSquare/>} copy="Brand new video section including dedicated areas for your chosen team, trending video, Premier League, Football league and other major leagues" />
      <Features link={<FaFontAwesomeFlag/>} copy="Match pages showing live scores, commentary, team line-ups and enhanced match stats to keep you up-to-date on all the action" />
      <Features link={<FaPhoneSquareAlt/>} copy="The new picture in picture video mode means you can watch goals, manager interviews and more whilst using other areas of the app – so you don’t need to miss any of the action" />
      <Features link={<FaCheckSquare/>} copy="Live updated league tables including all the domestic, European and major leagues and tournaments" />
      <Features link={<FaRssSquare/>} copy="The Guardian News Vidiprinter. Follow the goals as they go in with our new and improved Vidiprinter" />
      <Features link={<FaShareAltSquare/>} copy="Match reports, previews and a dedicated news section" />
      <Features link={<FaPenSquare/>} copy="And you can achieve super-fan status by personalising your home page with up-to-the-minute information on your team." />      
      </div>
      <Slider />
      <Sports />
      <div className="footerImg">
      <Main head="Get Up Close With Your Team" copy="If you’re interested in the scores of more than one team (it’s OK, we won’t tell your mates you support two clubs!), you can choose the scores and competitions that matter to you using the ‘My Scores’ section. So, make sure you’re a top-flight football fan by downloading the Football Score Centre now. It’s got all this:"/>
      <img className="footerImage" src="./images/footer.png" alt="Footer"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;

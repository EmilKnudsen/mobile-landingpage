import './App.css';
import Features from './components/Features';
import InfoCard from './components/InfoCard';
import Main from './components/Main';
import VideoCard from './components/VideoCard';

function App() {
  return (
    <div className="App">
      <Main />
      <InfoCard category="WHAT IT DOES" header="An Enhanced Football Experience" copy="The Guardian Live Scores app is your go to app for live scores and watching Premier League goals… Get in there, what a result! As well as videos of all the goals, you can watch match highlights, check out the latest scores and results and stay bang-up-to-date with the big football stories from The Guardian publication." link="Learn more"/>
      <VideoCard />
      <InfoCard category="GET STARTED" header="User-friendly Interface" copy="The in-game goal clips from every Premier League match are available to Guardian TV customers with a Guardian subscription. So, if you’re not a subscriber, now’s the time to make that savvy call. If that’s a step too far for you, you can still watch loads of firecracker Premier League action as long as you sign in with a free Guardian iD." link="Learn more"/>
      <img className="phoneImage" src="/phone.svg" alt="test"/>
      <Features image="./images/icon1.png" copy="Video highlights for every Premier League and English Football League game" />
      <Features image="./images/icon2.png" copy="Notifications for your teams, including in-game goal clips and Premier League match highlights for Sky TV subscribers with Guardian" />
      <Features image="./images/icon3.png" copy="Brand new video section including dedicated areas for your chosen team, trending video, Premier League, Football league and other major leagues" />
      <Features image="./images/icon4.png" copy="Match pages showing live scores, commentary, team line-ups and enhanced match stats to keep you up-to-date on all the action" />
      <Features image="./images/icon5.png" copy="The new picture in picture video mode means you can watch goals, manager interviews and more whilst using other areas of the app – so you don’t need to miss any of the action" />
      <Features image="./images/icon6.png" copy="Live updated league tables including all the domestic, European and major leagues and tournaments" />
      <Features image="./images/icon7.png" copy="The Guardian News Vidiprinter. Follow the goals as they go in with our new and improved Vidiprinter" />
      <Features image="./images/icon8.png" copy="Match reports, previews and a dedicated news section" />
      <Features image="./images/icon9.png" copy="And you can achieve super-fan status by personalising your home page with up-to-the-minute information on your team." />
    </div>
  );
}

export default App;

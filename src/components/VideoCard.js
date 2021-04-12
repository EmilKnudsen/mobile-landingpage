import "./VideoCard.scss";

function VideoCard () {
  return (
    <div className="vidCard">
      <img className="vidCard__image" src="./images/footballCard.png" alt="Arsenal vs Chelsea"/>
      <img className="vidCard__video" src="./images/video.png" alt="Football Video"/>
    </div>

  )
};

export default VideoCard;
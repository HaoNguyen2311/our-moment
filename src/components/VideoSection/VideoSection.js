import ReactPlayer from "react-player/youtube";
import "./VideoSection.scss";

const VideoSection = () => {
  return (
    <div className="video-section">
      <h3>Turn max volume and feel it =))))))</h3>
      <ReactPlayer url="https://www.youtube.com/watch?v=pn3-uZtt_N8&ab_channel=H%E1%BA%A3oH%E1%BB%AFu" />
    </div>
  );
};

export default VideoSection;

import ReactPlayer from "react-player/youtube";
import "./VideoSection.scss";

const VideoSection = () => {
  return (
    <div className="video-section">
      <a href="https://youtu.be/pn3-uZtt_N8">Click me</a>
      <h3>Turn max volume and feel it =))))))</h3>
      <ReactPlayer url="https://www.youtube.com/watch?v=pn3-uZtt_N8" />
    </div>
  );
};

export default VideoSection;

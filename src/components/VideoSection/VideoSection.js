import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import "./VideoSection.scss";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const onPlay = (e) => {
    setIsPlaying(true);
  };
  const onPause = (e) => {
    setIsPlaying(false);
  };
  const onEnded = (e) => {
    setIsPlaying(false);
  };
  return (
    <div className="video-section">
      <h3>Turn max volume and feel it =))))))</h3>
      <ReactPlayer
        width="100%"
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
        muted={true}
        url="https://youtu.be/85zV_-djU9E"
      />
      <div className="music">
        <ReactPlayer
          playing={isPlaying}
          url="https://www.youtube.com/watch?v=4nVyAmssUbQ&ab_channel=Singwithme"
        />
      </div>
    </div>
  );
};

export default VideoSection;

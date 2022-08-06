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
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
        muted={true}
        url="https://youtu.be/85zV_-djU9E"
      />
      <div className="music">
        <ReactPlayer
          playing={isPlaying}
          url="https://www.youtube.com/watch?v=X-y4oROr_Zw&ab_channel=TheVibeGuide"
        />
      </div>
    </div>
  );
};

export default VideoSection;

import { Modal } from "antd";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import GiftIcon from "./GiftIcon/GiftIcon";
import "antd/dist/antd.min.css";
import "./VideoSection.scss";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onPlay = (e) => {
    setIsPlaying(true);
  };
  const onPause = (e) => {
    setIsPlaying(false);
  };
  const onEnded = (e) => {
    setIsPlaying(false);
  };
  const onClickOpenModal = () => {
    setIsModalVisible(true);
  };
  const onCloseModal = () => {
    setIsModalVisible(false);
    setIsPlaying(false);
  };

  return (
    <div className="video-section">
      <GiftIcon onClick={onClickOpenModal} />
      <Modal
        footer={null}
        wrapClassName="video-modal"
        title="Turn max volume and feel it =))))))"
        visible={isModalVisible}
        onCancel={onCloseModal}
      >
        <ReactPlayer
          controls
          playing={isPlaying}
          width="100%"
          onPlay={onPlay}
          onPause={onPause}
          onEnded={onEnded}
          muted={true}
          url="https://youtu.be/85zV_-djU9E"
        />
      </Modal>

      <div className="music">
        <ReactPlayer
          playing={isPlaying}
          url="https://www.youtube.com/watch?v=nF4yllt96kQ"
        />
      </div>
    </div>
  );
};

export default VideoSection;

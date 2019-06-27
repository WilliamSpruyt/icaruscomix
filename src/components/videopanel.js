import React from "react";

const VideoPanel = props => {
  return (
    <div>
      <video
        src={props.vid}
        type='video/x-matroska; codecs="theora, vorbis"'
        autoPlay
        loop
        muted={true}
        onerror="failed(event)"
      />
    </div>
  );
};
export default VideoPanel;

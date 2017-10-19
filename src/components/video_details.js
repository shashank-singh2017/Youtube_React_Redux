import React from 'react';

const VideoDetail = (props) => {
  // sometimes Before getting results in parent component, it is passed to child element.
  // In that case we get a undefined object in child as here.
  //Solution---- check if we have gor the value.

  if(!props.video) {
    return (
      <div>
          Loading......
      </div>
    );
  }

  const videoId = props.video.id.videoId;
  const url = 'https://www.youtube.com/embed/' + videoId;

  return (
    <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}> </iframe>
        </div>

        <div className="details">
            <div className="title">
            {props.video.snippet.title}
            </div>
            <div className="desc">
            {props.video.snippet.description}
            </div>
        </div>
    </div>
  );


};

export default VideoDetail;

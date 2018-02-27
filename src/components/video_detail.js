import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Učitavam ...</div>
  }

  const videoID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="details">
      <h4>{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;

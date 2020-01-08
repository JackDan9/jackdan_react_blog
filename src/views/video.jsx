import React from 'react';
import VideoPlayer from '../components/videoPlayer/VideoPlayer';

const videoJsOptions = {
  autoplay: true,
  controls: true,
  width: 800,
  height: 600,
  videoWidth: 600,
  videoHeight: 400,
  sources: [{
    src: 'https://img-ys011.didistatic.com/static/didiglobal/didi-home-video0626.mp4',
    type: 'video/mp4'
  }]
}

export default class Video extends React.Component {
  render() {
    return <VideoPlayer { ...videoJsOptions } />
  }
}

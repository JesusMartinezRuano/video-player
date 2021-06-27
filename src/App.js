import React from 'react';
import ReactHlsPlayer from 'react-hls-player';
import SplitPane from 'react-split-pane';
import './App.css';
import {urls} from "./urls.js";


function App() {
  const playerref = React.useRef();
  const playerref2 = React.useRef();

  for (var i = 0; i < urls.length; i++)
  {
    var video = urls[i];    
  }
 
  return (
    <div className="App">
      <SplitPane split="horizontal" minSize={150}>
        
        <div className='wrapper'>
        <ReactHlsPlayer playerRef={playerref}
          src={video.url1}
          className='react-player'
          autoPlay={true}
          controls={true}       
         
        />
      </div>
      <div className='wrapper'>
        <ReactHlsPlayer playerRef2={playerref2}
          src={video.url2}
          className='react-player'
          autoPlay={true}
          controls={true}
          
        />
      </div>
  
</SplitPane>;

    </div>
  );
}

export default App;

import React from 'react';
import ReactHlsPlayer from 'react-hls-player';
import SplitPane from 'react-split-pane';
import './App.css';

var loadConfig = require('./urls.js');

function App() {
  const playerref = React.useRef();
  const playerref2 = React.useRef();

  return (
    <div className="App">
      <SplitPane split="horizontal" minSize={150}>
        
        <div className='wrapper'>
        <ReactHlsPlayer playerRef={playerref}
          src={loadConfig.urls[0].url1}
          className='react-player'
          autoPlay={true}
          controls={true}       
         
        />
      </div>
      <div className='wrapper'>
        <ReactHlsPlayer playerRef2={playerref2}
          src={loadConfig.urls[0].url2}
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

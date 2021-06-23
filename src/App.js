import React from 'react';
import ReactHlsPlayer from 'react-hls-player';
import SplitPane from 'react-split-pane';
import './App.css';



function App() {
  const url1 = "https://rtvelivestream.akamaized.net/tdp_main_dvr.m3u8";
  const url2 = "https://rtvelivestream.akamaized.net/24h_main_dvr.m3u8";
  const playerref = React.useRef();
  const playerref2 = React.useRef();


  

  
  return (
    <div className="App">
      <SplitPane split="horizontal" minSize={150}>
        
        <div className='wrapper'>
        <ReactHlsPlayer playerRef={playerref}
          src={url1}
          className='react-player'
          autoPlay={true}
          controls={true}       
         
        />
      </div>
      <div className='wrapper'>
        <ReactHlsPlayer playerRef2={playerref2}
          src={url2}
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

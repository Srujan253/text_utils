
import React, { useState } from 'react';
import Textbar from './component/textbar';
import Navbar from './component/navbar';
import Landing from './component/Landing';

function App() {

  const [mode, setMode] = useState('light');
  const [showLanding, setShowLanding] = useState(true);

  const toggleMode = () => {
      // setMode('dark');
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor="#262728";

    }else{
      setMode('light');
      document.body.style.backgroundColor="white";

    }
  };

  return (
    <>
      {showLanding ? (
        <Landing onStart={() => setShowLanding(false)} />
      ) : (
        <>
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Textbar heading="Enter the text here" mode={mode} />
        </>
      )}
    </>
  );
}

export default App;

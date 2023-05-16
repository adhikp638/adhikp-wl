import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import './WealthlaneMain.css';

function App() {

  return (
    <div className="card-container">
      <Fade top distance="10%" duration={1500}>
        <div className="card-image">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
        <div className="card-content">Reporting: Powerful reporting and analytics that helps you answer questions like</div>
      </Fade>
    </div>
  );
}

export default App;

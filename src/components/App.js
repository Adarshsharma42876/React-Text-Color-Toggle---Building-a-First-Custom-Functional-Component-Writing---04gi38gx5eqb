import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
  return (
    <div id="main">
      <p className={redcolor} >Newton School</p>
      <button id='button' onClick={bluecolor}>Change Style</button>
    </div>
  )
}


export default App;

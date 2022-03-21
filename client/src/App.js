import React from 'react';
import NB from './NavBar/NB';
import './index.css';
import Price from './price/infoprice';
import PB from './PromoBlock/PB';
import { useState } from 'react';
import Form from './Forma/Form.js'
import Logo from './NavBar/logomain.png'
import './App.css'

function App() {
  let [forward, setForward] = useState(true);
  function setParentValue(value) {
    setForward(value)
  }
  if (forward) {
    return (
    <div>
      <NB state={setParentValue} />
      <PB />
      <Price />
    </div>
    );
  } else {
    return (
      <div>
        <a onClick={() => setForward(true)}><img className = "logo2" src={Logo} /></a>
        <Form />
      </div>
    )
  }
}
export default App;

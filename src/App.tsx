import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

import {Router} from './Router'

interface Props {}
const App = ({}: Props) => {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;

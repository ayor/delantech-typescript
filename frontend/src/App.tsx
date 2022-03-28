import React from 'react';
import {Home} from './screens/Home';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import './App.css';

function App() {
  return (
  <Router>
   <Routes>
     <Route path="/" element={<Home/>}/>
   </Routes>
  </Router>
  );
}

export default App;

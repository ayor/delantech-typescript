import React from 'react';
import { Home } from './screens/Home';
import { Detail } from './screens/Details'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import { AppNavbar } from './components/Navbar';
import { Footer } from './containers/Footer'

function App() {
  return (
    <AnimatePresence>
      <motion.div
        animate={{ x: [-300, 0], opacity: [0, 1] }}
        transition={{
          ease: "easeOut",
        }}
      >
        <Router>
          <AppNavbar />
          <Routes>
            <Route path="/product/:type/:name/:id" element={<Detail />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;

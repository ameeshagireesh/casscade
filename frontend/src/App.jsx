import React from 'react';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Rules from './pages/Rules';
import Submit from './pages/Submit';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

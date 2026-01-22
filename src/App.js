import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllSolutions from './pages/AllSolutions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/solutions" element={<AllSolutions />} />
      </Routes>
    </Router>
  );
}

export default App;

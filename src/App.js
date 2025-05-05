import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import MovieDetails from "./components/MovieDetails";


const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

 
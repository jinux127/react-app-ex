import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from './components/Movie';
import Detail from './routes/Detail';
import Home from './routes/Home';

const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/movie/:id" element={<Detail />}/>
                <Route path="/" element={<Home />}/>
            </Routes>
        </Router>);
}

export default App;

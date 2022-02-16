import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../screens/Home';

function AppRouting() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouting

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from '@/pages/login/LoginPage';
import MainPage from '@/pages/main/MainPage';
import React from 'react';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

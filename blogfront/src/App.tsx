import React from 'react';

import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import RegisterPage from './auth/RegisterPage/RegisterPage';
import LoginPage from './auth/LoginPage/LoginPage';
// import Dashboard from "./Dashboard/Dashboard";
import AlertNotification from './shared/components/AlertNotification';
import Header from './header/Header';
import Write from './write/Write';
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Write />}></Route>
                    <Route path="login" element={<LoginPage />}></Route>
                    <Route path="register" element={<RegisterPage />}></Route>
                </Routes>
                {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
            </BrowserRouter>
            <AlertNotification />
        </>
    );
};

export default App;

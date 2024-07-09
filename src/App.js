import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Pages/home';
import Navbar from './Components/NavBar/NavBar'
import { AuthProvider } from './context/AuthContext';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';
import RegisteredUsers from './Components/Register/RegisteredUsers';
import Assets from './Components/Pages/Assets/Assets';
import Licenses from './Components/Pages/Licenses/Licenses'

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <AppContent />
            </Router>
        </AuthProvider>
    );
};

const AppContent = () => {
    const location = useLocation();
    
    return (
        <>
        <div className="app-container">
            {location.pathname === '/home' && <Navbar />}
            <main className="content">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/users" element={<RegisteredUsers />} /> 
                    <Route path="/assets" element={<Assets/>} />
                    <Route path="/licenses" element={<Licenses/>} />
                </Routes>
            </main>
            {location.pathname === '/home' &&  <Footer />}
            </div>
        </>
    );
};

export default App;

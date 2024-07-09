import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './navbar.scss';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { isAuthenticated, currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <ul className="navbar-menu">    
            <li className="dropdown">
                    <a href="#" onClick={toggleMenu}>Menu</a>
                    {showMenu && (
                        <ul className="dropdown-menu">
                             <li><a href="home">Home</a></li>
                             <li><a href="/Assets">Assets</a></li>
                             <li><a href="/licenses">Licenses</a></li>
                             <li><a href="#" onClick={() => navigate('/users')}>View Users</a></li>

                        </ul>
                    )}
                </li>
               
                <li className="logout">
                        <button onClick={handleLogout}>Logout</button>
                    </li>

            </ul>
        </nav>
    );
};

export default Navbar;

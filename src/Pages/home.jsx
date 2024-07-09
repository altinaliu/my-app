import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './home.scss';

const Home = () => {
    const { currentUser } = useAuth();
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (currentUser) {
            setSuccessMessage('Success: You have successfully logged in.');
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        }
    }, [currentUser]);

    return (
        <div className="home">
            {currentUser ? (
                <>
                    <header>
                        <h1>Welcome, {currentUser.name}!</h1>
                    </header>
                    {successMessage && <div className="success-message">{successMessage}</div>}
                    <section className="links">
                        <h2>Info</h2>
                        <ul>
                            <li><a href="/assets">Assets</a></li>
                            <li><a href="/licenses">Licenses</a></li>
                            <li><a href="/">Accessories</a></li>
                            <li><a href="/"> Consumables</a></li>
                        </ul>
                    </section>
                    <section className="user-info">
                        <h2>User Information</h2>
                        <ul>
                            <li><strong>Name:</strong> {currentUser.name}</li>
                            <li><strong>Username:</strong> {currentUser.username}</li>
                            <li><strong>Email:</strong> {currentUser.email}</li>
                            <li><strong>Last Login:</strong> {currentUser.lastLogin}</li>
                            <li><strong>Created At:</strong> {currentUser.createdAt}</li>
                        </ul>
                    </section>

                </>
            ) : (
                <div className="login-message">Please log in to view this page.</div>
            )}
        </div>
    );
};

export default Home;

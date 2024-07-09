import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './registeredUsers.scss';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const RegisteredUsers = () => {
    const [users, setUsers] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    const handleDeleteUser = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    const handleEditUser = (index) => {
        setIsEditing(true);
        setCurrentUser({ ...users[index], index });
    };

    const handleSaveUser = () => {
        const updatedUsers = [...users];
        updatedUsers[currentUser.index] = {
            username: currentUser.username,
            email: currentUser.email,
            password: currentUser.password,
        };
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setIsEditing(false);
        setCurrentUser(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div>
            <Navbar />
            <div className="registered-users">
                <h2>Registered Users</h2>
                {isEditing ? (
                    <div className="edit-form">
                        <h3>Edit User</h3>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={currentUser.username}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={currentUser.email}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                                value={currentUser.password}
                                onChange={handleChange}
                            />
                        </label>
                        <button onClick={handleSaveUser}>Save</button>
                    </div>
                ) : (
                    <ul>
                        {users.map((user, index) => (
                            <li key={index}>
                                <div className="user-info">
                                    <strong>Username:</strong> {user.username}, <strong>Email:</strong> {user.email}
                                </div>
                                <div className="button-container">
                                    <button onClick={() => handleEditUser(index)}>Edit</button>
                                    <button onClick={() => handleDeleteUser(index)}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default RegisteredUsers;

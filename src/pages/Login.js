import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('admin123');
    const [message, setMessage] = useState('');
    // const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
            try {
                const response = await axios.post('http://localhost:8080/login', null, {
                    params: {
                        username,
                        password,
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                });
                if (response.status === 200) {
                    setMessage('Login successful!');
                    window.location.href = '/admin'; 
                } else {
                    setMessage('Login failed!');
                }
            } catch (error) {
                console.error('Error:', error);
                setMessage('An error occurred during login');
            }
        };


    return (
        <div className='login-container'>
            <div>
            <h2>Login</h2>
            <form
             onSubmit={handleLogin}
            >
                <div className='form-group'>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div  className='form-group'>
                    <label>Password </label>
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {message && <p>{message}</p>}
                <div className='form-group login-btn'>
                <button type="submit">Login</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Login;

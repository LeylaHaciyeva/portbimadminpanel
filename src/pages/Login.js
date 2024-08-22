import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    // const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/perform_login', {
                username,
                password,
            }, {
                withCredentials: true,
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
        } finally {
            setMessage("end");
        }

        // try {
        //     const response = await axios.post('http://localhost:8080/perform_login', {
        //         username,
        //         password,
        //     }, {
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded',
        //         },
        //         withCredentials: true});

        //     if (response.status === 200) {
        //         navigate('/admin');
        //     }
        // } catch (error) {
        //     setError('Invalid username or password');
        // }
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
                        type="password"
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

// src/components/AuthForm.js

import React, { useState } from 'react';

const AuthForm = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add authentication logic
        console.log('Email:', email, 'Password:', password, isLogin ? 'Logging in...' : 'Signing up...');
        // Clear form
        setEmail('');
        setPassword('');
        onClose(); // Close the form after submission
    };

    return (
        <div style={styles.modal}>
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
                <button type="button" onClick={() => setIsLogin(!isLogin)} style={styles.toggleButton}>
                    Switch to {isLogin ? 'Sign Up' : 'Login'}
                </button>
            </form>
            <button onClick={onClose} style={styles.closeButton}>Close</button>
        </div>
    );
};

const styles = {
    modal: {
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        width: '300px',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
        marginTop: '10px',
    },
    toggleButton: {
        backgroundColor: 'transparent',
        color: '#4CAF50',
        border: 'none',
        cursor: 'pointer',
        marginTop: '10px',
    },
    closeButton: {
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
        width: '100%',
    },
};

export default AuthForm;

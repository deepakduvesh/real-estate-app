// src/components/Header.js

import React, { useState } from 'react';
import AuthForm from './AuthForm';

const Header = () => {
    const [showAuthForm, setShowAuthForm] = useState(false);

    const toggleAuthForm = () => {
        setShowAuthForm(!showAuthForm);
    };

    return (
        <header style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 0', textAlign: 'center' }}>
            <h1>Luxury Estates</h1>
            <p>Your dream home awaits!</p>
            <button onClick={toggleAuthForm} style={styles.button}>Login / Sign Up</button>
            {showAuthForm && <AuthForm onClose={toggleAuthForm} />}
        </header>
    );
};

const styles = {
    button: {
        backgroundColor: 'white',
        color: '#4CAF50',
        border: '1px solid #4CAF50',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    },
};

export default Header;

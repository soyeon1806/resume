import '@/index.css';

import LoginForm from './components/LoginForm';
import React from 'react';
import backgroundImg from '@/assets/background-img.png';

const LoginPage = () => {
    return (
        <div
            className="login-page"
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <LoginForm />
        </div>
    );
};

export default LoginPage;

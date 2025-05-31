import '@/styles/index.css';

import React, { useState } from 'react';

import LoadingAnimation from '@/pages/main/components/Loading';
import LoginForm from './components/LoginForm';
import backgroundImg from '@/assets/background-img.png';

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);

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
            {isLoading ? <LoadingAnimation /> : <LoginForm setIsLoading={setIsLoading} />}
        </div>
    );
};

export default LoginPage;

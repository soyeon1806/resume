import '@/styles/Loading.css'; // CSS 분리

import React, { useEffect, useState } from 'react';

const LoadingAnimation = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    const letters = ['s', 'o', 'y', 'e', 'o', 'n'];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => prev + 1);
        }, 300);

        if (activeIndex >= letters.length) {
            clearInterval(interval);
            setTimeout(() => {
                setIsLoading(false);
            }, 300); // 마지막 강조 후 조금 쉬고 화면 전환
        }

        return () => clearInterval(interval);
    }, [activeIndex]);

    if (!isLoading) {
        return (
            <div>
                {/* 로딩 후 보여줄 메인 콘텐츠 */}
                <h1>Main Content 🎉</h1>
            </div>
        );
    }

    return (
        <div className="loading-container">
            <div className="dot" style={{ left: `${activeIndex * 2}em` }} />
            <div className="letters">
                {letters.map((char, index) => (
                    <span key={index} className={`letter ${index === activeIndex ? 'active' : ''}`}>
                        {char}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default LoadingAnimation;

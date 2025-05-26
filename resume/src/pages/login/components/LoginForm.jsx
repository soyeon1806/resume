import React from 'react';
import profileImg from '@/assets/profile-img.png';

const LoginForm = ({ setIsLoading }) => {
    const handleLogin = () => {
        // 1. 로딩 시작
        setIsLoading(true);

        // 2. 실제 로그인 처리를 흉내내기 위한 딜레이
        setTimeout(() => {
            // 예: 로그인 성공 → 메인 페이지 이동
            window.location.href = '/main'; // 필요에 따라 라우팅 변경
        }, 2000);
    };

    return (
        <div
            style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '20px',
                width: '320px',
                textAlign: 'center',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                boxSizing: 'border-box',
            }}
        >
            <img
                src={profileImg}
                alt="프로필"
                style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '20px',
                    marginBottom: '1rem',
                }}
            />
            <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>관리자 로그인</h2>
            <input
                type="text"
                placeholder="아이디"
                style={{
                    display: 'block',
                    margin: '0 auto 1rem',
                    width: '80%',
                    padding: '0.8rem',
                    marginBottom: '1rem',
                    borderRadius: '10px',
                    border: '1px solid #ccc',
                }}
            />
            <input
                type="password"
                placeholder="비밀번호"
                style={{
                    width: '80%',
                    padding: '0.8rem',
                    marginBottom: '1.5rem',
                    borderRadius: '10px',
                    border: '1px solid #ccc',
                }}
            />
            <button
                onClick={handleLogin}
                style={{
                    width: '80%',
                    padding: '0.8rem',
                    backgroundColor: '#F2A8A8',
                    border: 'none',
                    borderRadius: '10px',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    color: 'white',
                    cursor: 'pointer',
                }}
            >
                로그인
            </button>
        </div>
    );
};

export default LoginForm;

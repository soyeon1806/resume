import Navbar from '@/pages/main/components/Navbar';
import React from 'react';
import backgroundImg from '@/assets/background-img.png';

const MainPage = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                padding: '4rem 2rem',
                boxSizing: 'border-box',
            }}
        >
            {/* 관리자 로그인 버튼 (배경 위 오른쪽 상단) */}
            <button
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    border: '1px solid #333',
                    borderRadius: '6px',
                    padding: '0.4rem 0.8rem',
                    backgroundColor: 'white',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                }}
                onClick={() => (window.location.href = '/login')} // 페이지 이동
            >
                관리자 로그인
            </button>

            {/* 메인 콘텐츠 박스 */}
            <div
                style={{
                    backgroundColor: '#fefaf5',
                    width: '80vw',
                    margin: '0 auto',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    minHeight: '85vh',
                }}
            >
                <Navbar />
                <div style={{ padding: '2rem', textAlign: 'center', color: '#aaa' }}>
                    메인 콘텐츠 영역 (작성 중...)
                </div>
            </div>
        </div>
    );
};

export default MainPage;

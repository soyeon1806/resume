// ⛳️ 이 파일은 애플리케이션의 최상위 라우팅 구조를 정의하는 역할을 함

// 🔁 React Router의 주요 컴포넌트들을 불러옴
// - BrowserRouter: 브라우저 주소(URL)에 따라 컴포넌트를 렌더링할 수 있도록 도와주는 부모 컴포넌트
// - Route: 특정 URL 경로에 해당하는 컴포넌트를 지정할 때 사용
// - Routes: 여러 개의 Route를 그룹으로 묶어서 관리할 수 있도록 도와주는 wrapper

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from '@/pages/login/LoginPage';
import MainPage from '@/pages/main/MainPage';
import React from 'react';

// 🎯 App 컴포넌트는 전체 애플리케이션의 진입점 역할을 하며, 라우터 설정을 포함함
const App = () => {
    return (
        // 🔐 <BrowserRouter>는 리액트 라우터를 사용할 수 있게 해주는 컨테이너
        // 내부에 정의된 <Routes>와 <Route>를 해석해서, URL 경로에 따라 해당 컴포넌트를 보여줌
        <BrowserRouter>
            {/* <Routes> 안에는 여러 개의 <Route>들을 포함시킬 수 있음 */}
            <Routes>
                {/* 
                    ✅ path="/" : URL이 루트("/")일 때
                    ✅ element={<MainPage />} : MainPage 컴포넌트를 보여줌
                */}
                <Route path="/" element={<MainPage />} />

                {/* 
                    ✅ path="/login" : URL이 "/login"일 때
                    ✅ element={<LoginPage />} : LoginPage 컴포넌트를 보여줌
                */}
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};

// 📦 App 컴포넌트를 export 해서 사용 가능하게 함
export default App;

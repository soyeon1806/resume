// 1️⃣ index.css를 import 해서 전역 스타일을 적용함
// HTML의 <style>이 아니라, JS 파일에서 CSS 파일을 직접 불러오는 방식임

// 2️⃣ App 컴포넌트를 불러옴
// 전체 애플리케이션의 시작점이자, 모든 페이지와 컴포넌트를 포함하는 최상위 컴포넌트임

// 3️⃣ React의 StrictMode를 import 함
// 개발 중에 잠재적인 문제를 감지하고 경고해주는 기능임
// 실제 배포 환경에서는 자동으로 제거되므로 성능에 영향을 주지 않음

// 4️⃣ React 18부터 도입된 createRoot API를 import 함
// 이 API를 통해 React가 실제로 HTML DOM에 컴포넌트를 렌더링할 수 있도록 연결함

import '@/styles/index.css';

import App from '@/App.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// ✅ HTML 문서 내에 있는 id가 'root'인 요소를 가져옴
createRoot(document.getElementById('root')).render(
    // ✅ StrictMode로 App 컴포넌트를 감싸서 렌더링함
    // 개발 중에는 의심스러운 부분을 콘솔 경고로 알려주고, 의도치 않은 사이드 이펙트를 조기에 발견할 수 있게 도와줌
    // App은 실제 화면의 시작점이며, 여기에 모든 페이지가 포함됨
    <StrictMode>
        <App />
    </StrictMode>
);

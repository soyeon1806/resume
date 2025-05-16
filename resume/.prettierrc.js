module.exports = {
  semi: true,                 // 줄 끝에 세미콜론 붙이기
  singleQuote: true,         // '작은 따옴표' 사용
  tabWidth: 2,               // 들여쓰기 2칸
  printWidth: 100,           // 한 줄 최대 100자
  trailingComma: 'es5',      // 마지막 요소에도 쉼표
  bracketSpacing: true,      // 객체 중괄호 사이에 띄어쓰기
  arrowParens: 'avoid',      // 화살표 함수에서 괄호 생략
  endOfLine: 'auto',         // 줄 끝 자동 감지
  plugins: ['prettier-plugin-tailwindcss'], // Tailwind 클래스 정렬
};

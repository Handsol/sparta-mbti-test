# 🧠 MBTI Test 🧠

## 📍 프로젝트 소개
"**MBTI Test**"는 회원가입 후 로그인을 진행하고, MBTI 테스트를 통해 자신의 성격 유형을 확인할 수 있는 웹 애플리케이션입니다. 마음에 들지 않는 결과는 삭제 후 다시 테스트 할 수 있습니다.

🌐 **[프로젝트 페이지 바로가기](https://sparta-mbti-test-alpha.vercel.app/)**

## 🚀 구현 기능
- ✅ 회원가입 및 로그인 기능
- ✅ MBTI 테스트 진행
- ✅ 테스트 결과 확인 및 삭제 기능
- ✅ 결과에 따라 성격 유형 표시

## 🗓 프로젝트 기간
**2025년 2월 19일** ~ **2025년 2월 25일** (총 6일)

## 🔧 트러블 슈팅

### 1️⃣ [로그인 시 세션 관리 오류 해결](https://sol09-29.tistory.com/84)
- **문제:** 로그인 후 세션이 올바르게 유지되지 않는 문제 발생.
- **해결:** 세션 관리 방식 변경하여 로그인 상태 유지.

### 2️⃣ [MBTI 결과 상태 관리 오류 해결](https://sol09-29.tistory.com/85)
- **문제:** MBTI 결과가 갱신되지 않고 기존 값만 표시됨.
- **해결:** 상태 관리 방식을 개선하여 새 결과가 반영되도록 수정.

### 3️⃣ [로컬스토리지 데이터 복원 문제 해결](https://sol09-29.tistory.com/86)
- **문제:** 페이지 새로고침 후 로그인 정보가 사라짐.
- **해결:** 로컬스토리지에 로그인 정보를 저장하여 새로고침 후에도 복원.

## 🏗 프로젝트 구조
```plaintext
/ 
├── public/ 
├── src/ 
│ ├── api/ 
│ │ ├── auth.js
│ │ └── testResults.js
│ ├── components/
│ │ ├── layout/ 
│ │ │ └── TestForm.jsx
│ │ ├── Header.jsx 
│ │ └── Footer.jsx 
│ ├── data/ 
│ │ └── mbtiResults.js 
│ ├── pages/
│ │ ├── HomePage.jsx 
│ │ ├── MainPage.jsx 
│ │ ├── ProfileEditPage.jsx 
│ │ ├── ProfilePage.jsx 
│ │ ├── SignUpPage.jsx 
│ │ ├── TestPage.jsx 
│ │ ├── TestResultPage.jsx 
│ │ └── UserLoginPage.jsx 
│ ├── shared/
│ │ ├── Router.jsx
│ │ └── ProtectedRoute.jsx 
│ ├── utils/
│ │ └── mbtiCalculator.js
│ ├── zustand/ 
│ │ └── bearsStore.js
│ ├── App.jsx 
│ ├── App.css 
│ ├── index.js
│ └── main.jsx
├── package.json
├── README.md 
└── tailwind.config.js
```


## 📂 주요 파일 설명
- **App.jsx**: 애플리케이션의 주요 컴포넌트로, 앱의 전체 구조를 관리합니다.
- **Header.jsx**: 상단 네비게이션 바를 구성하는 컴포넌트입니다.
- **Footer.jsx**: 하단 바를 구성하는 컴포넌트입니다.
- **TestForm.jsx**: MBTI 테스트 질문을 표시하고 답변을 받는 컴포넌트입니다.
- **TestPage.jsx**: MBTI 테스트를 진행하는 페이지입니다.
- **TestResultPage.jsx**: MBTI 결과를 확인할 수 있는 페이지입니다.
- **Router.jsx**: 라우팅 관리 컴포넌트입니다.
- **ProtectedRoute.jsx**: 로그인한 사용자만 접근할 수 있는 보호된 라우트 컴포넌트입니다.
- **mbtiCalculator.js**: MBTI 테스트 계산 및 결과 도출 로직을 처리하는 유틸리티 파일입니다.
- **bearsStore.js**: Zustand를 사용하여 상태를 관리하는 스토어 파일입니다.

## 💻 기술 스택
- **React**
- **Zustand** (상태 관리)
- **Tailwind CSS** (스타일링)
- **React Router** (라우팅)
- **LocalStorage** (데이터 유지)
- **Styled-components**

## 📑 사용 방법
1. **회원가입 및 로그인:** 계정을 생성하고 로그인합니다.
2. **MBTI 테스트 진행:** 테스트 질문에 답하여 MBTI 테스트를 진행합니다.
3. **결과 확인:** 테스트 결과를 확인하고, 마음에 들지 않으면 기존 결과를 삭제하고 새로 테스트할 수 있습니다.

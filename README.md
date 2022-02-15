## 주제

`내 책상 위의 애널리스트, MoYa for Desktop📈`의 협업을 위한 boiler-plate repo입니다.

## 개요

1. 직관적인 설정 이해와 커스터마이징을 위해 CRA 없이 webpack,babel,react로 리액트 초기환경 설정을 하였습니다.
2. prettier , eslint를 이용하여 코드 컨벤션을 설정할 예정입니다.
3. <s>redux</s>, redux-saga를 위한 코드 구조를 설정할 예정입니다.

## 폴더구조

작성중...

```
├── node_modules
├── public
│   └── index.html
├── src
│   ├── index.js // 진입점
│   ├── GlobalStyle.js // reset.css
│   ├── components // 재사용 가능한 컴포넌트를 저장하는 폴더
│   │   └── example
│   │       ├── index.js // JSX를 반환하는 컴포넌트
│   │       └── style.js // css-in-js를 저장하는 폴더
│   ├── reducers // reducer를 저장하는 폴더
│   │   │── [reducername]
│   │   │    ├── actionType.js //액션 타입과 액션 생성함수는 actionType.js에서 관리
│   │   │    └── [reducername].js // reducer를 반환
│   │   └── rootReducer.js // root reducer를 반환
│   ├── sagas // saga를 저장하는 폴더
│   │   │── [saganame]
│   │   │    └── [saganame].js // saga를 반환
│   │   └── rootSaga.js // root saga를 반환
│   └── store // store를 저장하는 폴더
│   │   └── store.js
│   └── util // 유틸 함수를 저장하는 폴더
└──
```

## 사용된 라이브러리

- css-in-js를 작성하는데에 `@emotion/styled`를 이용합니다.
- 상태관리에 `redux`와 `redux-saga`를 이용합니다.
- js로 작업할 때는 `prop-types`를 이용하여 component의 props타입을 지정합니다.

## 참조

[Setup Webpack and Babel for React](https://www.youtube.com/watch?v=ydDUm1yPZs0)

[Webpack 러닝 가이드](https://yamoo9.gitbook.io/webpack/)

[Webpack 공식문서](https://webpack.js.org/)

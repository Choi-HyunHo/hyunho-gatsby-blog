---
emoji: 📖
title: Next.js - loading.js
date: '2023-05-05'
author: 최현호
tags: Next.js
categories: Next.js
---

loading.js 는 해당 route에서 페이지 UI가 준비되기 이전에 사용자에게 로딩 중인 상태를 나타낼 수 있는 UI 컴포넌트 입니다.

파일을 만들어서 사용하면 자동적으로 **React Suspense Boundary** 를 사용하는 것과 동일 합니다.

<img src='https://user-images.githubusercontent.com/87301268/236433845-87081c38-e49a-4a03-9c52-66c1731dfd60.png'>

<br>

### 사용하는 방법

사용하고자 하는 경로에서(폴더) `loading.js` 파일을 우선 만듭니다. <br>
그리고 해당 파일안에 나타내고 싶은 spinner 나 스켈레톤, 문구 등을 작성 합니다.

<img src='https://user-images.githubusercontent.com/87301268/236420364-e7988685-3238-463d-9119-a5559be12ae9.png'>

![1](https://user-images.githubusercontent.com/87301268/236421171-9537fb0e-a8cc-45b0-b464-7175280c29c5.gif)

<br>

### 특징

layout 파일안에 있는 `{children}` 요소들을 자동적으로 **React Suspense** 로 감싸줍니다.

- 프로젝트 전체 layout 인 Header 부분과
- posts 경로의 중첩 레이아웃인 apple 은 변하지 않는 걸 볼 수 있습니다.

즉, layout은 보여지고 layout 안에서 실제 페이지가 보여지는 부분인 `page.js` 는 `loading.js` 로 감싸줍니다.

<br>

### loading 은 SSG 렌더링에서 큰 의미가 없다 ?

로딩이라는 건 SSR 렌더링을 할 때 빠르게 의미있는 페이지를 사용자에게 먼저 보내주고
그 안에 있는 페이지 컴포넌트를 나중에 병렬적으로 보내주기 위해 사용하는 것 입니다.

서버에서 온전히 페이지를 SSG로 만드는 경우는 로딩이라는 건 큰 의미가 없을 수 있습니다.

- 페이지를 SSG 로 만들었을 때 입니다.
- 똑같이 새로고침을 하여 데이터를 불러와도 변함이 이미 정적으로 만들어진 페이지이기 때문에 로딩을 하여 데이터를 불러올 이유가 없습니다.

![2](https://user-images.githubusercontent.com/87301268/236428429-da839025-3cf6-48c9-b639-be2d0deceadf.gif)

<br>

### 참고

- https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
- https://velog.io/@brgndy/Next.js-13-Routing-Loading-UI

<br>

```toc

```

---
emoji: 📖
title: Next.js - 서버 컴포넌트 & 클라이언트 컴포넌트
date: '2023-04-27'
author: 최현호
tags: Next.js
categories: Next.js
---

13버전이 도입되기 이전에 **12버전**은 `getStaticProps`, `getServerSideProps` 를 사용하는 등 **페이지 단위로 렌더링 방식을 규정 했습니다.**

그러나 **13버전**은 페이지 단위로 렌더링 방식을 규정하지 않고 `서버 컴포넌트`, `클라이언트 컴포넌트` 가 도입이 되었습니다.
즉, **컴포넌트 단위로 렌더링 방식을 규정 했습니다.**

13버전의 `app 폴더` 안에 있는 모든 컴포넌트는 기본적으로 **서버 컴포넌트** 입니다. <br>
서버 컴포넌트와 클라이언트 컴포넌트는 실행 되는 환경이 다르기에 서로 역할이 다릅니다.

<br>

### app폴더의 모든 컴포넌트는 기본적으로 서버 컴포넌트

별도로 설정하지 않는 이상 서버에서 실행된다고 생각 하면 됩니다. <br>
확인하는 방법은 `console.log()` 가 출력되는 곳으로 알 수 있습니다.

서버 컴포넌트는 터미널 창에 로그가 출력이 됩니다.
브라우저 콘솔 탭에는 아무것도 출력되지 않습니다.

![1](https://user-images.githubusercontent.com/87301268/233837883-3ab6d21e-cbb3-445f-bb52-565f15bfbf31.gif)

<br>

#### 서버 컴포넌트와 클라이언트 컴포넌트 역할

![](https://user-images.githubusercontent.com/87301268/233837140-7355ed2a-9235-463e-ae7d-33ba8db64a19.png)

서버 컴포넌트는 서버에서 동작하여 브라우저 API 를 사용 할 수 없습니다. <br>
또한 브라우저 상에서 동작하는 상태를 기억하거나 컴포넌트 렌더링 여부 등 브라우저에서 동작하는 상태 관련 같은 것은 서버 컴포넌트에서 불가능 합니다.

<br>

#### 서버 컴포넌트에서 hooks 사용이 제한 됩니다.

![2](https://user-images.githubusercontent.com/87301268/233838028-6425d9bd-dbe8-45c0-bb3b-020c49f980d6.png)

서버 컴포넌트 내부에서 useState, useEffect hook을 사용하면 에러가 발생하기 때문에 클라이언트 컴포넌트로 생성을 해야 합니다.

<br>

#### 서버 컴포넌트의 목적은

Next.js에서 서버 컴포넌트를 사용하면 클라이언트로 보내는 Javascript 양을 줄여 초기 <br> 페이지 로드를 더 빠르게 할 수 있습니다.

이것은 **적은 양의 클라이언트 사이드 번들을 전달할 수 있도록 해서 <br> 사용자가 적은 자바스크립트 코드들을 다운로드 하도록 합니다.**

웹팩 번들에 `"use client"` 로 표시되거나 Date 같은 웹팩 안에 포함되어있는 클라이언트 컴포넌트 안에 있는 컴포넌트들만 웹팩 번들에 포함 합니다.

![](https://user-images.githubusercontent.com/87301268/233840905-468d464a-1735-4920-a194-a901ecf82888.png)

<br>

### 클라이언트 컴포넌트

서버 컴포넌트는 서버에서 빌드가 될 때 실행이 되는 컴포넌트였습니다.

⚠️ 주의!

- `app` 폴더 최상위 `page.tsx` 는 사용자가 서비스에 접근 할 때 가장 처음으로 보는 페이지 입니다.
- 만약 이곳에서 사용자의 이벤트를 처리하거나 hooks 를 사용해야 한다면
- 즉 `app` 폴더 최상위 `page.tsx` 를 클라이언트 컴포넌트로 만들면 Next.js 를 사용하는 의미가 없습니다.
- 작은 단위로 컴포넌트를 만들어나가는 것이 더 중요해졌습니다.

<br>

#### 클라이언트 컴포넌트 만들어보기

![](https://user-images.githubusercontent.com/87301268/233840526-860e7549-35d8-4d4f-b778-5835dba15b77.png)

![](https://user-images.githubusercontent.com/87301268/233838890-8bf1afb4-b0d3-48ef-9c9d-e285c4bebc07.png)

먼저 `app 폴더` 하위에 `components` 폴더를 생성했습니다. <br>
그리고 해당 컴포넌트 최상위에 `"use client"` 를 선언 합니다.

![4](https://user-images.githubusercontent.com/87301268/233839021-699450bc-edd3-4a3b-95cb-a68b40b37660.png)

<br>

그 후 `app 폴더` 의 `page.tsx` 에 import 해서 화면에 출력 했습니다.

![2](https://user-images.githubusercontent.com/87301268/233839166-3c7978f4-85f4-45e8-a0ab-95304c152105.gif)

<br>

#### app 폴더에 페이지에 관련된 컴포넌트만 두고 싶으면

![](https://user-images.githubusercontent.com/87301268/233839365-300d17c9-3d65-42cd-b5db-344825ce708a.png)

위와 같이 구조를 잡아도 동일하게 동작 합니다. 핵심은 `use client` 사용 !!

<br>

#### 클라이언트 컴포넌트를 언제 사용할까

크게 두 가지로 나눠볼 수 있을 것 같습니다.

- useState, useEffect 등 hook을 사용할 때
- 브라우저 API 를 사용할 때

<br>

### 후기

그 전에는 단순하게 페이지 마다 `getStaticProps`, `getServerSideProps` 를 사용해서 구분했다면 <br>
컴포넌트 단위로 세부적으로 구분하게 되어 생각의 깊이를 더 깊게 가져가고 만들기 전 설계가 더 중요해진 것 같습니다.

<br>

### 참고

- https://beta.nextjs.org/docs/rendering/server-and-client-components
- https://velog.io/@wmc1415/Nextjs13-2
- https://mycodings.fly.dev/blog/2022-11-17-nextjs-13-client-component
- https://velog.io/@brgndy/React-Server-vs-Client-Component-in-Next.js-13-%ED%95%B4%EC%84%9D

<br>

```toc

```

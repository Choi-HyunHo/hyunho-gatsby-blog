---
emoji: 📖
title: SSG(Static Site Generation) ❓
date: '2023-04-18'
author: 최현호
tags: Next.js
categories: Next.js
---

### SSG 란 ?

애플리케이션을 서버에 배포하기 전 **빌드 할 때 렌더링하는 기법** 입니다.

- 정적인 사이트를 만드는 기법
- 렌더링 하는 주체자가 서버 입니다.

<br>

### 렌더링 과정

![frontend_rendering_ssg](https://user-images.githubusercontent.com/87301268/232832658-4ad0022b-fe22-4c1e-ae71-e3364a878376.jpg)

1. 서버에 Next.js 애플리케이션을 배포하면 애플리케이션을 실행하기 전에 먼저 **빌드를 합니다.**

2. 빌드를 할 때 작성한 코드를 서버에서 실행 하면서 React 코드를 <br> ➡️ HTML 로 렌더링 합니다.
   ( 코드에서 서버에있는 데이터베이스를 읽는 동작 등등 전부 포함 )

> 즉, 필요한 코드들을 실행하고 브라우저 상에 어떻게 표기될건지 태그들을 다 만들어서 사용될 HTML 파일들을 빌드할 때 만들어둡니다.

3. 빌드가 완료되면 서버 측에 만들어진 HTML 파일이 있습니다. ( **사전에 미리 만든다** )

4. 클라이언트가 사이트에 접속하면 `서버에 페이지를 달라고 요청` 하고 <br> 서버에서는 `만들어진 HTML 파일을 보내줍니다`

5. 클라이언트 측은 받아온 HTML 를 표기만 하면 됩니다.

<br>

### SSG 의 특징은

HTML 파일을 서버 측에서 미리 만들어두고 받아오기 때문에 다음에 사용자가 접속하면
서버까지 요청을 하지 않아도 **CDN에 캐시된 HTML 파일을 빠르게 가져올 수 있습니다.**

<br>

### SSG 의 장점

1. **페이지 로딩 시간이 빠릅니다.** <br>
   ➡️ CSR 에서는 빈 HTML 뿐만 아니라 라이브러리 및 코드 등 전부 다운로드 받아야 첫 화면이 보이는데 <br>
   ➡️ SSG 는 서버에서 미리 만들어놓은 HTML 파일을 가져오기 때문에 별도의 소스를 다운로드 받을 때 까지 기다리지 않아도 됩니다.

2. **자바스크립트가 필요 없습니다.** <br>
   ➡️ 자바스크립트 활성화가 되어있지 않아도 빠르게 컨텐츠를 볼 수 있습니다.

3. **SEO 최적화가 좋습니다.**

4. **CDN에 캐시가 됩니다.**

<br>

### SSG 단점

렌더링이 빌드하는 시점에서 되기 때문에 **데이터가 정적** 입니다. <br>

즉, 데이터가 잘 달라지지 않는 정적인 사이트에는 적합할 수 있으나 <br> 가변적으로 데이터가 많이 바뀌는 사이트라면 알맞지 않습니다.

> SSG는 빌드 프로세스 중에 정적 HTML 파일을 생성하기 때문에 동적으로 콘텐츠를 제공하는 기능이 제한됩니다.

사용자 별 정보 제공이 어렵습니다. 뉴스 기사나 소셜 미디어 피드와 같이 자주 업데이트해야 하는 콘텐츠는 SSG와 통합하기 위해 추가 개발 작업이 필요할 수 있습니다.

<br>

### 참고

- https://upmostly.com/web-development/react-vs-nextjs
- https://higher77.tistory.com/105
- https://ajdkfl6445.gitbook.io/study/web/csr-vs-ssr-vs-ssg
- https://tapajyoti-bose.medium.com/frontend-rendering-ssg-vs-isg-vs-ssr-vs-csr-when-to-use-which-1bf9f39ff07c

<br>

```toc

```
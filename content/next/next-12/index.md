---
emoji: 📖
title: Next.js - fetch를 이용한 SSG,ISR,SSR
date: '2023-04-29'
author: 최현호
tags: Next.js
categories: Next.js
---

fetch 를 사용해 SSG, ISR, SSR 페이지를 만들어보겠습니다.

페이지가 정적인지 아닌지 확인하기 위해 랜덤 API 를 호출해보겠습니다. <br>
랜덤 글귀 API : https://api.adviceslip.com/advice

![1](https://user-images.githubusercontent.com/87301268/235303896-6668d19c-4de9-4527-9aaf-52324d93a409.gif)

<br>

### API 호출

![1](https://user-images.githubusercontent.com/87301268/235304095-478e7731-befe-4e5e-9739-a4eda85eefd8.png)

코드를 보게되면 상단에 `export const revalidate` 가 있는걸 확인 하실 수 있습니다. <br>

레이아웃이나 페이지에 위와 같이 작성하게 되면 숫자에 따라서 SSG, ISR 등을 설정 할 수 있습니다.<br>
참고하기 : [revalidate](https://beta.nextjs.org/docs/data-fetching/revalidating)

하지만 지금 확인할 필요는 없지만 적어놓은 이유는 Next 를 사용하여 만들 때 `yarn build & start` 를 사용하여 어떤 페이지인지 확인 합니다.
(SSG 로 컴파일 되기때문에 새로고침해도 실시간 데이터를 불러오지 못합니다.)

`yarn dev` 를 사용해서 작업 할 때는 SSR처럼 요청할 때 마다 변화가 있기 때문 입니다. <br>
하지만 `yarn dev` 를 작업을 했으나 새로고침해도 SSG 처럼 정적으로 페이지가 보였습니다. <br>
이를 해결하기 위해 적어놓은 코드 입니다.

<br>

#### 찾아본 해결 방법은

1. `export const revalidate = 초지정` 하기
2. fetch 두 번째 인자값에 `next 옵션` 이나 `cache` 사용

하지만 우리는 fetch에 대해 아직 모르기 때문에 1번 방법으로 하겠습니다.

<br>

### 위의 코드는 SSG

**export const revalidate 를 주석처리 한 후** `yarn build & start` 를 하고 확인하면 <br> 브라우저에 요청을 해도 렌더링이 빌드 시점에서 되기 때문에 화면에 변화가 없습니다.

![3](https://user-images.githubusercontent.com/87301268/235311099-80b5e16d-1136-43ea-a8de-c89185018c9f.gif)

서버가 빌드 될 때 처음 fetch를 하고 그 데이터로 HTML를 미리 만들어둡니다.<br>
하지만 13버전부터 렌더링 일어나는 시점을 fetch에서 결정 할 수 있습니다.

<br>

### fetch 를 이용한 ISR

fetch 두 번째 옵션에 객체 형태로 `next : {revalidate : 시간}` 명시를 하면
명시한 시간 간격 만큼 데이터를 가져옵니다.

![2](https://user-images.githubusercontent.com/87301268/235311007-47a445ac-41fd-42f0-a620-a30998b2cbec.png)

확인하기 위해 `yarn build & start` 를 합니다.

지정한 시간이 지나고 새로고침을 하면 글귀가 달라지는 것을 볼 수 있습니다.

![2](https://user-images.githubusercontent.com/87301268/235310978-073e2f1c-846c-492b-a302-b43c0d7f0a01.gif)

<br>

### fetch 를 이용한 SSR

`next : {revalidate : 0}` 을 이용하면 SSR이 됩니다.

요청이 올 때 마다 **revalidate** 를 하게 됩니다. <br>
revalidate 를 한다는 것은 곧 HTML을 새롭게 만든다는 뜻 입니다.

확인 할 때는 역시 `yarn build & start`

동일하게 적용 할 수 있는 방법은 `cache : no-store` 라고 지정하면 됩니다. <br>

![4](https://user-images.githubusercontent.com/87301268/235311620-4f475fd2-7e50-434d-bdfa-a3e95fc977c5.png)

![4](https://user-images.githubusercontent.com/87301268/235311674-cf445f44-39ff-4af5-a3e5-47fd584a1978.gif)

<br>

### 요약

![5](https://user-images.githubusercontent.com/87301268/235311744-be026b47-f2ad-41bc-91fc-d651d81127a6.png)

각 렌더링 방식마다 다르게 선언했어야 하는데 fetch로 편하게 지정 할 수 있게 된 것 같다.

<br>

### 참고

- https://beta.nextjs.org/docs/data-fetching/revalidating
- https://dev.to/zenstack/a-deep-dive-into-next13-data-fetching-114n
- https://ahnanne.tistory.com/92
- https://velog.io/@xmun74/Data-Fetching-getStaticProps-getStaticPaths-getServerSideProps
- https://bwoh.github.io/2020/12/22/%EC%9C%A0%EC%9A%A9%ED%95%9C-Open-API/

<br>

```toc

```

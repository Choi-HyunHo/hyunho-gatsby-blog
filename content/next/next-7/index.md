---
emoji: 📖
title: Next.js -  13버전 라우팅
date: '2023-04-23'
author: 최현호
tags: Next.js
categories: Next.js
---

Next.js 13은 `app` 디렉토리를 이용해 페이지 구성과 라우팅 기능을 만들 수 있습니다.

<br>

### page 파일에 대하여

![1](https://user-images.githubusercontent.com/87301268/232983583-34588692-1400-49cb-8b91-f64d390c271d.png)

13버전은 `page.tsx` 파일이 주소로 맵핑 됩니다.

정적 라우팅부터 예시로 알아보겠습니다.

<br>

### 정적 라우팅

1. `app` 폴더 안에 맵핑하고자 하는 주소 이름을 폴더로 만듭니다.
2. 그 후 해당 폴더 안에 `page` 라는 파일을 만들면 맵핑이 됩니다.

![2](https://user-images.githubusercontent.com/87301268/232987094-837bb239-9f63-449c-b726-c00374797001.png)

![1](https://user-images.githubusercontent.com/87301268/232987834-8455f123-f877-487d-a361-ac2c1000878f.gif)

<br>

#### 또 다른 예시

![4](https://user-images.githubusercontent.com/87301268/232988851-fc8aa3f4-dd5b-412d-aed6-d1c4f0f96bb3.png)

![2](https://user-images.githubusercontent.com/87301268/232989253-c8bf0d30-e42b-4a8d-b866-586984bf7f75.gif)

<br>

### 동적 라우팅

12버전과 동일하게 폴더 명을 `[ ]`로 하고 안에 keyword 을 작성하면 됩니다. <br>
➡️ `[keyword]`

하지만 보통 'slug' 키워드를 사용해서 `[slug]` 표현을 합니다.

그리고 React 에서 params 을 해당 이동한 페이지에서 받을 수 있듯이 여기서도 마찬가지로 <br> 어떤 경로에 왔는지 해당 하는 페이지의 params 을 알 수 있습니다. <br>

즉, slug 에 어떤 경로가 왔는지 알아야 하는데 Next.js 가 자동으로 컴포넌트에 props 전달해줍니다.

<br>

#### 해당 컴포넌트에서 props로 받자

![3](https://user-images.githubusercontent.com/87301268/232994663-ec78d02f-5ef9-4635-8522-fd8c9f092aca.png)

<br>

**/shop/product/[slug]/page.tsx**

![carbon](https://user-images.githubusercontent.com/87301268/232995033-fb5be770-8d12-48a5-bbd9-3fa310e375cb.png)

<br>

#### 결과

![3](https://user-images.githubusercontent.com/87301268/232998847-8a4b5b01-7e6f-4131-9ee8-cfffd764aa61.gif)

<br>

#### 위의 코드를 이렇게 작성해도 결과는 동일 합니다.

![10](https://user-images.githubusercontent.com/87301268/232999863-176b8653-b0d6-47fd-8cd0-0dcc2f7950b3.png)

<br>

**동적 라우팅**은 정해진 경로가 아니라 동적으로 어떤 경로도 접근 할 수 있기 때문에 **빌드를 할 때 페이지를 미리 만들 수 없습니다.** <br>

동적 라우팅 기능은 이용하지만 원하는 경로만 따로 페이지를 미리 만들 수 없을까요 ? <br>
➡️ `generateStaticParams` 를 사용하면 됩니다.

<br>

#### generateStaticParams

동적 라우팅을 사용하는 컴포넌트안에서 명시 합니다.

![5](https://user-images.githubusercontent.com/87301268/233005818-997f3bc7-7844-477a-9264-17467ef57244.png)

확인할 때는 `yarn build`

![6](https://user-images.githubusercontent.com/87301268/233006019-7d7b7443-8ebc-4530-8b86-9e4a132f97bc.png)

➡️ 각 경로 옆에 아이콘은 어떤 페이지인지 알려주는 용도 입니다. <br>
➡️ /shop/product/[slug] 안에 3개의 페이지가 정적으로 만들어진 것을 볼 수 있습니다. <br>
➡️ generateStaticParams 을 사용하면 빌드 할 때 미리 만들어둡니다. (해당 경로만 SSG)

<br>

### 참고

- https://akoskm.com/how-to-build-static-web-apps-with-dynamic-routes-in-nextjs-13
- https://beta.nextjs.org/docs/routing/pages-and-layouts
- https://beta.nextjs.org/docs/api-reference/generate-static-params
- https://velog.io/@brgndy/Next.js-13-%EB%9D%BC%EC%9A%B0%ED%8C%85
- https://mycodings.fly.dev/blog/2022-11-14-nextjs-13-first-look-and-layout

<br>

```toc

```

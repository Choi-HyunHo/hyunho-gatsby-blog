---
emoji: 📖
title: Next.js -  layout
date: '2023-04-25'
author: 최현호
tags: Next.js
categories: Next.js
---

`page.js` 는 해당 경로에서 기본적으로 보여지는 UI 컴포넌트 입니다.

그에 반면 `layout.js` 는 모든 페이지에 공통으로 나타내고 싶은 UI 를 표현할 때 사용 합니다. (header, footer 등)

<br>

### 폴더 구조

Next.js 13버전으로 프로젝트를 설정하면 `layout.js` 파일이 자동으로 생성 됩니다.

![](https://user-images.githubusercontent.com/87301268/233391145-f60a3e9b-8dca-46b1-8415-99fd7475cfad.png)

페이지를 만들고 직접 확인해보겠습니다.

<br>

### layout.js

![](https://user-images.githubusercontent.com/87301268/233396456-56308f6e-7a12-4869-82e1-a39f37be43e7.png)

![1](https://user-images.githubusercontent.com/87301268/233397410-6605ce77-1de2-4b05-9414-60e3b4051fbd.gif)

<br>

#### layout 을 사용하면

layout이 정의된 경로 아래에 있는 모든 자식 컴포넌트들이 재활용 됩니다.

- `{children}` 이라고 표기된 부분이 있을텐데 **page.js 넣을 곳 표시하는 문법** 입니다.

<br>

### 중첩 layout

특정 경로에서 지속적으로 layout 을 중첩해서 보여줄 수 있습니다. <br>
posts 페이지에서 navbar 를 추가해보겠습니다.

<br>

#### 먼저 posts 폴더 안에 똑같이 layout.js 를 만듭니다.

![](https://user-images.githubusercontent.com/87301268/233402041-06da6405-b5a5-47a0-b329-d801c0a85afc.png)

![4](https://user-images.githubusercontent.com/87301268/233402587-0cbcdb4d-7b9d-44c0-ac23-b39eace00938.png)

컴포넌트 이름은 다르게했고 안에 내용을 새로 추가했습니다.

<br>

#### Post의 동적 경로 페이지

`[slug]` 안에 있는 동적 페이지 소스 입니다.

![5](https://user-images.githubusercontent.com/87301268/233403241-2b12e253-e742-400b-b586-9f1f05150f1d.png)

<br>

#### 중첩 레이아웃 확인

![2](https://user-images.githubusercontent.com/87301268/233404453-682d64eb-4552-4bc4-8102-9e2ac3f005ab.gif)

posts 경로에만 추가로 header 가 생기는 것을 확인 할 수 있습니다.

<br>

### 후기

페이지 레이아웃 골격을 잡을 수 있는게 React Router 의 outlet 기능과 유사하다고 느꼈습니다..!

<br>

### 참고

- https://beta.nextjs.org/docs/routing/pages-and-layouts
- https://mycodings.fly.dev/blog/2022-11-14-nextjs-13-first-look-and-layout
- https://blog.mechanicalrock.io/2022/10/27/next-js-layouts-by-example.html

<br>

```toc

```

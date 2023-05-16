---
emoji: 📖
title: Next.js - Rewrites
date: '2023-05-18'
author: 최현호
tags: Next.js
categories: Next.js
---

이전 포스팅으로 알아본 Redirect 와 비슷해보이지만 다른 <br>
Rewrite 에 대해 알아보겠습니다.

<br>

### 언제 사용할까 ?

- 내부적으로 복잡하게 되어있는 경로나
- 보안상에 민감한 url

**url 자체를 외부에 공개하기 원치 않을 때 해당 url 를 다른 것으로 대체 할 수 있습니다.**

> 기존 경로로 접근이 가능하지만 사용자가 프로젝트 구조 알 수 있을 뿐더러 <br>
> 너무 길면 접근하기 불편합니다.

<br>

### next.config.js 에서 설정 합니다.

next.config.js에서 `rewrites` 를 사용하여

- source 경로를 destination(기존) 경로에 매핑하도록 설정 할 수 있습니다.

![1](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/2dd9b1ca-9c03-4661-8a04-500a90606358)

![1](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/e2b49fcd-eeac-4a66-87de-c5c919140f21)

<br>

### 참고

- https://nextjs.org/docs/app/api-reference/next-config-js/rewrites#header-cookie-and-query-matching

<br>

```toc

```

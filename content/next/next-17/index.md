---
emoji: 📖
title: Next.js - Redirect
date: '2023-05-17'
author: 최현호
tags: Next.js
categories: Next.js
---

리다이렉트란 사용자가 특정 경로로 접근 했을 경우

1. 페이지가 삭제 되거나 경로가 변경된 경우
2. 또는 접근 권한이 없는데 접근을 시도 했을 때

다른 페이지로 리다이렉트 이동을 시킬 수 있습니다.

<br>

### 1. next.config.js 에서 설정하는 방법

![1](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/3b134dea-ebed-44b2-96e9-edf921325f43)

![1](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/c120cef5-a8c4-4875-a02f-dc926228ebd1)

[permanent 에 관한 자세한 내용](https://nextjs.org/docs/pages/api-reference/next-config-js/redirects)은 문서를 참고 하시면 좋습니다.

<br>

### 2. 코드 상에서 특정 값이 없는 상태로 접근

공부하며 만들고있는 프로젝트에 예시로 한 번 사용 해봤습니다.

![2](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/61b3a4de-d148-4e08-8f95-0a65ce84ac0f)

- 화면에 보이는 것과 같이 첫 번째 게시물만 `id` 값을 다른 게시물과 다르게 설정 해놨습니다.
- 클라이언트 컴포넌트에서 게시물을 클릭한 후 상세로 들어가는데
- 첫 번째 게시물은 `id` 값이 `undefined` 이므로 바로 홈 화면으로 리다이렉트 됩니다.

![2](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/ae30609d-4ec3-43f8-808f-c245f615569e)

<br>

### 참고

- https://nextjs.org/docs/pages/api-reference/next-config-js/redirects
- https://nextjs.org/docs/app/api-reference/functions/redirect

<br>

```toc

```

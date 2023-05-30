---
emoji: 📖
title: 한 입 크기로 잘라먹는 TS - 함수 타입 표현식
date: '2023-06-06'
author: 최현호
tags: TS
categories: TS
---

> 이정환 님의 [한 입 크기로 잘라먹는 타입스크립트](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/) 를 수강한 내용 입니다.

<br>

### 함수 타입 표현식

함수 타입을 **타입 별칭과 함께 별도로 정의** 할 수 있습니다.

- 이를 `함수 타입 표현식(Function Type Expression)`이라고 부릅니다.
- 함수 선언 및 구현 코드와 타입 선언을 분리할 수 있어 유용합니다.

![1](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/0c3cb460-c798-42ef-9800-5a3ef821ebd4)

![2](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/6071c85a-d7e3-4bb0-b4ed-e2256dfc5718)

<br>

동일한 타입의 함수가 추가되어도 타입 정의만 해주면 되어 편리 합니다.

![3](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/7b10b07d-1b6e-4626-bc22-886b69227e23)

<br>

또한 함수 타입 표현식을 타입 주석에 사용해도 문제는 없습니다.

![4](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/e1643105-4b32-4a53-96ff-91f19e20e650)

<br>

### 호출 시그니처

함수 타입 표현식과 동일하게 함수의 타입을 별도로 정의하는 방식 입니다.

![5](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/55d11dee-5664-4058-8de7-7bc370bc25ca)

<br>

```toc

```

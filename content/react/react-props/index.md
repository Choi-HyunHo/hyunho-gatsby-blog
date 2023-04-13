---
emoji: 📖
title: props를 전달할 때, { }의 사용 여부에 대해서
date: '2023-04-13'
author: 최현호
tags: React
categories: React
---

React 를 사용하다 보면 사용자마다 props 를 다루는 방법이 다 다르다 라고 느낄 수 있습니다.

어떤 경우는 `{}` 를 감싸서 받기도 하고, 어떤 경우는 감싸지 않고 그대로 받는 경우도 있습니다. <br>
사용하며 종종 헷갈리는 경우라 이번에 까먹지 않기도록 정리 해보겠습니다.

<br>

### 잠깐, props 에 대해 살펴보면

> Props 는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터 입니다.

특징으로는 자식 컴포넌트에서 데이터를 변경 할 수 없습니다.

본격적으로 들어가보도록 하겠습니다.

<br>

### props 탐구

App.js 는 두 개의 컴포넌트에게 props 를 전달하고 있습니다.

![carbon (1)](https://user-images.githubusercontent.com/87301268/231626139-5692bfe6-bdb9-4c56-add9-afac593d9585.png)

name 과 job 이라는 props 를 자식 컴포넌트에 전달하고 있습니다. <br>
그럼 받는 자식 컴포넌트에서 `{}` 유무에 따라 어떻게 받아오는지 확인해보겠습니다.

역시 가장 알아보기 쉬운 방법은 `console.log`

<br>

### 1. 먼저 { } 를 사용하지 않고 받는 경우

![carbon (3)](https://user-images.githubusercontent.com/87301268/231633773-99dbb824-706b-4030-a982-5cb9e7a3e4c8.png)

name 이라는 props는 'choi' 라는 값을 가지고 있고 사용자는 화면에 나타내기 위해 `{}` 를 사용하여 태그 안에 넣었습니다.
별도의 문제가 없다면 화면에는 choi 가 나와야 할 것 입니다.

하지만 화면에 원치않은 에러 문구가 우리를 반겨줍니다.

![1](https://user-images.githubusercontent.com/87301268/231628621-eac23965-8ebf-487a-8768-44c06d90ce34.png)

이유를 알기위해 name 의 값을 console.log 를 사용해서 확인해보겠습니다.

![2](https://user-images.githubusercontent.com/87301268/231630126-c0e4c3d6-82db-4efd-9e43-36d458c6e488.png)

객체(object) 형태로 props가 들어온 것으로 보입니다..! <br>
하지만 위의 코드를 보면 객체를 그대로 렌더링하려고 하자 에러가 발생 했습니다.

왜 그동안 . 표기법을 사용한 이유를 찾을 수 있었습니다. 객체에 접근하기 위해서 입니다.

<br>

#### 1.1 올바른 표기

![carbon (4)](https://user-images.githubusercontent.com/87301268/231634382-93113957-4068-4138-942f-32e0070d2a92.png)

<br>

### 2. { } 를 사용하여 받는 경우

![carbon (5)](https://user-images.githubusercontent.com/87301268/231635243-a715877d-1eef-4f2b-aa25-83973d82b392.png)

<br>

```toc

```

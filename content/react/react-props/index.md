---
emoji: 📖
title: props를 전달할 때, { }의 사용 여부에 대해서
date: '2023-04-13'
author: 최현호
tags: React
categories: React
---

React 를 사용하다 보면 '사용자마다 props 를 다루는 방법이 다 다르다' 라고 느낄 수 있습니다.

어떤 경우는 `{}` 를 감싸서 받기도 하고, 어떤 경우는 감싸지 않고 그대로 받는 경우도 있습니다. <br>
사용하며 가끔 헷갈리는 경우라 확실하게 하기 위해 정리 해보겠습니다.

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

**객체(object) 형태로 props가 들어온 것**으로 보입니다..! <br>
하지만 위의 코드를 보면 객체를 그대로 렌더링하려고 하자 에러가 발생 했습니다.

왜 그동안 **. 표기법**을 사용한 이유를 찾을 수 있었습니다. **객체에 접근하기 위해서** 입니다.

<br>

#### 1.1 올바른 표기

![carbon (4)](https://user-images.githubusercontent.com/87301268/231634382-93113957-4068-4138-942f-32e0070d2a92.png)

<br>

### 2. { } 를 사용하여 받는 경우

![carbon (5)](https://user-images.githubusercontent.com/87301268/231635243-a715877d-1eef-4f2b-aa25-83973d82b392.png)

App.js 에서 job 이라고 props 를 전달 했었습니다. <br>
하지만 이번에는 props 로 받아오지 않고 전달한 이름에 `{}` 감싸서 받아왔습니다.

이번에도 역시 console.log 를 활용해서 알아보겠습니다.

![123](https://user-images.githubusercontent.com/87301268/231651307-918849b7-5cac-4bf8-894e-2db0e4133ee3.png)

그렇습니다..! `{}` 를 사용해서 감싸주면 **객체의 Key 에 해당하는 값만 전달**해주는 것을 확인 할 수 있습니다.
그리고 `{}` 를 사용하는 문법은 자바스크립트의 구조 분해 할당 입니다.

<br>

#### 2.1 구조 분해 할당 ❓

구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식 입니다.

➡️ [바로가기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

<br>

#### 2.2 구조 분해 할당으로 props 받는 또다른 예시

![carbon (6)](https://user-images.githubusercontent.com/87301268/231653635-fb539555-a711-4e1d-8462-c4a1df696154.png)

<br>

### 직접 확인해보기

<iframe src="https://codesandbox.io/embed/props-lk5knx?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:200px; border:0; border-radius: 4px; overflow:hidden;"
     title="props"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<br>

<br>

### 정리

지금까지 간단하게 차이점에 대해 살펴봤습니다.

**컴포넌트에 전달하는 props는 객체(object) 형태 입니다.**

- `{ }` 없이 props를 받아오면 객체 그 자체를 전달 받습니다.
- `{ }` 를 사용하여 props를 받아오면 객체의 key에 접근한 value를 전달 받습니다.

더 이상 헷갈리는 일이 없도록... 🥱

<br>

```toc

```

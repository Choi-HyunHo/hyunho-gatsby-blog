---
emoji: 📖
title: React.memo
date: '2023-03-13'
author: 최현호
tags: React
categories: React
---

### React.memo 란 ❓

React.memo 는 <span style='background-color : #fff5b1'>**HOC(고차 컴포넌트)**</span> 입니다.

> HOC 는 컴포넌트를 인자로 받아서 새로운 컴포넌트를 리턴해주는 함수 입니다.

컴포넌트를 React.memo()로 감싸주면 리액트는 컴포넌트를 렌더링하고 결과를 메모이제이션 합니다.
그리고 <span style='background-color : #fff5b1'>다음 렌더링이 일어날 때 props가 같다면</span>, 리액트는 <span style='background-color : #fff5b1'>컴포넌트를 다시 렌더링 하지 않고</span> 메모이제이션 된 내용을 재사용 합니다.

#### 예를 들어보면

리액트에서 부모 컴포넌트가 렌더링 될 때 해당 <span style='background-color : #fff5b1'>**컴포넌트에 속하는 모든 자식 컴포넌트 또한 렌더링**</span> 됩니다.
하지만 부모 컴포넌트에서 자식 컴포넌트로 내려주는 <span style='background-color : #fff5b1'>**props가 바뀌지 않았다면**</span>, 해당 자식 컴포넌트를 굳이 렌더링이 될 필요가 없습니다.

이렇듯, 컴포넌트에서 리렌더링이 필요한 상황에서만 해주도록 설정을 할 수 있는데<br>이때 사용하는 함수가 바로 <span style='background-color : #fff5b1'>React.memo</span> 입니다.

<br>

### React.memo 사용법

![carbon (25)](https://user-images.githubusercontent.com/87301268/224589763-b13fbe93-cd7f-4d40-a84d-a204926b25a8.png)

![carbon (26)](https://user-images.githubusercontent.com/87301268/224589778-9f94a863-c6d7-4c54-b15a-03dda4edb1f6.png)

<br>

➡️ 두 가지 방법으로 사용 할 수 있습니다.

<br>

### 예시

![carbon (27)](https://user-images.githubusercontent.com/87301268/224592240-9c6f1eab-a14f-47a9-8dcf-6dbf8138053a.png)

![carbon (28)](https://user-images.githubusercontent.com/87301268/224592334-139cbaf9-a14c-42e3-b089-395e4d044a57.png)

<br>

위의 코드를 실행하면 SmartHome 의 <span style='background-color : #fff5b1'>자식 컴포넌트인 Light 컴포넌트</span>에 대해 <br>
만약, 침실만 전등을 on 했다고 가정 했을 때 콘솔에 침실 뿐만 아니라 <span style='background-color : #fff5b1'>켜지지 않은 주방과 욕조 또한 렌더링 되는 것을 볼 수 있습니다.</span>

![img](https://user-images.githubusercontent.com/87301268/224592816-929521e1-667d-442c-b9ea-dc24160d3c93.png)

<br>

#### React.memo 를 적용해보면

클릭 한 방의 전등만 렌더링 되도록 바꿔보겠습니다.

![carbon (29)](https://user-images.githubusercontent.com/87301268/224593287-270f89bb-398d-4260-bc82-3417f8e34552.png)

<span style='background-color : #fff5b1'>침실을 누르면 주방과 욕조는 렌더링 되지 않고</span>, **클릭 한 방의 전등** 만 렌더링 되는 것을 볼 수 있습니다.

<br>

#### 직접 확인해보기

<iframe src="https://codesandbox.io/embed/react-memo-s5ey0i?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
     title="React.memo"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br>
<br>

### React.memo 는 언제 사용 하나요 ❓

![memo-1](https://user-images.githubusercontent.com/87301268/224597214-388344e8-bb5f-4774-ae0e-bf0e77f8a419.jpg)

1. Pure Functional Component에서
2. Rendering이 자주 일어날 경우
3. <span style='background-color : #fff5b1'>re-rendering이 되는 동안 계속 같은 props값이 전달 될 경우</span>
4. UI element의 양이 많은 컴포넌트의 경우

<br>

### 주의 ⚠️

공식문서에 보면 아래와 같은 문구가 있습니다.

> 이 메서드는 오직 성능 최적화를 위하여 사용됩니다. 렌더링을 “방지”하기 위하여 사용하지 마세요. 버그를 만들 수 있습니다.

<br>

### ✅ 지금까지 최적화에 사용되는 3가지를 알아봤습니다

1. React.memo
2. [useMemo](https://choi-hyunho.com/react-useMemo/)
3. [useCallback](https://choi-hyunho.com/react-useCallback/)

<br>

#### 3가지를 정리해보면

공통점

- React.memo, useMemo, useCallback은 모두 불필요한 렌더링 또는 연산을 제어하는 용도로 성능 최적화에 그 목적이 있습니다.

차이점

- React.memo는 HOC이고, useMemo와 useCallback은 hook 입니다.
- **React.memo** 는 <span style='background-color : #fff5b1'>컴포넌트의 결과 값</span>을 메모이제이션
- **useMemo** 는 <span style='background-color : #fff5b1'>함수의 연산량이 많을때 이전 결과값</span>을 재사용하는 목적
- **useCallback** 은 <span style='background-color : #fff5b1'>함수를 재사용</span> 하기 위한 목적

<br>

### 참고

https://goongoguma.github.io/2021/09/22/Use-React.memo()-wisely/
https://cocoon1787.tistory.com/799 <br>
https://ko.reactjs.org/docs/react-api.html#reactmemo
https://velog.io/@kcj_dev96/React.memo
https://ssangq.netlify.app/posts/react-memo-useMemo-useCallback

<br>

```toc

```

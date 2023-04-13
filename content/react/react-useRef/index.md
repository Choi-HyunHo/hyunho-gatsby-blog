---
emoji: 📖
title: useRef
date: '2023-03-06'
author: 최현호
tags: React
categories: React
---

### **useRef ❓**

JavaScript 를 사용 할 때에는, 우리가 특정 DOM 을 선택해야 하는 상황에 getElementById, querySelector 같은 **DOM Selector**</span> 함수를 사용해서 DOM 을 선택합니다.

리액트를 사용하는 프로젝트에서도 가끔씩 DOM 을 직접 선택해야 하는 상황이 발생 할 때도 있습니다.

1.  특정 엘리먼트의 크기를 가져오거나
2.  스크롤바 위치를 가져오거나 설정
3.  또는 포커스에 대하여 등
4.  그리고 **컴포넌트 별로 특정 데이터를 가지게 하고, 이러한 데이터들을 리렌더링 없이 관리 할 때**

> react에서 이러한 것들을 가능하게 해주는 것이 useRef라고 생각하시면 됩니다.

<br>

**4번은 무슨 의미인가요 ❓**

> react로 프로젝트를 진행하다보면 컴포넌트 별로, 요소 별로 특정 값(데이터)를 갖게 하고 싶을 때가 있습니다. 이럴 때 useState를 사용 합니다.

<br>

useMemo 와 useCallback 포스팅을 보시면 **함수형 컴포넌트의 특징**을 강조 했었습니다.

> 컴포넌트 함수 호출 + 모든 내부 변수 초기화

<br>

컴포넌트는 **자신의 state가 변경되거나, 부모에게서 받는 props가 변경되었을 때마다 리렌더링 됩니다.**</span>

만약, 하위 컴포넌트에 최적화 설정을 해주지 않으면 부모에게서 받는 props가 변경되지 않았더라도 리렌더링 되는게 기본입니다.

<br>

이제 조금 감이 오실까요 ❓

그렇습니다, **state 와 반대로 ref 를 사용하면 데이터들을 리렌더링 없이 관리 할 수 있습니다.**</span>

<br>

### **useRef 문법**

![1](https://user-images.githubusercontent.com/87301268/224224144-b6d3a3b9-b79d-4a1e-9b78-490bf66b9307.png)

> useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다. 반환된 객체는 컴포넌트의 전 생애주기를 통해 유지될 것입니다. 공식 문서 : [https://ko.reactjs.org/docs/hooks-reference.html#useref](https://ko.reactjs.org/docs/hooks-reference.html#useref)

<br>

### **예시**

**만약 버튼을 눌렀을 때 해당 input 을 포커스 하고 싶다면 ❓**

![2](https://user-images.githubusercontent.com/87301268/224224174-5a67931f-5af8-4a41-bd6f-f852fa6856da.png)

1.  input창을 useRef hook을 통해 inputRef라는 지정 DOM으로 설정하고
2.  **inputRef.current.focus()**</span> 라는 focus 함수를 선언해준 뒤 button 태그의 클릭event로 넣어주면 됩니다.

<br>

#### **네..? current 가 뭔가요..?**

> Ref객체의 .current값은 선택한 DOM을 가리키게 됩니다.

**현재 Ref 객체**</span>를 뜻하므로 해당 객체의 기능을 이용한다거나 값을 이용하는 경우에는 current를 반드시 붙여주어야 합니다.

<br>

**이번에는 앞서 설명한거처럼 리렌더링을 막아보도록 하겠습니다**

![3](https://user-images.githubusercontent.com/87301268/224224195-da2b7182-3862-47e1-b680-8c4ca5902030.png)

위의 코드대로 input 을 입력하면 콘솔에 **한 글자씩 입력 될 때 마다 render 가 호출** 될 것 입니다.

하지만, input 을 입력하는데 굳이 의미없는 console.log이 나오는 듯 렌더링이 일어날 필요가 없을 것 입니다.

<br>

#### **그래서 useRef 를 사용하면**

![4](https://user-images.githubusercontent.com/87301268/224224391-2fe90bd0-d6eb-4af8-a7a0-59f685608531.png)

화면을 처음 렌더링 할 때와 버튼을 눌렀을 때만 렌더링이 일어나는 것을 볼 수 있습니다.

<br>

#### **직접 확인해보기 !**

<iframe width='100%' height='300px' src="https://codesandbox.io/embed/useref-5c5oq3?fontsize=14&amp;hidenavigation=1&amp;theme=dark"></iframe>

<br>
<br>

### **정리**

- javascript에서 특정 Dom을 선택하는 역할 ex) getElementById, querySelector
- 특정 DOM에 접근할 때 사용
- 원하는 위치에 ref={} 의 형태로 작성
- 포커스를 잡으려면 nameInput.current.focus() 형태로 작성

<br>

### **참고**

[https://mnxmnz.github.io/react/what-is-use-ref/](https://mnxmnz.github.io/react/what-is-use-ref/)

[https://velog.io/@jminkyoung/TIL-13-React-Hooks-useRef-%EB%9E%80](https://velog.io/@jminkyoung/TIL-13-React-Hooks-useRef-%EB%9E%80)

[https://velog.io/@jinyoung985/React-useRef%EB%9E%80](https://velog.io/@jinyoung985/React-useRef%EB%9E%80)

[https://ko.reactjs.org/docs/hooks-reference.html#useref](https://ko.reactjs.org/docs/hooks-reference.html#useref)

[https://yoonjong-park.tistory.com/entry/React-useRef-%EB%8A%94-%EC%96%B8%EC%A0%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%EA%B0%80](https://yoonjong-park.tistory.com/entry/React-useRef-%EB%8A%94-%EC%96%B8%EC%A0%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%EA%B0%80)

<br>

```toc

```

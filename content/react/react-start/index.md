---
emoji: 📖
title: 리액트(React.js)
date: '2022-11-16'
author: 최현호
tags: React
categories: React
---

### **React 란 ❓**

리액트는 싱글 페이지 애플리케이션 UI(User Interface) 를 생성하는데 포커스를 맞춘 라이브러리 입니다.

- UI 를 표기하고 Event 에 반응하는 라이브러리

<br>

### **React 의 특징**

리액트의 대표적인 특징으로 Virtual Dom (가상 돔) 이라고 합니다.

<br>

**✔ Virtual Dom (가상 돔)**

리액트는 가상 돔을 사용하여 웹 애플리케이션의 성능을 극대화 시켰습니다.

가상 돔을 이해하기 위해서는 우선 HTML과 CSS가 렌더링(Rendering) 되는 과정</span>을 알아야 합니다.

![img](https://user-images.githubusercontent.com/87301268/223754419-ebba48b6-f27d-456f-b6da-822a2393027d.png)

<br>

1\. 웹 브라우저가 HTML 을 전달 받으면 브라우저 렌더링 엔진은 HTML 을 파싱하고 DOM</span> 트리를 생성 합니다. (Parsing)

> DOM(Document Object Model) 은 XML이나 HTML 문서에 접근하기 위한 일종의 인터페이스입니다.

<br>

2\. 또한 CSS 스타일을 모두 계산하여 CSSOM 트리</span>를 생성 합니다. (Parsing)

> CSSOM은 DOM에 CSS가 적용된 객체 모델 입니다.

<br>

3\. 렌더 트리가 완성되면 브라우저는 Attachment</span>라는 과정을 통해 스타일 정보를 계산합니다.

> Attachment 는 DOM 트리와 CSSOM 트리가 생성되면, 이 둘을 연결하여 표시해야 할 순서로 내용을 그려낼 수 있도록 하기 위해 렌더 트리를 생성하는 단계 입니다.

<br>

4\. 렌더 트리로 생성된 모든 노드들은 attach</span>라는 함수를 가지고 있는데, 이 Attachment라는 과정에서 이 메소드들이 호출되게 되며, 해당 메소드는 스타일 정보를 계산하고 결과 값을 객체 형태로 반환하게 됩니다. (Style)

- 이때 이 계산 과정은 모두 동기적(Synchronous)으로 동작하게 되며,
- 만약 렌더 트리에 새로운 노드가 추가된다면 해당 노드의 attach 메소드가 실행되어 계산 과정을 거치게 됩니다.

<br>

5\. 렌더 트리는 Attachment 과정을 거친 후 레이아웃(Layout)</span>이라는 과정을 거치게 됩니다. (Layout)

- 레이아웃 과정에서는 브라우저가 렌더 트리의 각 노드들에 좌표를 부여하고
- 정확히 어디에 어떻게 표시되는지를 결정합니다.

<br>

6\. 마지막으로 브라우저는 페인팅(Painting)</span>이라는 과정을 거치게 됩니다. (Painting)

- 페인팅 과정에서는 각 노드들에 paint 함수를 호출하여 렌더링된 요소들에 색상을 입히게 됩니다.

<br>

### **위와 같은 과정을 지나면 ❓** 

HTML을 자바스크립트를 사용하여 DOM을 조작하게 되면

- 각 노드의 좌표를 계산하기 위해 레이아웃 과정</span>이 다시 실행되고 (Reflow)
- 그 이후 색상을 입히기 위한 페인팅 과정이 다시 진행</span>되게 됩니다. (Repaint)

| Reflow ( 리플로우 )                           | Repaint(리페인트)               |
| --------------------------------------------- | ------------------------------- |
| DOM 조작으로 레이아웃 과정이 다시 진행되는 것 |  페인팅 과정이 다시 진행되는 것 |

<br>

### **Reflow 와 Repaint 가 자주 수행되면 문제점 ❓** 

DOM의 각 노드에 대한 연산 과정을 다시 수행함</span>으로 이 과정이 많이 수행될수록 웹 서비스의 성능이 저하되는 문제가 발생

<br>

### **Virtual Dom 의 효과 ❓** 

화면에 표시되는 DOM과 동일한 DOM을 메모리상에 만들고

> DOM 조작이 발생하면 메모리상에 생성한 가상 돔에 모든 연산을 수행한 후,  
> 실제 DOM을 갱신하여 리플로우/리페인트의 연산을 최소화

<br>

### **React 가 가상의 돔을 그리게 되는 경우 ❓**

1\. props 변경되었을 때

2\. state 가 변경되었을 때

3\. 부모 컴포넌트가 렌더링되었을 때

4\. 중앙 상태값(redux store 등) 변경

위와 같이 리액트는 상태나 속성 값이 변하게 되면, 리렌더링이라는 과정을 통해 화면의 값을 다시 그립니다.

<br>

### **✔ 렌더링 되는 과정 예시** 

참고 : [https://curryyou.tistory.com/486](https://curryyou.tistory.com/486)

<br>

#### **\# React 마운트 과정**

**1\. 함수 컴포넌트 호출**

**2\. 구현부 실행**

- props 취득, hook 실행, 내부 변수 및 함수 생성

- 단, hook 에 등록해둔 상태값, 부수함수 효과 등은 별도 메모리에 저장되어 관리된다.

**3\. return 실행**

- 렌더링 시작

**4\. 렌더 단계(Render Phase)**

- 가상DOM을 생성한다.

**5\. 커밋 단계(Commit Phase)**

- 실제 DOM에 반영한다.

**6\. useLayoutEffect ( 자주 사용하지 않음 )**

- 브라우저가 화면에 Paint 하기 전에, useLayoutEffect에 등록해둔 effect(부수효과함수)가 '동기'로 실행된다.

- 이 때, state, redux store 등의 변경이 있다면 한번 더 재렌더링 된다.

**7\. Paint**

- 브라우저가 실제 DOM을 화면에 그린다. didMount가 완료된다.

**8\. useEffect**

- Mount되어 화면이 그려진 직후, useEffect에 등록해둔 effect(부수효과함수)가 '비동기'로 실행된다.

<br>

#### **\# React 재렌더링 과정**

**1\. 함수 컴포넌트 재호출**

**2\. 구현부 실행**

- props 취득, hook 실행, 내부 변수 및 함수 **재생성**

- 단, 각 hook의 특성에 따라 기존에 메모리에 저장한 내용을 적절히 활용한다.

**3\. return 실행**

- 렌더링 시작

**4\. 렌더 단계(Render Phase)**

- 새로운 가상DOM 생성 후, 이전 가상 DOM과 비교하여, 달라진 부분을 탐색하고, 실제 DOM에 반영할 부분을 결정한다.

**5. 커밋 단계(Commit Phase)**

- 달라진 부분만 실제 DOM에 반영한다.

**6\. useLayoutEffect(자주 사용하지 않음)**

- 브라우저가 화면에 Paint 하기 전에, useLayoutEffect에 등록해둔 effect(부수효과함수)가 '동기'로 실행된다.

- 이 때, state, redux store 등의 변경이 있다면 한번 더 재렌더링 된다.

**7\. Paint**

- 브라우저가 실제 DOM을 화면에 그린다. didUpdate가 완료된다.

**8\. useEffect**

- update되어 화면이 그려진 직후, useEffect에 등록해둔 effect(부수효과함수)가 '비동기'로 실행된다.

- effect에 return부분이 있다면, 구현부보다 먼저 실행된다.

<br>

### **Virtual Dom 정리**

1.  리액트는 Virtual Dom Tree 를 가지고 있습니다.
2.  상태 변화가 일어나면 브라우저 DOM Tree 말고, 변경이 일어나기 이전의 Virtual DOM Tree 와 비교를 합니다.
3.  그리고 예전상태와 현재상태와 다른 부분만 실제 브라우저 DOM Tree 를 업데이트 합니다.

<br>

### **✔ 단방향 데이터 바인딩**

차이점을 위해 양뱡향 데이터 바인딩 먼저 살펴보겠습니다.

양뱡향 데이터 바인딩 ❓</span>

![img (1)](https://user-images.githubusercontent.com/87301268/223754653-ea688bf9-0ada-42b9-9dda-76a67062fee7.png)

> 사용자 UI의 데이터 변경을 감시하는 Watcher와 자바스크립트 데이터의 변경을 감시하는 Watcher가 UI와 자바스크립트 데이터를 자동으로 동기화 시켜주는 방식을 말합니다.

- 이를 통해 프로그래머는 자바스크립트내에 데이터 변경</span>과
- 사용자 UI에 데이터 변경에 관한 동기화</span>를 신경쓰지 않고 프로그램을 작성할 수 있습니다.

<br>

양방향 데이터 바인딩 문제점 ❓</span>

> 하나에 데이터 동기화에 두 개의 Watcher가 사용되고,데이터 많아지게 되면  
> 이 데이터의 동기화를 위한 수많은 Watcher가 생성되므로, 반대로 성능 저하가 발생할 수 있습니다.

<br>

그렇다면 단방향 데이터 바인딩은 ❓</span>

![img (2)](https://user-images.githubusercontent.com/87301268/223754764-8876dd52-a04b-4e94-aac0-23068f69c4ea.png)

> 단 하나의 Watcher가 자바스크립트의 데이터 갱신을 감지하여 사용자의 UI 데이터를 갱신합니다. 사용자가 UI를 통해 자바스크립트의 데이터를 갱신할 때는, 이벤트를 통해 갱신하게 됩니다.

- 단방향 데이터 바인딩은 하나의 Watcher를 사용하기 때문에 양방향 데이터 바인딩이 가지는
- 성능적인 이슈를 해결하고 더 확실하게 데이터를 추적할 수 있게 해줍니다.

<br>

### **✔ JSX** 

JavaScript에 XML을 추가하여 확장한 문법</span>

![carbon (8)](https://user-images.githubusercontent.com/87301268/223755185-e61f01aa-3663-438a-ba95-5d36eb813686.png)

자바스크립트에서 HTML 태그를 사용할 수 있으며,

자바스크립트 변수를 HTML 태그에서 바로 호출하여 사용할 수 있습니다.

<br>

### **✔ 선언형 프로그래밍** 

명령형 프로그래밍

> 프로그래밍을 할 때  어떻게(How)</span> 에 집중하는 것 -  과정

![carbon (9)](https://user-images.githubusercontent.com/87301268/223756533-73110341-7784-4a61-ad67-92e9f11c12f9.png)

<br>

선언형 프로그래밍

> 프로그래밍을 할 때  무엇(What)</span> 에 집중하는 것 - 결과

![carbon (10)](https://user-images.githubusercontent.com/87301268/223756712-5c4e1165-068c-48fa-ac8d-cc785323ccd4.png)

<br>

### **✔  컴포넌트 기반** 

컴포넌트(Component)란 프로그래밍에 있어 재사용이 가능한 각각의 독립된 모듈</span>을 뜻 합니다.

![carbon (11)](https://user-images.githubusercontent.com/87301268/223756859-cb395b53-ea4a-4e11-b6fd-62a4f51bc408.png)

- 공통으로 사용되는 요소의 수정 사항이나, 문제가 발생 했을 경우 수정하기 수월하고
- 유지보수가 좋습니다.

<br>

```toc

```

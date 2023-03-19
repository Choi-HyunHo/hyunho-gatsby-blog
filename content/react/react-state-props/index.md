---
emoji: 📖
title: Props와 State
date: '2022-11-18'
author: 최현호
tags: React
categories: React
---

### **Props ❓**

> Props(Properties)는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터

<br>

**✔  Props 특징**

<span style='background-color : #fff5b1'>자식 컴포넌트에서 데이터를 변경 할 수 없습니다.</span> ( 컴포넌트 내부의 속성이라고 봐도 무방 합니다 )

- 이미 HTML 를 사용하면서 태그에 대한 속성을 알고 사용하고 있습니다. (id, class, onClick 등)

![carbon (5)](https://user-images.githubusercontent.com/87301268/223893697-6e400491-838e-4707-bb79-86ad72fbac4c.png)

<br>

- React에서는 이 속성 개념에 데이터를 전달하는 느낌으로 추가 확장

![carbon (6)](https://user-images.githubusercontent.com/87301268/223893913-25f2a348-a870-42eb-8e56-3542126fdf56.png)

<br>

결과, 부모 컴포넌트(App)에서 자식 컴포넌트(Text)에 속성(Props)을 이용하여 Hello world! 라는 문자열이 출력 됩니다.

<br>

### **State ❓**

> State는 한 컴포넌트 안에서 유동적인 데이터를 다룰 때 사용되며, 컴포넌트 안에서 데이터를 변경할 수 있습니다. 즉, <span style='background-color : #fff5b1'>State는 한 컴포넌트의 상태(State)</span>를 나타냅니다.

- State는 컴포넌트 내에서 지속적으로 변경이 일어나는 값을 관리하기 위해 사용

<br>

**✔ State 문법**

<span style='background-color : #fff5b1'>useState</span> hook 을 사용 합니다.

![carbon (7)](https://user-images.githubusercontent.com/87301268/223894051-4c875586-038e-4d92-b8ff-a57f82ff4f9a.png)

<br>

**✔ State 특징**

- useState를 사용하여 할당받은 변수는 <span style='background-color : #fff5b1'>불변값(Immutable)</span>입니다.
- 따라서 해당 값은 직접 수정이 불가능하며 <span style='background-color : #fff5b1'>해당 값을 변경하기 위해서는 반드시 Set 함수를 사용</span>해야 합니다.

![carbon (8)](https://user-images.githubusercontent.com/87301268/223894123-ea1ef90a-affb-4fd4-bdfc-f73724a7b95d.png)

<br>

```toc

```
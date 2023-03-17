---
emoji: 📖
title: 모던 자바스크립트 Deep Dive_스코프
date: '2022-11-20'
author: 최현호
tags: JavaScript
categories: JS
---

### 13\_스코프

**스코프(scope : 유효범위)** 는 자바스크립트를 포함한 모든 프로그래밍 언어의 기본이며 중요하다.  
특히, 자바스크립트의 스코프는 다른 언어의 스코프와 구별되는 특징이 있다.

<br>

### 13.1 스코프란?

> 모든 식별자(변수이름, 함수이름, 클래스 이름 등)는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다.
>
> 즉, <span style='background-color : #fff5b1'>식별자가 유효한 범위</span>

<br>

**코드의 문맥과 환경** <br>
➡️ <span style='background-color : #fff5b1'>"코드가 어디서 실행되며 주변에 어떤 코드가 있는지"</span> 를 **렉시컬 환경** 이라고 부른다.

코드의 문맥은 렉시컬 환경으로 이루어지고, 이를 구현한 것이 **실행 컨텍스트** 이며,<br>
모든 코드는 <span style='background-color : #fff5b1'>**실행 컨텍스트에서 평가되고 실행**</span>된다.

<br>

### 13.2 스코프의 종류

코드는 <span style='background-color : #fff5b1'>**전역(global)**</span> 과 <span style='background-color : #fff5b1'>**지역(local)**</span> 로 구분 할 수 있다.

| 구분 | 설명                  | 스코프      | 변수                                                                                                                                                             |
| ---- | --------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 전역 | 코드의 가장 바깥 영역 | 전역 스코프 | 전역변수, <span style='background-color : #fff5b1'>**어디서든지 참조**</span> 할 수 있다.                                                                        |
| 지역 | 함수 몸체 내부        | 지역 스코프 | 지역변수, <span style='background-color : #fff5b1'>**자신의 지역 스코프**</span>와 <span style='background-color : #fff5b1'>**하위 스코프**</span>에서 유효하다. |

<br>

### 13.3 스코프 체인

<span style='background-color : #fff5b1'>스코프는 함수의 중첩에 의해 계층적인 구조</span>를 갖는다. 이렇게 스코프가 계층적으로 연결된 것을 **스코프 체인** 이라고 한다.

변수를 참조할 때 자바스크립트 엔진은

- 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여
- **<span style='background-color : #fff5b1'>상위 스코프 방향으로 이동</span>하며 선언된 변수를 검색** 한다.
- **절대 하위 스코프로 내려가면서 식별자를 검색하는 일은 없다.**
- 이를 통해 <span style='background-color : #fff5b1'>상위 스코프에서 선언한 변수를 하위 스코프에서도 참조할 수 있다.</span>

<br>

### 13.4 함수 레벨 스코프

- **함수 몸체 내부**를 말하고 <span style='background-color : #fff5b1'>**지역 스코프**</span> 를 만드는데, 이는<br>
  ➡️ **코드 블록이 아닌 <span style='background-color : #fff5b1'>함수에 의해서만</span> 지역 스코프가 생성** 된다는 의미이다.

- C, Java 등을 비롯한 대부분의 프로그래밍 언어는 함수 몸체만이 아니라 <span style='background-color : #fff5b1'>모든 코드 블록</span>  
  (if, for, while, try/catch 등) 이 지역 스코프를 만드는데 <br>
  ➡️ 이러한 특성을 <span style='background-color : #fff5b1'>**블록 레벨 스코프**</span>라 한다.

- 하지만 `var` 키워드로 선언된 변수는 오로지 **함수의 코드 블록 만**을 지역 스코프로 인정 <br>
  ➡️ 이러한 특성을 <span style='background-color : #fff5b1'>**함수 레벨 스코프**</span> 라고 한다.

![carbon](https://user-images.githubusercontent.com/87301268/225491626-819fe5d9-61ca-454e-b988-ab0c9fe2f548.png)

<br>

![carbon (1)](https://user-images.githubusercontent.com/87301268/225491651-61c356ff-c2e9-4f60-bb5f-8f5eecef2760.png)

<br>

➡️ var 키워드로 선언된 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정하지만 <br>
➡️ ES6 에서 도입된 **let, const** 키워드는 <span style='background-color : #fff5b1'>블록 레벨 스코프</span>를 지원한다.

<br>

### 13.5 렉시컬 스코프

**함수를 어디서 정의했는지에 따라 함수의 상위 스코프를 결정하는 것**

자바스크립트는 렉시컬 스코프를 따르므로,

- 함수를 어디서 호출했는지가 아니라,
- 함수를 <span style='background-color : #fff5b1'>어디서 **정의**</span> 했는지에 따라서 **상위 스코프** 를 결정한다.
- 함수가 호출된 위치는 상위 스코프 결정에 어떠한 영향도 주지 않는다.

이처럼 함수의 상위 스코프는 함수 정의가 실행될 때 정적으로 결정된다.

<br>

```toc

```

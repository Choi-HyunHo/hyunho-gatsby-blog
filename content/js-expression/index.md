---
emoji: 📖
title: 모던 자바스크립트 Deep Dive_표현식과 문
date: '2022-11-12'
author: 최현호
tags: JavaScript
categories: JS
---

### 05\_표현식과 문

### 5.1 값(value)

> 값(value)은 <span style='background-color : #fff5b1'>**식(표현식 expression)**</span> 이 <span style='background-color : #fff5b1'>**평가(evaluate)**</span> 되어 생성된 결과를 말한다.

![carbon (19)](https://user-images.githubusercontent.com/87301268/224585009-a17622f5-ffb6-48f1-934d-f5637d0a2420.png)

모든 값은 데이터 타입을 가지며, 메모리에 2진수, 즉 비트(bit)의 나열로 저장된다.

- 메모리에 저장된 값은 <span style='background-color : #fff5b1'>**데이터 타입에 따라 다르게 해석**</span>될 수 있다.
- ex) 메모리에 저장된 값 0100 0001을 <span style='background-color : #fff5b1'>**숫자로 해석하면 65**</span>지만, <span style='background-color : #fff5b1'>**문자로 해석하면 A다.**</span>

<br>

> #### 변수 ?
>
> 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 or 그 메모리 공간을 식별하기 위해 붙인 이름  
> \-> 변수에 할당되는 것은 값이다.

<br>

### 5.2 리터럴(literal)

리터럴(literal)은 사람이 이해할 수 있는 문자 또는 <span style='background-color : #fff5b1'>**약속된 기호를 사용해 값을 생성하는 표기법(notation)**</span> 을 말한다.

- 리터럴은 사람이 이해할 수 있는 문자(아라비아 숫자, 알파벳, 한글 등) 또는
- 미리 약속된 기호('', "", ., \[\], {}, // 등)로 표기한 코드. 리터럴이 값으로 평가된다면, 리터럴도 표현식이다.

| 리터럴            | 예시                                |
| :---------------- | :---------------------------------- |
| 정수 리터럴       | 100                                 |
| 부동소수점 리터럴 | 10.5                                |
| 2진수 리터럴      | 0b01000001                          |
| 8진수 리터럴      | 0o101                               |
| 16진수 리터럴     | 0x41                                |
| 문자열 리터럴     | 'hello' "world"                     |
| 불리언 리터럴     | true false                          |
| null 리터럴       | null                                |
| undefined 리터럴  | undefined                           |
| 객체 리터럴       | { name: 'april', address: 'Seoul' } |
| 배열 리터럴       | \[ 1, 2, 3 \]                       |
| 함수 리터럴       | function() {}                       |
| 정규표현식 리터럴 | /\[A-Z\]+/g                         |

<br>

### 5.3 표현식(expression)

> 표현식은 <span style='background-color : #fff5b1'>**값**</span>으로 평가될 수 있는 모든 <span style='background-color : #fff5b1'>**문(statement)**</span>이다.

표현식이 평가되면 새로운 값을 생성하거나 기존 값을 참조한다.

<br>

예제 1

![carbon (20)](https://user-images.githubusercontent.com/87301268/224585123-1a85a2f9-dc80-4965-9fbb-a857eb3f6d90.png)

**100**은 리터럴이지만, 자바스크립트 엔진에 의해 평가되어 <span style='background-color : #fff5b1'>**값을 생성**</span>하므로 <span style='background-color : #fff5b1'>**리티럴은 그 자체로 표현식**</span> 이다.

<br>

예제 2

![carbon (21)](https://user-images.githubusercontent.com/87301268/224585126-c7a1d2fc-e5d9-4ca8-9373-354dc91ad765.png)

**50 + 50** 은 리터럴과 연산자로 이루어져 있다. 하지만, **50 + 50** 마찬가지로 평가되어 숫자 값 100 을 생성하므로 표현식이다.

<br>

예제 3

![carbon (22)](https://user-images.githubusercontent.com/87301268/224585130-b11fddda-2f1a-44b1-be99-dec3323a8ca2.png)

변수 **score** 를 참조하면 변수 값으로 평가된다. **식별자 참조**는 값을 생성하지는 않지만, **값으로 평가**되므로 표현식이다.

<br>

정리

![carbon (23)](https://user-images.githubusercontent.com/87301268/224585134-8e1d85e8-e414-4367-9de5-f2baf318d5c8.png)

> 표현식은 리터럴, 식별자, 연산자, 함수 호출 등의 조합으로 이뤄질 수 있다.  
> 다양한 표현식이 있지만 값으로 평가된다는 점은 모두 동일하다.

<br>

### 5.4 문(statement)

> 문(statement)은 <span style='background-color : #fff5b1'>**프로그램을 구성하는 기본 단위**</span> 이자 <span style='background-color : #fff5b1'>**최소 실행 단위**</span>

<span style='background-color : #fff5b1'>**문의 집합**</span>으로 이뤄진 것이 <span style='background-color : #fff5b1'>**프로그램**</span>이며,  
문을 작성하고 **순서에 맞게 나열**하는 것이 **프로그래밍**이다.

문은 여러 <span style='background-color : #fff5b1'>**토큰(token)**</span> 으로 구성되는데, 토큰이란 **문법적인 의미를 가지며**

문법적으로 <span style='background-color : #fff5b1'>**더 이상 나눌 수 없는 코드의 기본 요소**</span> 를 의미한다.

![](https://velog.velcdn.com/images/hoho_0815/post/e545747d-c842-4828-9f94-dbfbbdef2502/image.png)

- 문을 명령문이라고도 부르는데, 컴퓨터에 내리는 명령이기 때문

<br>

### 5.5 세미콜론(;)

> <span style='background-color : #fff5b1'>**세미콜론(;)**</span> 은 <span style='background-color : #fff5b1'>**문의 종료**</span> 를 의미하며 옵션이라 생략 가능 하다.

- 자바스크립트 엔진은 세미콜론으로 문의 종료한 위치를 파악, 순차적으로 하나씩 문을 실행한다.
- 단, <span style='background-color : #fff5b1'>**코드 블록({ ... })**</span> 뒤에는 세미콜론을 붙이지 않는데,  
  코드 블록은 언제나 문의 종료를 의미하는 <span style='background-color : #fff5b1'>**자체 종결성(self closing)**</span> 을 갖기 때문.

<br>

### 5.6 표현식인 문과 표현식이 아닌 문

> <span style='background-color : #fff5b1'>**표현식인 문**</span>: 값으로 평가될 수 있는 문이며,  
> <span style='background-color : #fff5b1'>**표현식이 아닌 문**</span>: 값으로 평가될 수 없는 문을 말한다

![carbon (24)](https://user-images.githubusercontent.com/87301268/224585137-b40f5f0f-f6cc-4478-b458-1bae9b8dd9f0.png)

<br>

```toc

```
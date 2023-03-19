---
emoji: 📖
title: 모던 자바스크립트 Deep Dive_전역 변수의 문제점
date: '2022-11-21'
author: 최현호
tags: JavaScript
categories: JS
---

> 전역 변수의 무분별한 사용은 위험하므로, <br> 젼역 변수를 반드시 사용해야 할 이유를 찾지 못한다면, 지역 변수를 사용 권장

<br>

### 14.1 변수의 생명 주기

변수는 선언에 의해 생성되고, 할당을 통해 값을 가지며 언젠가 소멸한다. <br>
즉, 변수는 <span style='background-color : #fff5b1'>**생명 주기(life cycle)**</span> 가 있다.

변수에 생명 주기가 없다면 한번 선언된 변수는 프로그램을 종료하지 않는 한 <br> **영원히 메모리 공간을 점유**하게 된다.

<br>

#### 14.1.1 지역 변수의 생명 주기

변수는 자신이 선언된 위치에서 생성되고 소멸한다.

전역 변수의 생명 주기는 애플리케이션의 생명 주기와 같지만,  
**함수 내부**에서 선언된 지역 변수는 <span style='background-color : #fff5b1'>함수가 호출되면 생성되고 함수가 종료하면 소멸</span>한다.

![](https://velog.velcdn.com/images/hoho_0815/post/20fa94cd-39b4-4d77-a3b4-117b210c63d3/image.png)

<br>

즉, <span style='background-color : #fff5b1'>**지역 변수의 생명 주기는 함수의 생명 주기와 일치**</span>한다. **변수는**

- 하나의 값을 저장하기 위해 확보한 <span style='background-color : #fff5b1'>**메모리 공간 자체**</span> 또는
- 그 메모리 공간을 **식별하기 위해 붙인 이름**이다.

<br>

따라서 **변수의 생명 주기**는

1. 메모리 공간이 <span style='background-color : #fff5b1'>**확보**</span>(allocate)된 시점부터
2. 메모리 공간이 <span style='background-color : #fff5b1'>**해제**</span>(release)되어
3. 가용 메모리 풀(memory pool)에 <span style='background-color : #fff5b1'>**반환**</span>되는 시점까지다.

<br>

또한 <span style='background-color : #fff5b1'>**호이스팅**</span> 은 **스코프 단위**로 동작하며,

- <span style='background-color : #fff5b1'>전역 변수의 호이스팅은</span> <br>
  ➡️ 전역 변수의 선언이 전역 스코프의 선두로 끌어 올려진 것 처럼 동작, <br>
  ➡️ **전역 변수는 전역 전체에서 유효**

- <span style='background-color : #fff5b1'>지역 변수의 호이스팅은</span> <br>
  ➡️지역 변수의 선언이 지역 스코프의 선두로 끌어 올려진 것 처럼 동작, <br>
  ➡️ **지역 변수는 함수 전체에서 유효**

> 호이스팅은 변수 선언이 스코프의 선두로 끌어 올려진 것처럼 동작하는<br> 자바스크립트 고유의 특징을 의미한다.

<br>

#### 14.1.2 전역 변수의 생명 주기

**var 키워드**로 선언한 전역 변수의 생명 주기는 **전역 객체의 생명 주기와 일치**한다.

> 전역 객체(global object)란?
>
> 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체이다. 전역 객체는 클라이언트 사이드 환경(브라우저)에서는 window, 서버 사이드 환경(Node.js)에서는 global 객체를 의미한다.

![](https://velog.velcdn.com/images/hoho_0815/post/88f775dc-83d3-4bfe-97d6-b8fff7433741/image.png)

<br>

### 14.2 전역 변수의 문제점

#### **1\. 암묵적 결합**

전역 변수를 선언한 의도는 전역, 즉 <span style='background-color : #fff5b1'>**코드 어디서든 참조하고 할당할 수 있는 변수를 사용하겠다는 것**</span>인데, 이는 모든 코드가 전역 변수를 참조하고 변경할 수 있는 **암묵적 결합**을 허용하는 것이다.

**변수의 유효 범위가 크면 클수록 코드의 가독성은 나빠지고 의도치 않게 상태가 변경될 수 있는 위험성도 높아진다.**

<br>

#### **2\. 긴 생명 주기**

전역 변수는 생명 주기가 길다. 따라서 <span style='background-color : #fff5b1'>**메모리 리소스도 오랜 기간 소비**</span>하고, <span style='background-color : #fff5b1'>**전역 변수의 상태를 변경할 수 있는 시간도 길고 기회도 많다**</span>.

더욱이 var 키워드는 변수의 중복 선언을 허용, 생명 주기가 긴 전역 변수는 변수 이름이 중복될 가능성이 있고, 이렇게 되면 의도치 않은 재할당이 이뤄진다.

<br>

#### **3.** **스코프 체인 상에서 종점에 존재**

변수를 검색할 때 전역 변수가 **가장 마지막에 검색**된다는 것. 즉, <span style='background-color : #fff5b1'>**전역 변수의 검색 속도가 가장 느리다.**</span>

<br>

#### **4.** **네임스페이스 오염**

자바스크립트의 가장 큰 문제점 중 하나는 <span style='background-color : #fff5b1'>**파일이 분리되어 있다 해도 하나의 전역 스코프를 공유**</span>
따라서 다른 파일 내에서 동일한 이름으로 명명된 전역 변수나 전역 함수가 같은 스코프에 존재할 경우 예상치 못한 결과를 가져올 수 있다.

<br>

### 14.3 전역 변수의 사용을 억제하는 방법

이러한 문제점들로 전역 변수의 무분별한 사용은 위험하다.  
**전역 변수를 반드시 사용해야 할 이유를 찾지 못한다면 지역 변수를 사용해야 한다.  
<span style='background-color : #fff5b1'>변수의 스코프는 좁을수록 좋다.</span>**

<br>

#### 14.3.1 즉시 실행 함수

함수 정의와 동시에 호출되는 즉시 실행 함수는 단 한번만 호출된다.  
**모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다.**

![carbon (2)](https://user-images.githubusercontent.com/87301268/225514826-5d123f15-66b8-4f34-8021-76611dbac5b7.png)

이 방법을 사용하면 전역 변수를 생성하지 않으므로 라이브러리 등에 자주 사용된다.

<br>

#### 14.3.2 네임스페이스 객체

전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 <span style='background-color : #fff5b1'>사용하고 싶은 변수를 프로퍼티로 추가하는 방법</span>이다.

![carbon (3)](https://user-images.githubusercontent.com/87301268/225514831-531099eb-1d71-4752-bb55-e3cace59f9e9.png)

<br>

#### 14.3.3 모듈 패턴

모듈 패턴은 **클래스를 모방**해서 **관련이 있는 변수와 함수를 모아 <span style='background-color : #fff5b1'>즉시 실행 함수로 감싸 하나의 모듈</span>** 을 만든다. 이러한 모듈 패턴은 **클로저** 기반으로 동작된다.

모듈 패턴의 가장 큰 특징은 전역 변수의 억제는 물론 <span style='background-color : #fff5b1'>**캡술화까지 구현**</span>할 수 있다는 것이다.

> 캡슐화(encapsulation)
>
> 객체의 상태(state)를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작(behavior)인 메서드를 하나로 묶는 것을 말한다.

- 캡슐화는 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하기도 하는데
- 이를 <span style='background-color : #fff5b1'>정보 은닉(infomation hiding)</span>이라 한다.

![carbon (5)](https://user-images.githubusercontent.com/87301268/225517159-7e151885-29f7-4864-93d0-183f20ef0901.png)

<br>

#### 14.3.4 ES6 모듈

ES6 모듈을 사용하면 더는 전역 변수를 사용할 수 없다. **ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공**한다.

- 따라서 모듈 내에서 var 키워드로 선언한 변수는 더는 전역 변수가 아니며 window 객체의 프로퍼티도 아니다.
- 모던 브라우저에서는 ES6 모듈을 사용할 수 있는데,
- script 태그에 <span style='background-color : #fff5b1'>type='module'</span> 어트리뷰트를 추가하면 로드된 자바스크립트 파일은 모듈로서 동작한다. 모듈의 파일 확장자는 **mjs**를 권장한다.

![carbon (4)](https://user-images.githubusercontent.com/87301268/225514834-1676c9e1-487b-4005-b0cd-31bcb753784a.png)

<br>

```toc

```
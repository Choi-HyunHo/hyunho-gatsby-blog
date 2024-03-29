---
emoji: 📖
title: 한 입 크기로 잘라먹는 TS - 타입 좁히기
date: '2023-06-04'
author: 최현호
tags: TS
categories: TS
---

> 이정환 님의 [한 입 크기로 잘라먹는 타입스크립트](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/) 를 수강한 내용 입니다.

<br>

### 타입 좁히기

조건문 등을 이용해 `넓은 타입`에서 ➡️ `좁은 타입`으로 타입을 상황에 맞게 좁히는 방법을 알아보겠습니다.

다음과 같은 함수가 있다고 가정하겠습니다.

![1](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/4006dade-2a5c-4a5b-9a75-67aa05edbc65)

value의 타입이 number | string 이므로 함수 내부에서 다음과 같이

- value가 number 타입이거나 string 타입일 것으로
- 기대하고 메서드를 사용하려고 하면 오류가 발생합니다.

![2](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/4cbec20c-6a62-42f6-9586-a720360b7f31)

<br>

value가 number 타입이다라고 기대하고 toFixed 메서드를 사용하고 싶다면

- 다음과 같이 조건문을 이용해 value의 타입이 number 타입임을 보장해줘야 합니다.
- 반대로 toUpperCase 메서드를 사용하고 싶으면 string 타입을 보장해줘야 합니다.

![3](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/eb95563f-25e7-460f-be80-2b061b0ed888)

조건문을 이용해 **조건문 내부에서 변수가 특정 타입임을 보장**하면 해당 조건문 내부에서는 <br> 변수의 타입이 보장된 타입으로 좁혀집니다.

`if (typeof === …)` 처럼 조건문과 함께 사용해 타입을 좁히는 <br> 이런 표현들을 `타입 가드` 라고 부릅니다.

<br>

#### 타입 좁히기를 잘 활용하면

매개변수에 다양한 타입의 값들이 들어올 수 있고, 함수 내부에서 값의 타입에 따라 다른 동작을 하는 범용적인 함수를 만들게 되는데
타입 좁히기라는 기능과 타입 가드에 대해 알아두면 좋습니다.

<br>

### 그 외 다른 타입 가드들

#### 1. instanceof 타입가드

instanceof를 이용하면 `내장 클래스 타입`을 보장 할 수 있는 타입 가드를 만들 수 있습니다.

먼저 아래 코드를 살펴보겠습니다.

![4](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/f50b99a1-6c30-40e0-93aa-c65160a92338)

두 함수의 차이는 타입에 `null` 이 포함되어있나 차이 입니다. <br>
하지만 하나는 동작하고 다른 하나는 오류가 발생합니다.

<br>

먼저 Date 객체는 객체 타입이니까 `typeof === 'object'` 로 타입 가드를 했습니다.

![5](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/bda247c4-bea2-4338-bc35-e84c659bf2a8)

<br>

하지만 위와 같이 사용하는 것은 별로 좋은 방법은 아닙니다.

- 두 번째 함수처럼 null 값도 들어올 수 있다고 가정하면 바로 오류가 발생 합니다.

![6](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/a80fc5fd-3100-42de-b9a2-615595df5681)

<br>

자바스크립트의 typeof 는 null 값에다가 typeof 를 걸어도 `object` 를 반환 합니다.

- 그렇기에 조건문을 통과하는 값이 Date 뿐만 아니라 null 도 포함 됩니다.
- 즉, 중괄호 내부에서 Date 객체라고 보장 할 수 없습니다.

이런 경우 `instanceof` 를 사용 할 수 있습니다.

![7](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/0dc0ab34-9f41-46e0-b6a2-e20bc2f0ba47)

![8](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/c51417e5-eda7-4301-ba2b-84fe45993e14)

<br>

#### ⚠️ instanceof 주의

Instanceof는 내장 클래스 또는 직접 만든 클래스에만 사용이 가능한 연산입니다.

- 따라서 직접 만든 타입과 함께 사용할 수 없습니다.

<br>

#### 2. in 타입가드

직접 만든 타입과 함께 사용하려면 `in` 를 사용하면 됩니다.

![9](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/c0c7defd-7085-476e-9bb2-c10e45ba47a2)

중간에 `value && "age"` 라고 작성하는 이유는

- `"age" in value` 만 작성하면 `null` 일 수 있다고 오류가 나옵니다.
- in 연산자 뒤에는 `null` 이나 `undefined` 값이 들어오면 안됩니다.
- 그래서 **value 가 null이 아니다**를 알려주기 위해 <br> **value 가 있는 경우에만 검사**하도록 한 것 입니다.

<br>

```toc

```

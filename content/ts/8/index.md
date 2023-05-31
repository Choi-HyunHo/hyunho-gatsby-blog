---
emoji: 📖
title: 한 입 크기로 잘라먹는 TS - 타입은 집합이다
date: '2023-05-30'
author: 최현호
tags: TS
categories: TS
---

> 이정환 님의 [한 입 크기로 잘라먹는 타입스크립트](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/) 를 수강한 내용 입니다.

<br>

### 타입은 집합이다 ?

> 집합은 동일한 속성을 갖는 여러 개의 요소들을 하나의 그룹으로 묶은 단위를 말합니다.

<br>

타입스크립트의 '타입' 은 사실 여러 개의 값을 포함하는 '집합' 입니다.

- 다음 그림처럼 여러 개의 숫자 값들을 묶어 놓은 집합을
  <br> 타입스크립트에서는 number 타입이라고 부릅니다.

![1](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/e340df4d-181b-4a52-9b49-6cb0489914f7)

<br>

#### 오직 하나의 값만 가지는 리터럴 타입은 ?

그림과 같이 딱 하나의 값만 포함하는 아주 작은 집합이라고 볼 수 있습니다.

![2](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/6be89b8d-f605-4bc2-b251-57b1c0a55db0)

<br>

20도 결국 숫자이기 때문에 결국 모든 **Number Literal** 타입은 <br>
Number 타입이라는 거대한 집합에 포함되는 **부분 집합**으로 볼 수 있습니다.

![3](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/4c48a3cf-b63f-4cfd-9529-945f08c60c9e)

<br>

### 서로 포함하고, 포함된다.

타입스크립트의 모든 타입들은 집합으로써 서로 포함하고 또 포함되는 이런 관계를 갖습니다.

- 그리고 이런 관계에서 Number 타입처럼 다른 타입을 포함하는 타입을 <br> **슈퍼 타입(부모 타입)** 이라고 부릅니다.
- 반대는 **서브 타입(자식 타입)** 이라고 합니다.

![4](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/1612768b-aac5-4bf2-9ad4-7732e8e91e90)

<br>

### 타입 호환성

타입 호환성이란 예를 들어 A와 B 두개의 타입이 존재할 때 <br> **A 타입의 값을 B 타입으로 취급**해도 **괜찮은지 판단**하는 것을 의미합니다.

- 만약 A 타입의 값이 B 타입의 값으로 취급 되어도 괜찮다면 호환된다고 하고
- 안된다면 호환되지 않는다고 합니다.

![5](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/d3c11c59-e71e-46ec-881d-81b92300bd63)

<br>

Number 타입과 Number Literal 타입이 있을 때

- 서브 타입인 Number Literal 타입의 값을 슈퍼 타입인 <br> Number 타입의 값으로 취급하는 것은 가능합니다.
- 그러나 반대로는 불가능합니다. 그 이유는 Number 타입이 더 큰 타입이기 때문입니다.

> 정사각형을 직사각형으로 취급하는건 괜찮지만 반대로 <br> 직사각형을 정사각형으로 취급하는건 안되는 것 처럼

<br>

#### 업 캐스팅 & 다운 캐스팅

![7](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/43a3261e-106b-4ced-9c3d-1fe310e92fdb)

먼저 Number 타입의 변수 num1을 선언하고 값으로 10을 할당합니다.

- 그리고 10(Number Literal) 타입의 변수 num2를 선언하고 값으로 역시 10을 할당합니다.
- 이때 num1에 num2의 값을 저장하는건 가능합니다. <br> **변수 num1의 타입이 더 큰 타입(Number 타입)** 이기 때문입니다.

그러나 반대로는 안됩니다.

- 변수 num1은 Number 타입이므로 10외에도 999나 -123123 <br> 같은 다양한 숫자 값을 담을 수 있습니다.
- 마치 직사각형에는 여러 종류의 사각형이 포함되는 것과 비슷합니다.
- 그러나 변수 num2는 Number Literal 타입이므로 10외의 다른 값은 절대 담을 수 없습니다.

<br>

따라서 타입스크립트에서는 이렇게 `슈퍼타입의 값`을 `서브타입의 값`으로 <br> **취급하는것을 허용하지 않습니다.**

- **업 캐스팅** : 서브 타입의 값을 슈퍼 타입의 값으로 취급하는 것
- **다운 캐스팅** : 슈퍼 타입의 값을 서브 타입으로 취급하는 것

업캐스팅은 모든 상황에 가능하지만 다운 캐스팅은 대부분의 상황에 불가능 하다고 할 수 있습니다.

<br>

### 타입스크립트를 사용하면서 참고하면 좋은 표

> 업 캐스팅 , 다운 캐스팅 참고

![8](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/83973364-893b-4dcb-a2fb-6ac95a888ce5)

<br>

```toc

```
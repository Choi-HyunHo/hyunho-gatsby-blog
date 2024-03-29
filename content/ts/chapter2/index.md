---
emoji: 📖
title: 러닝 타입스크립트_타입 시스템
date: '2023-03-30'
author: 최현호
tags: TS
categories: TS
---

### 2. 타입 시스템

### 2.1 타입의 종류

**'타입'** 은 자바스크립트에서 다루는 값의 형태</span> 입니다.

<br>

#### 형태란

값에 존재하는 속성과 메서드 그리고 내장되어 있는 typeof 연산자가 설명하는 것을 의미 합니다.

만약 아래와 같이 초기 값이 'apple' 인 변수를 생성하는 경우 <br> 타입스크립트는 fruit 변수가 문자열 타입임을 유추</span> 할 수 있습니다.

![carbon (10)](https://user-images.githubusercontent.com/87301268/228695531-1562c04c-497b-462f-b1e1-4f8ea0b10076.png)

<br>

> 타입스크립트의 가장 기본적인 타입은 자바스크립트의 원시 타입과 동일 합니다.

<br>

#### 2.1.1 타입 시스템

타입 시스템은 프로그래밍 언어가 프로그램에서 가질 수 있는 타입을 이해하는 방법</span>에 대한 규칙 입니다.

타입스크립트의 타입 시스템은 다음과 같이 작동 합니다.

1. 코드를 읽고 존재하는 모든 타입과 값을 이해</span>합니다.
2. 각 값이 초기 선언에서 가질 수 있는 타입</span>을 확인합니다.
3. 각 값이 추후 코드에서 어떻게 사용 될 수 있는지 모든 방법을 확인 합니다.
4. 값의 사용법이 타입과 일치하지 않으면 사용자에게 오류를 표시</span> 합니다.

<br>

#### 예시로 살펴보면

![carbon (12)](https://user-images.githubusercontent.com/87301268/228696328-c9972ba1-49c4-4c81-8fed-fc0d2d250ab8.png)

1. 코드를 읽고 firstName 이라는 변수를 이해 합니다.
2. 초기값이 'choi' 이므로 firstName 이 string 타입이라고 결론 짓습니다.
3. firstName의 .length 를 함수처럼 호출하는 코드를 확인 합니다.
4. string 의 .length 는 함수가 아닌 숫자라는 오류를 표시합니다. **즉 함수처럼 사용 할 수 없습니다.**

<br>

#### 2.1.2 오류 종류

크게 두 가지와 같습니다.

- 구문 오류</span> : **타입스크립트가 자바스크립트로 변환되는 것을 차단한 경우**
- 타입 오류</span> : **타입 검사기에 따라 일치하지 않는 것이 감지된 경우**

<br>

#### 구문 오류

타입스크립트가 **코드로 이해할 수 없는 잘못된 구문을 감지**</span>할 때 발생 합니다.

![carbon (13)](https://user-images.githubusercontent.com/87301268/228696920-086b5376-c6f5-4dec-8a6d-d55149313d81.png)

> 타입스크립트는 구문 오류와는 상관없이 자바스크립트 코드를 출력하기 위해 최선을 다하지만, 원하는 결과가 아닐 수 있습니다.

<br>

#### 타입 오류

타입 검사기가 **프로그램의 타입에서 오류를 감지**</span>했을 때 발생 합니다.

![carbon (14)](https://user-images.githubusercontent.com/87301268/228697338-ea1996c7-1b6c-4a03-a404-3d27106466b4.png)

<br>

타입 오류가 있음에도 자바스크립트 코드를 출력할 수 있지만, 출력된 자바스크립트 코드가 원하는 대로 실행되지 않을 가능성이 있다는 신호를 타입 오류로 알려줍니다.

> 오류가 발생했다고 해서 타입스크립트 구문이 자바스크립트로 변환되는 것을 차단하지는 않습니다.

<br>

### 2.2 할당 가능성

타입스크립트는 **변수의 초기값을 읽고**</span> 해당 변수가 **허용되는 타입을 결정**</span> 합니다.

타입스크립트 변수에 **동일한 타입의 다른 값을 할당될 때는 문제가 없습니다.** <br>
➡️ string 타입인 변수에 string 값을 할당할 때

하지만 변수에 **다른 타입의 값이 할당되면 타입 오류가 발생** 합니다. <br>
➡️ string 타입인 변수에 boolean 값을 넣을 경우

![carbon (15)](https://user-images.githubusercontent.com/87301268/228698360-487d064b-c8c9-45ee-9657-bddbdaca1000.png)

<br>

즉, **할당 가능성**이란 함수 호출이나 변수에 값을 제공할 수 있는지 여부를 확인하는 것 </span>입니다.

<br>

#### 2.2.1 할당 가능성 오류 이해하기

**Type ... is not assignable to type ...** 형태의 오류는 타입스크립트로 코드를 작성할 때 만나게 되는 가장 일반적인 오류 중 하나

![carbon (19)](https://user-images.githubusercontent.com/87301268/228700897-a99068da-da25-4399-b1a6-bc34a163a34a.png)

- 첫번째 type: 변수에 할당하려고 시도하는 값의 타입</span>
- 두번째 type: 값이 할당되는 변수의 타입</span>

<br>

### 2.3 타입 애너테이션

변수에 타입스크립트가 읽어야 할 **초기값이 없는 경우**도 있습니다.

- 타입스크립트는 나중에 사용할 변수의 초기 타입을 파악하려고 시도하지 않습니다.
- 그리고 변수를 any 타입으로 간주</span> 합니다. ( 모든 타입이 가능한 상태 ) <br>
  ➡️ string 타입이었다가 number 타입으로 진화하는 등

> 검사를 위해 알려진 값이 없기 때문에 타입 검사 기능을 잘 적용할 수 없습니다.

<br>

그래서, **초기값을 할당하지 않고도 변수의 타입을 선언**</span>할 수 있는 구문인 **타입 애너테이션**을 사용 합니다.

<br>

#### 타입 애너테이션 사용 방법

**변수 이름 뒤에 배치되며 콜론(:) 과 타입 이름을 차례대로 기재**합니다.

![carbon (16)](https://user-images.githubusercontent.com/87301268/228699918-20fefc2f-16af-4a62-8ea6-47433774205e.png)

<br>

firstName 이라는 변수가 string 타입임을 나타냅니다.

이러한 타입 애너테이션은

- 타입스크립트에만 존재하며 런타임 코드에 영향을 주지도 않고 유효한 자바스크립트 구문도 아닙니다.
- tsc 명령어를 실행해 자바스크립트 코드로 컴파일 하면 해당 코드가 삭제 됩니다.

<br>

**출력된 .js 파일**

![carbon (17)](https://user-images.githubusercontent.com/87301268/228700270-7a8c0afb-58fd-4e20-ad48-4715a30a1d75.png)

<br>

그리고 타입 애너테이션으로 정의한 타입 외의 값을 할당</span>하면 타입 오류가 발생 합니다.

![carbon (18)](https://user-images.githubusercontent.com/87301268/228700618-75b72faa-06d6-449a-8ebe-8ebcc37ba408.png)

<br>

### 2.4 타입 형태

타입스크립트는 변수에 할당된 값이 원래 타입과 일치하는지 확인하는 것 이상을 수행 합니다.

코드에서 변수의 속성에 접근하려고 한다면 접근하는 속성이 해당 변수의 타입이 존재하는지 확인</span> 합니다.

<br>

#### 2.4.1 정상 동작

![carbon (20)](https://user-images.githubusercontent.com/87301268/228701566-27cb5c78-3889-49e2-b175-1452fa049a37.png)

<br>

#### 2.4.2 해당 타입에서 작동하는지 알 수 없는 작업은 허용되지 않습니다.

![carbon (21)](https://user-images.githubusercontent.com/87301268/228702975-d1bc438d-b667-4428-8c4c-6ea8ea1a07e7.png)

<br>

#### 2.4.3 객체에 키가 없다는 것을 알고 오류를 표시 합니다.

![carbon (22)](https://user-images.githubusercontent.com/87301268/228703292-aecf8d92-121d-4acd-ae40-e75ad2d1e75a.png)

<br>

```toc

```

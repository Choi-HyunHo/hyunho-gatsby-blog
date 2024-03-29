---
emoji: 📖
title: 러닝 타입스크립트_유니언과 리터럴
date: '2023-03-31'
author: 최현호
tags: TS
categories: TS
---

2장에서는 타입 시스템의 개념과 변수의 타입을 이해하기 위해 값을 읽는 방법에 대해 공부했다면, 3장에서는 해당 값을 바탕으로 추론을 수행하는 핵심 개념에 대해 알아봅니다.

<br>

#### 유니언(union)

➡️ 값에 허용된 타입을 두 개 이상의 가능한 타입으로 확장</span> 하는 것

<br>

#### 내로잉(narrowing)

➡️ 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 좁히는 것</span>

<br>

### 3.1 유니언 타입

아래 value 는 어떤 타입일까요?

![carbon (23)](https://user-images.githubusercontent.com/87301268/228715345-579b6acf-ad5c-4fb4-b197-c5ec30426b07.png)

잠재적인 타입이긴 하지만 무조건 undefined 도 아니고 무조건 string 도 아닙니다. <br>
이것처럼 '이거 혹은 저거'</span> 와 같은 타입을 **유니언**</span> 이라고 합니다.

> 유니언 타입은 값이 정확히 어떤 타입인지 모르지만 두 개 이상의 옵션 중 하나라는 것을 알고 있는 경우에 코드를 처리하는 개념 입니다.

<br>

타입스크립트는 가능한 값 또는 구성 요소 사이에 '|' (수직선)</span> 연산자를 사용해 유니언 타입을 나타냅니다.

![123](https://user-images.githubusercontent.com/87301268/228727236-da104c1e-76f5-4b36-be97-de2e4f4470c4.png)

<br>

#### 3.1.1 유니언 타입 선언

변수의 **초기값이 있더라도 변수에 대한 명시적 타입 애너테이션을 제공하는 것**이 유용할 때 <br> 유니언 타입을 사용 합니다.

아래 코드는 value 의 초기값은 null 이지만, 잠재적으로 null 대신 string이 될 수 있음을</span> 알려줍니다.

![carbon (24)](https://user-images.githubusercontent.com/87301268/228727881-bc67ff57-9e32-41b3-8fa0-254ac8532afd.png)

<br>

- 유니언 타입은 타입 애너테이션으로 타입을 정의하는 모든 곳에 사용 할 수 있습니다.
- 또한 **타입 선언 순서**는 중요하지 않습니다.

<br>

#### 3.1.2 유니언 속성

값이 **유니언 타입**일 때 유니언으로 선언한 모든 가능한 타입에 존재하는 멤버 속성만 접근</span>할 수 있습니다.

- **유니언 외의 타입에 접근** 하려고 하면 타입 검사 오류가 발생</span> 합니다.

![carbon (25)](https://user-images.githubusercontent.com/87301268/228728743-483b889a-cd9b-4695-b119-5839f4a8a657.png)

value 는 number | string 타입으로 **두 개의 타입에 모두 존재**</span>하는 toString()은 사용 할 수 있지만 <br>
toUpperCase() 는 number 타입에 없고</span>, toFixed()는 string 타입에 없기 때문에</span> 사용 할 수 없습니다.

> 이처럼 모든 유니언 타입에 존재하지 않는 속성에 대한 접근을 제한하는 것은 타입스크립트의 안전 조치 입니다.

어떤 속성을 포함한 타입인지 확실하게 알려지지 않은 경우, 해당 속성을 사용하려고 시도하는 것이 안전하지 않다고 여깁니다.

유니언 타입으로 정의된 여러 타입 중 **하나의 타입으로 된 값의 속성을 사용하려면**</span> 코드에서 값이 보다 구체적인 타입 중 하나라는 것을 타입 스크립트에 알려야 하는데 이 과정을 **내로잉**</span>이라고 합니다.

<br>

### 3.2 내로잉

내로잉은 값이 정의, 선언 혹은 이전에 **유추된 것보다 더 구체적인 타입임을 코드에서 유추**</span>하는 것 입니다.

그리고 타입을 좁히는 데 사용할 수 있는 논리적 검사</span>를 **타입 가드**라고 합니다.

<br>

#### 3.2.1 값 할당을 통한 내로잉

변수에 **값을 직접 할당**하면 타입스크립트는 변수의 타입을 할당된 값의 타입으로 좁힙니다.</span>
<br>

➡️ 변수에 유니언 타입 애너테이션이 명시되고 초기값이 주어질 때 값 할당 내로잉</span>이 작동 합니다.

![carbon (26)](https://user-images.githubusercontent.com/87301268/228730853-b7a2005b-06be-4ad0-b42d-ac0fbd69ee39.png)

value 변수는 초기에 number | string 으로 선언했지만 'choi' 값이 할당된 이후 타입스크립트는 string 타입</span>이라는 걸 알게 됩니다. <br>
➡️ 즉시 string 타입으로 좁혀졌다는 것을 타입스크립트는 알고 있습니다.

<br>

#### 3.2.2 조건 검사를 통한 내로잉

타입스크립트는 if 문 내에서 변수가 알려진 값과 동일한 타입인지 확인 할 수 있습니다.

![carbon (27)](https://user-images.githubusercontent.com/87301268/228731674-6d598314-e418-468c-99d3-6d4d56d016c8.png)

<br>

#### 3.2.3 typeof 검사를 통한 내로잉

직접 값을 확인해 타입을 좁히기도 하지만, typeof</span> 연산자를 사용할 수도 있습니다.

![carbon (28)](https://user-images.githubusercontent.com/87301268/228733713-aae0d417-ae56-42ec-8402-4a056f9d8bb6.png)

<br>

삼항 연산자 사용

![carbon (29)](https://user-images.githubusercontent.com/87301268/228733975-1adaa088-313b-44a1-ba05-6109ea718396.png)

<br>

#### 3.2.4 참 검사를 통한 내로잉

타입스크립트는 truthy</span> 로 확인된 일부에 한해서만 변수의 타입을 좁힐 수 있습니다.

![carbon (32)](https://user-images.githubusercontent.com/87301268/228744083-47612334-3f35-4ea1-b64a-d30fbe66b54f.png)

<br>

### 3.3 리터럴 타입

리터럴 타입은 좀 더 구체적인 버전의 원시 타입 입니다. <br>

만약 변수를 **const로 선언**하고 직접 리터럴 값을 할당하면 타입스크립트는 해당 변수를 할당된 리터럴 값으로 유추</span> 합니다.

![111](https://user-images.githubusercontent.com/87301268/228735381-18ccceb7-a5e3-4639-a78a-bb4526ca17a9.png)

value 는 string 타입이라고 말할 수 있습니다. 하지만 value 는 단지 string 타입이 아닌 'choi' 라는 특별한 값 입니다. 따라서 변수 value 의 타입은 기술적으로 좀 더 구체적인 'choi' 입니다.

즉, 리터럴 타입은 원시 타입 값 중 어떤 것이 아닌</span> **특정 원시값** 으로 알려진 타입 입니다.

원시 타입 string 은 존재할 수 있는 모든 가능한 문자열의 집할을 나타내지만 <br> 리터럴 타입인 'choi' 는 하나의 문자열만 나타냅니다.

> 리터럴 타입과 딜리 원시 타입은 해당 타입의 가능한 모든 리터럴 값의 집합 입니다.

<br>

#### 리터럴과 원시 타입을 섞어서 사용하기

![carbon (30)](https://user-images.githubusercontent.com/87301268/228737236-ce757dd7-b290-430d-8f41-40d820be2a52.png)

<br>

#### 3.3.1 리터럴 할당 가능성

0 과 1 처럼 동일한 원시 타입일지라도</span> 서로 다른 리터럴 타입은 서로 **할당할 수 없습니다.**

![carbon (31)](https://user-images.githubusercontent.com/87301268/228738706-7f5441d1-178b-4f30-88f4-2b05331f7688.png)

<br>

### 3.4 엄격한 null 검사

strictNullChecks 옵션을 true 로 설정하면 코드가 null 또는 undefined 값으로 인한 오류로부터 안전한지 파악 할 수 있습니다.

<br>

### 3.5 타입 별칭

코드에서 볼 수 있는 유니언 타입 대부분은 2~3 개의 구성 요소만 갖습니다. <br>
하지만 반복해서 입력하기 불편한 조금 긴 형태의 유니언 타입을 발견할 수 있습니다.

![carbon (33)](https://user-images.githubusercontent.com/87301268/228744621-e6125bcc-e1fa-4da9-a1db-4074cc1d4f24.png)

<br>

이런 경우 재사용하는 타입에 더 쉬운 이름을 할당</span>하는 **타입 별칭**이 있습니다.

<br>

#### 타입 별칭 사용법

![carbon (34)](https://user-images.githubusercontent.com/87301268/228745455-c12a70eb-7c39-4b97-9ff7-178ff82d4a1b.png)

- type 키워드를 사용하고 새로운 이름을 지정합니다.
- = 다음에 지정하고 싶은 타입을 적습니다.
- 편의상 타입 별칭은 파스칼 케이스로 작성 합니다.

<br>

![carbon (35)](https://user-images.githubusercontent.com/87301268/228745767-2e7ad317-0598-49a9-9482-7bba0d0bd709.png)

<br>

#### 3.5.1 타입 별칭은 자바스크립트가 아닙니다.

타입 별칭은 타입 애너테이션처럼 자바스크립트로 컴파일 되지 않습니다.

- 순전히 타입 시스템에만 존재하므로 런타임 코드에서는 참조할 수 없습니다.

<br>

#### 3.5.2 타입 별칭 결합

타입 별칭은 **다른 타입 별칭을 참조**할 수 있습니다.

![carbon (36)](https://user-images.githubusercontent.com/87301268/228746348-3d0d4167-a456-43dd-bab3-97756e9d3041.png)

<br>

**타입 별칭의 순서는 상관 없습니다.** <br> 타입 별칭을 먼저 선언하고 참조할 타입 별칭을 나중에 선언해도 문제 없습니다.

![carbon (37)](https://user-images.githubusercontent.com/87301268/228746549-7aa50cab-f6a9-4b89-a947-94c32489ba55.png)

<br>

```toc

```

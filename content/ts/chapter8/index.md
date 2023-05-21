---
emoji: 📖
title: 러닝 타입스크립트_클래스
date: '2023-05-21'
author: 최현호
tags: TS
categories: TS
---

### 8.클래스

들어가기 전에 잠깐 복습할 겸 클래스에 대해 짧게 보고 넘어가겠습니다.

<br>

#### 자바스크립트에서 클래스란 ?

클래스는 객체를 생성하기 위한 템플릿이며, 해당 클래스로부터 생성된 개별 객체는 <br>
클래스에 정의된 **속성**과 **메서드**를 상속 받습니다.

<br>

#### 클래스를 정의하는 방법

`class` 키워드를 사용하며, 클래스 이름은 대문자로 시작하는 것이 관례입니다.

![1](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/92694a27-78a5-492d-b310-5def1cd22a79)

위 예제에서 MyClass는 클래스로 정의되었습니다.

- constructor라는 특별한 메서드는 객체를 초기화하는 역할을 합니다.
- `name` 속성을 인자로 받아 객체의 **속성**으로 설정합니다.
- `sayHello`는 MyClass 클래스의 **메서드**로 정의되었습니다.
- 이 메서드는 console.log를 통해 name 속성과 함께 인사말을 출력합니다.

클래스를 기반으로 객체를 생성하기 위해서는 `new 키워드`를 사용해야 합니다. <br> 위 예제에서 myObject는 MyClass의 인스턴스로 생성된 객체입니다

이제 클래스에 대한 타입스크립트에 대해 알아보겠습니다.

<br>

### 8.1 클래스 메서드

타입스크립트는 독립 함수를 이해하는 것과 동일한 방식으로 **메서드**를 이해합니다.

> 자바스크립트에서 '메서드'는 객체에 속한 함수를 가리킵니다.

<br>

매개변수 타입에 타입이나 기본 값을 지정하지 않은 경우

- `any` 타입을 기본으로 가집니다.

![2](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/71654079-029d-4af6-8940-77ef21780fcd)

<br>

### 8.2 클래스 속성

타입스크립트에서 클래스의 속성을 읽거나 쓰려면 **명시적으로 선언**해야 합니다.

- 클래스 속성 이름 뒤에는 선택적으로 **타입 애너테이션**이 붙습니다.
- 인스턴스에 존재하지 않는 멤버에 접근하려고 시도하면 타입 오류가 발생 합니다.

![3](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/6b9143df-ac77-497a-afe2-a9182e904e63)

- destination은 string 타입으로 명시적 선언되어 있어 FieldTrip 클래스 인스턴스에 <br> 할당되고 접근할 수 있습니다.

<br>

#### 8.2.1 함수 속성

자바스크립트는 클래스의 멤버를 호출 가능한 삼수로 선언하는 두 가지 구문이 있습니다.

앞서 `myFunction(){}`과 같이 멤버 이름 뒤에 괄호를 붙이는 메서드 접근 방식을 살펴 봤습니다.

- 메서드 접근 방식은 함수를 클래스 프로토타입에 할당하므로
- 모든 클래스 인스턴스는 동일한 함수 정의를 사용합니다.

다음 WithMethod 클래스는 모든 인스턴스가 참조할 수 있는 myMethod 메서드를 선언합니다.

![4](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/45684abc-b588-45aa-adf4-9a186189a07f)

<br>

값이 함수인 속성을 선언하는 방법도 있습니다.

- 클래스의 인스턴스 당 새로운 함수가 생성되며
- 항상 클래스 인스턴스를 가리켜야 하는 화살표 함수에서 `this` 스코프를 사용하면 <br> 새로운 함수를 생성하는 시간과 메모리 비용 측면에서 유용할 수 있습니다.

다음 WithProperty 클래스는 이름이 myProperty인 단일 속성을 포함하여 <br> 각 클래스 인스턴스에 대해 다시 생성되는 `() => void` 타입 입니다.

![5](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/a67f42d2-49bc-4c32-84f6-0fc3ca2c50e6)

<br>

#### 8.2.2 초기화 검사

엄격한 컴파일러 설정이 활성화된 상태에서 타입스크립트는 `undefined` 타입으로 선언된 각 속성이 <br>
생성자에서 할당 되었는지를 확인 합니다.

![6](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/7a20e6ec-7852-42e6-8613-d929205b789d)

에러를 수정하려면 아래와 같이 `unused` 필드에 초기 값을 할당하거나 생성자에서 값을 할당해야 합니다.

![7](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/22ba1423-d841-4221-9a95-f34b3c4dbb86)

<br>

#### 확실하게 할당된 속성

엄격한 초기화 검사가 유용한 경우가 대부분이지만, 클래스 생성자 다음에 <br>
클래스 속성을 의도적으로 할당하지 않는 경우가 있을 수도 있습니다.

- 초기화 검사를 하고 싶지 않은 경우 `!` 를 추가해 검사를 비활성화하도록 설정 합니다.
- 이렇게 되면 속성이 처음 사용되기 전 `undefined` 값이 할당됩니다.

![8](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/4d35077f-17f7-44fc-b6e4-88e10038dd88)

<br>

#### 8.2.3 선택적 속성

선언된 속성 이름 뒤에 `?` 를 추가해 속성을 옵션으로 선언 합니다.

- 선택적 속성은 ` | undefined` 를 포함하는 유니언 타입과 거의 동일하게 작동 합니다.

![9](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/6238421e-14b6-4c4e-accf-993c895b8dde)

<br>

#### 8.2.4 읽기 전용 속성

`readonly` 키워드를 추가해 속성을 읽기 전용으로 선언합니다.

- 타입 시스템에만 존재하며 자바스크립트로 컴파일 할 때 삭제됩니다.
- **1. 선언된 위치** 또는 **2. 생성자**에서 초기값만 할당 할 수 있습니다.

![10](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/7aebc75b-5ae8-423b-a105-24f55323b9e4)

<br>

### 8.3 타입으로서의 클래스

타입 시스템에서 클래스는 클래스 선언이

1. 런타임 값(클래스 자체)과
2. 타입 애너테이션에서 사용할 수 있는 타입을 모두 생성 합니다.

해당 클래스의 인스턴스가 아니더라도 모든 멤버와 메서드를 갖고 있다면 할당할 수 있습니다.

- 타입스크립트의 구조적 타이핑으로 선언되는 방식이 아니라
- 객체의 형태만을 고려하기 때문

![11](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/efadedbd-8d23-4583-a5be-f765bf5b9fa9)

<br>

### 8.4 클래스와 인터페이스

클래스 이름 뒤에 `implements` 키워드와 인터페이스 이름을 추가함으로써

- 클래스의 해당 인스턴스가 인터페이스를 준수한다고 선언할 수 있습니다.

![12](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/38e65e70-b6ef-4339-8690-9bf9c94d85d5)

- Student 클래스는 name 속성과 study 메서드를 포함해 <br> Learner 인터페이스를 올바르게 구현 했지만
- Slaker에는 study가 누락되어 타입 오류가 발생합니다.

<br>

#### 8.4.1 다중 인터페이스 구현

`implements` 뒤에 `,`를 이용해서 개수 제한 없이 인터페이스를 등록할 수 있습니다.

- 해당 클래스는 등록된 모든 인터페이스를 준수해야 합니다.

![13](https://github.com/Choi-HyunHo/hyunho-gatsby-blog/assets/87301268/2de8498e-0c8a-41ff-bd64-1cdd8bde8aa9)

- Empty 클래스는 Graded와 Reporter 인터페이스

<br>

```toc

```

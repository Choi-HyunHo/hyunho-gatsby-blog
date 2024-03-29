---
emoji: 📖
title: 러닝 타입스크립트_객체
date: '2023-04-14'
author: 최현호
tags: TS
categories: TS
---

### 4.1 객체 타입

객체 타입은 객체의 값과 동일한 속성명과 원시 타입을 갖습니다.

<br>

#### 4.1.1 객체 타입 선언

객체 타입은 객체 리터럴과 유사하게 보이지만 **필드 값 대신 타입**을 사용해 설명합니다.

![carbon (7)](https://user-images.githubusercontent.com/87301268/231916488-f2c03865-1f21-4026-bbdc-556f1b1c9041.png)

<br>

#### 4.1.2 별칭 객체 타입

매 번 {born: number, name: string} 과 같은 객체 타입을 작성하는 것은 번거롭습니다.

따라서 각 객체 타입에 **타입 별칭**을 할당해 사용할 수 있습니다(더 일반적인 방법). <br>
객체 타입을 타입 별칭으로 만들면 할당 가능성 오류 메시지를 좀 더 읽기 쉽게 만들 수 있습니다.

<br>

#### 문법

![carbon (8)](https://user-images.githubusercontent.com/87301268/231916562-c7a39302-5ff6-4c0d-b20e-d541f9bbdf5f.png)

<br>

#### 예시

![carbon (9)](https://user-images.githubusercontent.com/87301268/231916606-ce77f962-3a96-4680-9657-788b76c97c5d.png)

<br>

### 4.2 구조적 타이핑

타입스크립트의 타입 시스템은 구조적으로 타입화 되어 있습니다. <br>
➡️ **타입을 충족하는 모든 값을 해당 타입의 값으로 사용 가능 합니다.**

구조적 타이핑은 덕 타이핑과는 다릅니다.

- 자바스크립트는 덕 타입이고, 타입스크립트는 구조적으로 타입화 됩니다.
- **구조적 타이핑**: 정적 시스템이 타입을 검사하는 경우
- **덕 타이핑**: 런타임에서 사용될 때까지 타입을 검사하지 않는 것

![carbon (11)](https://user-images.githubusercontent.com/87301268/231917284-69fffc30-0acd-4287-ad19-b23db772f716.png)

hasBoth 는 명시적으로 선언되지 않았음에도 두 개의 별칭 객체 타입을 모두 가집니다.

<br>

#### 4.2.1 사용 검사

객체 타입으로 애너테이션된 위치에 값을 제공할 때 타입스크립트는 <br> 해당 객체 타입에 할당할 수 있는지 확인 합니다.

할당하려는 값에는 객체 타입의 필수 속성이 있어야 하고 <br> **객체 타입에 필요한 멤버가 없다면 타입스크립트는 오류를 발생시킵니다.**

![carbon (12)](https://user-images.githubusercontent.com/87301268/231917486-061f6279-d576-4eb0-991c-bae903229eee.png)

또한 일치하지 않는 타입도 허용 되지 않습니다.

<br>

![carbon (13)](https://user-images.githubusercontent.com/87301268/231917839-ba07ecd7-b3fd-45b9-bb7f-7d3ef8e79d3b.png)

pink 객체의 id 속성이 숫자 타입이 아니라서 에러가 발생 했습니다.

<br>

#### 4.2.2 초과 속성 검사

초깃값에 객체 타입에서 **정의된 것보다 많은 필드가 있다면 타입 오류가 발생** 합니다.

![carbon (14)](https://user-images.githubusercontent.com/87301268/231918173-a0aa61b1-0e37-4a78-917c-290f0d61e9d4.png)

hex 속성은 Color 타입에 없기 때문에 에러가 발생 합니다.

초과 속성 검사는 객체 타입으로 선언된 위치에서 생성되는 객체 리터럴에 대해서만 일어납니다. <br> 기존 객체 리터럴을 제공하면 초과 속성 검사를 우회 합니다.

<br>

#### 4.2.3 중첩된 객체 타입

자바스크립트 객체는 다른 객체의 멤버로 중첩될 수 있으므로 타입스크립트의 객체 타입도 타입 시스템에서
중첩된 객체를 나타낼 수 있어야 합니다.

![carbon (15)](https://user-images.githubusercontent.com/87301268/231919331-807bd04c-bb41-4981-a8f8-a671c0100378.png)

중첩된 객체 타입을 작성할 때 중첩되는 객체 속성의 형태를 별칭 객체 타입으로 추출하는 방법도 있습니다.

![carbon (17)](https://user-images.githubusercontent.com/87301268/231919914-943addbc-d9f7-463d-bc90-bfeac28a2dcc.png)

<br>

#### 4.2.4 선택적 속성

모든 객체에 타입 속성이 필요한 것은 아닙니다. <br>
타입의 속성 애너테이션에서 `: 앞에 ? ` 를 추가하면 **선택적 속성**임을 나타낼 수 있습니다.

예시의 Book 타입은 pages 속성만 필요하고 author 속성은 선택적으로 허용 합니다. <br>
객체가 pages 속성을 제공하기만 하면 author 속성은 제공하거나 생략할 수 있습니다.

![carbon (18)](https://user-images.githubusercontent.com/87301268/231920193-2e1b1265-b842-4406-9829-3f394b391dee.png)

주의할 점은
선택적 속성과 undefined를 포함한 유니언 타입의 속성 사이에는 차이가 있습니다.

- `?` 를 사용해 선택적으로 선언된 속성은 **존재하지 않아도 됩니다.**
- 필수로 선언된 속성과 `| undefined` 는 그 값이 **undefined 일지라도 반드시 존재해야 합니다.**

![carbon (19)](https://user-images.githubusercontent.com/87301268/231920584-a5adf2c2-af16-45c2-829d-593c01f8013b.png)

<br>

### 4.3 객체 타입 유니언

#### 4.3.1 유추된 객체 타입 유니언

변수에 여러 객체 타입 중 하나가 될 수 있는 초기값이 주어지면 <br> 타입스크립트는 해당 타입을 객체 타입 유니언이라고 유추 합니다.

**유니언 타입은 가능한 각 객체 타입을 구성하고 있는 요소를 모두 가질 수 있습니다.**

poem 은 항상 string 타입인 name 속성을 가지며 <br> pages 와 rhymes 는 **있을 수도 없을 수도** 있습니다.

![carbon (20)](https://user-images.githubusercontent.com/87301268/231921138-36d341cb-09a3-4867-a495-84ab805d73c9.png)

<br>

#### 4.3.2 명시된 객체 타입 유니언

코드를 조금 더 작성해야 하지만 타입을 명확히 정의하여 제어할 수 있다는 이점이 있습니다.

앞서 본 poem 변수는 pages 또는 rhymes 와 함께 필수 속성인 name을 항상 갖는 유니언 타입으로 명시적으로 작성되었습니다.

속성 name에 접근하는 것은 항상 존재하기 허용되지만 pages 와 rhymes 속성은 항상 존재한다는 보장이 없습니다.

![carbon (21)](https://user-images.githubusercontent.com/87301268/231921412-966630cf-c85f-419e-95bb-0af246020839.png)

잠재적으로 존재하지 않는 객체의 멤버에 대한 접근을 제한하면 코드의 안전을 지킬 수 있습니다.

<br>

#### 4.3.3 객체 타입 내로잉

타임 검사기가 유니언 타입 값에 특정 속성이 포함된 경우에만 코드 영역을 실행할 수 있음을 알게 되면 <br>
값의 타입을 해당 속성을 포함하는 구성 요소로만 좁힙니다. <br> ➡️ 코드에서 객체의 형태를 확인하고 타입 내로잉이 적용

poem 의 pages 가 타입스크립트의 타입 가드 역할을 해 PoemWithPages 임을 나타내는지 확인 합니다.

![carbon (22)](https://user-images.githubusercontent.com/87301268/231924929-72d97e5f-fed8-4b75-87d2-7a1d4252976e.png)

<br>

#### 4.3.4 판별된 유니언

판별된 유니언은 **객체의 속성이 객체의 형태를 나타내도록 하는 것 입니다.**

- 객체의 타입을 가리키는 속성이 **판별값** 입니다.

타입스크립트는 코드에서 판별 속성을 사용해 타입 내로잉을 수행합니다.

![carbon (23)](https://user-images.githubusercontent.com/87301268/231926957-9330e3fd-e6e9-460d-be0d-3259680bbb80.png)

<br>

### 4.4 교차 타입

타입스크립트의 유니언 타입은 둘 이상의 다른 타입 중 하나의 타입이 될 수 있음을 나타냅니다.

자바스크립트의 런타임 `|` 연산자가 `&` 연산자에 대응하는 역할을 하는 것 처럼 <br>
타입스크립트에서도 `& 교차타입` 을 사용해 **여러 타입을 동시에 나타냅니다.**

- 여러 기존 객체 타입을 별칭 객체 타입으로 결합해 새로운 타입을 생성 합니다.

![carbon (24)](https://user-images.githubusercontent.com/87301268/231939800-c099a48d-208a-4d27-9686-45b66895a03c.png)

**교차 타입은 유니언 타입과 결합할 수 있으며, 이는 하나의 타입으로 판별된 유니언 타입을 설명하는데 유용합니다.**

<br>

#### 4.4.1 교차 타입의 위험성

#### 위험성(1).긴 할당 가능성 오류

교차 타입을 사용할 때는 가능한 **코드를 간결하게 유지**해야 합니다.

- 복잡할수록 타입 검사기의 메시지도 이해하기 어려워집니다.

<br>

#### 위험성(2).never

두 개의 원시 타입을 결합하면 `never` 키워드로 표시되는 `never` 타입이 됩니다.

- never 키워드와 타입은 프로그래밍 언어에서 `bottom` 타입 또는 `empty` 타입을 말합니다.
- bottom 타입은 **값을 가질 수 없고 참조할 수 없는 타입**

![carbon (25)](https://user-images.githubusercontent.com/87301268/231941293-7d324137-bdd9-4987-9168-5eac0496e12a.png)

<br>

```toc

```

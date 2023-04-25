---
emoji: 📖
title: 함수(function)
date: '2023-04-29'
author: 최현호
tags: python
categories: python
---

함수는 코드의 반복을 줄이거나 어떠한 용도를 위해 **특정 코드들을 모아둔 것** 입니다.

<br>

### 함수 정의하는 방법

`def` 를 사용해 **함수를 정의하고 함수명을 작성** 합니다. <br>
그리고 **콜론(:)을 사용한 후 들여쓰기**를 하여 실행하는 코드 내용을 위치 시킵니다.

![1](https://user-images.githubusercontent.com/87301268/234194529-cb46241a-b099-41bf-8007-22e1ca5fc56b.png)

<br>

함수를 호출 할 때는 `함수명()` 이런 식으로 작성 합니다.

![2](https://user-images.githubusercontent.com/87301268/234196132-28c2ec4f-a914-44b7-8c6c-adbcb21bc6e7.png)

<br>

### 함수의 매개변수 & 인수

- `매개변수(parameter)` : **함수를 정의**할 때 사용되는 변수
- `인수(argument)` : **함수를 호출**할 때 전달하는 값

![3](https://user-images.githubusercontent.com/87301268/234198281-681ca30c-9ce2-4aa9-ab52-c3d6a1270d83.png)

<br>

⚠️ 함수를 호출할 때, **매개변수와 인자의 개수가 같아야 합니다.**

<br>

### return

**함수의 결과 값**을 반환해주는 키워드 입니다.

- `return` 이 실행되면 함수의 실행이 종료되고
- 지정된 값이 함수가 호출된 지점으로 반환 됩니다.

![4](https://user-images.githubusercontent.com/87301268/234201135-bc12af96-9e95-4203-99fc-490fe6d4fc72.png)

<br>

#### return 과 print 의 차이 ❓

다음 예시를 살펴봅시다.

![5](https://user-images.githubusercontent.com/87301268/234203011-76e147aa-07aa-4e55-a6be-7634ee319e62.png)

<br>

**'두 개의 함수 모두 30이라는 값을 가지고 출력을 할 것이다'** 라고 생각 할 수 있습니다.

하지만 막상 확인해보면

- #1 의 함수는 `none` 의 값을 가지고
- #2 의 함수만 `30` 을 가지고 있습니다.

위에서 **return** 의 개념을 설명할 때 `함수의 결과 값을 반환 받는 키워드`라 했습니다. <br>
그에 반해 **print** 는 그저 데이터를 `개발자가 볼 수 있게 출력`해주는 용도 입니다.

즉, 함수의 결과 값을 받아서 사용하고 싶으면 `return` 을 사용 합시다..!

<br>

### default value

#### 함수에서 파라미터의 기본 값을 설정 할 수 있습니다.

![6](https://user-images.githubusercontent.com/87301268/234204966-c7b13cde-7362-4019-89d4-d003317537d8.png)

![7](https://user-images.githubusercontent.com/87301268/234206992-3f2b500d-0756-41f5-b447-942b982253b8.png)

<br>

#### 기본 값을 설정해도 함수를 호출할 때 변할 수 있습니다.

![8](https://user-images.githubusercontent.com/87301268/234207881-17f2b82d-1339-43b2-86e9-a137607c20c4.png)

<br>

#### 일부 값만 default value를 설정 할 수 있습니다.

![9](https://user-images.githubusercontent.com/87301268/234208938-c18f5d5c-ca51-40e2-a910-8202c4489d7e.png)

<br>

### 참고

- [김왼손의 왼손코딩](https://www.inflearn.com/course/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EA%B8%B0%EC%B4%88-%EA%B0%95%EC%A2%8C)
- https://wikidocs.net/16047
- https://wikidocs.net/85321
- https://www.freecodecamp.org/korean/news/python-define-call-function/

<br>

```toc

```

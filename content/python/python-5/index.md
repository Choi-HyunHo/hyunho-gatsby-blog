---
emoji: 📖
title: for 반복문
date: '2023-04-24'
author: 최현호
tags: python
categories: python
---

### 반복문

반복문은 **특정 조건을 만족할 때 같은 동작을 계속해서 반복하고자 할 때 사용 합니다.**

python 에는 for, while 두 가지 반복문이 있습니다. <br>
먼저 for 반복문에 대해 알아보겠습니다.

<br>

### for

for는 횟수를 기준으로 반복할 때 사용 합니다.

#### 기본 구조

![1](https://user-images.githubusercontent.com/87301268/233877982-e5b190a8-8dd0-4a12-b10f-2240b88e8ee4.png)

- 컨테이너 안의 값을 전부 순회 할 때 까지 반복 합니다.
- 반복하는 부분을 코드블럭이라고 합니다.
- 코드블럭을 구분하기 위해 `:` 와 들여쓰기를 사용 합니다.

**⚠️ 주의 !! python에서는 들여쓰기는 선택이 아닌 필수 입니다.**

![2](https://user-images.githubusercontent.com/87301268/233878715-7d070d13-7039-49c2-84d8-708a3efb000a.png)

<br>

### range

for 의 내장 함수 입니다.

- `range(stop)` : 0부터 stop 전까지의 숫자를 나열 합니다.
- `range(start, stop)` : start부터 stop 전까지의 숫자를 나열 합니다.
- `range(start, stop, step)` : step 은 간격을 나타냅니다.

![3](https://user-images.githubusercontent.com/87301268/233884827-19dd73f8-8c6b-4d6d-a089-ee2b6c67f417.png)

<br>

### 중첩해서 사용하기

**반복문은 중첩**해서 사용 할 수 있습니다.

![4](https://user-images.githubusercontent.com/87301268/233885768-061df8b9-53c9-4149-a184-1ac39a423077.png)

<br>

### 컴프리헨션

**python의 간결하고 실용적이며, 직관적인 기능 입니다.**

- 조건문을 사용해서도 나타낼 수 있는데 아직 정리하지 않았기에 for 위주로 살펴보겠습니다.

<br>

#### 에시

기존의 `for in range` 를 사용해서 1부터 10까지 리스트를 만들어보겠습니다.

![5](https://user-images.githubusercontent.com/87301268/233887290-d86e6347-ec8a-42d2-8fca-23b3fe7fb19c.png)

<br>

다음과 같이 컴프리헨션을 사용해서 동일한 기능을 하지만 더 간결하게 만들어보겠습니다.

![6](https://user-images.githubusercontent.com/87301268/233888214-ce29fde8-0e0b-40d3-b052-6aed8826e4c9.png)

<br>

또 다른 예시로는

![7](https://user-images.githubusercontent.com/87301268/233889069-735a3237-8f0f-4033-b39b-d1aa697d8088.png)

풀어서 설명하면

1. 전체 대괄호 `[]` 는 리스트를 생성하는 방법 입니다.
2. `for num in range(1,11)` 는 대괄호 안의 `for num in range(1,11)` 와 동일 합니다.
3. 그리고 `append(num)`의 **num**은 대괄호 맨 앞에 `num` 과 같습니다.

조건문을 정리 할 때 컴프리헨션에서 사용하늰 방법을 추가로 정리 하겠습니다.

<br>

### 참고

- [김왼손의 왼손코딩](https://www.inflearn.com/course/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EA%B8%B0%EC%B4%88-%EA%B0%95%EC%A2%8C)
- https://wikidocs.net/22805
- https://wikidocs.net/22

<br>

```toc

```

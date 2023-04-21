---
emoji: 📖
title: 리스트에 대해서
date: '2023-04-23'
author: 최현호
tags: python
categories: python
---

### 리스트(List)는

원소들이 **연속적으로 저장되는 형태의 자료형** 입니다.

- 저장되는 요소들이 **모두 같은 자료형일 필요는 없습니다.**
- 대괄호`[]`를 사용하여 나타내고, 0개 이상의 원소가 저장 될 수 있습니다.
- 가변의 특징을 가집니다.(값을 변경 할 수 있다.)

<br>

### 리스트 만들어보기

#### 빈 리스트 만들기

![1](https://user-images.githubusercontent.com/87301268/233581552-dbaf282d-e3d7-468d-b789-2b85989e20d6.png)

<br>

#### 값을 가지고 있는 리스트 만들기

![2](https://user-images.githubusercontent.com/87301268/233582234-4772d269-03fc-42eb-8969-06719631f8e0.png)

<br>

### .append()

리스트에 값을 추가하는 함수 입니다.

![3](https://user-images.githubusercontent.com/87301268/233582632-53fdb383-8d46-45bc-8cec-05f40ec1e4ed.png)

<br>

### 리스트의 인덱싱, 슬라이싱

인덱싱, 슬라이싱 방식은 문자열과 유사 합니다.

- 위치를 이용해서 값에 접근하는 것
- 인덱싱은 1이 아닌 0부터 시작한다는 점을 항상 유의

<br>

#### 인덱싱

![4](https://user-images.githubusercontent.com/87301268/233585215-07e0f4bc-e193-4aaf-b807-d12f930f3d32.png)

<br>

#### 슬라이싱

주의해야 할 점은 [0:3] 의미는 3번째 값까지가 아닌 3번째 전 값(2번째 값) 이라는 의미 입니다.

![5](https://user-images.githubusercontent.com/87301268/233587064-d37ff23f-22f4-45c8-9715-29b7fd6b010d.png)

<br>

슬라이싱을 활용해서 list 중간에 데이터를 삽입할 수 있습니다. <br>
또한 [::2] 의미는 시작과 종료 값이 없고 `step` 이라고 `2씩 건너뛰어 가져온다`는 의미 입니다.

![6](https://user-images.githubusercontent.com/87301268/233588973-5fcca2ff-77d1-45e2-a289-f74c80491573.png)

<br>

### 후기

리스트 추가, 삭제 하는 방법은 훨씬 많습니다. <br>
지금은 이렇구나 정도로 보고, 알고리즘 공부를 하며 더 추가하겠습니다.

<br>

### 참고

- https://wikidocs.net/16040
- https://mimah.tistory.com/entry/Python-List-%EA%B8%B0%EB%B3%B8-%EA%B0%9C%EB%85%90%EA%B3%BC-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8B%B1slicng

<br>

```toc

```

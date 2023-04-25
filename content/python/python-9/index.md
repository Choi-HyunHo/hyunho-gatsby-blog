---
emoji: 📖
title: 딕셔너리(dictionary)
date: '2023-04-28'
author: 최현호
tags: python
categories: python
---

### 딕셔너리 ❓

딕셔너리를 말 그대로 해석하면 사전이라는 뜻으로 <br> **키(key)와 값(value)** 을 쌍으로 갖는 자료형입니다.

- `중괄호 {}` 를 사용해서 생성 합니다.
- 키(key)와 값(value)를 가지는 데이터 구조로 `콜론(:)`으로 연결합니다.
- 구분자로는 `,` 를 사용 합니다.
- 순서가 없기 때문에 인덱스로는 접근할수 없고, 키(key)로 접근 할 수 있습니다.

<br>

#### 딕셔너리 선언

![1](https://user-images.githubusercontent.com/87301268/234172573-bcae1d2b-3007-416f-9bd3-a01c73eec440.png)

- 물론 값을 넣어서 선언을 할 수 있습니다.

<br>

#### 딕셔너리 값 다루기

`추가`하는 방법은 딕셔너리 변수에 key와 value를 추가하면 됩니다.

![2](https://user-images.githubusercontent.com/87301268/234173205-3681ac9a-e2c1-4cae-81f9-30f683819bd4.png)

<br>

`수정`하는 방법은 해당 key의 value를 변경하면됩니다.

![3](https://user-images.githubusercontent.com/87301268/234173679-f200440d-6f6b-41e8-bb98-40567919e77f.png)

<br>

`삭제`하는 방법은 `del` 를 사용 합니다.

![4](https://user-images.githubusercontent.com/87301268/234173960-481548ba-d47b-490d-917b-40d81e417682.png)

<br>

이번에는 value가 아닌 key값을 구하는 방법을 살펴보겠습니다.

<br>

#### 딕셔너리 키 구하기

`keys` 메서드를 활용 합니다.

- 키 값만 구하고 싶을 때 `딕셔너리 이름.keys` 라고 호출하면 됩니다.

![5](https://user-images.githubusercontent.com/87301268/234174978-772417e2-1720-4cd4-bf2c-4aaa57e0bd70.png)

<br>

그런데 값에 `'dict_keys'`라는 것이 있습니다. 확인 할 수 있는 사실은 **Keys 메서드의 반환 값은 <br> 리스트가 아니며**, 리스트로 만들려면 **list** 키워드를 사용해서 타입을 변환해야 합니다.

![6](https://user-images.githubusercontent.com/87301268/234175328-bbc55b28-42e6-4e6a-869d-ee55b280159e.png)

<br>

비슷하기 값 목록을 받아오려면 `values()` 를 사용 합니다.

![7](https://user-images.githubusercontent.com/87301268/234176590-d3d863f4-ffb2-494b-92e0-e7e787024218.png)

<br>

### 다양한 메서드들

- `get()` : 키(key)를 알고 있을 경우 값(value)를 얻을 수 있습니다.

![9](https://user-images.githubusercontent.com/87301268/234177701-9e08d5cf-5581-4490-9b8d-b07b1a045416.png)

<br>

- `update()` : 여러 값을 수정 할 때 사용합니다.

![8](https://user-images.githubusercontent.com/87301268/234178785-8def12de-7f81-42a4-b46a-1961e03d35ec.png)

<br>

- `in` : 키 값에 한정적으로 동작 합니다.

![10](https://user-images.githubusercontent.com/87301268/234179504-248756f2-fd0e-44d6-bf61-50626485a038.png)

<br>

### 참고

- [김왼손의 왼손코딩](https://www.inflearn.com/course/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EA%B8%B0%EC%B4%88-%EA%B0%95%EC%A2%8C)
- https://wikidocs.net/16043
- https://wikidocs.net/2858
- https://velog.io/@nayeo0on/Python-%EA%B8%B0%EC%B4%88-05%EC%9E%90%EB%A3%8C%ED%98%95%EB%94%95%EC%85%94%EB%84%88%EB%A6%AC

<br>

```toc

```

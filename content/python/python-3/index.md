---
emoji: 📖
title: 문자열에 대해서
date: '2023-04-22'
author: 최현호
tags: python
categories: python
---

이전 데이터 타입 포스팅을 통해서 기본적인 문자열의 타입도 공부했습니다.

이번 포스팅은 문자열을 다룰 수 있는 여러 방법에 대해서 알아보겠습니다.

<br>

### 포맷팅

문자열을 자유롭게 표현하는 방법 입니다.

- `%` 키워드를 사용해 문자열에 숫자, 문자 등을 대입 합니다.

![1](https://user-images.githubusercontent.com/87301268/233538275-6f6bd081-5fe6-4220-8b22-1fca1428ee17.png)

<br>

#### %d

정수형 숫자를 대입 할 때 사용 합니다.

![2](https://user-images.githubusercontent.com/87301268/233552672-14fdee9e-4e44-48f1-ad09-cf9a7d39a0c6.png)

<br>

#### %f

실수형 숫자를 대입 할 때 사용 합니다.

![3](https://user-images.githubusercontent.com/87301268/233553107-f9494ffb-b084-457c-ab00-3888eef9518b.png)

<br>

#### %s

문자열을 대입 할 때 사용 합니다.

![4](https://user-images.githubusercontent.com/87301268/233553169-37b3e887-12f1-4852-89cc-2916a2c46c2f.png)

<br>

### 문자열 포멧 코드

위의 3가지 예시 말고도 더 많은 종류의 포맷 코드가 있습니다.

| 코드 | 설명                     |
| ---- | ------------------------ |
| %s   | 문자열(String)           |
| %c   | 문자 1개(character)      |
| %d   | 정수(Integer)            |
| %f   | 부동소수(floating-point) |
| %o   | 8진수                    |
| %x   | 16진수                   |
| %%   | Literal % (문자 % 자체)  |

<br>

### format()

포맷팅을 수행하는 문자열의 메소드 입니다.

- 중괄호 `{}` 를 이용해 값을 대입 합니다.
- 괄호 안에 숫자를 넣어 순서도 지정할 수 있습니다.

![5](https://user-images.githubusercontent.com/87301268/233554863-71c92153-deab-4fb3-ade4-df08946707e5.png)

<br>

### 인덱싱

![0](https://user-images.githubusercontent.com/87301268/233557149-0c9b1385-e0cf-44eb-95db-f350eeaed10a.jpg)

**인덱싱(Indexing)이란 무엇인가 '가르키다' 라는 의미 입니다.**

- 위치(Index)를 이용해 각 문자에 접근 할 수 있습니다.

![6](https://user-images.githubusercontent.com/87301268/233557616-2fa117d4-7de3-4127-bc67-50979f6e92ce.png)

<br>

### 슬라이싱

![1](https://user-images.githubusercontent.com/87301268/233561205-ccc2c417-ed2d-43f2-865c-e376f57a4e47.jpg)

**슬라이싱(Slicing)이란 무엇인가 '잘라낸다' 라는 의미 입니다.**

- 콜론`(:)`을 이용해 문자열에서 여러 위치의 문자들을 잘라서 가져올 수 있습니다.
- 기존 문자열은 그대로 두고 복사해서 사용 합니다.

![7](https://user-images.githubusercontent.com/87301268/233559696-1bdae797-a65d-4c38-9932-2ec964a1a15a.png)

<br>

### .split()

문자열을 리스트로 잘라주는 함수 입니다.

- 문자열.split()
- 문자열.split('구분자')
- 문자열.split('구분자', 분할 횟수)
- 문자열.split(seq='구분자', maxsplit=분할 횟수)

<br>

#### 문자열.split()

함수에 파라미터를 넣지 않고 실행하면 띄어쓰기 혹은 개행문자에 맞춰 문자열을 나눠줍니다.

![8](https://user-images.githubusercontent.com/87301268/233564395-1407b2b6-de4e-4e99-8300-8020e652bd1b.png)

<br>

#### 문자열.split('구분자')

파라미터로 구분자를 넣어주면 구분자를 기준으로 문자열을 나눠줍니다.

![9](https://user-images.githubusercontent.com/87301268/233565392-70e92f74-08b0-430d-8418-38a6f2dad1d8.png)

<br>

#### 문자열.split('구분자', 분할 횟수)

구분자에 따라 앞에서 부터 분할 횟수만큼만 나누고, 나머지는 나누지 않고 리스트의 마지막 항목으로 채워 반환합니다.

![10](https://user-images.githubusercontent.com/87301268/233565628-c1f1b097-e308-46bd-acbd-ebf0d6908ded.png)

구분자 `','` 를 기준으로 `6`개만 나눈 후 리스트를 반환 합니다.

<br>

#### 문자열.split(seq='구분자', maxsplit=분할 횟수)

`sep` 과 `maxsplit`은 파라미터 명이며, 바로 위 코드와 동일한 역할을 합니다.

![10](https://user-images.githubusercontent.com/87301268/233570928-db2e9553-82ad-46a0-84ab-0c203427ea1e.png)

<br>

### seq & end

print() 의 옵션

- `sep` : 구분자에 넣을 내용을 임의로 기입하는 옵션

![12](https://user-images.githubusercontent.com/87301268/233571545-86c8f80d-c2f0-4d53-b0de-11c2a2d1e321.png)

<br>

- `end` : 현재 출력물을 그 다음 출력 값과 이어지게 하는 옵션

![13](https://user-images.githubusercontent.com/87301268/233572171-b26c36d6-f74d-4551-a474-d1f941290830.png)

<br>

### 참고

- [김왼손의 왼손코딩](https://www.inflearn.com/course/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EA%B8%B0%EC%B4%88-%EA%B0%95%EC%A2%8C)
- https://securityspecialist.tistory.com/60
- https://data-jj.tistory.com/4
- https://wikidocs.net/13

```toc

```

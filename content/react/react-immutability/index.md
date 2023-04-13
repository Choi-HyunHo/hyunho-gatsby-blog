---
emoji: 📖
title: 리액트의 불변성
date: '2023-01-17'
author: 최현호
tags: React
categories: React
---

React 를 사용하면서 state 를 변경 했지만, 리액트가 제대로 감지하지 못하여 변화가 일어나지 않아 자료를 찾아보다가 🥺

> 리액트는 불변성을 지켜야 한다.

위와 같은 말을 많이 접하게 되었습니다. 리액트를 처음 배울 때 몇 번 들어봤던 말인데 그 당시 제대로 잡고 갔어야하는데  다시 같은 실수를 방지하고자 공부하여 정리합니다.

<br>

### **자바스크립트 메모리 구조**

![img](https://user-images.githubusercontent.com/87301268/223899501-bfe38e63-418a-4a4f-8b88-0e72303e8841.png)

<br>

**Call Stack(콜 스택)**

- 실행 중인 함수를 추적하여 계산을 수행하고, 지역 변수를 저장 (LIFO 방식)
- 고정된 크기로 메모리에 저장(실제 데이터가 변수에 할당)
- **원시 타입**</span>이 이곳에 저장 됩니다. ( Boolean, String, Number, Null, Undefined, Symbol )</span>

<br>

**Memory Heap(메모리 힙)**

- 콜 스택과 달리 메모리 할당은 랜덤하게 배치 → 데이터의 크기가 정해지지 않고 메모리에 저장 + 변수에 Heap 메모리 주소 값 할당
- 메모리 누수를 방지하기 위해 JS 엔진의 메모리 관리자가 항상 관리
- **참조 타입**</span>이 이곳에 할당 됩니다. ( Object, Array )</span>

<br>

앞서 먼저 설명한 이유는, **타입별로 데이터 저장방식과 할당 방식이 다르기 때문**</span> 입니다.

<br>

### **원시 타입 과 참조 타입의 데이터 저장 방식 + 할당 방식**

**1\. 원시 타입**

**한 번 생성된 원시 값은 읽기 전용 값으로, 변경 할 수 없습니다.**</span>

![carbon (9)](https://user-images.githubusercontent.com/87301268/223899574-82c136d0-82de-4501-83ac-df453d4b0d01.png)

<br>

- age 변수의 값을 31로 재할당 했으나, oldage의 값이 바뀌지 않는 이유는 원시 타입의 값은 변경할 수 없는 값이기 때문 입니다.
- 값을 변경할 수 없기 때문에 age = 31 이라는 새로운 값을 재할당할 때는, 새로운 메모리공간을 확보해 그 곳에 값을 저장</span> 합니다.

<br>

또 다른 예시로

![carbon (10)](https://user-images.githubusercontent.com/87301268/223899676-a138085e-c6b5-47cb-994e-4df9616b63c7.png)

- 변수 string은 'data1' 였고, 여기에 'data2'를 재할당하였는데 기존 메모리 영역 1에 있는 'data1'의 값은 그대로 두고 메모리 영역2에 'data2'를 새로 할당 했습니다.
- 즉, 메모리영역에서 'data2'는 'data1'을 대체하는 것이 아니라 새로운 영역에 할당됩니다.

<br>

**위와 같은 특징이 불변성</span> 입니다.**

> 불변성 : 값이나 상태를 변경 할 수 없는 것

하지만 자바스크립트에서의 진짜 정의는 **'메모리 영역의 값을 변경 할 수 없는 것'**</span>

<br>

**2\. 참조 타입**

![img (1)](https://user-images.githubusercontent.com/87301268/223899848-b0f4dba2-3ceb-4961-8add-0927f6a5b419.png)

참조타입은 두 가지의 방법이 있는데

**1\. 기존의 변수를 바꾸는 경우**

**2\. map, spread operator 등 기존의 변수를 변경한 새로운 변수를 반환하는 경우**

만약 위의 그림과 같이 기존의 변수를 변경하는 경우를 살펴보면, 변수 값이 변경되면
콜스택의 변화는 없으며 메모리 힙의 value 값만 변경 됩니다. 즉, 기존의 메모리 영역의 값이 변경되므로 불변성 유지가 되지 않습니다.</span>

<br>

> 참조 타입의 불변성을 지키기 위해서는, spread operator, map, filter, slice ,reducer 등등 새로운 배열을 반환하는 메소드들을 활용 합니다.

<br>

### **✅  React 에서 불변성을 지켜야 하는 이유**

**1\. 리액트의 state 의 변화 감지 기준은 'Call Stack 의 주소 값'</span> 입니다.**

> 리액트는 콜스택의 주소값만을 비교하여 상태 변화를 감지 합니다. 이를 '**얕은 비교'**</span> 라고 합니다.

리액트의 빠른 state 변화 감지를 할 수 있도록 해주는 장점이자, 불변성을 지켜야하는 이유 입니다.

얕은 비교에 대해 설명을 덧붙이면, 원시 타입은 값을 비교하고, 참조 타입은 그 안의 값을 비교하지 않고, 참조되는 주소(위치) 를 비교 합니다.

**원시타입**의 변화의 메모리 영역값이 변경하지 않는 불변성을 유지한채로 새로운 메모리 영역에서 변경된 값이 저장 되기 때문에
**콜스택 의 주소값의 변화가 감지**되지만,

**참조 타입**은 콜스택에 메모리 힙의 주소만을 저장하고 값은 메모리 힙에 저장, 변경되기 때문에 참조 타입의 값을 변경하면

콜스택의 주소값은 변경이 없어</span> react는 state의 변경이 없다고 감지 합니다. 때문에 변경된 **state는 재랜더링되지 않습니다.**

따라서 참조타입의 변경된 값을 react가 감지 할 수 있도록 불변성을 유지 해야합니다.

<br>

**2.  불변성을 지킴으로서 사이드 이펙트와 복잡한 코드를 방지 할 수 있습니다.**

기존 메모리 영역의 값을 사용하는 다른 코드에서 발생할 수 있는 오류를 사전에 방지 -> 복사본을 만들어서 사용하기 때문

<br>

### 참고

[https://hsp0418.tistory.com/171](https://hsp0418.tistory.com/171)

[https://friedegg556.tistory.com/m/87](https://friedegg556.tistory.com/m/87)

[https://ko.javascript.info/object-copy](https://ko.javascript.info/object-copy)

[https://babycoder05.tistory.com/entry/React-Virtual-DOM-%EA%B3%BC-%EB%B9%84%EA%B5%90-%EC%9B%90%EB%A6%AC%EC%99%80-%EC%96%95%EC%9D%80-%EB%B9%84%EA%B5%90?category=1023016](https://babycoder05.tistory.com/entry/React-Virtual-DOM-%EA%B3%BC-%EB%B9%84%EA%B5%90-%EC%9B%90%EB%A6%AC%EC%99%80-%EC%96%95%EC%9D%80-%EB%B9%84%EA%B5%90?category=1023016 'React Virtual DOM 비교 원리와 얕은 비교')

<br>

```toc

```

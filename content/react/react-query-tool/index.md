---
emoji: 📖
title: React-Query - Dev Tools
date: '2023-03-19'
author: 최현호
tags: React
categories: React
---

React Query 개발자 도구는 앱에 추가할 수 있는 컴포넌트로 개발 중인 모든 쿼리의 상태를 표시 해줍니다.
또한 예상대로 작동하지 않는 경우 문제를 해결하는 데 도움이 될 수도 있습니다.

<br>

### Dev Tools 특징

➡️ 쿼리 키로 쿼리를 표시해 주고 **활성(active)**, **비활성(inactive)**, **만료(stale)** 등 모든 쿼리의 상태</span>를 알려줍니다.<br>
➡️ 마지막으로 업데이트된 **타임 스탬프**도 알려줍니다.<br>
➡️ 쿼리에 의해 반환된 데이터를 탐색할 수 있는 **데이터 탐색기**도 있습니다.<br>
➡️ 쿼리를 볼 수 있는 **쿼리 탐색기**도 있습니다.

[공식문서](https://tanstack.com/query/v4/docs/react/devtools?from=reactQueryV3&original=https%3A%2F%2Freact-query-v3.tanstack.com%2Fdevtools)

<br>

### 한 가지 주목할 점은

![image (1)](https://user-images.githubusercontent.com/87301268/225792152-018ec602-a265-4ba3-b687-dc73d9fed7a5.png)

- 프로덕션 번들에 포함되어 있지 않다는 점 입니다. <br>
  ➡️ NODE_ENV 변수에 따라 프로덕션 환경에 있는지 여부가 결정 됩니다.
- CRA 는 npm run build 를 실행할 때만 NODE_ENV 변수를 production 으로 설정 합니다.
  ➡️ 그렇지 않으면 development 또는 testing 으로 설정 됩니다.

즉, **개발 중일 때는 개발자 도구가 표시되고 프로덕션 때는 표시되지 않습니다.**</span>

<br>

### 사용법

![carbon (10)](https://user-images.githubusercontent.com/87301268/225792478-51bd8381-9170-48d0-bf1e-eabdda5d1c56.png)

위의 코드를 처음에 감싸주었던 **provider 안**에 아래와 같이 넣어줍니다.

![carbon (11)](https://user-images.githubusercontent.com/87301268/225792667-a9dca701-1f87-422c-9dd1-e93d77d5706e.png)

<br>

### 적용된 화면

![image (1)](https://user-images.githubusercontent.com/87301268/225792756-defe357c-be78-4305-8e8d-dab1f319eb0c.gif)

꽃을 클릭하면 개발자 도구를 열고 닫고 할 수 있습니다. <br>
위에서 보는 것처럼 다양한 정보들을 확인 할 수 있습니다.

<br>

### 직접 확인해보기

<iframe src="https://codesandbox.io/embed/react-query-2-d0tsnn?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-query-2"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<br>
<br>

**다음 포스팅은 React-Query 의 중요한 개념인 stale 에 대해 알아보겠습니다.**

<br>

### 참고

- [https://react-query-v3.tanstack.com/](https://react-query-v3.tanstack.com/)
- [https://www.udemy.com/course/react-query-react/](https://www.udemy.com/course/react-query-react/)

<br>

```toc

```

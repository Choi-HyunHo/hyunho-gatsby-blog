---
emoji: 📖
title: React-Query ❓
date: '2023-03-16'
author: 최현호
tags: React
categories: React
---

### React-Query 는

> react-query는 리액트 애플리케이션에서 <span style='background-color : #fff5b1'>서버 상태 가져오기, 캐싱, 동기화 및 업데이트</span>를 보다 쉽게 다룰 수 있도록 도와주는 라이브러리 입니다.

크게 보면, 클라이언트 상태와 서버 상태를 명확히 구분하기 위해 만들어졌습니다.

<br>

#### 이유❓ <br>

react-query에서는 기존 상태 관리 라이브러리인 **redux, mobX, recoil** 등 클라이언트 상태 작업에 적합하지만,
<span style='background-color : #fff5b1'>비동기 또는 서버 상태 작업</span>에는 그다지 좋지 않다고 많이 말합니다.<br> **(미들웨어 사용 및 보일러 플레이트가 많아짐..)**

또한 **클라이언트 상태(Client State)** 와 **서버 상태(Server State)** 는 완전히 다른 개념입니다.

<br>

#### Client State vs Server State ❓

#### ✔ Client State

> 클라이언트 상태란, **웹 브라우저 세션과 관련된 모든 정보를 의미 합니다.**

<br>

예를 들어 사용자는 가장 잘 아는 언어로 텍스트를 읽기 위해, 언어를 선택하거나 <br>
테마를 밝은 색이나, 어두운 색으로 변경 할 수 있는데 이런 것은 <br> **서버에서 일어나는 일과는 아무 관련이 없습니다.**
<span style='background-color : #fff5b1'>단순히 사용자의 상태를 추적</span>하는 것 입니다.

#### ✔ Server State

> 서버 상태는, **서버에 저장되지만 클라이언트에 표시하는데 필요한 데이터 입니다.**

<br>

예를 들어 **데이터베이스에 저장**되는 블로그 게시물 데이터가 이에 해당 합니다. <br>
사용자의 게시물을 표시하기 위해 클라이언트에 데이터가 있어야 하지만, <br>
<span style='background-color : #fff5b1'>데이터는 여러 클라이언트에 표시 할 수 있도록 서버</span>에 저장 됩니다.

<br>

### React-Query 의 기능

- 리액트 쿼리는 <span style='background-color : #fff5b1'>클라이언트에서 서버 데이터의 캐시를 관리</span> 할 수 있습니다. <br>
  ➡️ 리액트 코드에 서버 데이터가 필요할 때 fetch 나 axios 를 사용해 서버로 바로 이동하지 않고, <span style='background-color : #fff5b1'>리액트 쿼리를 요청해서 api 호출을 합니다.</span>

- 데이터를 관리하는 것은 리액트 쿼리이지만, <span style='background-color : #fff5b1'>서버의 새 데이터로 캐시를 업데이트하는 시기를 설정하는 것은 사용자의 몫</span>입니다.

- 데이터 관리 뿐만 아니라, **서버 상태 관리** 에 도움이 되는 많은 도구가 함께 제공 됩니다.<br>
  ➡️ 서버에 대한 모든 쿼리의 <span style='background-color : #fff5b1'>**로딩 및 오류 상태를 유지**</span> 해주기 때문에 수동으로 할 필요가 없습니다.

  ➡️ 사용자를 위해 데이터의 **페이지 매김(Pagination)** 또는 **무한 스크롤(infinite scroll)** 이 필요할 경우 데이터를 조각으로 가져올 수 있는 도구도 제공 합니다. <br>
  ➡️ 사용자가 데이터를 언제 필요를 할 지, 예상하여 <span style='background-color : #fff5b1'>**PreFetch**</span> 를 수행 할 수 있습니다.
  <br>

  ➡️ 데이터를 미리 가져와서 캐시에 넣으면, 사용자에게 데이터가 필요할 때 앱이 캐시에서 해당 데이터를 가져오기 때문에 사용자는 서버에 연결할 때까지 기다릴 필요가 없어집니다.<br>

  ➡️ 리액트 쿼리가 서버에서 데이터의 <span style='background-color : #fff5b1'>**변이(Mutation)**</span> 나 <span style='background-color : #fff5b1'>**업데이트**</span> 를 관리 할 수 있습니다. <br>

  ➡️ <span style='background-color : #fff5b1'>쿼리는 키로 식별</span>되기 때문에 리액트 쿼리는 요청을 관리 할 수 있고, 페이지를 로드하고 해당 페이지의 여러 구성 요소가 동일한 데이터를 요청하는 경우 리액트 쿼리는 <span style='background-color : #fff5b1'>쿼리를 한 번에 보낼 수 있습니다.</span>
  <br>

  ➡️ 기존 쿼리가 전송되는 동안 다른 구성 요소가 데이터를 요청하는 경우 리액트 쿼리는 중복 요청을 제거 할 수 있습니다. <br>

  ➡️ **서버에서 오류가 발생하는 경우**에 대한 <span style='background-color : #fff5b1'>재시도</span>를 관리 할 수 있습니다. <br>

  ➡️ <span style='background-color : #fff5b1'>쿼리가 성공하거나 오류가 발생 했을 때를 구별해서 콜백을 전달</span> 할 수 있습니다.

<br>

### React-Query 사용 전 api 호출 비교

![carbon (13)](https://user-images.githubusercontent.com/87301268/225797801-94928e4e-d963-4378-b930-5451d20be59d.png)

![carbon (14)](https://user-images.githubusercontent.com/87301268/225797009-1349d70a-fc8e-49a3-9b37-4aaf179a37a8.png)

<br>

지금은 예시가 간단하여 useEffect 안에 api 호출 부분만 들어있지만 실제 코드에서는
호출 부분 말고 부가적인 다른 코드가 여러 포함되어있을 확률이 있습니다. 그렇게 되면 코드도 길어지고 가독성 또한 좋지 않습니다.

아래 React-Query 를 사용해서 불러온 코드를 보면 직관적이고, isLoading 등 반환되는 값들을 사용해 호출 여부에 대한 표현도 쉽습니다.

<br>

### React-Query 설치하기

![carbon (12)](https://user-images.githubusercontent.com/87301268/225624841-fc879e58-932d-4507-a0d8-776391db6b62.png)

<br>

### 참고

- [https://react-query-v3.tanstack.com/](https://react-query-v3.tanstack.com/)
- [https://www.udemy.com/course/react-query-react/](https://www.udemy.com/course/react-query-react/)

<br>

```toc

```
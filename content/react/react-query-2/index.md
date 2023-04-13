---
emoji: 📖
title: React-Query - useQuery()
date: '2023-03-17'
author: 최현호
tags: React
categories: React
---

#### 주의 ⚠️

> 제가 공부한 기준은 v3 입니다. 현재 v4 버전이 정식 릴리즈 되었으니 참고 바랍니다!!

<br>

이전 포스팅에서 React-Query 설치하는 방법까지 공부했고 <br>
가장 기본적인 useQuery 를 다뤄보겠습니다.

<br>

### 비교를 위해 일반적인 리액트 코드부터 살펴보겠습니다.

#### App.js

![carbon (13)](https://user-images.githubusercontent.com/87301268/225628005-bb2e618f-9b1d-4c80-8d7f-064bd266fa25.png)

<br>

#### Post.js

![carbon (15)](https://user-images.githubusercontent.com/87301268/225632218-3675d252-32f4-400a-91af-ca9152afbeac.png)

<br>

#### 중점적으로 봐야할 부분은

- useQuery 를 사용할 때, 위에 있는 **fetchPosts**</span> 함수를 사용해서 JSONPlaceholder 서버에서 게시물 데이터를 가져올 것 입니다.
- Posts 데이터에 대한 useQuery 에서 **가장 관심 있게 봐야할 부분은** 아래 게시물 데이터를 매핑하는 부분 입니다.
- 지금 데이터는 빈 배열(Array)로 되어 있지만, 이것을 **useQuery** 로 대체 해보겠습니다.

![carbon (16)](https://user-images.githubusercontent.com/87301268/225632674-070417d8-5448-4530-a2d3-fd5355949669.png)

<br>

### QueryProvider

![carbon (17)](https://user-images.githubusercontent.com/87301268/225635576-df25196d-6fea-4cbc-81e5-09bf697b18de.png)

리액트 쿼리 사용을 위해 QueryClientProvider</span> 를 **최상단**에서 감싸야 합니다.

- 위와 같이 설정을 하면 **provider(공급자)** 가 클라이언트를 소품으로 사용하게 되면서
- 클라이언트가 가지고 있는 캐시와 모든 기본 옵션을 공급자의 자녀 컴포넌트도 사용할 수 있게 됩니다.

#### 다시 한번 App.js

![carbon (18)](https://user-images.githubusercontent.com/87301268/225636397-92c08a53-cfb5-4889-9566-cba94268a1fe.png)

<br>

### 본격적으로 useQuery에 대해 알아보겠습니다.

![carbon (19)](https://user-images.githubusercontent.com/87301268/225637892-c5f5edd6-4f2f-4db7-84ad-72ca97917fa4.png)

- useQuery 는 다양한 속성을 가지고 있습니다.</span>
- useQuery 는 몇 가지 인수를 사용하는데 **첫 번째**는 쿼리 키</span> 입니다.<br>
  ➡️ 바로 쿼리 이름을 말하는 것 입니다.
- 그 다음은 쿼리 함수</span> 를 사용 합니다.<br>
  ➡️ **쿼리에 대한 데이터를 가져오는 방법**을 말하는 것 입니다.

<br>

**특히 두 번째 쿼리 함수는 데이터를 가져오는 비동기 함수</span> 를 사용해야 합니다. (axios 등..)**

예시의 fetchPosts 는 포스팅 처음에 있던 비동기 함수 코드 입니다.

<br>

#### 이제 이부분에 useQuery 에서 가져온 data가 들어옵니다.

![carbon (20)](https://user-images.githubusercontent.com/87301268/225641576-b7b407f6-8c99-41ac-a728-aad48f06e83a.png)

이제 맵핑한 data 는 useQuery 를 통해(쿼리함수) 가져온 fetchPosts 에서 반환된 데이터</span>가 됩니다.

<br>

#### 하지만 ⚠️

코드를 직접 실행하게 되면 아래와 같은 에러가 발생 합니다.

![image.png](https://user-images.githubusercontent.com/87301268/225644646-b6902057-a70b-4833-920d-c343d43aea7a.png)

이유는, 매핑을 시도했지만 현재 데이터가 정의되지 않았다고 나오는 것 입니다. <br>

➡️ 바로, fetchPosts 가 비동기식</span>이기 때문에 fetchPosts 가 해결될 때까지 이 데이터는 useQuery 에서 정의되지 않을 것 입니다. <br>

➡️ useQuery 는 fetchPosts 가 데이터와 반환되지 않은 경우 **데이터에 할당할 항목을 알 수 없기 때문**입니다.

<br>

나중에 좀 더 좋은 방법으로 해결할 예정이지만, 우선 조건문을 통해 해결해 보도록 하겠습니다.
![carbon (22)](https://user-images.githubusercontent.com/87301268/225646064-e093b9b9-2409-4b84-86ae-a3928b9ebbbb.png)

<br>

#### 직접 확인해보기

<iframe src="https://codesandbox.io/embed/react-query-1-p0w4vx?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-query-1"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<br>

#### 다음 포스팅은 useQuery 의 로딩 및 오류 상태</span>를 살펴보겠습니다.

<br>

### 참고

- [https://react-query-v3.tanstack.com/](https://react-query-v3.tanstack.com/)
- [https://www.udemy.com/course/react-query-react/](https://www.udemy.com/course/react-query-react/)

<br>

```toc

```

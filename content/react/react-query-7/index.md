---
emoji: 📖
title: React-Query - 데이터 프리패칭(Prefetching)
date: '2023-03-22'
author: 최현호
tags: React
categories: React
---

이전 포스팅에서 구현한 Pagination 은 넘어갈 때 마다 로딩이 되어 사용자 경험이 좋지 않았습니다.

<br>

### 이유는 ❓

페이지에 캐시가 없기 때문입니다. <br>
때문에 Next Page 버튼을 누를 때 마다 페이지가 로딩되길 기다려야 했습니다.

**그렇다면 반대로 데이터를 미리 가져와서 사용자 경험을 개선해보도록 하겠습니다.**

<br>

### Prefetching

<span style='background-color : #fff5b1'>프리패칭은 데이터를 쿼리 키에 추가하며, 기본 값으로 만료(stale) 상태 입니다.</span>

- 데이터를 사용하고자 할 때 만료 상태에서 데이터를 다시 가져옵니다.
- 데이터를 가져오는 중에는 캐시에 있는 데이터를 이용해 화면에 나타냅니다.

> 물론 캐시가 만료되지 않았다는 가정입니다.

<br>

이렇게 추후 사용자가 사용할 법한 데이터에 프리패칭을 사용 합니다.

➡️ pagination 또는 다수의 사용자가 웹에서 통계적으로 누를 확률이 높은 곳 등

사용하는 방법에 대해서 알아보겠습니다.

<br>

### useQueryClient

**prefetch** 는 <span style='background-color : #fff5b1'>queryClient</span> 의 메서드 입니다.

![carbon (23)](https://user-images.githubusercontent.com/87301268/226373277-5fe89965-fb97-40ab-b530-b2f15f559560.png)

<br>

#### 컴포넌트로 가져올 때

![carbon (24)](https://user-images.githubusercontent.com/87301268/226373449-e4581a82-9d30-45d6-976d-a71d6b311b85.png)

<br>

#### queryClient.prefetchQuery()

![carbon (25)](https://user-images.githubusercontent.com/87301268/226378579-a121751c-7e91-46b4-b7c1-8e7b03fe1b21.png)

➡️ useQuery 와 비슷한 모습을 하고 있습니다. <br>
➡️ React Query가 캐시에 이미 데이터가 있는지 여기서 확인 합니다.

<br>

#### useEffect 와 같이 사용해봅시다.

![carbon (26)](https://user-images.githubusercontent.com/87301268/226383004-9194723b-fefe-45ce-be03-b0938e825e7a.png)

현재 페이지가 변경될 때 마다 useEffect 안의 함수가 실행되고 nextPage 를 프리패칭의 쿼리 키를 활용해
<span style='background-color : #fff5b1'>만약 현재 2페이지면 3페이지 데이터를 미리 불러오는 방식</span> 입니다.

<br>

### keepPreviousData

<span style='background-color : #fff5b1'>쿼리 키(ex.페이지 번호)가 변경되어서 새로운 데이터를 요청하는 동안에도 마지막 data값을 유지 합니다.</span>

➡️ pagination을 구현할 때 유용 <br>
➡️ 캐시되지 않은 페이지를 가져올 때 화면에서 목록이 사라지는 깜빡임 현상을 방지할 수 있습니다. <br>
➡️ isPreviousData 값으로 현재의 쿼리 키에 해당하는 값인지 확인 할 수도 있습니다.

![carbon (27)](https://user-images.githubusercontent.com/87301268/226387960-07236132-108a-421d-9226-adeb852676d9.png)

<br>

### 전체 코드

![carbon (28)](https://user-images.githubusercontent.com/87301268/226389536-ed524134-c654-4f43-96b7-10ae70e5ef99.png)

<br>

### 결과

![image](https://user-images.githubusercontent.com/87301268/226392962-62faf56c-1acb-4b90-b941-6843f46f8d54.gif)

<br>

개발자 도구를 보면 <span style='background-color : #fff5b1'>**쿼리가 미리 쌓여있는 것**</span>을 볼 수 있습니다.

- <span style='background-color : #fff5b1'>유일하게 활성 상태인 쿼리는 현재 페이지에 대한 쿼리</span>이고 **나머지 쿼리도 남아 있습니다.**
- 한편 아직 9페이지가 아니지만 9페이지를 미리 가져온 것을 볼 수 있습니다.
- 9페이지로 가면 10페이지를 미리 가져옵니다.

> 이처럼 데이터를 미리 가져오기 때문에 다음 페이지를 넘어가면 바로 볼 수 있습니다.

<br>

### 직접 확인해보기

<iframe src="https://codesandbox.io/embed/react-query-7-oc6sx1?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-query-7"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<br>
<br>

### 참고

- [https://react-query-v3.tanstack.com/](https://react-query-v3.tanstack.com/)
- [https://www.udemy.com/course/react-query-react/](https://www.udemy.com/course/react-query-react/)
- [prefetch](https://tanstack.com/query/v4/docs/react/reference/QueryClient?from=reactQueryV3&original=https%3A%2F%2Freact-query-v3.tanstack.com%2Freference%2FQueryClient#queryclientprefetchiquery)
  <br>

```toc

```

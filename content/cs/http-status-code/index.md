---
emoji: 📖
title: HTTP status code
date: '2022-11-24'
author: 최현호
tags: HTTP
categories: CS
---

**클라이언트가 서버에게 요청을 보낼 때 그 요청의 결과가 어떻게 되었는지를 알려주는 것**

<br>

### **HTTP status code**

- 10x : 정보 확인
- 20x : 통신 성공
- 30x : 리다이렉트
- 40x : 클라이언트 오류
- 50x : 서버 오류

<br>

#### **[](https://github.com/gyoogle/tech-interview-for-developer/blob/master/Web/HTTP%20status%20code.md#200%EB%B2%88%EB%8C%80--%ED%86%B5%EC%8B%A0-%EC%84%B1%EA%B3%B5)✔ <span style='background-color : #fff5b1'>200번대 : 통신 성공**</span>

| 상태코드 | 이름        | 의미                     |
| -------- | ----------- | ------------------------ |
| 200      | OK          | 요청 성공(GET)           |
| 201      | Create      | 생성 성공(POST)          |
| 202      | Accepted    | 요청 접수O, 리소스 처리X |
| 204      | No Contents | 요청 성공O, 내용 없음    |

<br>

#### [](https://github.com/gyoogle/tech-interview-for-developer/blob/master/Web/HTTP%20status%20code.md#300%EB%B2%88%EB%8C%80--%EB%A6%AC%EB%8B%A4%EC%9D%B4%EB%A0%89%ED%8A%B8)**✔ <span style='background-color : #fff5b1'>300번대 : 리다이렉트**</span>

| 상태코드 | 이름             | 의미                          |
| -------- | ---------------- | ----------------------------- |
| 300      | Multiple Choice  | 요청 URI에 여러 리소스가 존재 |
| 301      | Move Permanently | 요청 URI가 새 위치로 옮겨감   |
| 304      | Not Modified     | 요청 URI의 내용이 변경X       |

<br>

#### [](https://github.com/gyoogle/tech-interview-for-developer/blob/master/Web/HTTP%20status%20code.md#400%EB%B2%88%EB%8C%80--%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-%EC%98%A4%EB%A5%98)**✔ <span style='background-color : #fff5b1'>400번대 : 클라이언트 오류**</span>

| 상태코드 | 이름               | 의미                              |
| -------- | ------------------ | --------------------------------- |
| 400      | Bad Request        | API에서 정의되지 않은 요청 들어옴 |
| 401      | Unauthorized       | 인증 오류                         |
| 403      | Forbidden          | 권한 밖의 접근 시도               |
| 404      | Not Found          | 요청 URI에 대한 리소스 존재X      |
| 405      | Method Not Allowed | API에서 정의되지 않은 메소드 호출 |
| 406      | Not Acceptable     | 처리 불가                         |
| 408      | Request Timeout    | 요청 대기 시간 초과               |
| 409      | Conflict           | 모순                              |
| 429      | Too Many Request   | 요청 횟수 상한 초과               |

<br>

#### [](https://github.com/gyoogle/tech-interview-for-developer/blob/master/Web/HTTP%20status%20code.md#500%EB%B2%88%EB%8C%80--%EC%84%9C%EB%B2%84-%EC%98%A4%EB%A5%98)**✔ <span style='background-color : #fff5b1'>500번대 : 서버 오류**</span>

| 상태코드 | 이름                  | 의미                 |
| -------- | --------------------- | -------------------- |
| 500      | Internal Server Error | 서버 내부 오류       |
| 502      | Bad Gateway           | 게이트웨이 오류      |
| 503      | Service Unavailable   | 서비스 이용 불가     |
| 504      | Gateway Timeout       | 게이트웨이 시간 초과 |

<br>

### **참고**

- [https://www.whatap.io/ko/blog/40/](https://www.whatap.io/ko/blog/40/)
- [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

<br>

```toc

```

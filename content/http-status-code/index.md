---
emoji: ๐
title: HTTP status code
date: '2022-11-24'
author: ์ตํํธ
tags: HTTP
categories: CS
---

**ํด๋ผ์ด์ธํธ๊ฐ ์๋ฒ์๊ฒ ์์ฒญ์ ๋ณด๋ผ ๋ ๊ทธ ์์ฒญ์ ๊ฒฐ๊ณผ๊ฐ ์ด๋ป๊ฒ ๋์๋์ง๋ฅผ ์๋ ค์ฃผ๋ ๊ฒ**

<br>

### **HTTP status code**

- 10x : ์ ๋ณด ํ์ธ
- 20x : ํต์  ์ฑ๊ณต
- 30x : ๋ฆฌ๋ค์ด๋ ํธ
- 40x : ํด๋ผ์ด์ธํธ ์ค๋ฅ
- 50x : ์๋ฒ ์ค๋ฅ

<br>

#### **[](https://github.com/gyoogle/tech-interview-for-developer/blob/master/Web/HTTP%20status%20code.md#200%EB%B2%88%EB%8C%80--%ED%86%B5%EC%8B%A0-%EC%84%B1%EA%B3%B5)โ <span style='background-color : #fff5b1'>200๋ฒ๋ : ํต์  ์ฑ๊ณต**</span>

| ์ํ์ฝ๋ | ์ด๋ฆ        | ์๋ฏธ                     |
| -------- | ----------- | ------------------------ |
| 200      | OK          | ์์ฒญ ์ฑ๊ณต(GET)           |
| 201      | Create      | ์์ฑ ์ฑ๊ณต(POST)          |
| 202      | Accepted    | ์์ฒญ ์ ์O, ๋ฆฌ์์ค ์ฒ๋ฆฌX |
| 204      | No Contents | ์์ฒญ ์ฑ๊ณตO, ๋ด์ฉ ์์    |

<br>

#### [](https://github.com/gyoogle/tech-interview-for-developer/blob/master/Web/HTTP%20status%20code.md#300%EB%B2%88%EB%8C%80--%EB%A6%AC%EB%8B%A4%EC%9D%B4%EB%A0%89%ED%8A%B8)**โ <span style='background-color : #fff5b1'>300๋ฒ๋ : ๋ฆฌ๋ค์ด๋ ํธ**</span>

| ์ํ์ฝ๋ | ์ด๋ฆ             | ์๋ฏธ                          |
| -------- | ---------------- | ----------------------------- |
| 300      | Multiple Choice  | ์์ฒญ URI์ ์ฌ๋ฌ ๋ฆฌ์์ค๊ฐ ์กด์ฌ |
| 301      | Move Permanently | ์์ฒญ URI๊ฐ ์ ์์น๋ก ์ฎ๊ฒจ๊ฐ   |
| 304      | Not Modified     | ์์ฒญ URI์ ๋ด์ฉ์ด ๋ณ๊ฒฝX       |

<br>

#### [](https://github.com/gyoogle/tech-interview-for-developer/blob/master/Web/HTTP%20status%20code.md#400%EB%B2%88%EB%8C%80--%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-%EC%98%A4%EB%A5%98)**โ <span style='background-color : #fff5b1'>400๋ฒ๋ : ํด๋ผ์ด์ธํธ ์ค๋ฅ**</span>

| ์ํ์ฝ๋ | ์ด๋ฆ               | ์๋ฏธ                              |
| -------- | ------------------ | --------------------------------- |
| 400      | Bad Request        | API์์ ์ ์๋์ง ์์ ์์ฒญ ๋ค์ด์ด |
| 401      | Unauthorized       | ์ธ์ฆ ์ค๋ฅ                         |
| 403      | Forbidden          | ๊ถํ ๋ฐ์ ์ ๊ทผ ์๋               |
| 404      | Not Found          | ์์ฒญ URI์ ๋ํ ๋ฆฌ์์ค ์กด์ฌX      |
| 405      | Method Not Allowed | API์์ ์ ์๋์ง ์์ ๋ฉ์๋ ํธ์ถ |
| 406      | Not Acceptable     | ์ฒ๋ฆฌ ๋ถ๊ฐ                         |
| 408      | Request Timeout    | ์์ฒญ ๋๊ธฐ ์๊ฐ ์ด๊ณผ               |
| 409      | Conflict           | ๋ชจ์                              |
| 429      | Too Many Request   | ์์ฒญ ํ์ ์ํ ์ด๊ณผ               |

<br>

#### [](https://github.com/gyoogle/tech-interview-for-developer/blob/master/Web/HTTP%20status%20code.md#500%EB%B2%88%EB%8C%80--%EC%84%9C%EB%B2%84-%EC%98%A4%EB%A5%98)**โ <span style='background-color : #fff5b1'>500๋ฒ๋ : ์๋ฒ ์ค๋ฅ**</span>

| ์ํ์ฝ๋ | ์ด๋ฆ                  | ์๋ฏธ                 |
| -------- | --------------------- | -------------------- |
| 500      | Internal Server Error | ์๋ฒ ๋ด๋ถ ์ค๋ฅ       |
| 502      | Bad Gateway           | ๊ฒ์ดํธ์จ์ด ์ค๋ฅ      |
| 503      | Service Unavailable   | ์๋น์ค ์ด์ฉ ๋ถ๊ฐ     |
| 504      | Gateway Timeout       | ๊ฒ์ดํธ์จ์ด ์๊ฐ ์ด๊ณผ |

<br>

### **์ฐธ๊ณ **

- [https://www.whatap.io/ko/blog/40/](https://www.whatap.io/ko/blog/40/)
- [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

<br>

```toc

```

---
emoji: ๐
title: ๋ชจ๋ ์๋ฐ์คํฌ๋ฆฝํธ Deep Dive_์ ์ด๋ฌธ
date: '2022-11-15'
author: ์ตํํธ
tags: JavaScript
categories: JS
---

### 08\_์ ์ด๋ฌธ

์ ์ด๋ฌธ์

- <span style='background-color : #fff5b1'>์กฐ๊ฑด์ ๋ฐ๋ผ</span> ์ฝ๋ ๋ธ๋ก์ ์คํ ํ๊ฑฐ๋(์กฐ๊ฑด๋ฌธ)
- <span style='background-color : #fff5b1'>๋ฐ๋ณต ์คํ(๋ฐ๋ณต๋ฌธ)</span> ํ  ๋ ์ฌ์ฉ

์ฝ๋๋ ์์์ ์๋๋ก ์์ฐจ์ ์ผ๋ก ์คํํ๋๋ฐ,

- ์ ์ด๋ฌธ์ ์ฌ์ฉํ๋ฉด <span style='background-color : #fff5b1'>์ฝ๋ ์คํ ํ๋ฆ์ ์ธ์์ ์ผ๋ก ์ ์ด</span>ํ  ์ ์๋ค. ํ์ง๋ง ์ง๊ด์ ์ธ ์ฝ๋์ ํ๋ฆ์ ํผ๋์ค๋ฝ๊ฒ ๋ง๋ค์ด์ ์ฝ๋์ ๊ฐ๋์ฑ์ ํด์น๋ ๋จ์ ์ด ์๋ค.
- **forEach**,ย **map**,ย **filter**,ย **reduce**ย ๊ฐ์ ํจ์ํ ํ๋ก๊ทธ๋๋ฐ ๊ธฐ๋ฒ์์๋ ์ ์ด๋ฌธ์ ์ฌ์ฉ์ ์ต์ ํ์ฌ ๋ณต์ก์ฑ์ ํด๊ฒฐํ๊ณ ์ ๋ธ๋ ฅํ๋ค.

<br>

### 8.1 ๋ธ๋ก๋ฌธ

> 0๊ฐ ์ด์์ ๋ฌธ์ ์ค๊ดํธย {}ย ๋ก ๋ฌถ์ ๊ฒ์ผ๋กย ์ฝ๋ ๋ธ๋กย ์ด๋ผ๊ณ  ๋ถ๋ฅด๊ธฐ๋ ํ๋ค.

- ์๋ฐ์คํฌ๋ฆฝํธ์์๋ **๋ธ๋ก๋ฌธ**์ย <span style='background-color : #fff5b1'>**ํ๋์ ์คํ๋จ์**</span>ย ๋ก ์ทจ๊ธํ๋ค.

![carbon (58)](https://user-images.githubusercontent.com/87301268/224894556-f387628e-6c32-4afa-95ab-517dbec4e1f8.png)

<br>

### 8.2 ์กฐ๊ฑด๋ฌธ

> ์ฃผ์ด์ง ์กฐ๊ฑด์์ ํ๊ฐ ๊ฒฐ๊ณผ์ ๋ฐ๋ผ ์ฝ๋ ๋ธ๋ก์ ์คํ์ ๊ฒฐ์ ย ํ๋ค.

- ์๋ฐ์คํฌ๋ฆฝํธ๋ย <span style='background-color : #fff5b1'>**if-else**</span>ย ๋ฌธ๊ณผย <span style='background-color : #fff5b1'>**switch**</span>ย ๋๊ฐ์ง ์กฐ๊ฑด๋ฌธ์ ์ ๊ณตํ๋ค.

<br>

#### 8.2.1 if-else ๋ฌธ

> ์ฃผ์ด์ง ์กฐ๊ฑด์์ ๋ฐ๋ฅธ ์ฐธ๊ณผ ๊ฑฐ์ง(true / false) ์ผ๋ก ํ๊ฐ

- ์กฐ๊ฑด์์ ๊ฐ์์ ๋ฐ๋ผ ์ฝ๋ ๋ธ๋ก์ ๋๋ฆฌ๊ณ ย **else if**ย ๋ฌธ์ ์ฌ์ฉ
- ๋๋ถ๋ถ์ย **if-else**ย ๋ฌธ์ <span style='background-color : #fff5b1'>์ผํญ ์กฐ๊ฑด ์ฐ์ฐ์</span>๋ก ๋ฐ๊พธ์ด ์ฌ์ฉ ํ  ์ ์๋ค.

![carbon (59)](https://user-images.githubusercontent.com/87301268/224894659-1716c467-ec0c-43e4-af21-ef91d0b21869.png)

<br>

#### 8.2.2 switch ๋ฌธ

> ์ฃผ์ด์ง ํํ์์ ํ๊ฐํ์ฌ ๊ทธ ๊ฐ๊ณผ ์ผ์นํ๋ ํํ์์ ๊ฐ์ง๋ย caseย ๋ฌธ์ผ๋ก ์คํ

- case ๋ฌธ์ ์ํฉ(case) ์ ์๋ฏธํ๋ ํํ์์ ์ ์ฅํ๊ณ  **์ฝ๋ก (:)** ์ผ๋ก ๋๋๋ค.
- ๊ทธ ๋ค์ ์คํํ  ๋ฌธ๋ค์ ์์น์ํจ๋ค.
- **switch ๋ฌธ์ ํํ์๊ณผ ์ผ์นํ๋ case ๋ฌธ์ด ์๋ค๋ฉด**  
   โก๏ธ default ๋ฌธ์ผ๋ก ์ด๋  
   โก๏ธ default ๋ฌธ์์ย **break**ย ๋ฌธ์ ์๋ตํ๋ ๊ฒ์ด ์ผ๋ฐ์ 

![carbon (60)](https://user-images.githubusercontent.com/87301268/224894792-f2c9a81f-9192-4952-98c1-1b7e6dc83705.png)

<br>

#### 8.3.3 **ํ ์ค๋ฃจ(fall through) ?**

> switch ๋ฌธ์ ํ์ถํ์ง ์๊ณ  switch ๋ฌธ์ด ๋๋  ๋ ๊น์ง  
> ๋ชจ๋  case ๋ฌธ๊ณผ default ๋ฌธ์ ์คํ๋๋ ๊ฒ์ ๋งํ๋ค.

- ํ ์ค๋ฃจ ์์

![carbon (61)](https://user-images.githubusercontent.com/87301268/224894840-48babb8c-8fc6-4c87-9fb8-eb8c1d48427c.png)

<br>

### 8.3 ๋ฐ๋ณต๋ฌธ

๋ฐ๋ณต๋ฌธ์

> ์กฐ๊ฑด์์ ํ๊ฐ ๊ฒฐ๊ณผ๊ฐ ์ฐธ์ธ ๊ฒฝ์ฐ ์ฝ๋ ๋ธ๋ก์ ์คํ

- ์๋ฐ์คํฌ๋ฆฝํธ๋ย <span style='background-color : #fff5b1'>**for**,ย **while**,ย **do-while**</span>ย ๋ฌธ์ ์ ๊ณต

<br>

#### 8.3.1 for ๋ฌธ

> ์กฐ๊ฑด์์ด ๊ฑฐ์ง์ผ๋ก ํ๊ฐ๋  ๋๊น์ง ์ฝ๋ ๋ธ๋ก์ ๋ฐ๋ณต ์คํ

- for ๋ฌธ์ ๋ณ์ ์ ์ธ๋ฌธ, ์กฐ๊ฑด์, ์ฆ๊ฐ์์ ๋ชจ๋ ์ต์์ด๋ฏ๋ก **๋ฐ๋์ ์ฌ์ฉํ  ํ์๋ ์๋ค.**

![carbon (62)](https://user-images.githubusercontent.com/87301268/224894871-37aa0355-3dbd-4963-9262-7da626fc0528.png)

<br>

![22](https://user-images.githubusercontent.com/87301268/224895096-aec2c7ec-673b-4a09-86ca-e86996dac1c0.png)

<br>

#### 8.3.2 while ๋ฌธ

> ์ฃผ์ด์ง ์กฐ๊ฑด์์ ํ๊ฐ ๊ฒฐ๊ณผ๊ฐ ์ฐธ์ด๋ฉด ์ฝ๋ ๋ธ๋ก์ ๊ณ์ ์คํํ๋ฉฐ ๋ฐ๋ณต

- <span style='background-color : #fff5b1'>forย ๋ฌธ</span>์ ๋ฐ๋ณต ํ์๊ฐ ๋ชํํ  ๋ ์ฃผ๋ก ์ฌ์ฉ
- <span style='background-color : #fff5b1'>whileย ๋ฌธ</span>์ย ๋ฐ๋ณต ํ์๊ฐ **๋ถ๋ชํ** ํ  ๋ ์ฃผ๋ก ์ฌ์ฉ

![carbon (63)](https://user-images.githubusercontent.com/87301268/224895340-36b0cb2c-f652-4590-b5f6-d975fd544374.png)

- ๋ฌดํ ๋ฃจํ๋ฅผ ํ์ถํ๊ธฐ ์ํด์๋  
  โก๏ธ ์ฝ๋ ๋ธ๋ก ๋ด์ย **if**ย ๋ฌธ์ผ๋ก ํ์ถ ์กฐ๊ฑด์ ๋ง๋ค๊ณ ,ย **break**ย ๋ฌธ์ผ๋ก ์ฝ๋ ๋ธ๋ก์ ํ์ถ

<br>

#### 8.3.3 do-while ๋ฌธ

> ์ฝ๋ ๋ธ๋ก์ ๋จผ์  ์คํํ๊ณ  ์กฐ๊ฑด์์ ํ๊ฐ ๋ฐ๋ผ์ ์ฝ๋ ๋ธ๋ก์ ๋ฌด์กฐ๊ฑด ํ ๋ฒ ์ด์ ์คํ

![carbon (64)](https://user-images.githubusercontent.com/87301268/224895358-d39a8b04-00f2-48f2-850b-8dfbdb149e9f.png)

<br>

#### 8.3.4 break ๋ฌธ

> ์ฃผ ์ฌ์ฉ์ย ๋ฐ๋ณต๋ฌธย ๋๋ย switchย ๋ฌธ์ ์ฝ๋ ๋ธ๋ก์ ํ์ถ ํ  ๋ ์ฌ์ฉ

<br>

#### 8.3.5 continue ๋ฌธ

> ๋ฐ๋ณต๋ฌธ์ ์ฝ๋ ๋ธ๋ก์ ํ ์ง์ ์์ ์ค๋จํ๊ณ  ์ฆ๊ฐ์์ผ๋ก ์คํ ํ๋ฆ์ ์ด๋

**break**ย ๋ฌธ์ฒ๋ผ ๋ฐ๋ณต๋ฌธ์ ํ์ถํ์ง๋ ์๋๋ค.

![carbon (65)](https://user-images.githubusercontent.com/87301268/224895380-b9f92fcb-fbdd-4c13-921b-e4b46fe0192e.png)

<br>

```toc

```

---
emoji: ๐
title: Props์ State
date: '2022-11-18'
author: ์ตํํธ
tags: React
categories: React
---

### **Props โ**

> Props(Properties)๋ ๋ถ๋ชจ ์ปดํฌ๋ํธ์์ ์์ ์ปดํฌ๋ํธ๋ก ์ ๋ฌ๋๋ ๋ฐ์ดํฐ

<br>

**โ ย Props ํน์ง**

<span style='background-color : #fff5b1'>์์ ์ปดํฌ๋ํธ์์ ๋ฐ์ดํฐ๋ฅผ ๋ณ๊ฒฝ ํ  ์ ์์ต๋๋ค.</span> ( ์ปดํฌ๋ํธ ๋ด๋ถ์ ์์ฑ์ด๋ผ๊ณ  ๋ด๋ ๋ฌด๋ฐฉ ํฉ๋๋ค )

- ์ด๋ฏธ HTML ๋ฅผ ์ฌ์ฉํ๋ฉด์ ํ๊ทธ์ ๋ํ ์์ฑ์ ์๊ณ  ์ฌ์ฉํ๊ณ  ์์ต๋๋ค. (id, class, onClick ๋ฑ)

![carbon (5)](https://user-images.githubusercontent.com/87301268/223893697-6e400491-838e-4707-bb79-86ad72fbac4c.png)

<br>

- React์์๋ ์ด ์์ฑ ๊ฐ๋์ ๋ฐ์ดํฐ๋ฅผ ์ ๋ฌํ๋ ๋๋์ผ๋ก ์ถ๊ฐ ํ์ฅ

![carbon (6)](https://user-images.githubusercontent.com/87301268/223893913-25f2a348-a870-42eb-8e56-3542126fdf56.png)

<br>

๊ฒฐ๊ณผ, ๋ถ๋ชจ ์ปดํฌ๋ํธ(App)์์ ์์ ์ปดํฌ๋ํธ(Text)์ ์์ฑ(Props)์ ์ด์ฉํ์ฌย Hello world! ๋ผ๋ ๋ฌธ์์ด์ด ์ถ๋ ฅ ๋ฉ๋๋ค.

<br>

### **State โ**

> State๋ ํ ์ปดํฌ๋ํธ ์์์ ์ ๋์ ์ธ ๋ฐ์ดํฐ๋ฅผ ๋ค๋ฃฐ ๋ ์ฌ์ฉ๋๋ฉฐ, ์ปดํฌ๋ํธ ์์์ ๋ฐ์ดํฐ๋ฅผ ๋ณ๊ฒฝํ  ์ ์์ต๋๋ค. ์ฆ, <span style='background-color : #fff5b1'>State๋ ํ ์ปดํฌ๋ํธ์ ์ํ(State)</span>๋ฅผ ๋ํ๋๋๋ค.

- State๋ ์ปดํฌ๋ํธ ๋ด์์ ์ง์์ ์ผ๋ก ๋ณ๊ฒฝ์ด ์ผ์ด๋๋ ๊ฐ์ ๊ด๋ฆฌํ๊ธฐ ์ํด ์ฌ์ฉ

<br>

**โ State ๋ฌธ๋ฒ**

<span style='background-color : #fff5b1'>useState</span> hook ์ ์ฌ์ฉ ํฉ๋๋ค.

![carbon (7)](https://user-images.githubusercontent.com/87301268/223894051-4c875586-038e-4d92-b8ff-a57f82ff4f9a.png)

<br>

**โย State ํน์ง**

- useState๋ฅผ ์ฌ์ฉํ์ฌ ํ ๋น๋ฐ์ ๋ณ์๋ <span style='background-color : #fff5b1'>๋ถ๋ณ๊ฐ(Immutable)</span>์๋๋ค.
- ๋ฐ๋ผ์ ํด๋น ๊ฐ์ ์ง์  ์์ ์ด ๋ถ๊ฐ๋ฅํ๋ฉฐ <span style='background-color : #fff5b1'>ํด๋น ๊ฐ์ ๋ณ๊ฒฝํ๊ธฐ ์ํด์๋ ๋ฐ๋์ Set ํจ์๋ฅผ ์ฌ์ฉ</span>ํด์ผ ํฉ๋๋ค.

![carbon (8)](https://user-images.githubusercontent.com/87301268/223894123-ea1ef90a-affb-4fd4-bdfc-f73724a7b95d.png)

<br>

```toc

```

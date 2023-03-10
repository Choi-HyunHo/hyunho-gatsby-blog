---
emoji: ๐
title: useRef
date: '2023-03-06'
author: ์ตํํธ
tags: React
categories: React
---

### **useRef โ**

JavaScript ๋ฅผ ์ฌ์ฉ ํ  ๋์๋, ์ฐ๋ฆฌ๊ฐ ํน์  DOM ์ ์ ํํด์ผ ํ๋ ์ํฉ์ย getElementById,ย querySelectorย ๊ฐ์ <span style='background-color : #fff5b1'>**DOM Selector**</span> ํจ์๋ฅผ ์ฌ์ฉํด์ DOM ์ ์ ํํฉ๋๋ค.

๋ฆฌ์กํธ๋ฅผ ์ฌ์ฉํ๋ ํ๋ก์ ํธ์์๋ ๊ฐ๋์ฉ DOM ์ ์ง์  ์ ํํด์ผ ํ๋ ์ํฉ์ด ๋ฐ์ ํ  ๋๋ ์์ต๋๋ค.

1.  ํน์  ์๋ฆฌ๋จผํธ์ ํฌ๊ธฐ๋ฅผ ๊ฐ์ ธ์ค๊ฑฐ๋
2.  ์คํฌ๋กค๋ฐ ์์น๋ฅผ ๊ฐ์ ธ์ค๊ฑฐ๋ ์ค์ 
3.  ๋๋ ํฌ์ปค์ค์ ๋ํ์ฌ ๋ฑ
4.  ๊ทธ๋ฆฌ๊ณ  **์ปดํฌ๋ํธ ๋ณ๋ก ํน์  ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ง๊ฒ ํ๊ณ , ์ด๋ฌํ ๋ฐ์ดํฐ๋ค์ ๋ฆฌ๋ ๋๋ง ์์ด ๊ด๋ฆฌ ํ  ๋**

> react์์ ์ด๋ฌํ ๊ฒ๋ค์ ๊ฐ๋ฅํ๊ฒ ํด์ฃผ๋ ๊ฒ์ด useRef๋ผ๊ณ  ์๊ฐํ์๋ฉด ๋ฉ๋๋ค.

<br>

**4๋ฒ์ ๋ฌด์จ ์๋ฏธ์ธ๊ฐ์ โ**

> react๋ก ํ๋ก์ ํธ๋ฅผ ์งํํ๋ค๋ณด๋ฉด ์ปดํฌ๋ํธ ๋ณ๋ก,ย ์์ ๋ณ๋ก ํน์  ๊ฐ(๋ฐ์ดํฐ)๋ฅผ ๊ฐ๊ฒ ํ๊ณ  ์ถ์ ๋๊ฐ ์์ต๋๋ค. ์ด๋ด ๋ useState๋ฅผ ์ฌ์ฉ ํฉ๋๋ค.

<br>

useMemo ์ useCallback ํฌ์คํ์ ๋ณด์๋ฉด **ํจ์ํ ์ปดํฌ๋ํธ์ ํน์ง**์ ๊ฐ์กฐ ํ์์ต๋๋ค.

> ์ปดํฌ๋ํธ ํจ์ ํธ์ถ + ๋ชจ๋  ๋ด๋ถ ๋ณ์ ์ด๊ธฐํ

<br>

์ปดํฌ๋ํธ๋ย <span style='background-color : #fff5b1'>**์์ ์ state๊ฐ ๋ณ๊ฒฝ๋๊ฑฐ๋, ๋ถ๋ชจ์๊ฒ์ ๋ฐ๋ props๊ฐ ๋ณ๊ฒฝ๋์์ ๋๋ง๋ค ๋ฆฌ๋ ๋๋ง ๋ฉ๋๋ค.**</span>

๋ง์ฝ, ํ์ ์ปดํฌ๋ํธ์ ์ต์ ํ ์ค์ ์ ํด์ฃผ์ง ์์ผ๋ฉด ๋ถ๋ชจ์๊ฒ์ ๋ฐ๋ props๊ฐ ๋ณ๊ฒฝ๋์ง ์์๋๋ผ๋ ๋ฆฌ๋ ๋๋ง ๋๋๊ฒ ๊ธฐ๋ณธ์๋๋ค.

<br>

์ด์  ์กฐ๊ธ ๊ฐ์ด ์ค์ค๊น์ โ

๊ทธ๋ ์ต๋๋ค, <span style='background-color : #fff5b1'>**state ์ ๋ฐ๋๋ก ref ๋ฅผ ์ฌ์ฉํ๋ฉด ๋ฐ์ดํฐ๋ค์ ๋ฆฌ๋ ๋๋ง ์์ด ๊ด๋ฆฌ ํ  ์ ์์ต๋๋ค.**</span>

<br>

### **useRef ๋ฌธ๋ฒ**

![1](https://user-images.githubusercontent.com/87301268/224224144-b6d3a3b9-b79d-4a1e-9b78-490bf66b9307.png)

> useRef๋ย .currentย ํ๋กํผํฐ๋ก ์ ๋ฌ๋ ์ธ์(initialValue)๋ก ์ด๊ธฐํ๋ ๋ณ๊ฒฝ ๊ฐ๋ฅํ ref ๊ฐ์ฒด๋ฅผ ๋ฐํํฉ๋๋ค. ๋ฐํ๋ ๊ฐ์ฒด๋ ์ปดํฌ๋ํธ์ ์  ์์ ์ฃผ๊ธฐ๋ฅผ ํตํด ์ ์ง๋  ๊ฒ์๋๋ค. ๊ณต์ ๋ฌธ์ : [https://ko.reactjs.org/docs/hooks-reference.html#useref](https://ko.reactjs.org/docs/hooks-reference.html#useref)

<br>

### **์์**

**๋ง์ฝ ๋ฒํผ์ ๋๋ ์ ๋ ํด๋น input ์ ํฌ์ปค์ค ํ๊ณ  ์ถ๋ค๋ฉด โ**

![2](https://user-images.githubusercontent.com/87301268/224224174-5a67931f-5af8-4a41-bd6f-f852fa6856da.png)

1.  input์ฐฝ์ useRef hook์ ํตํด inputRef๋ผ๋ ์ง์  DOM์ผ๋ก ์ค์ ํ๊ณ 
2.  <span style='background-color : #fff5b1'>**inputRef.current.focus()**</span> ๋ผ๋ focus ํจ์๋ฅผ ์ ์ธํด์ค ๋ค button ํ๊ทธ์ ํด๋ฆญevent๋ก ๋ฃ์ด์ฃผ๋ฉด ๋ฉ๋๋ค.

<br>

#### **๋ค..? current ๊ฐ ๋ญ๊ฐ์..?**

> Ref๊ฐ์ฒด์ .current๊ฐ์ ์ ํํ DOM์ ๊ฐ๋ฆฌํค๊ฒ ๋ฉ๋๋ค.

<span style='background-color : #fff5b1'>**ํ์ฌ Ref ๊ฐ์ฒด**</span>๋ฅผ ๋ปํ๋ฏ๋ก ํด๋น ๊ฐ์ฒด์ ๊ธฐ๋ฅ์ ์ด์ฉํ๋ค๊ฑฐ๋ ๊ฐ์ ์ด์ฉํ๋ ๊ฒฝ์ฐ์๋ current๋ฅผ ๋ฐ๋์ ๋ถ์ฌ์ฃผ์ด์ผ ํฉ๋๋ค.

<br>

**์ด๋ฒ์๋ ์์ ์ค๋ชํ๊ฑฐ์ฒ๋ผ ๋ฆฌ๋ ๋๋ง์ ๋ง์๋ณด๋๋ก ํ๊ฒ ์ต๋๋ค**

![3](https://user-images.githubusercontent.com/87301268/224224195-da2b7182-3862-47e1-b680-8c4ca5902030.png)

์์ ์ฝ๋๋๋ก input ์ ์๋ ฅํ๋ฉด ์ฝ์์ **ํ ๊ธ์์ฉ ์๋ ฅ ๋  ๋ ๋ง๋ค render ๊ฐ ํธ์ถ** ๋  ๊ฒ ์๋๋ค.

ํ์ง๋ง, input ์ ์๋ ฅํ๋๋ฐ ๊ตณ์ด ์๋ฏธ์๋ console.log์ด ๋์ค๋ ๋ฏ ๋ ๋๋ง์ด ์ผ์ด๋  ํ์๊ฐ ์์ ๊ฒ ์๋๋ค.

<br>

#### **๊ทธ๋์ useRef ๋ฅผ ์ฌ์ฉํ๋ฉด**

![4](https://user-images.githubusercontent.com/87301268/224224391-2fe90bd0-d6eb-4af8-a7a0-59f685608531.png)

ํ๋ฉด์ ์ฒ์ ๋ ๋๋ง ํ  ๋์ ๋ฒํผ์ ๋๋ ์ ๋๋ง ๋ ๋๋ง์ด ์ผ์ด๋๋ ๊ฒ์ ๋ณผ ์ ์์ต๋๋ค.

<br>

#### **์ง์  ํ์ธํด๋ณด๊ธฐ !**

<iframe width='100%' height='300px' src="https://codesandbox.io/embed/useref-5c5oq3?fontsize=14&amp;hidenavigation=1&amp;theme=dark"></iframe>

<br>
<br>

### **์ ๋ฆฌ**

- javascript์์ ํน์  Dom์ ์ ํํ๋ ์ญํ  ex) getElementById, querySelector
- ํน์  DOM์ ์ ๊ทผํ  ๋ ์ฌ์ฉ
- ์ํ๋ ์์น์ ref={} ์ ํํ๋ก ์์ฑ
- ํฌ์ปค์ค๋ฅผ ์ก์ผ๋ ค๋ฉด nameInput.current.focus() ํํ๋ก ์์ฑ

<br>

### **์ฐธ๊ณ **

[https://mnxmnz.github.io/react/what-is-use-ref/](https://mnxmnz.github.io/react/what-is-use-ref/)

[https://velog.io/@jminkyoung/TIL-13-React-Hooks-useRef-%EB%9E%80](https://velog.io/@jminkyoung/TIL-13-React-Hooks-useRef-%EB%9E%80)

[https://velog.io/@jinyoung985/React-useRef%EB%9E%80](https://velog.io/@jinyoung985/React-useRef%EB%9E%80)

[https://ko.reactjs.org/docs/hooks-reference.html#useref](https://ko.reactjs.org/docs/hooks-reference.html#useref)

[https://yoonjong-park.tistory.com/entry/React-useRef-%EB%8A%94-%EC%96%B8%EC%A0%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%EA%B0%80](https://yoonjong-park.tistory.com/entry/React-useRef-%EB%8A%94-%EC%96%B8%EC%A0%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%EA%B0%80)

<br>

```toc

```

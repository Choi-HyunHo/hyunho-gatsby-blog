---
emoji: π
title: React.memo
date: '2023-03-13'
author: μ΅ννΈ
tags: React
categories: React
---

### React.memo λ β

React.memo λ <span style='background-color : #fff5b1'>**HOC(κ³ μ°¨ μ»΄ν¬λνΈ)**</span> μλλ€.

> HOC λ μ»΄ν¬λνΈλ₯Ό μΈμλ‘ λ°μμ μλ‘μ΄ μ»΄ν¬λνΈλ₯Ό λ¦¬ν΄ν΄μ£Όλ ν¨μ μλλ€.

μ»΄ν¬λνΈλ₯Ό React.memo()λ‘ κ°μΈμ£Όλ©΄ λ¦¬μ‘νΈλ μ»΄ν¬λνΈλ₯Ό λ λλ§νκ³  κ²°κ³Όλ₯Ό λ©λͺ¨μ΄μ μ΄μ ν©λλ€.
κ·Έλ¦¬κ³  <span style='background-color : #fff5b1'>λ€μ λ λλ§μ΄ μΌμ΄λ  λ propsκ° κ°λ€λ©΄</span>, λ¦¬μ‘νΈλ <span style='background-color : #fff5b1'>μ»΄ν¬λνΈλ₯Ό λ€μ λ λλ§ νμ§ μκ³ </span> λ©λͺ¨μ΄μ μ΄μ λ λ΄μ©μ μ¬μ¬μ© ν©λλ€.

#### μλ₯Ό λ€μ΄λ³΄λ©΄

λ¦¬μ‘νΈμμ λΆλͺ¨ μ»΄ν¬λνΈκ° λ λλ§ λ  λ ν΄λΉ <span style='background-color : #fff5b1'>**μ»΄ν¬λνΈμ μνλ λͺ¨λ  μμ μ»΄ν¬λνΈ λν λ λλ§**</span> λ©λλ€.
νμ§λ§ λΆλͺ¨ μ»΄ν¬λνΈμμ μμ μ»΄ν¬λνΈλ‘ λ΄λ €μ£Όλ <span style='background-color : #fff5b1'>**propsκ° λ°λμ§ μμλ€λ©΄**</span>, ν΄λΉ μμ μ»΄ν¬λνΈλ₯Ό κ΅³μ΄ λ λλ§μ΄ λ  νμκ° μμ΅λλ€.

μ΄λ λ―, μ»΄ν¬λνΈμμ λ¦¬λ λλ§μ΄ νμν μν©μμλ§ ν΄μ£Όλλ‘ μ€μ μ ν  μ μλλ°<br>μ΄λ μ¬μ©νλ ν¨μκ° λ°λ‘ <span style='background-color : #fff5b1'>React.memo</span> μλλ€.

<br>

### React.memo μ¬μ©λ²

![carbon (25)](https://user-images.githubusercontent.com/87301268/224589763-b13fbe93-cd7f-4d40-a84d-a204926b25a8.png)

![carbon (26)](https://user-images.githubusercontent.com/87301268/224589778-9f94a863-c6d7-4c54-b15a-03dda4edb1f6.png)

<br>

β‘οΈ λ κ°μ§ λ°©λ²μΌλ‘ μ¬μ© ν  μ μμ΅λλ€.

<br>

### μμ

![carbon (27)](https://user-images.githubusercontent.com/87301268/224592240-9c6f1eab-a14f-47a9-8dcf-6dbf8138053a.png)

![carbon (28)](https://user-images.githubusercontent.com/87301268/224592334-139cbaf9-a14c-42e3-b089-395e4d044a57.png)

<br>

μμ μ½λλ₯Ό μ€ννλ©΄ SmartHome μ <span style='background-color : #fff5b1'>μμ μ»΄ν¬λνΈμΈ Light μ»΄ν¬λνΈ</span>μ λν΄ <br>
λ§μ½, μΉ¨μ€λ§ μ λ±μ on νλ€κ³  κ°μ  νμ λ μ½μμ μΉ¨μ€ λΏλ§ μλλΌ <span style='background-color : #fff5b1'>μΌμ§μ§ μμ μ£Όλ°©κ³Ό μμ‘° λν λ λλ§ λλ κ²μ λ³Ό μ μμ΅λλ€.</span>

![img](https://user-images.githubusercontent.com/87301268/224592816-929521e1-667d-442c-b9ea-dc24160d3c93.png)

<br>

#### React.memo λ₯Ό μ μ©ν΄λ³΄λ©΄

ν΄λ¦­ ν λ°©μ μ λ±λ§ λ λλ§ λλλ‘ λ°κΏλ³΄κ² μ΅λλ€.

![carbon (29)](https://user-images.githubusercontent.com/87301268/224593287-270f89bb-398d-4260-bc82-3417f8e34552.png)

<span style='background-color : #fff5b1'>μΉ¨μ€μ λλ₯΄λ©΄ μ£Όλ°©κ³Ό μμ‘°λ λ λλ§ λμ§ μκ³ </span>, **ν΄λ¦­ ν λ°©μ μ λ±** λ§ λ λλ§ λλ κ²μ λ³Ό μ μμ΅λλ€.

<br>

#### μ§μ  νμΈν΄λ³΄κΈ°

<iframe src="https://codesandbox.io/embed/react-memo-s5ey0i?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
     title="React.memo"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br>
<br>

### React.memo λ μΈμ  μ¬μ© νλμ β

![memo-1](https://user-images.githubusercontent.com/87301268/224597214-388344e8-bb5f-4774-ae0e-bf0e77f8a419.jpg)

1. Pure Functional Componentμμ
2. Renderingμ΄ μμ£Ό μΌμ΄λ  κ²½μ°
3. <span style='background-color : #fff5b1'>re-renderingμ΄ λλ λμ κ³μ κ°μ propsκ°μ΄ μ λ¬ λ  κ²½μ°</span>
4. UI elementμ μμ΄ λ§μ μ»΄ν¬λνΈμ κ²½μ°

<br>

### μ£Όμ β οΈ

κ³΅μλ¬Έμμ λ³΄λ©΄ μλμ κ°μ λ¬Έκ΅¬κ° μμ΅λλ€.

> μ΄ λ©μλλ μ€μ§ μ±λ₯ μ΅μ νλ₯Ό μνμ¬ μ¬μ©λ©λλ€. λ λλ§μ βλ°©μ§βνκΈ° μνμ¬ μ¬μ©νμ§ λ§μΈμ. λ²κ·Έλ₯Ό λ§λ€ μ μμ΅λλ€.

<br>

### β μ§κΈκΉμ§ μ΅μ νμ μ¬μ©λλ 3κ°μ§λ₯Ό μμλ΄€μ΅λλ€

1. React.memo
2. [useMemo](https://choi-hyunho.com/react-useMemo/)
3. [useCallback](https://choi-hyunho.com/react-useCallback/)

<br>

#### 3κ°μ§λ₯Ό μ λ¦¬ν΄λ³΄λ©΄

κ³΅ν΅μ 

- React.memo, useMemo, useCallbackμ λͺ¨λ λΆνμν λ λλ§ λλ μ°μ°μ μ μ΄νλ μ©λλ‘ μ±λ₯ μ΅μ νμ κ·Έ λͺ©μ μ΄ μμ΅λλ€.

μ°¨μ΄μ 

- React.memoλ HOCμ΄κ³ , useMemoμ useCallbackμ hook μλλ€.
- **React.memo** λ <span style='background-color : #fff5b1'>μ»΄ν¬λνΈμ κ²°κ³Ό κ°</span>μ λ©λͺ¨μ΄μ μ΄μ
- **useMemo** λ <span style='background-color : #fff5b1'>ν¨μμ μ°μ°λμ΄ λ§μλ μ΄μ  κ²°κ³Όκ°</span>μ μ¬μ¬μ©νλ λͺ©μ 
- **useCallback** μ <span style='background-color : #fff5b1'>ν¨μλ₯Ό μ¬μ¬μ©</span> νκΈ° μν λͺ©μ 

<br>

### μ°Έκ³ 

https://goongoguma.github.io/2021/09/22/Use-React.memo()-wisely/
https://cocoon1787.tistory.com/799 <br>
https://ko.reactjs.org/docs/react-api.html#reactmemo
https://velog.io/@kcj_dev96/React.memo
https://ssangq.netlify.app/posts/react-memo-useMemo-useCallback

<br>

```toc

```

---
emoji: π
title: useReducer
date: '2023-02-13'
author: μ΅ννΈ
tags: React
categories: React
---

λ¦¬μ‘νΈ κ³΅μ λ¬Έμμ λ°λ₯΄λ©΄ useReducer μμνκΈ° μμ μλμ κ°μ΄ λ¬Έκ΅¬κ° μμ΅λλ€!

[https://ko.reactjs.org/docs/hooks-reference.html#usereducer](https://ko.reactjs.org/docs/hooks-reference.html#usereducer)

> λ€μμ Hookλ μ΄μ  μΉμμμμ κΈ°λ³Έ Hookμ λ³κ²½μ΄κ±°λ νΉμ ν κ²½μ°μλ§ νμν κ²μλλ€.  
> μ΅νλ κ²μ λλ¬΄ μλ°λ°μ§λ λ§μΈμ.

λΆλ΄ κ°μ§μ§ λ§κ³  κ°λ²Όμ΄ λ§μμΌλ‘ μ λ¦¬ ν΄λ³΄κ² μ΅λλ€. π

<br>

### **useReducer λ β**

state λ₯Ό κ΄λ¦¬νκ³  μλ°μ΄νΈ νλ hook μΈ useState λ₯Ό λμ²΄ ν  μ μλ hook μλλ€.

μ¦, <span style='background-color : #fff5b1'>**useReducer λ useState μ²λΌ state λ₯Ό κ΄λ¦¬νκ³  μλ°μ΄νΈ ν  μ μλ hook μλλ€.**</span>

<br>

### **κ·Έλ λ€λ©΄ useState κ° μμΌλ κ΅³μ΄ νμνκ°μ ..β**

μ.. μ¬μ€ κΌ­ νμνλ€κ³ λ λ¨μ  μ§μ μ μμ κ² κ°μ΅λλ€! μ²μ λ§νλ€μνΌ **'hook μ λ³κ²½μ΄κ±°λ νΉμ ν κ²½μ°μλ§ νμνλ€'**Β  λμμλ―μ΄ useState λ§ κ°μ§κ³  state κ΄λ¦¬λ₯Ό ν΄λ λ¬Έμ λ μμ΅λλ€.

νμ§λ§ **νΉμ ν κ²½μ°** useReducer κ° κ°μ§λ μ₯μ μ΄ λΆλͺ μμ΅λλ€. μ§κΈλΆν° μ΄ν΄λ³΄λλ‘ ν©μλ€!

<br>

### **useState λ§μΌλ‘ μν λ³ν λ‘μ§μ λ§λ€λ©΄**

![1](https://user-images.githubusercontent.com/87301268/223932345-35b476d5-f1a1-46d2-9688-1f72a7c2efb4.jpeg)

μν λ³ν ν¨μλ₯Ό ν΄λΉ μ»΄ν¬λνΈ μμμ μμ±ν΄μΌ νμ΅λλ€. λ¬Όλ‘  μ΄λ κ² μ¬μ©νλκ² μΌλ°μ μΈ λ°©λ² μλλ€. νμ§λ§ μ»΄ν¬λνΈ μμμ κ΄λ¦¬ν΄μΌ νλ μν κ°μ΄ λ§μμ§κ³  κ΅¬μ‘°κ° λ³΅μ‘ν΄μ§λ€λ©΄ useReducer λ₯Ό μ¬μ©νλ κ²μ΄ νλμ λμμ΄ λ  μ μμ΅λλ€.

<br>

### **useReducer λ₯Ό μ¬μ©νλ©΄ β**Β 

![2](https://user-images.githubusercontent.com/87301268/223932402-a8953752-9e8e-4bbf-8c8b-b19bbc70f649.jpeg)

<br>

useReducer μ ν΅μ¬μ <span style='background-color : #fff5b1'>**λΆλ¦¬!**</span>

> νλμ μ»΄ν¬λνΈ λ΄μμ state λ₯Ό λ€λ£¨λ λ‘μ§μ ν΄λΉ μ»΄ν¬λνΈλ‘ λΆλ¦¬νμ¬ μΈλΆμμ μ²λ¦¬ ν  μ μλλ‘ ν΄μ£Όλ κ² μλλ€.

<br>

### **useReducer λ¬Έλ²**

![3](https://user-images.githubusercontent.com/87301268/223932422-f3924877-d2d7-490a-92d6-f09ec51460e9.png)

<span style='background-color : #fff5b1'>**state</span> :** μ»΄ν¬λνΈμμ μ¬μ©ν  μν ( useState μ state μ λμΌ )

<span style='background-color : #fff5b1'>**dispatch</span> :** reducer ν¨μλ₯Ό μ€ν μν€λ©°, μ»΄ν¬λνΈ λ΄μμ state μ μλ°μ΄νΈλ₯Ό λ€λ£¨κΈ° μν΄ μ¬μ©

<span style='background-color : #fff5b1'>**reducer</span> :** μ»΄ν¬λνΈ μΈλΆμμ state λ₯Ό μλ°μ΄νΈ νλ λ‘μ§μ ν¨μ ( state, action κ°μ²΄λ₯Ό μΈμλ‘ λ°λλ€ )

<span style='background-color : #fff5b1'>**initialState**</span> : μ΄κΈ° state ( useState μ μ΄κΈ° ν λΉ κ°κ³Ό λμΌ )

<br>

useState μ λμΌνκ² λ³΄μ΄λ©΄μλ dispatch, reducer λ± μλ‘μ΄ κ°λκ³Ό λ§μ£Όνκ² λ©λλ€.

νμ§λ§ μ μ­ μνκ΄λ¦¬ λΌμ΄λΈλ¬λ¦¬μΈ redux μλ λμΌν λ¨μ΄κ° μ¬μ©λκΈ° λλ¬Έμ μ§κΈ μ΄ν΄ν΄λλ©΄ μΆν λμμ΄ λ  κ±°λΌ μκ° ν©λλ€ π₯Ί

μμλ₯Ό ν΅ν΄ νλμ© μ΄ν΄λ³΄κ² μ΅λλ€.

<br>

### **useReducer μμ**

![4](https://user-images.githubusercontent.com/87301268/223932444-02fd83e5-8911-4e3c-a9cc-b6a5a48bb137.png)

<br>

**μ»΄ν¬λνΈμμ λ²μ΄λ μν κ΄λ¦¬ λ‘μ§μ΄ λ§λ€μ΄μ Έ μλ κ±Έ νμΈ ν  μ μμ΅λλ€.**

λ¨Όμ  λ²νΌμ λ³΄λ©΄ μλ μ²λΌ ν΄λ¦­ μ΄λ²€νΈκ° λμ΄ μμ΅λλ€.

![7](https://user-images.githubusercontent.com/87301268/223934763-e0e9f0f2-2384-458a-bdbf-c663e8ea35c9.png)

**dispatch :**Β reducer ν¨μλ₯Ό μ€ν μν€λ©°, μ»΄ν¬λνΈ λ΄μμ state μ μλ°μ΄νΈλ₯Ό λ€λ£¨κΈ° μν΄ μ¬μ©

μ¦, **νμ¬ μ μλμ΄ μλ reducer ν¨μλ₯Ό μ€ν** μν€κ² λλ©° ( export function reducer λΆλΆ )

**dispatch** λ <span style='background-color : #fff5b1'>**ν¨μμ μΈμλ‘ μλ°μ΄νΈ νκΈ° μν μ λ³΄**</span>λ₯Ό κ°μ§ <span style='background-color : #fff5b1'>**action**</span> μ μ¬μ© ν©λλ€.

<br>

κ·Έλ λ€λ©΄ <span style='background-color : #fff5b1'>**action**</span> μ

**μλ°μ΄νΈλ₯Ό μν μ λ³΄λ₯Ό κ°μ§κ³  μλ κ²**μ΄λ©°, <span style='background-color : #fff5b1'>**reducer ν¨μ**</span>μ λ λ²μ§Έ μΈμμΈ <span style='background-color : #fff5b1'>**action**</span> μ ν λΉ λ©λλ€.

<span style='background-color : #fff5b1'>**action**</span> μ μ£Ό λͺ¨μ΅μ **type μ΄λΌλ κ°μ κ°μ§ κ°μ²΄ νν**λ‘ μ¬μ© λ©λλ€. β‘οΈ ( **{ type : "decrement" }** )

<br>

<span style='background-color : #fff5b1'>**reducer ν¨μλ**</span>

![6](https://user-images.githubusercontent.com/87301268/223932619-4ac4ed56-e842-434a-afd7-6d233c3cc5f7.png)

**dispatch ν¨μ**μ μν΄ μ€νλλ©° μ»΄ν¬λνΈ μΈλΆμμ state λ₯Ό μλ°μ΄νΈ νλ λ‘μ§μ λ΄λΉ ν©λλ€.

μΈμλ‘ **νμ¬ state** μ **action** μ λ°κ² λλλ° <span style='background-color : #fff5b1'>**action**</span> κ°μ κ·Όκ±°νμ¬ κΈ°μ‘΄μ state λ₯Ό μλ°μ΄νΈ ν©λλ€.

<br>

**μ°Έκ³ λ‘ reducer ν¨μμ if-else λ₯Ό μ¬μ©νλ , switch λ₯Ό μ¬μ©νλ  μκ΄ μμ΅λλ€.**

κ·Έλ¦¬κ³  μ λ³΄μλ©΄, <span style='background-color : #fff5b1'>**reducer ν¨μ μμ export ν νμ μ λ³Ό μ μμ΅λλ€.**</span>

λ§μ΅λλ€. 'ν΄λΉ μ»΄ν¬λνΈλ‘ λΆλ¦¬νμ¬ μΈλΆμμ μ²λ¦¬ ν  μ μλλ‘ ν΄μ£Όλ κ²' μλ―Έλ₯Ό λλμλ³΄λ©΄ λ€λ₯Έ νμΌμμλ λΆλ¬μμ μ¬μ© ν  μ μμ΅λλ€.

<br>

μλ μ½λλ₯Ό ν΅ν΄ μ§μ  νμΈ ν΄λ΄μλ€!

<iframe width='100%' height='400px' src="https://codesandbox.io/embed/usereducer-1q6ly4?autoresize=1&amp;fontsize=14&amp;hidenavigation=1&amp;theme=dark"></iframe>

<br>
<br>

### **μ°Έκ³ **

[νμ ν¬κΈ°λ‘ μλΌ λ¨Ήλ λ¦¬μ‘νΈ(React.js) : κΈ°μ΄λΆν° μ€μ κΉμ§](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8)

[https://velog.io/@sdc337dc/React-useReducer](https://velog.io/@sdc337dc/React-useReducer)

[https://xiubindev.tistory.com/104](https://xiubindev.tistory.com/104)

[https://velog.io/@iamhayoung/React-Hooks-useReducer%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0#%EC%A0%84%EC%B2%B4-%EC%83%98%ED%94%8C-%EC%BD%94%EB%93%9C-](https://velog.io/@iamhayoung/React-Hooks-useReducer%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0#%EC%A0%84%EC%B2%B4-%EC%83%98%ED%94%8C-%EC%BD%94%EB%93%9C-)

[https://ko.reactjs.org/docs/hooks-reference.html#usereducer](https://ko.reactjs.org/docs/hooks-reference.html#usereducer)

<br>

```toc

```

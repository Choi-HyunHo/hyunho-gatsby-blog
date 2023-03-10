---
emoji: π
title: useMemo
date: '2023-02-28'
author: μ΅ννΈ
tags: React
categories: React
---

μ΅μ νμ μ¬μ©λλ λ¦¬μ‘νΈμ hook μ€ νλμΈ useMemo μ λνμ¬ μμλ³΄κ² μ΅λλ€. π

<br>

### **useMemo λ β**

<span style='background-color : #fff5b1'>**μ»΄ν¬λνΈμ μ±λ₯μ μ΅μ ν**</span> μν¬ μ μλ λνμ μΈ hook μ€ νλλ‘, useMemo μμ **Memo** λ <span style='background-color : #fff5b1'>**'Memoization'**</span> μ λ§ν©λλ€.

<br>

### **Memoization .. β**

<span style='background-color : #fff5b1'>**κΈ°μ‘΄μ μνν μ°μ°μ κ²°κ³Ό κ°**</span>μ <span style='background-color : #fff5b1'>**μ΄λκ°μ μ μ₯**</span>ν΄ λκ³  <span style='background-color : #fff5b1'>**λμΌν μλ ₯μ΄ λ€μ΄μ€λ©΄ μ¬νμ©**</span>νλ

νλ‘κ·Έλλ° κΈ°λ² μλλ€.

![1](https://user-images.githubusercontent.com/87301268/224193098-617e032e-9ef4-45eb-aa4d-387ae6da3a43.jpeg)
![2](https://user-images.githubusercontent.com/87301268/224193121-c5b4494d-8331-40a4-8670-6bce2b016857.jpeg)

<br>

#### **β μ κΉ ν¨μν μ»΄ν¬λνΈμ νΉμ§ νλλ§**Β 

ν¨μν μ»΄ν¬λνΈλ

1.  μ»΄ν¬λνΈ ν¨μ νΈμΆ
2.  <span style='background-color : #fff5b1'>λͺ¨λ  λ΄λΆ λ³μ μ΄κΈ°ν</span>

β‘οΈ μμ κ°μ μμλ₯Ό κ±°μΉ©λλ€.

<br>

μμλ₯Ό ν΅ν΄ μ΄ν΄λ³΄λ©΄

![3](https://user-images.githubusercontent.com/87301268/224193135-cceb1d57-052c-4ddf-a8df-7dae561188c3.png)

> μ»΄ν¬λνΈκ° λ λλ§ λ  λλ§λ€ **valueλΌλ λ³μκ° μ΄κΈ°ν** λ©λλ€.

<br>

μ¦, λ λλ§ λ  λλ§λ€ calculate ν¨μκ° λΆνμνκ² μ¬νΈμΆλλ€λ κ²μΈλ°

λ§μ½ calculateκ° λ¬΄κ²κ³  λ³΅μ‘ν ν¨μλΌλ©΄ λ§€μ° λΉν¨μ¨μ μΌ κ² μλλ€.

λΆνμν νΈμΆμ λ§κΈ° μν΄ useMemo νμ μ¬μ©νλ κ²μ΄κ³  useMemoλ₯Ό μ¬μ©νλ©΄

<span style='background-color : #fff5b1'>λ λλ§ β‘οΈ μ»΄ν¬λνΈ ν¨μ νΈμΆ β‘οΈ memoizeλ ν¨μ μ¬μ¬μ©νλ μμλ₯Ό κ±°μΉ©λλ€.</span>

μ΄λ κ² λλ©΄ calculate ν¨μλ₯Ό λ°λ³΅μ μΌλ‘ μ€νν  νμκ° μκ² λκ³ ,

<span style='background-color : #fff5b1'>λ©λͺ¨λ¦¬μ μ μ₯λμ΄μλ κ³μ°λ κ°μ κ°μ Έμ μ¬μ¬μ©ν  μ μκ² ν΄μ€λλ€.</span>

<br>

#### **β οΈ νμ§λ§**

**κ°μ μ¬νμ©νκΈ° μν΄ λ°λ‘ λ©λͺ¨λ¦¬λ₯Ό μλΉνμ¬ μ μ₯ν΄λλ κ² μλλ€.**

**β‘οΈ** λΆνμν κ°λ€μ λͺ¨λ μ μ₯ν΄λλ©΄ λ°λλ‘ μ±λ₯μ΄ μ ν λ  μ μμΌλ―λ‘ κΌ­ νμν κ³³μλ§ μ¬μ© ν©λλ€.

<br>

### **useMemo κ΅¬μ‘°**

![4](https://user-images.githubusercontent.com/87301268/224193159-f073fcf2-e2b7-4097-99a5-42a7b6106932.png)

useMemoλΒ useEffectμ²λΌ μ²« λ²μ§Έ μΈμλ‘ μ½λ°± ν¨μ, λ λ²μ§Έ μΈμλ‘ μμ‘΄μ± λ°°μ΄(dependancyArray)μ λ°μ΅λλ€.

β‘οΈ μμ‘΄μ± λ°°μ΄ μμμλ κ°μ΄ μλ°μ΄νΈ λ  λμλ§ μ½λ°± ν¨μλ₯Ό λ€μ νΈμΆνμ¬ λ©λͺ¨λ¦¬μ μ μ₯λ κ°μ μλ°μ΄νΈ

β‘οΈ λ§μ½ λΉ λ°°μ΄μ λ£λλ€λ©΄ useEffectμ λ§μ°¬κ°μ§λ‘ λ§μ΄νΈ λ  λμλ§ κ°μ κ³μ°νκ³  κ·Έ μ΄νλ‘  κ³μ memoizationλ κ°μ κΊΌλ΄μ μ¬μ©

<br>

### **μμ 1**

![5](https://user-images.githubusercontent.com/87301268/224193175-ee6b2ebb-0184-42da-bda6-a8981a4b07dd.png)

hardCalculate λλ easyCalculate λ μ€ νλλ§ λ²νΌμ λλ¬λ console.log λ κ°μ΄ λμ΅λλ€

κ·Έ μ΄μ λ λ§μ½, μ¬μ΄ κ³μ°κΈ°μ inputκ°μ λ³κ²½νλ©΄ ν¨μν μ»΄ν¬λνΈμΈ Appμ΄ λ¦¬λ λλ§λλλ°

μ΄ λ, μμμ λ§νλ― λ΄λΆμ λ³μλ€μ΄ μ΄κΈ°νλκΈ° λλ¬Έμ hardCalculateκ° λ€μ μ€νλκΈ° λλ¬Έ μλλ€.

<br>

#### **useMemo λ₯Ό μ μ©ν΄λ³΄λ©΄**

![6](https://user-images.githubusercontent.com/87301268/224193195-334bc842-0301-4c0f-ad9f-90706060eaa8.png)

μ΄μ²λΌΒ useMemoμ μ²« λ²μ§Έ μΈμλ‘ μ½λ°± ν¨μλ₯Ό λ£κ³ , μμ‘΄μ± λ°°μ΄ μμ hardNumberλ₯Ό λ£μ΄

hardNumber κ°μ΄ λ³κ²½λ  λμλ§ μ½λ°±ν¨μκ° μ€νλκ² λ©λλ€.

<br>

#### **μ§μ  νμΈν΄λ³΄κΈ°**

<iframe width='100%' height='300px' src="https://codesandbox.io/embed/usememo-1-q17g2r?fontsize=14&amp;hidenavigation=1&amp;theme=dark"></iframe>

<br>
<br>

### **μμ2**

![7](https://user-images.githubusercontent.com/87301268/224193213-80dbcad3-8286-4151-ba87-29752c23b1cd.png)

useEffectμ μμ‘΄μ± λ°°μ΄μ locationμ λ£μλλ° **number** stateλ₯Ό λ³κ²½ν΄λ useEffectκ° μ€ν λ©λλ€.

κ·Έ μ΄μ λ μλ°μ€ν¬λ¦½νΈμμ <span style='background-color : #fff5b1'>**κ°μ²΄**</span>λ μμ νμκ³Όλ λ€λ₯΄κ² <span style='background-color : #fff5b1'>**κ°μ΄ μ μ₯λ  λ μ£Όμ κ°μΌλ‘ μ μ₯**</span>λκΈ° λλ¬Έ μλλ€. β‘οΈ [λΆλ³μ±μ΄λ](https://choi-hyunho.com/react-immutability/)

> μ¦, λ©λͺ¨λ¦¬ μ£Όμκ° λ€λ₯΄κ² μ μ₯λμ΄ μμ΅λλ€.

κ·Έλ κΈ° λλ¬Έμ λ¦¬μ‘νΈμμ  number stateκ° λ°λλ©΄ App μ»΄ν¬λνΈκ° μ¬νΈμΆλλ©΄μ locationμ μ£Όμκ°μ΄ λ³κ²½μ΄ λμκΈ° λλ¬Έμ locationμ΄ λ³κ²½μ΄ λμλ€κ³  μΈμμ ν©λλ€.

<br>

#### **useMemo λ₯Ό μ μ©ν΄λ³΄λ©΄**

![8](https://user-images.githubusercontent.com/87301268/224193235-74c3633f-0aaa-4cd9-830c-532ea0dae5dd.png)

number μν κ°μ λλ¬λ λ μ΄μ μλ―Έμλ νΈμΆμ΄ λμ§ μλ κ±Έ νμΈ ν  μ μμ΅λλ€.

<br>

<iframe width='100%' height='350px' src="https://codesandbox.io/embed/usememo-2-o90hyz?fontsize=14&amp;hidenavigation=1&amp;theme=dark"></iframe>

<br>
<br>

### **μ λ¦¬**

**useMemo λ β**

<span style='background-color : #fff5b1'>**μ»΄ν¬λνΈμ μ±λ₯μ μ΅μ ν**</span>Β μν¬ μ μλ λνμ μΈ hook μ€ νλλ‘,

useMemo μμΒ **Memo**Β λΒ **'Memoization'**Β μ λ§ν©λλ€.

<br>

**Memoization .. β**

<span style='background-color : #fff5b1'>**κΈ°μ‘΄μ μνν μ°μ°μ κ²°κ³Ό κ°**</span>μ <span style='background-color : #fff5b1'>**μ΄λκ°μ μ μ₯**</span>ν΄ λκ³  <span style='background-color : #fff5b1'>**λμΌν μλ ₯μ΄ λ€μ΄μ€λ©΄ μ¬νμ©**</span>νλ

νλ‘κ·Έλλ° κΈ°λ² μλλ€.

<br>

### **μ°Έκ³ **

[https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8)

[https://ko.reactjs.org/docs/hooks-reference.html#usememo](https://ko.reactjs.org/docs/hooks-reference.html#usememo)

[https://www.youtube.com/watch?v=e-CnI8Q5RY4&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=7](https://www.youtube.com/watch?v=e-CnI8Q5RY4&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=7)

<br>

```toc

```

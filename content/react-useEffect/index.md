---
emoji: π
title: useEffect
date: '2023-02-06'
author: μ΅ννΈ
tags: React
categories: React
---

useState μ λλΆμ΄ κ°μ₯ λ§μ΄ μ¬μ©λλ hook μΈ useEffect μ λν΄μ μ λ¦¬ νκ² μ΅λλ€ π

<br>

### **λ¨Όμ  useEffect λ β**

> <span style='background-color : #fff5b1'>μ»΄ν¬λνΈκ° λ λλ§ λ  λ</span> λ§λ€ Side Effect λ‘μ§μ λ€λ£¨λ hook μλλ€.

<br>

### **λ€..β Side Effect κ° λ­κ°μ..β**

ν¨μν νλ‘κ·Έλλ°μ νΉμ§ μ΄λΌκ³ λ λ³Ό μ μμ΅λλ€. μ¬μ μ μΈ μ μλ

> Side Effect λ, μλμ λͺ©μ κ³Ό λ€λ₯΄κ² λ€λ₯Έ ν¨κ³Ό μ¦,Β <span style='background-color : #fff5b1'>λΆμμ©</span>μ λ§ν©λλ€.

<br>

μ¬κΈ°μ λλλ©΄ μ’κ² μ§λ§, μμ μ°κ΄μ§μ΄ λμ€λ κ°λμ΄ μμν¨μλΌκ³  μμ΅λλ€.

<br>

### **μμ ν¨μβ**

> ν¨μν νλ‘κ·Έλλ°μμλ <span style='background-color : #fff5b1'>μ΄λ€ μΈλΆ μνμ μμ‘΄νμ§λ μκ³  λ³κ²½μν€μ§λ μλ</span>
> μ¦, λΆμ ν¨κ³Ό(Side Effect)κ° μλ ν¨μλ₯Ό μμν¨μ(Pure function)μ΄λΌκ³  νλ€.

<br>

λ°λλ‘ λΆμ ν¨κ³Όκ° μλ ν¨μλΒ λΉμμ ν¨μ(Impure function)Β μ΄λΌκ³  ν©λλ€.

<br>

**μμ ν¨μμ νΉμ§μβ**

β‘οΈ λμΌν μΈμκ° μ λ¬λλ©΄ μΈμ λ λμΌν κ°μ λ°ν ν©λλ€. (μΈλΆ μνμ μμ‘΄νμ§ μλλ€)

β‘οΈ μΈλΆμνλ₯Ό λ³κ²½νμ§ μμ΅λλ€.

<br>

μλλ μμ ν¨μ μμ μλλ€

<br>

**1\. μΈλΆ μνμ μμ‘΄νμ§ μλ μμ ν¨μ**

![1](https://user-images.githubusercontent.com/87301268/223919115-2e7296d3-e5d9-4b00-b722-7607a8e9887c.png)

<br>

**2\. μΈλΆ μνλ₯Ό λ³κ²½νλ λΉμμ ν¨μ**

![2](https://user-images.githubusercontent.com/87301268/223919151-b7e35b73-bcff-435c-9ef3-fe6ab087c85f.png)

<br>

### **μμν¨μλ₯Ό μ¬μ©νλ μ΄μ  β**

λΉμμν¨μλ₯Ό μ¬μ©νλ©΄ λ€μκ³Ό κ°μ λ¬Έμ κ° λ°μ ν©λλ€.

- ν¨μκ° μΈλΆ μνλ₯Ό λ³κ²½νλ©΄ μν λ³νλ₯Ό μΆμ νκΈ° μ΄λ €μμ§κ³ ,
- μΆμ μ μ΄λ €μμ κ²°κ΅­ μ€λ₯λ₯Ό μΌκΈ°νκ³ , μ€λ₯ν΄κ²°μ μ΄λ ΅κ² λ§λ λ€.

μμ κ°μ μ΄μ λ‘ ν¨μν νλ‘κ·Έλλ°μμλ μμν¨μμ μ¬μ©μ μ§ν₯ ν©λλ€.

<br>

useEffect λ₯Ό μκΈ° μν΄μ μ΄κ±Έ μμμΌ νλλΌκ³  μκ° ν  μ μμ§λ§, **λ¦¬μ‘νΈ κ³΅μ λ¬Έμμλ μλμ κ°μ λ§μ΄ μμ΅λλ€.**

> λͺ¨λ  React μ»΄ν¬λνΈλ **μμ μ propsλ₯Ό λ€λ£° λ λ°λμ μμ ν¨μμ²λΌ λμ**ν΄μΌ ν©λλ€.

<br>

**β <span style='background-color : #fff5b1'>Reactμ μ»΄ν¬λνΈλ μμ ν¨μμ΄λ©°, input μ λ°μ μμΈ‘ κ°λ₯ν λ¦¬ν΄ κ°μ λ§λ€μ΄ λλλ€.</span>**

β‘οΈ μλμ κ°μ΄ κ°μ input μ μ λ¬νλ©΄, ν­μ κ°μ output μ λ¦¬ν΄ ν  κ² μλλ€.

β‘οΈ props λ '<span style='background-color : #fff5b1'>μ½κΈ° μ μ©'</span> μλλ€.

![3](https://user-images.githubusercontent.com/87301268/223919171-23de678d-2e8d-4c5b-b90d-d69258ae34f0.png)

<br>

### **λ¦¬μ‘νΈμμ Side Effect..β**

> ν¨μκ° μ€νλλ©΄μ <span style='background-color : #fff5b1'>ν¨μ μΈλΆμ μ‘΄μ¬νλ κ°μ΄λ μνλ₯Ό λ³κ²½</span>μν€λ λ±μ νμλ₯Ό λ§ν©λλ€.

<br>

β‘οΈ setTimeout(), setInterval() λ±μ νμ΄λ¨Έ ν¨μλ₯Ό μ¬μ©ν  λ

β‘οΈ λ°μ΄ν°λ₯Ό κ°μ Έμ€κΈ° μν΄ μΈλΆ API λ₯Ό νΈμΆνλ κ²½μ°

β‘οΈ μ§μ  μ»΄ν¬λνΈμ DOM μ μμ  ν  λ

<br>

μ¦, <span style='background-color : #fff5b1'>λ¬΄μΈκ°λ₯Ό νκΈ° μν΄ μ»΄ν¬λνΈ μΈλΆμ λλ¬</span>ν΄μΌ νλ κ²½μ° Side Effect λ₯Ό μν ν©λλ€.

κ·Έλμ useEffect λ μ»΄ν¬λνΈ λ΄μμ μ΄λ¬ν Side Effect λ₯Ό μ²λ¦¬νκ² μν΄ μ¬μ© ν©λλ€.

<br>

### **useEffectΒ  νΉμ§**

β‘οΈ μ»΄ν¬λνΈμ <span style='background-color : #fff5b1'>**Lifecycle**</span> λ₯Ό μ μ΄νλ hook μλλ€.

![4](https://user-images.githubusercontent.com/87301268/223919267-2e709239-e31e-4fc7-9c9b-1a8b530cb2eb.jpeg)

<br>

<span style='background-color : #fff5b1'>**νμ**</span> : μ»΄ν¬λνΈκ° νλ©΄μ λνλλ κ² ( React μμΒ **Mount**Β λΌκ³  μ§μΉ­ )

<span style='background-color : #fff5b1'>**λ³ν**</span> : state κ° λ°λκ±°λ, μλ°μ΄νΈ(λ¦¬λ λ) λκ±°λ μ΄λ° λ³νλ€ (Β **Update**Β )

<span style='background-color : #fff5b1'>**μ£½μ**</span> : μ»΄ν¬λνΈκ° νλ©΄μμ μ¬λΌμ§κ² λλ κ² μλλ€. ( React μμ **unMount**Β λΌκ³  μ§μΉ­ )

> μ¦, React μμ μ μνκ³  μ¬μ©νλ μ»΄ν¬λνΈλ€μ νμ λΆν° μμν΄μ  
> state λ props μ΄ λ°λκ² λμ΄ μΌμ΄λλ λ³νλ₯Ό κ±°μ³, μ»΄ν¬λνΈκ° νλ©΄μμ μμ΄μ§κ² λλ μ£½μμ κ΄ν μ΄μΌκΈ° μλλ€.

<br>

### **μ μ΄λ₯Ό νλ€κ³ ..β**

> μ»΄ν¬λνΈκ° νμνκ³ , λ³ννκ³ , μ¬λΌμ§κ³  μ£½λ μκ°μ κ°κ° μ΄λ€ μμμ μν μν¬ μ μλ€λ κ²μ μ μ΄νλ€κ³  λ§ν  μ μμ΅λλ€.

1.  **νμ**μμλ ex) μ΄κΈ°ν μμ μ μ§ννλ€.
2.  **λ³ν**κ° μΌμ΄λ  λ ex) ν΄λΉ λ³νλ₯Ό ν΅ν΄ λ°μ ν  μ μλ μμΈμ λν μ²λ¦¬ μμμ μΆκ°λ‘ μν νλ€.
3.  **μ»΄ν¬λνΈκ° μ¬λΌμ§κ² λ  λ** ex) ν΄λΉ μ»΄ν¬λνΈκ° μ¬μ©νλ λ©λͺ¨λ¦¬λ₯Ό λ°ννκ² νλ μμλ€

κΈ°μ‘΄μ μμ κ°μ Lifecycle λ₯Ό μ μ΄νκΈ° μν΄μλ ν΄λμ€ν μ»΄ν¬λνΈμ Lifecycle λ©μλλ₯Ό νμ©ν΄μΌ νμ΅λλ€.

νμ§λ§, κ°λ¨ν Side Effect μ²λ¦¬μλ λ³΅μ‘ν μ½λ μμ±μ΄ νμνκΈ° λλ¬Έμ μ μ§ λ³΄μ λ° μ¬μ©νκΈ° μ΄λ €μ μ΅λλ€.

![5](https://user-images.githubusercontent.com/87301268/223919295-8a33f42c-cc15-41c0-bfa4-107cc4850e8f.png)

<br>

μ΄λ¬ν λ¬Έμ λ₯Ό ν΄κ²°νκΈ° μν΄ useEffect κ° λ±μ₯ νμ΅λλ€

![6](https://user-images.githubusercontent.com/87301268/223919324-7e07ab50-0a31-4e10-ba16-b6e437bd2c40.png)

<br>

### **useEffect μ¬μ©λ²**

![7](https://user-images.githubusercontent.com/87301268/223919361-e6f94282-99aa-420b-8e35-e93dbcdbb45a.jpeg)

![8](https://user-images.githubusercontent.com/87301268/223919377-ccc868f0-99cd-42d7-8ca8-801a0202ae0d.png)

- 2κ°μ νλΌλ―Έν°λ₯Ό μ λ¬νκ² λλλ° <span style='background-color : #fff5b1'>**1\. callback ν¨μ,** **2\. μμ‘΄μ± λ°°μ΄**</span> μ μ λ¬ ν©λλ€.
- μμ‘΄μ± λ°°μ΄μ <span style='background-color : #fff5b1'>**λμ€(deps)**</span> λΌκ³  λΆλ₯΄κΈ°λ ν©λλ€.

<br>

**useEffect λ λμ€μ λ°λΌ λμμ΄ λ¬λΌ μ§λλ€.**

**1\. deps μ λΉ λ°°μ΄μ μ λ¬ ν  λ β‘οΈ μ»΄ν¬λνΈκ° mount λλ μμ **

![9](https://user-images.githubusercontent.com/87301268/223919431-3de4d48d-1f60-4897-9895-6ee7b6c2041f.png)

**λΉ λ°°μ΄μ μ λ¬νλ©΄ μ»΄ν¬λνΈ <span style='background-color : #fff5b1'>μ΅μ΄ λ λλ§ μ΄ν ν λ²λ§ μ€ν</span> ν©λλ€.** **μ¦, μμ μ£ΌκΈ°λ‘ λ³΄λ©΄ μμ± λλ μμ μ΄λΌκ³  λ³Ό μ μμ΅λλ€.**

μ£Όλ‘ μ¬μ©νλ μν©μ

1.  axios, fetch λ±μ ν΅ν΄μ μλ²μ λ°μ΄ν°λ₯Ό μμ²­ ν  λ
2.  DOM μ μμ±μ μ½κ±°λ λ³κ²½ ν  λ λ±

<br>

**2\. deps νΉμ  props, state κ° μμ λ β‘οΈ μ»΄ν¬λνΈκ° update λλ μμ **

![10](https://user-images.githubusercontent.com/87301268/223919447-0493dfd3-2a98-4166-9437-cf5a5068e4cb.png)

**props, state λ₯Ό deps μ μ λ¬νκ² λλ©΄ <span style='background-color : #fff5b1'>μ»΄ν¬λνΈ μ΅μ΄ λ λλ§</span> λ° <span style='background-color : #fff5b1'>ν΄λΉ κ°μ΄ λ³κ²½ λ  λλ§λ€</span> μ€ν ν©λλ€.**
**μμ μ£ΌκΈ°λ‘ λ³΄λ©΄, λ³ννλ μ€μ΄λΌκ³  λ³Ό μ μμ΅λλ€.**

<br>

**3\. μ»΄ν¬λνΈκ° μ¬λΌμ§κ² λ  λ β‘οΈ unmount λλ μμ **

![11](https://user-images.githubusercontent.com/87301268/223919735-7f6383eb-f4e8-4f1f-b73d-f93e0d1fb759.png)

**useEffect μμ return λ¬Έμ΄ μ‘΄μ¬νλ©΄ <span style='background-color : #fff5b1'>μ»΄ν¬λνΈκ° unmount μΈ κ²½μ° μ€νλλ ν΄λ¦°μ ν¨μ</span>λΌκ³  ν©λλ€.**

μ£Όλ‘ μ¬μ©νλ μν©μ

1.  DOM μ΄λ²€νΈλ₯Ό μ κ±° ν  λ ( νμμμ μΌν΄λ³΄λ κ°μ₯ λ§μ΄ λ³΄μ΄λ λ°©λ² )
2.  νμ΄λ¨Έ ν¨μλ₯Ό μ’λ£ ν  λ

λ λ§μ μν©μ΄ μμ κ±° κ°μλ° μλ €μ£Όμλ©΄ κ°μ¬νκ² μ΅λλ€ π

<br>

### **λ§μ½ deps λ₯Ό μ¬μ©νμ§ μμΌλ©΄ β**

![12](https://user-images.githubusercontent.com/87301268/223919793-cbe416f3-e845-47d2-bc8a-c00b3529cc10.png)

**μ»΄ν¬λνΈκ° λ λλ§ λ  λ λ§λ€** μ€ν λ©λλ€.

μ£Όμν΄μΌ ν  μ μ **λͺ¨λ  λ λλ§μ μνΈμμ©** νκΈ° λλ¬Έμ <span style='background-color : #fff5b1'>**μλμ λ€λ₯΄κ² Side Effect κ° μ€ν**</span> λ  μ μμ΅λλ€.

<br>

### **μ λ¦¬**

μ§κΈκΉμ§ Side Effect κ° λ¬΄μμΈμ§, μμ ν¨μλ, μλͺμ£ΌκΈ°, useEffect μ¬μ©λ² λ±

μ§§μ§ μμ λ΄μ©μ΄μ§λ§ μ λ₯Ό ν¬ν¨ν λ§μ λΆλ€μ΄ μ΄ κΈμ μ νκ² λμλ©΄ λμμ΄ λμμΌλ©΄ νλ λ°λ¨ μλλ€.
νΌλλ°±μ νμ μλλ€π

μ§§κ² μ λ¦¬μ ν΄λ³΄λ©΄

- **useEffect()**Β νμΌλ‘λ§ **ν΄λμ€ μ»΄ν¬λνΈμ μλͺμ£ΌκΈ° ν¨μλ€κ³Ό λμΌν κΈ°λ₯μ μν ν  μ μμ**
- <span style='background-color : #fff5b1'>**μ²« μ»΄ν¬λνΈ λ λλ§ μ ν λ²μ μν**</span> ( \[ \] μ¬λΆμ κ΄κ³μμ΄ )

![13](https://user-images.githubusercontent.com/87301268/223919801-a07a3a2f-8c3b-4795-9360-cb186bb4636f.png)

<br>

λ§μ½ number μ κ°μ΄ λ³νλ©΄ μμ useEffect λ λ€μ μλ ν©λλ€. ( action κ°μ΄ κ°μλ! )

- μ¦, numberκ° λ°λλ©΄ console.log(action) μ κ°μ΄ λμ΅λλ€.
- μ΄μ λ μμ‘΄μ± λ°°μ΄μ λ€μ΄μλ κ°μ΄ λ³νκΈ° λλ¬Έμλλ€.

<br>

### **μ°Έκ³ **

[http://www.yes24.com/Product/Goods/109781552](http://www.yes24.com/Product/Goods/109781552)

[https://choar816.tistory.com/163](https://choar816.tistory.com/163)

[https://blog.greenroots.info/what-are-pure-functions-and-side-effects-in-javascript](https://blog.greenroots.info/what-are-pure-functions-and-side-effects-in-javascript)

[https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8)

[https://velog.io/@jmean12/useEffect%EB%9E%80](https://velog.io/@jmean12/useEffect%EB%9E%80)

[https://ko.reactjs.org/docs/components-and-props.html](https://ko.reactjs.org/docs/components-and-props.html)

[https://seokzin.tistory.com/entry/React-useEffect%EC%9D%98-%EC%B2%A0%ED%95%99%EA%B3%BC-Lifecycle](https://seokzin.tistory.com/entry/React-useEffect%EC%9D%98-%EC%B2%A0%ED%95%99%EA%B3%BC-Lifecycle)

<br>

```toc

```

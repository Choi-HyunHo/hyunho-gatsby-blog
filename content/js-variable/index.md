---
emoji: π
title: λͺ¨λ μλ°μ€ν¬λ¦½νΈ Deep Dive_λ³μ
date: '2022-11-11'
author: μ΅ννΈ
tags: JavaScript
categories: JS
---

### 04\_λ³μ

### 4.1 λ³μλ λ¬΄μμΈκ°? μ νμνκ°?

λ³μλ νλ‘κ·Έλλ° μΈμ΄μμ <span style='background-color : #fff5b1'>**λ°μ΄ν°λ₯Ό κ΄λ¦¬**</span>νκΈ° μν ν΅μ¬ κ°λμ΄λ€.  
νλ‘κ·Έλλ° μΈμ΄λ κΈ°μ΅νκ³  μΆμ κ°μ λ©λͺ¨λ¦¬μ μ μ₯νκ³ , μ μ₯λ κ°μ μ½μ΄ λ€μ¬ μ¬μ¬μ©νκΈ° μν΄ λ³μλΌλ λ©μ»€λμ¦μ μ κ³΅νλ€.

μ¦, <span style='background-color : #fff5b1'>**λ³μλ νλμ κ°μ μ μ₯νκΈ° μν΄ νλ³΄ν λ©λͺ¨λ¦¬ κ³΅κ° μμ²΄ λλ κ·Έ λ©λͺ¨λ¦¬ κ³΅κ°μ μλ³νκΈ° μν΄ λΆμΈ μ΄λ¦**</span> μ λ§νλ€.

- κ°μ μμΉλ₯Ό κ°λ¦¬ν€λ μμ§μ μΈ μ΄λ¦μ΄λ€.
- νλ‘κ·Έλλ° μΈμ΄μ μ»΄νμΌλ¬ λλ μΈν°νλ¦¬ν°μ μν΄ κ°μ΄ μ μ₯λ λ©λͺ¨λ¦¬ κ³΅κ°μ μ£Όμλ‘ μΉνλμ΄ μ€νλλ€.

λ³μμ **κ°μ μ μ₯**νλ κ²μ <span style='background-color : #fff5b1'>ν λΉ(assignment)</span>μ΄λΌκ³  νκ³ ,  
λ³μμ **μ μ₯λ κ°μ μ½μ΄ λ€μ΄λ κ²**μ <span style='background-color : #fff5b1'>μ°Έμ‘°(reference)</span>λΌκ³  νλ€.

<br>

#### μΆκ° ) μ»΄ν¨ν°κ° λ°μ΄ν°λ₯Ό κΈ°μ΅νλ λ°©λ²

μ¬λμ κ³μ°κ³Ό κΈ°μ΅μ λͺ¨λ λλμμ νμ§λ§, μ»΄ν¨ν°λ μ°μ°κ³Ό κΈ°μ΅μ μννλ λΆνμ΄ λλμ΄μ Έ μλ€.

- μ»΄ν¨ν°λ CPUλ₯Ό μ¬μ©ν΄ μ°μ°νκ³ , λ©λͺ¨λ¦¬ λ₯Ό μ¬μ©ν΄ λ°μ΄ν°λ₯Ό κΈ°μ΅ νλ€.
- λ©λͺ¨λ¦¬(Memory) λ λ°μ΄ν°λ₯Ό μ μ₯ν  μ μλ **λ©λͺ¨λ¦¬ μ(Memory Cell)** μ μ§ν©μ²΄μ΄λ€
- μ»΄ν¨ν°λ λ©λͺ¨λ¦¬ μμ ν¬κΈ°, μ¦ 1λ°μ΄νΈ λ¨μλ‘ λ°μ΄ν°λ₯Ό μ μ₯ νκ³  μ½μ΄ λ€μΈλ€.  
  ![](https://velog.velcdn.com/images/hoho_0815/post/917515ad-2d5c-4d8a-b44b-518095d29119/image.png)
- κ° μ(νμμ) μ κ³ μ μ **λ©λͺ¨λ¦¬ μ£Όμ(Memory Address)** λ₯Ό κ°λλ°, λ©λͺ¨λ¦¬ κ³΅κ°μ μμΉλ₯Ό λνλ΄λ©°, 0λΆν° μμν΄μ λ©λͺ¨λ¦¬μ ν¬κΈ°λ§νΌ μ μλ‘ ννλλ€.
- μ»΄ν¨ν°λ λͺ¨λ  λ°μ΄ν°λ₯Ό 2μ§μλ‘ μ²λ¦¬νλ€.(μ«μ, νμ€νΈ, μ΄λ―Έμ§, λμμ λ± μμΈμμ΄)
- μμμΈ μ«μ κ° 10, 20, 30μ νΈμμ 10μ§μλ‘ νκΈ°νμ§λ§ μλλ 2μ§μλ‘ λ€μ΄κ°λ€.

κ°μ΄ μ μ₯λ  λ©λͺ¨λ¦¬ μ£Όμλ μ½λκ° μ€νλ  λ λ©λͺ¨λ¦¬μ μν©μ λ°λΌ μμλ‘ κ²°μ . λ°λΌμ, λμΌν μ»΄ν¨ν°μμ λμΌν μ½λλ₯Ό μ€νν΄λ μ½λκ° μ€νλ  λλ§λ€ μ μ₯λ  λ©λͺ¨λ¦¬ μ£Όμλ λ³κ²½λλ€.

<br>

### 4.2 μλ³μ

λ³μ μ΄λ¦μ <span style='background-color : #fff5b1'>**μλ³μ(identifier)**</span> λΌκ³ λ νλ€.

- **μλ³μ** λ μ΄λ€ κ°μ κ΅¬λ³ν΄μ μλ³ ν  μ μλ κ³ μ ν μ΄λ¦μ λ§νλ€.
- **μλ³μ** λ μ΄λ€ κ°μ΄ μ μ₯λμ΄ μλ λ©λͺ¨λ¦¬ μ£Όμλ₯Ό κΈ°μ΅(μ μ₯) νλ€.
- μ¦, **μλ³μ** λ κ°μ΄ μλλΌ λ©λͺ¨λ¦¬ μ£Όμλ₯Ό κΈ°μ΅νκ³  μλ€.

> μλ³μλ‘ κ°μ κ΅¬λ³ν΄μ μλ³νλ€λ κ²μ ?  
> β‘οΈ μλ³μκ° κΈ°μ΅νκ³  μλ λ©λͺ¨λ¦¬ μ£Όμλ₯Ό ν΅ν΄ λ©λͺ¨λ¦¬ κ³΅κ°μ μ μ₯λ κ°μ μ κ·Ό ν  μ μλ€λ μλ―Έ

λ³μ, ν¨μ, ν΄λμ€ λ±μ μ΄λ¦κ³Ό κ°μ μλ³μλ λ€μ΄λ° κ·μΉμ μ€μν΄μΌ νλ©°,  
μ μΈ(declaration) μ μν΄ μλ°μ€ν¬λ¦½νΈ μμ§μ μλ³μμ μ‘΄μ¬λ₯Ό μλ¦°λ€.

<br>

### 4.3 λ³μ μ μΈ

λ³μ μ μΈμ΄λ <span style='background-color : #fff5b1'>**λ³μλ₯Ό μμ±**</span>νλ κ²μ λ§νλ€.

- β  κ°μ μ μ₯νκΈ° μν <span style='background-color : #fff5b1'>**λ©λͺ¨λ¦¬ κ³΅κ°μ νλ³΄**</span> νκ³ 
- β‘ λ³μ μ΄λ¦κ³Ό νλ³΄λ <span style='background-color : #fff5b1'>**λ©λͺ¨λ¦¬ κ³΅κ°μ μ£Όμλ₯Ό μ°κ²°**</span>ν΄μ
- β’ <span style='background-color : #fff5b1'>**κ°μ μ μ₯**</span> ν  μ μκ² μ€λΉνλ κ²μ΄λ€.

<br>

λ³μλ₯Ό μ¬μ©νλ €λ©΄ λ°λμ μ μΈμ΄ νμνλ€.

- var, let, const ν€μλλ₯Ό μ¬μ©νλ€.

> **ν€μλ**λ? μλ°μ€ν¬λ¦½νΈ μ½λλ₯Ό ν΄μνκ³  μ€ννλ μλ°μ€ν¬λ¦½νΈ μμ§μ΄ μνν  λμμ κ·μ ν μΌμ’μ **λͺλ Ήμ΄**.

<br>

#### **var** μ νΉμ§

1.λΈλ‘ λ λ²¨ μ€μ½νλ₯Ό μ§μνμ§ μκ³ , <span style='background-color : #fff5b1'>ν¨μ λ λ²¨ μ€μ½νλ₯Ό μ§μ</span> <br>2.<span style='background-color : #fff5b1'>μ μΈκ³Ό μ΄κΈ°νκ° λμμ μ§ν</span>

![carbon (12)](https://user-images.githubusercontent.com/87301268/224268133-a20c8897-edc3-4361-86ea-f7fb40b9a289.png)

<br>

μ€λͺμ λ§λΆμ΄λ©΄, μμ μ½λλ λ³μ μ μΈλ¬Έμ΄λ€.

λ³μλ₯Ό μ μΈν μ΄ν μμ§ κ°μ ν λΉνμ§ μμλ€. λ°λΌμ λ³μ μ μΈμ μν΄ νλ³΄λ λ©λͺ¨λ¦¬ κ³΅κ°μ λΉμ΄ μμ κ²μΌλ‘ μκ° ν  μ μμΌλ, νλ³΄ν λ©λͺ¨λ¦¬ κ³΅κ°μλ μλ°μ€ν¬λ¦½νΈ μμ§μ μν΄ <span style='background-color : #fff5b1'>**undefined**</span> λΌλ κ°μ΄ μλ¬΅μ μΌλ‘ ν λΉλμ΄ μ΄κΈ°ν λλ€. -> μ΄κ²μ μλ°μ€ν¬λ¦½νΈμ λνΉν νΉμ§μ΄λ€.

<br>

#### μλ°μ€ν¬λ¦½νΈ μμ§μ λ³μ μ μΈμ λ€μκ³Ό κ°μ 2 λ¨κ³μ κ±°μ³ μννλ€.

- <span style='background-color : #fff5b1'>μ μΈ λ¨κ³</span> : λ³μ μ΄λ¦μ λ±λ‘ν΄μ μλ°μ€ν¬λ¦½νΈ μμ§μ λ³μμ μ‘΄μ¬λ₯Ό μλ¦°λ€.
- <span style='background-color : #fff5b1'>μ΄κΈ°ν λ¨κ³</span> : κ°μ μ μ₯νκΈ° μν λ©λͺ¨λ¦¬ κ³΅κ°μ νλ³΄νκ³  μλ¬΅μ μΌλ‘ undefined λ₯Ό ν λΉν΄ μ΄κΈ°ν

var ν€μλλ₯Ό μ¬μ©ν λ³μ μ μΈμ μ μΈ λ¨κ³μ μ΄κΈ°ν λ¨κ³κ° λμμ μ§νλλ€.<br>
μΌλ°μ μΌλ‘ <span style='background-color : #fff5b1'>**μ΄κΈ°ν**</span> λ λ³μκ° μ μΈλ μ΄ν μ΅μ΄λ‘ κ°μ ν λΉλ°λ κ²μ λ§νλ€.

- var ν€μλλ₯Ό μ¬μ©ν λ³μ μ μΈμ **μ μΈ λ¨κ³**μ **μ΄κΈ°ν λ¨κ³**κ° λμμ μ§νλλ€.
- μ¦, var ν€μλλ‘ μ μΈν λ³μλ **undefined** λ‘ μλ¬΅μ μΈ μ΄κΈ°νκ° μλ μνλλ€.

<br>

### 4.4 λ³μ μ μΈμ μ€ν μμ κ³Ό λ³μ νΈμ΄μ€ν

![carbon (13)](https://user-images.githubusercontent.com/87301268/224268353-f7047b04-4a94-4be1-bfcf-6792d9c21414.png)

<be>

μμ μμλ₯Ό λ³΄λ©΄ **λ³μ μ μΈλ¬Έλ³΄λ€ λ³μλ₯Ό μ°Έμ‘°νλ μ½λ**κ° μμ μλ€.

μλ°μ€ν¬λ¦½νΈλ **μΈν°νλ¦¬ν°**μ μν΄ <span style='background-color : #fff5b1'>**ν μ€μ© μμ°¨μ μΌλ‘ μ€ν**</span>λλ―λ‘ `console.log(score)`κ° κ°μ₯ λ¨Όμ  μ€νλλλ°, μ€νλλ μμ μλ μμ§ `score` λ³μμ μ μΈμ΄ μ€νλμ§ μμμΒ <span style='background-color : #fff5b1'>μ°Έμ‘° μλ¬(ReferenceError)</span> λ°μ ν  κ² μ²λΌ λ³΄μΈλ€.

νμ§λ§ μ°Έμ‘° μλ¬κ° λ°μνμ§ μκ³  **undefined** κ° μΆλ ₯λλ€.

<span style='background-color : #fff5b1'>κ·Έ μ΄μ λ λ³μ μ μΈμ΄ μμ€μ½λκ° ν μ€μ© μμ°¨μ μΌλ‘ μ€νλλ μμ , μ¦ λ°νμ(runtime) μ΄ μλλΌ κ·Έ μ΄μ  λ¨κ³μμ λ¨Όμ  μ€νλκΈ° λλ¬Έμ΄λ€.</span>

> λ°νμ: μμ€μ½λκ° μμ°¨μ μΌλ‘ μ€νλλ μμ 

<br>

μλ°μ€ν¬λ¦½νΈ μμ§μ **μμ€μ½λ μ€νμ μν μ€λΉ λ¨κ³** μΈ μμ€μ½λμ νκ° κ³Όμ μμ λ³μ μ μΈμ ν¬ν¨ν λͺ¨λ  μ μΈλ¬Έ(λ³μ μ μΈλ¬Έ, ν¨μ μ μΈλ¬Έ λ±)μ μμ€μ½λμμ μ°Ύμλ΄ λ¨Όμ  μ€ν ν **μ΄ κ³Όμ μ΄ λλλ©΄ λΉλ‘μ μμ€μ½λλ₯Ό ν μ€μ© μμ°¨μ μΌλ‘ μ€ν** νλ€.

- μ± λ€μ, λ³μ μ μΈλλ κ³Όμ μ 'μ€ν μ»¨νμ€νΈ' μμ μμΈν μ΄ν΄λ³Ό μμ 
- μ§κΈμ <span style='background-color : #fff5b1'>**λ³μ μ μΈμ΄ μ½λκ° μμ°¨μ μΌλ‘ μ€νλλ λ°νμ μ΄μ μ λ¨Όμ  μ€ν**</span> λλ€λ μ μ μ£Όλͺ©!

<br>

μμ½νλ©΄, μλ°μ€ν¬λ¦½νΈ μμ§μ λ³μ μ μΈμ΄ μμ€μ½λμ μ΄λμ μλ  μκ΄μμ΄ λ€λ₯Έ μ½λλ³΄λ€ λ¨Όμ  μ€νλλ€.
β‘οΈ λ³μ μ μΈμ μμ€μ½λμ μμΉμ μκ΄μμ΄ λ³μλ₯Ό μ°Έμ‘° ν  μ μλ€.

<br>

μμ κ°μ μλ°μ€ν¬λ¦½νΈμ κ³ μ ν νΉμ§μ <span style='background-color : #fff5b1'>**λ³μ νΈμ΄μ€ν**</span> μ΄λΌ νλ€.

β‘οΈ <span style='background-color : #fff5b1'>**λ³μ μ μΈλ¬Έμ΄ μ½λμ μ λλ‘ λμ΄ μ¬λ €μ§ κ²μ²λΌ λμνλ νΉμ§**</span>  
β‘οΈ μ¬μ€ λ³μ μ μΈ λΏλ§ μλλΌ, var, let, const, function, function\*, class ν€μλλ₯Ό μ¬μ©ν΄μ μ μΈνλ λͺ¨λ  μλ³μ(λ³μ, ν¨μ, ν΄λμ€ λ±) λ νΈμ΄μ€ν λλ€.

<br>

### 4.5 κ°μ ν λΉ

**λ³μμ κ°**μ ν λΉ(λμ, μ μ₯) ν  λλ ν λΉ μ°μ°μ **\=** λ₯Ό μ¬μ©.  
ν λΉ μ°μ°μλ <span style='background-color : #fff5b1'>μ°λ³μ κ°μ μ’λ³μ λ³μμ ν λΉ</span>νλ€.

![carbon (14)](https://user-images.githubusercontent.com/87301268/224268461-5d4c028d-b1db-4b74-a027-fcccb2876684.png)

<br>

λ³μ μ μΈκ³Ό ν λΉμ νλμ λ¬Έμ₯μΌλ‘ ννν΄λ <span style='background-color : #fff5b1'>μλ°μ€ν¬λ¦½νΈ μμ§μ λ³μμ μ μΈκ³Ό κ°μ ν λΉμ 2κ°μ λ¬ΈμΌλ‘ λλμ΄μ κ°κ° μ€ν.</span> λ°λΌμ λ³μμ undefinedκ° ν λΉλμ΄ μ΄κΈ°νλλ κ²μ λ³ν¨μ΄ μλ€.

μ£Όμν  μ μ, **λ³μμ κ°μ ν λΉν  λλ** μ΄μ  κ° `undefined`κ° μ μ₯λμ΄ μλ λ©λͺ¨λ¦¬ κ³΅κ°μ μ§μ°κ³ 

κ·Έ λ©λͺ¨λ¦¬ κ³΅κ°μ ν λΉ κ° 80μ μλ‘­κ² μ μ₯νλ κ²μ΄ μλλΌ, <br>
<span style='background-color : #fff5b1'>μλ‘μ΄ λ©λͺ¨λ¦¬ κ³΅κ°μ νλ³΄νκ³  κ·Έκ³³μ ν λΉ κ° 80μ μ μ₯νλ€.</span>

<br>

### 4.6 κ°μ μ¬ν λΉ

**μ¬ν λΉ** μ΄λ, <span style='background-color : #fff5b1'>μ΄λ―Έ κ°μ΄ ν λΉλμ΄ μλ λ³μμ μλ‘μ΄ κ°μ λ λ€μ ν λΉ</span>νλ κ²μ λ§νλ€.

![carbon (15)](https://user-images.githubusercontent.com/87301268/224268736-9613cef5-0fd5-4850-b52a-1aea4c6bb073.png)

- var ν€μλλ‘ μ μΈν λ³μλ μ¬ν λΉ ν  μ μλ€.
- <span style='background-color : #fff5b1'>**μ¬ν λΉμ νμ¬ λ³μμ μ μ₯λ κ°μ λ²λ¦¬κ³  μλ‘μ΄ κ°μ μ μ₯**</span>νλ κ²μ΄λ€.
- var ν€μλλ λ³μμ μ μΈκ³Ό λμμ **undefined** λ‘ μ΄κΈ°νλκΈ° λλ¬Έμ μλ°ν λ§νλ©΄ κ°μ μ²μμΌλ‘ ν λΉνλ κ²λ μ¬μ€μ μ¬ν λΉμ΄λ€.

**λ¨μ½, κ°μ μ¬ν λΉ ν  μ μμ΄μ λ³μμ μ μ₯λ κ°μ λ³κ²½ ν  μ μλ€λ©΄, λ³μκ° μλλΌ μμ λΌ νλ€.**

<br>

### const ν€μλ

ES6μμ λμλ const.

- const λ₯Ό μ¬μ©ν΄ μ μΈν λ³μλ <span style='background-color : #fff5b1'>μ¬ν λΉμ΄ κΈμ§.</span>
- const ν€μλλ <span style='background-color : #fff5b1'>λ¨ ν λ²λ§ ν λΉ ν  μ μλ λ³μλ₯Ό μ μΈ.</span>
- λ°λΌμ constλ₯Ό μ¬μ©νλ©΄ <span style='background-color : #fff5b1'>μμ</span>λ₯Ό ννν  μ μλ€.

λ³μμ κ°μ μ¬ν λΉνλ©΄ **κΈ°μ‘΄ κ°μ΄ μ μ₯λμ΄ μλ λ©λͺ¨λ¦¬ κ³΅κ°μ μ§μ°κ³  μλ‘μ΄ κ³΅κ°μ νλ³΄**νκ³ 

κ·Έ λ©λͺ¨λ¦¬ κ³΅κ°μ μ¬ν λΉ κ°μ μ μ₯νλ€.

λ μ΄μ νμνμ§ μμ, μλ¬΄λ μ¬μ©νκ³  μμ§ μμ λΆνμν κ°(μ¬ν λΉ νμ μ΄μ  κ° λ±)λ€μ <br> **κ°λΉμ§ μ½λ ν°**μ μν΄ λ©λͺ¨λ¦¬μμ μλ ν΄μ (release)λλ€. <br>

λ¨, λ©λͺ¨λ¦¬μμ μΈμ  ν΄μ λ μ§λ μμΈ‘ν  μ μλ€.

<br>

> #### κ°λΉμ§ μ½λ ν°
>
> μ νλ¦¬μΌμ΄μμ΄ ν λΉν λ©λͺ¨λ¦¬ κ³΅κ°μ μ£ΌκΈ°μ μΌλ‘ κ²μ¬νμ¬ <span style='background-color : #fff5b1'>**λ μ΄μ μ¬μ©λμ§ μλ λ©λͺ¨λ¦¬λ₯Ό ν΄μ **</span> νλ κΈ°λ₯μ λ§νλ€.
>
> λ μ΄μ μ¬μ©λμ§ μλ λ©λͺ¨λ¦¬λ, <span style='background-color : #fff5b1'>**μ΄λ€ μλ³μλ μ°Έμ‘°νμ§ μλ λ©λͺ¨λ¦¬ κ³΅κ°**</span>μ μλ―Έ.  
> μλ°μ€ν¬λ¦½νΈλ κ°λΉμ§ μ½λ ν°λ₯Ό λ΄μ₯νκ³  μλ λ§€λμ§λ μΈμ΄(managed language)λ‘μ κ°λΉμ§ μ½λ ν°λ₯Ό ν΅ν΄ λ©λͺ¨λ¦¬ λμ(memory leak)λ₯Ό λ°©μ§νλ€.

<br>

- μΈλ§€λμ§λ μΈμ΄λ κ°λ°μκ° λͺμμ μΌλ‘ λ©λͺ¨λ¦¬λ₯Ό ν λΉνκ³  ν΄μ νλ κ²
- λ§€λμ§λ μΈμ΄λ λ©λͺ¨λ¦¬μ ν λΉ λ° ν΄μ λ₯Ό μΈμ΄ μ°¨μμμ λ΄λΉνκ³  κ°λ°μμ μ§μ μ μΈ λ©λͺ¨λ¦¬ μ μ΄λ₯Ό νμ©νμ§ μλλ€.

<br>

### 4.7 μλ³μ λ€μ΄λ° κ·μΉ

> μλ³μ : μ΄λ ν κ°μ κ΅¬λ³ν΄μ μλ³ ν  μ μλ κ³ μ ν μ΄λ¦

#### λ€μ΄λ° κ·μΉ

- νΉμλ¬Έμλ₯Ό μ μΈν λ¬Έμ, μ«μ, μΈλμ€μ½μ΄(\_), λ¬λ¬ κΈ°νΈ($)λ₯Ό ν¬ν¨ ν  μ μλ€.
- λ¨, μλ³μλ νΉμλ¬Έμλ₯Ό μ μΈν <span style='background-color : #fff5b1'>λ¬Έμ, μΈλμ€μ½μ΄(\_), λ¬λ¬ κΈ°νΈ($)λ‘ μμ</span>ν΄μΌ νλ€.
- <span style='background-color : #fff5b1'>μ«μλ‘ μμνλ κ²μ νμ©νμ§ μλλ€.</span>
- <span style='background-color : #fff5b1'>μμ½μ΄</span>λ μλ³μλ‘ μ¬μ© ν  μ μλ€.

> μμ½μ΄ : νλ‘κ·Έλλ° μΈμ΄μμ μ¬μ©λκ³  μκ±°λ, μ¬μ©λ  μμ μ΄ λ¨μ΄λ₯Ό λ§νλ€.  
> ex) await, class, case, const, else, default, false, export, if ....

<br>

ES5 λΆν° μ λμ½λ λ¬Έμλ₯Ό νμ©νλ―λ‘, μνλ²³ μΈμ νκΈμ΄λ μΌλ³Έμ΄ μλ³μλ μ¬μ© ν  μ μλ€.  
νμ§λ§, κΆμ₯νμ§ μλλ€.

μλ°°λλ μμ

![carbon (16)](https://user-images.githubusercontent.com/87301268/224268860-016d849c-d17b-4691-a289-64ef9f781f0b.png)

<br>

μλ°μ€ν¬λ¦½νΈλ λμλ¬Έμλ₯Ό κ΅¬λ³νλ―λ‘ λ€μ λ³μλ κ°κ° λ³κ°μ λ³μ

![carbon (17)](https://user-images.githubusercontent.com/87301268/224268944-67d36276-6753-4e94-8ecd-bf5b0f489663.png)

<br>

#### λ€μ΄λ° μ»¨λ²€μ

νλ μ΄μμ μμ΄ λ¨μ΄λ‘ κ΅¬μ±λ μλ³μλ₯Ό λ§λ€ λ κ°λμ± μ’κ² λ¨μ΄λ₯Ό νλμ κ΅¬λΆνκΈ° μν΄ κ·μ ν λͺλͺ

![carbon (18)](https://user-images.githubusercontent.com/87301268/224269033-a463ceda-e581-48f2-83e9-aa8f152ef49e.png)

<br>

```toc

```

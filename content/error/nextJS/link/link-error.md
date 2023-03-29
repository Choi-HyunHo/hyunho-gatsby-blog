---
emoji: ⚠️
title: Next.js - Link 태그 Error
date: '2022-11-21'
author: 최현호
tags: Error
categories: Error
---

### 1. Error 항목 

> Unhandled Runtime Error  
> Error: Multiple children were passed to <Link> with href of / but only one child is supported [https://nextjs.org/docs/messages/link-multiple-children](https://nextjs.org/docs/messages/link-multiple-children)  
> Open your browser's console to view the Component stack trace.

<br>

#### 1.1 원인 ❓

![carbon](https://user-images.githubusercontent.com/87301268/228458831-e459bde7-4114-4f96-b8d9-73d27c1cfe7b.png)

위와 같이 하나의 Link컴포넌트 안에 두 개 이상의 컴포넌트 혹은 태그를 넣을 시 발생

<br>

#### 1.2 ✅ 해결 

![carbon (1)](https://user-images.githubusercontent.com/87301268/228459067-414f4ae1-8397-477d-9459-d971f979a35d.png)

Link태그를 따로 분리

<br>

### 2. Error 항목 

> Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()? Check the render method of \`Link\`.

<br>

#### 2.1 원인 ❓

![carbon (2)](https://user-images.githubusercontent.com/87301268/228459424-1972bbb5-9381-4fde-b1ea-94607cec4fe9.png)

Link의 children으로 컴포넌트를 직접 줘서

<br>

#### 2.2 ✅ 해결 

![carbon (3)](https://user-images.githubusercontent.com/87301268/228459565-846264ec-3cdc-4d8c-9d8e-13a9285bad1c.png)

Link의 children에 a 태그를 사용하면 된다.

<br>

```toc

```

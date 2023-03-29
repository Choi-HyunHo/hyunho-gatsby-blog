---
emoji: ⚠️
title: Next.js - router & Link 를 사용해서 데이터를 전달할 때
date: '2023-01-02'
author: 최현호
tags: Error
categories: Error
---

### 원인 ❓

![carbon (7)](https://user-images.githubusercontent.com/87301268/228464995-ff893c39-a25d-4840-8b6e-12f38d64d3ab.png)

> router 또는 Link 태그를 사용해서 페이지 전환 시 query 옵션을 통해서 data 를 전달 할 수 있습니다.

➡ 하지만, 배열 데이터가 정상적으로 전달이 되지 않음..

<br>

### 해결 ✅

![carbon (8)](https://user-images.githubusercontent.com/87301268/228465233-865134ca-4ebd-430b-9c12-5a5d0c70f7fb.png)

➡ JSON 으로 string 변환을 먼저 한 후,

<br>

![carbon (9)](https://user-images.githubusercontent.com/87301268/228465386-f9ac80d7-14b4-4119-ab3c-aa9b350b1ea1.png)

➡ 받아서 사용하는 곳에서 원래대로 parsing 합니다.

<br>

### 결론

> data가 Object형태일 경우 string으로 변환

<br>

```toc

```

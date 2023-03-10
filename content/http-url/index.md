---
emoji: ð
title: HTTP - URIì ì¹ ë¸ë¼ì°ì  ìì²­ íë¦
date: '2022-11-26'
author: ìµíí¸
tags: HTTP
categories: CS
---

> ê¹ìíëì ëª¨ë  ê°ë°ìë¥¼ ìí HTTP ì¹ ê¸°ë³¸ ì§ìì ìê°íë©´ì ì ë¦¬í ë´ì©ìëë¤.

<br>

### **1\. URI (Uniform Resource Identifier)**Â 

- <span style='background-color : #fff5b1'>**Uniform**</span>Â : ë¦¬ìì¤ ìë³íë íµì¼ë ë°©ì ìëë¤.
- <span style='background-color : #fff5b1'>**Resource**</span>Â :Â  URIë¡ ìë³í  ì ìë ëª¨ë  ê±¸ ììì´ë¼ê³  í©ëë¤. ì¹ ë¸ë¼ì°ì ì ìë HTMLì íì¼ ê²ë§ ììì ë»íë ê² ìëë¼ ì¤ìê° êµíµ ì ë³´ ë±ë± ì´ë°ê²ë ììì´ë¼ê³  í©ëë¤.
- <span style='background-color : #fff5b1'>**Idenrifier**</span>Â : ë¤ë¥¸ í­ëª©ê³¼ êµ¬ë¶íë ë° íìí ì ë³´. ì¬ëì ìë³í  ë ì£¼ë¯¼ë±ë¡ë²í¸ë¥¼ ìë³ íë ê²ì²ë¼.

![1](https://user-images.githubusercontent.com/87301268/224230695-7702a05a-c21e-45cf-bbbd-2a763f525583.png)
![2](https://user-images.githubusercontent.com/87301268/224230728-cdbeb6dd-98ab-475f-b2e4-83c94816a82e.png)

#### URL (Uniform Resource Locator)Â 

- **Locator**Â :Â ë¦¬ìì¤ê° ìë ìì¹ë¥¼ ì§ì  í©ëë¤.

<br>

#### URN (Uniform Resource Name)

- **Name**Â :Â ë¦¬ìì¤ì ì´ë¦ì ë¶ì¬ í©ëë¤.

<br>

ìì¹ë ë³í  ì ìì§ë§ ì´ë¦ì ë³íì§ ììµëë¤.<br> ëí URN ì´ë¦ë§ì¼ë¡ ì¤ì  ë¦¬ìì¤ë¥¼ ì°¾ì ì ìë ë°©ë²ì´ ë³´í¸íëì§ ìììµëë¤.

> URI, URL ì ëë§ ìê³ , URIë¥¼ URLê³¼ ê°ì ìë¯¸ë¡ ìê°íê³  ì´í´ íë©´ì ê³µë¶íë©´ ë©ëë¤.

<br>

### **2\. URL ì ì²´ ë¬¸ë²**

> í´ë¹ ìì ì´ë¦ : scheme :// \[userinfo@\]host\[:port\]\[/path\]\[?query\]\[#fragment\]  
> ì°ë¦¬ê° ì¤ì ë¡ ë³´ë : https://www.google.com:443/search?q=hello&hl=ko

<br>

<span style='background-color : #fff5b1'>scheme</span>

- ì£¼ë¡ íë¡í ì½ë¥¼ ì¬ì© í©ëë¤.
- ì´ë¤ ë°©ìì¼ë¡ ììì ì ê·¼ í  ê²ì¸ê° íë í´ë¼ì´ì¸í¸ì ìë² ê°ì ê·ì¹ ìëë¤.

<br>

<span style='background-color : #fff5b1'>userinfo</span>

- URLì ì¬ì©ìì ë³´ë¥¼ í¬í¨í´ì ì¸ì¦í´ì¼ í  ë ìëë° ê±°ì ì¬ì©íì§ ììµëë¤.

<br>

<span style='background-color : #fff5b1'>host</span>

- ëë©ì¸ ì´ë¦ì´ë IP ì£¼ìë¥¼ ì§ì  ì¬ì©ì´ ê°ë¥ í©ëë¤.

<br>

<span style='background-color : #fff5b1'>port</span>

- ì ì í¬í¸
- ì¼ë°ì ì¼ë¡ ì¹ ë¸ë¼ì°ì ììë ë§ì´ ìëµ íì§ë§, í¹ì  ìë²ì ë°ë¡ ì ê·¼ í  ëë port ë²í¸ ìë ¥ì í©ëë¤.

<br>

<span style='background-color : #fff5b1'>path</span>

- ë¦¬ìì¤ê° ìë ê²½ë¡ì´ì, ê³ì¸µ êµ¬ì¡°ë¡ ëì´ììµëë¤. (ex. home/post)

<br>

<span style='background-color : #fff5b1'>query</span>

- key ì value ííë¡ ë°ì´í°ê° ë¤ì´ ììµëë¤.
- ? ììíê³ , &ë¡ ì¶ê°ì ì¼ë¡ ì¿¼ë¦¬ ì¤í¸ë§ì ìë ¥ í©ëë¤.

<br>

<span style='background-color : #fff5b1'>fragment</span>

- HTML ë´ë¶ ë¶ë§í¬ ë±ì ì¬ì© í©ëë¤.
- ì ì¬ì©íì§ ìê³ , ìë²ì ì ì¡íì§ ììµëë¤.

<br>

### **3\. ì¹ ë¸ë¼ì°ì  ìì²­ íë¦**

![3](https://user-images.githubusercontent.com/87301268/224230739-1bb1f745-4c8c-4ef3-92d7-8db422d29b61.png)

1\. ë¸ë¼ì°ì ì URLì ìë ¥

2\. <span style='background-color : #fff5b1'>**DNS ìë²ë¡ IPë¥¼ ì°¾ìë´ê³ **</span> ìëµë PORTë schemeë¡ ì°¾ìµëë¤.

3\. ì¹ ë¸ë¼ì°ì ê° HTTP ìì²­ ë©ìì§ë¥¼ ìì± í©ëë¤.

![4](https://user-images.githubusercontent.com/87301268/224230743-4bafddb3-2bfc-454b-8073-a34b78047cde.png)

4\. <span style='background-color : #fff5b1'>**SOCKET ë¼ì´ë¸ë¬ë¦¬**</span>ë¥¼ íµí´ì <span style='background-color : #fff5b1'>**TCP/IPë¡ IPì PORT ì ë³´ë¥¼ ì°¾ì ê±°ë¥¼ 3 way handshake ë°©ìì¼ë¡ ìë²ë ì°ê²°**</span>

5\. <span style='background-color : #fff5b1'>**HTTP ìì²­ ë©ìì§**</span>ë OSì ìë <span style='background-color : #fff5b1'>**TCP/IP ê³ì¸µì¼ë¡ ì ë¬**</span>

6\. TCP/IP ê³ì¸µìì HTTP ìì²­ ë©ìì§ë¥¼ í¨í·ì¼ë¡ ë¬¶ìµëë¤.

![5](https://user-images.githubusercontent.com/87301268/224230749-b6901318-a3dd-407a-bde3-e61e561d7f1f.png)
![6](https://user-images.githubusercontent.com/87301268/224230755-1578f18f-de0b-4a9d-ac13-cd5c57d1de4d.png)

7\. ì¹ ë¸ë¼ì°ì ê° ë§ë  ìì²­ í¨í·ì ìë²ìì ëì°©íë©´ í¨í·ì ì´ì´ì HTTP ìì²­ ë©ìì§ë¥¼ íì¸í´ ìë²ê° í´ì í©ëë¤.

![7](https://user-images.githubusercontent.com/87301268/224230762-314b422d-3f36-4e71-a349-2034ceb2b488.png)

8\. ìë²ê° HTTP ìëµ ë©ìì§ë¥¼ ë§ë¤ì´ì TCP/IP í¨í·ì ê°ì¸ì í´ë¼ì´ì¸í¸ìê² ëì°©íë©´ í¨í·ì ì´ê³  HTTP ìëµ ë©ìì§ë¥¼ íì¸í´ì í´ë¼ì´ì¸í¸ê° í´ì í©ëë¤.

![8](https://user-images.githubusercontent.com/87301268/224230771-e2c35f62-af38-4bd5-9c51-1a7407a93d56.png)

9\. ì¹ ë¸ë¼ì°ì ê° HTML ë ëë§ì í´ì í´ë¼ì´ì¸í¸ê° HTML ê²°ê³¼ë¥¼ ë³¼ ì ììµëë¤.

<br>

```toc

```

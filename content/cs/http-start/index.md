---
emoji: 📖
title: HTTP ❓
date: '2022-12-01'
author: 최현호
tags: HTTP
categories: CS
---

> 김영한님의 모든 개발자를 위한 HTTP 웹 기본 지식을 수강하면서 정리한 내용입니다.

<br>

### **1\. HTTP(HyperText Transfer Protocol)**

> 문서 간의 링크를 통해서 하이퍼텍스트 문서를 통해서 연결하는 프로토콜 입니다.

HTTP 프토토콜에 HTML, TEXT, IMAGE, 음성, 영상, 파일, JSON, XML (API) 등 모든 형태의 데이터를 담아서 전송이 가능하고 심지어 서버간에 데이터를 주고 받을 때도 사용 합니다.

<br>

### **1.1 HTTP 역사**

1\. HTTP/0.9 (1991년) : GET 메서드만 지원, HTTP 헤더X

2\. HTTP/1.0 (1996년) : 메서드, 헤더 추가

3\. HTTP/1.1 (1997년) : 가장 많이 사용하고 우리에게 가장 중요한 버전

\* RFC2068 (1997년)  ➡️ RFC2616 (1999년)  ➡️ RFC7230~7235 (2014년)

4. HTTP/2 (2015년) : 성능 개선

5. HTTP/3 (진행중) : TCP 대신에 UDP 사용, 성능 개선

<br>

### **1\. 2 HTTP 기반 프로토콜**

- TCP: HTTP/1.1, HTTP/2는 TCP 기반
- UDP: HTTP/3
- 현재는 대부분 HTTP/1.1을 사용하는데, HTTP/2, HTTP/3도 점차 증가하고 있습니다.
- TCP 통신은 3 way handshake 때문에 신뢰성과 연결성은 보장하지만, 이 과정에 걸리는 시간만큼 속도가 떨어질 수 밖에 없습니다. 그렇기에 HTTP/3에서는 UDP 프로토콜을 애플리케이션 레벨에서 재설계를 하여 속도를 높혔습니다.

![1](https://user-images.githubusercontent.com/87301268/224236938-b849907b-9756-43d4-a863-f2ef410d6c5f.jpg)

<br>

### **2\. HTTP 특징**

HTTP 프로토콜은 기본적으로 클라이언트 서버 구조로 동작 합니다.

- 무상태 프로토콜(Stateless)</span>이고 비연결성</span>이라는 특징
- HTTP 메시지를 통해서 통신을 하고 단순하고 확장 가능

<br>

### **2.2 클라이언트 서버 구조**

#### **✔ Request Response 구조**

![2](https://user-images.githubusercontent.com/87301268/224236967-7bb501c2-3789-4bdc-9c59-530c99132b9c.jpg)

<br>

### **2.3 Stateful, Stateless**

#### **✔ 상태 유지 (Stateful)**

![3](https://user-images.githubusercontent.com/87301268/224236984-a0dd37b6-d7c5-49e7-82a9-8143c1c52fa8.png)
![4](https://user-images.githubusercontent.com/87301268/224237018-3e0228b4-fb13-4935-95f9-6f4aa9a2b146.png)

<br>

> 서버가 클라이언트의 상태를 보존 합니다.

- 클라이언트가 상품을 구입할 때 상품 정보와 결제 정보를 매칭된 서버로 계속 유지해야 합니다.
- 중간에 유지해야할 서버가 장애가 발생하면 다른 서버로 바뀌게 되면 클라이언트가 다시 정보를 요청을 해야 합니다.

<br>

### **✔ 무상태 (Stateless)**

![5](https://user-images.githubusercontent.com/87301268/224237041-843c9aa5-3e74-4c15-bec2-921ae070fbbe.png)
![6](https://user-images.githubusercontent.com/87301268/224237072-3285cdd6-e7cd-4f6e-a5aa-2e8595b0dc64.png)

<br>

> 서버가 클라이언트의 상태를 보존하지 않습니다.

- 클라이언트가 상품을 구입할 때 애초에 필요한 상품 정보와 결제 정보를  담아서 요청을 하면 서버에서는 **상태를 보존하지 않고 응답만 합니다.**</span>
- 중간에 서버가 장애가 발생해도 클라이언트가 필요한 정보들을 이미 담아 있어서 다른 서버에 요청 할 수 있습니다.

<br>

### **✔ 무상태 스케일 아웃**

![7](https://user-images.githubusercontent.com/87301268/224237092-8e3f7364-9b56-49c6-acf8-c848d1b78d07.png)

로그인 없이 검색만 할 경우 검색 서버에 트래픽이 많이 올라가도 **검색 서버에 클라이언트의 상태를 유지되지 않아서**</span> 서버를 많이 늘릴 수 있습니다. 클라이언트, 서버 아키텍처에서는 엄청난 확장성이 가져와 무한한 서버 증식을 할 수 있습니다.

<br>

### **상태 유지와 무상태의 한계**

**1\. 상태 유지의 한계**</span>

- **로그인 해야 되는 경우는 로그인한 사용자가 로그인했다는 상태를 서버에 유지해야 합니다.**</span>
- 브라우저에서 쿠키와 서버의 세션을 같이 조합해서 상태를 유지하는 기능을 사용. 서버에 세션이 날아가거나 세션 서버가 죽어버리면 전체적으로 로그인이 풀려버리게 됩니다.
- 상태유지는 최소한으로만 사용 합니다.

<br>

**2\. 무상태의 한계**</span>

- 로그인할 필요 없는 단순한 소개 페이지일 때는 상태를 유지할 필요가 없어서 설계하기가 쉽습니다.
- **클라이언트가 전송할 때 필요한 정보를 담아야 되서 데이터량이 많습니다.**</span>

<br>

### **3\. 비 연결성(connectionless)**

#### **✔** **연결을 유지하는 모델**

![8](https://user-images.githubusercontent.com/87301268/224237117-eca51bf4-f88a-4b6f-b3d1-a4a3a946dfd8.png)

여러 클라이언트에서 서버로 응답을 요청하면 서버는 요청이 들어온 클라이언트 마다 연결을 유지해서 상태를 저장.

**클라이언트가 많아 질수록 연결을 유지하는 서버의 자원이 계속 소모되는 단점**</span>이 있습니다.

<br>

#### **✔** **연결을 유지하지 않는 모델**

![9](https://user-images.githubusercontent.com/87301268/224237141-ae491adf-6248-4384-92da-a6e177515eb2.png)

클라이언트가 요청할 때마다 서버는 응답만 보내주고 연결을 종료하기 때문에

**서버가 최소한의 자원으로 유지 할 수 있습니다.**</span>

<br>

#### 연결성

> HTTP는 기본적으로 연결을 유지하지 않는 모델

왜냐하면 초 단위에의 이하의 빠른 속도로 응답을 할 뿐더러, 1시간 동안 수천명이 서비스를 사용해도 실제 서버에서 동시에 처리하는 요청은 별로 없기 때문에 서버 입장에서는 자원의 가용성이 훨씬 높습니다.

<br>

#### 연결성의 한계

**TCP/IP 연결을 새로 맺을 때 마다 3 way handshake 시간 추가가 되서 클라이언트 입장에서는 느립니다.**</span>

웹 브라우저로 사이트를 요청하면 HTML, CSS, Javascript,  추가 이미지 등 수많은 자원이 함께 다운로드할 때 연결하고 끊고 또 연결하고 또 끊고 하면 비효율적 입니다.

<br>

#### 비연결성의 극복

HTTP는 기본적으로 지속 연결(Persistent Connection)</span>로 문제 해결. HTTP/2, HTTP/3 에서는 더 많은 최적화가 되어 있습니다.

![10](https://user-images.githubusercontent.com/87301268/224237157-48f98465-e77a-4f7d-a395-d0dd1e7249a1.png)
![11](https://user-images.githubusercontent.com/87301268/224237484-bc084e21-4a32-4a20-afa2-c66c7b43f7cc.png)

<br>

### **4\. HTTP 메시지**

#### HTTP 메시지 구조

![12](https://user-images.githubusercontent.com/87301268/224237500-32337398-3332-47f7-bb19-19cb42c50063.png)

<br>

#### HTTP 요청 메시지

> GET /search?q=hello&hl=ko HTTP/1.1  
> method SP request-target SP HTTP-version CRLF  
> Host: www.google.com  
> field-name ":" OWS field-value OWS

<br>

**method (메서드)**</span>

HTTP method의 종류가 GET, POST, PUT, DELETE 등이 있고 서버가 수행해야 할 동작을 지정 합니다.

<br>

**request-target (요청 대상)**</span>

> /absolute-pate\[?query\]  
> /절대경로\[?쿼리\]

보통 절대경로로 ' / '로 시작하고 뒤에 쿼리가 붙습니다.

---

#### HTTP 응답 메시지

> HTTP/1.1 200 OK  
> HTTP-version SP status-code SP reason-phrase CRLF <br>
> HTTP-version (HTTP 버전) status-code (HTTP 상태 코드)

클라이언트가 보낸 요청이 성공했는지 실패했는지 나타내는 상태 입니다.

<br>

**reason-phrase (이유 문구)**</span>

사람이 이해할 수 있는 짧은 상태 코드를 읽을 수 있는 글

---

**header**

> Content-Type: text/html;charset=UTF-8  
> Content-Length: 3423  
> field-name ":" OWS field-value OWS

<br>

HTTP 헤더의 용도는 **HTTP 전송에 필요한 메시지 바디의 내용, 메시지 바디의 크기, 압축, 인증, 요청 클라이언트(브라우저) 정보, 서버 애플리케이션 정보, 캐시 관리 정도 등 모든 부가 정보**</span>가 포함되어 있습니다.

<br>

**body - 실제 전송할 데이터**

```html
<html>
  <body>
    ...
  </body>
</html>
```

<br>

```toc

```

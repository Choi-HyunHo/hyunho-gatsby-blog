---
emoji: 📖
title: HTTP - URI와 웹 브라우저 요청 흐름
date: '2022-11-26'
author: 최현호
tags: HTTP
categories: CS
---

> 김영한님의 모든 개발자를 위한 HTTP 웹 기본 지식을 수강하면서 정리한 내용입니다.

<br>

### **1\. URI (Uniform Resource Identifier)** 

- **Uniform**</span> : 리소스 식별하는 통일된 방식 입니다.
- **Resource**</span> :  URI로 식별할 수 있는 모든 걸 자원이라고 합니다. 웹 브라우저에 있는 HTML의 파일 것만 자원을 뜻하는 게 아니라 실시간 교통 정보 등등 이런것도 자원이라고 합니다.
- **Idenrifier**</span> : 다른 항목과 구분하는 데 필요한 정보. 사람을 식별할 때 주민등록번호를 식별 하는 것처럼.

![1](https://user-images.githubusercontent.com/87301268/224230695-7702a05a-c21e-45cf-bbbd-2a763f525583.png)
![2](https://user-images.githubusercontent.com/87301268/224230728-cdbeb6dd-98ab-475f-b2e4-83c94816a82e.png)

#### URL (Uniform Resource Locator) 

- **Locator** : 리소스가 있는 위치를 지정 합니다.

<br>

#### URN (Uniform Resource Name)

- **Name** : 리소스에 이름을 부여 합니다.

<br>

위치는 변할 수 있지만 이름은 변하지 않습니다.<br> 또한 URN 이름만으로 실제 리소스를 찾을 수 있는 방법이 보편화되지 않았습니다.

> URI, URL 정도만 알고, URI를 URL과 같은 의미로 생각하고 이해 하면서 공부하면 됩니다.

<br>

### **2\. URL 전체 문법**

> 해당 순서 이름 : scheme :// \[userinfo@\]host\[:port\]\[/path\]\[?query\]\[#fragment\]  
> 우리가 실제로 보는 : https://www.google.com:443/search?q=hello&hl=ko

<br>

scheme</span>

- 주로 프로토콜를 사용 합니다.
- 어떤 방식으로 자원에 접근 할 것인가 하는 클라이언트와 서버 간의 규칙 입니다.

<br>

userinfo</span>

- URL에 사용자정보를 포함해서 인증해야 할 때 있는데 거의 사용하지 않습니다.

<br>

host</span>

- 도메인 이름이나 IP 주소를 직접 사용이 가능 합니다.

<br>

port</span>

- 접속 포트
- 일반적으로 웹 브라우저에서는 많이 생략 하지만, 특정 서버에 따로 접근 할 때는 port 번호 입력을 합니다.

<br>

path</span>

- 리소스가 있는 경로이자, 계층 구조로 되어있습니다. (ex. home/post)

<br>

query</span>

- key 와 value 형태로 데이터가 들어 있습니다.
- ? 시작하고, &로 추가적으로 쿼리 스트링을 입력 합니다.

<br>

fragment</span>

- HTML 내부 북마크 등에 사용 합니다.
- 잘 사용하지 않고, 서버에 전송하지 않습니다.

<br>

### **3\. 웹 브라우저 요청 흐름**

![3](https://user-images.githubusercontent.com/87301268/224230739-1bb1f745-4c8c-4ef3-92d7-8db422d29b61.png)

1\. 브라우저에 URL을 입력

2\. **DNS 서버로 IP를 찾아내고**</span> 생략된 PORT는 scheme로 찾습니다.

3\. 웹 브라우저가 HTTP 요청 메시지를 생성 합니다.

![4](https://user-images.githubusercontent.com/87301268/224230743-4bafddb3-2bfc-454b-8073-a34b78047cde.png)

4\. **SOCKET 라이브러리**</span>를 통해서 **TCP/IP로 IP와 PORT 정보를 찾은 거를 3 way handshake 방식으로 서버랑 연결**</span>

5\. **HTTP 요청 메시지**</span>는 OS에 있는 **TCP/IP 계층으로 전달**</span>

6\. TCP/IP 계층에서 HTTP 요청 메시지를 패킷으로 묶습니다.

![5](https://user-images.githubusercontent.com/87301268/224230749-b6901318-a3dd-407a-bde3-e61e561d7f1f.png)
![6](https://user-images.githubusercontent.com/87301268/224230755-1578f18f-de0b-4a9d-ac13-cd5c57d1de4d.png)

7\. 웹 브라우저가 만든 요청 패킷을 서버에서 도착하면 패킷을 열어서 HTTP 요청 메시지를 확인해 서버가 해석 합니다.

![7](https://user-images.githubusercontent.com/87301268/224230762-314b422d-3f36-4e71-a349-2034ceb2b488.png)

8\. 서버가 HTTP 응답 메시지를 만들어서 TCP/IP 패킷을 감싸서 클라이언트에게 도착하면 패킷을 열고 HTTP 응답 메시지를 확인해서 클라이언트가 해석 합니다.

![8](https://user-images.githubusercontent.com/87301268/224230771-e2c35f62-af38-4bd5-9c51-1a7407a93d56.png)

9\. 웹 브라우저가 HTML 렌더링을 해서 클라이언트가 HTML 결과를 볼 수 있습니다.

<br>

```toc

```

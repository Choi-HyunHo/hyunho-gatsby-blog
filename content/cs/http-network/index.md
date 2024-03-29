---
emoji: 📖
title: HTTP - 인터넷 네트워크
date: '2022-11-25'
author: 최현호
tags: HTTP
categories: CS
---

> 김영한님의 모든 개발자를 위한 HTTP 웹 기본 지식을 수강하면서 정리한 내용입니다.

<br>

### **1\. 인터넷 통신**

**인터넷망에서 컴퓨터들은 어떻게 통신할까 ❓**

![1](https://user-images.githubusercontent.com/87301268/224227109-125e76af-c6b3-45b4-8182-09c9853614d0.png)

클라이언트와 서버가 가까이 있으면 케이블로 연결하여 통신 할 수 있습니다.

하지만, 대부분 두 사이가 멀기 때문에 **인터넷망** 을 통해서 메세지를 주고 받습니다.

또한 **인터넷망 내부**는 수많은 중간 노드(서버)</span>를  거쳐 메세지가 **서버(목적지)로 전달**되기 때문에

어떠한 규칙을 가지고 노드들을 지나 전달되는지 지금부터 살펴보겠습니다.

<br>

### **2\. IP (인터넷 프로토콜)**

**✔ 메세지를 전달하기 위해서 클라이언트(출발지) 와 서버(목적지) IP주소</span>가 부여된 상태여야 합니다.**

![2](https://user-images.githubusercontent.com/87301268/224227150-8be4db25-a771-422a-b137-7ecb009d1d38.png)

<br>

**IP(인터넷 프로토콜) 역할**

- 지정한 IP 주소에 데이터 전달
- **패킷(Packet)**</span> 이라는 통신 단위로 데이터 전달

패킷 단위로 데이터를 전달하며, 전송데이터 + 출발지 IP(클라이언트) + 목적지 IP(서버)  등을 함께 묶어서 전달 합니다.

![3](https://user-images.githubusercontent.com/87301268/224227176-0ff74367-ad9f-4f04-9da8-1eb3233b7936.png)

<br>

**✔ 아래 그림처럼 클라이언트, 서버 모두 새로 메시지를 만들어서 패킷을 통해 보내는데,** <br>
**✔ 인터넷망에서 노드끼리 출발지가 어디고, 목적지가 어딘지 이해를 하면서 전달 됩니다**.

<br>

![4](https://user-images.githubusercontent.com/87301268/224227193-4acb6bc5-7e85-4021-a841-7313879528aa.png)
![5](https://user-images.githubusercontent.com/87301268/224227217-9e9a9fa1-58fd-4780-930e-44a4d667d20d.png)

<br>

**❗ 하지만 인터넷 망이 복잡하기 때문에 서로 다른 곳으로 전달 될 수도 있습니다.** <br>
**❗ 또한 IP 라는 패킷에 담는 방식으로는 아래와 같은 한계가 있습니다.**

<br>

### **3\. IP 프로토콜의 한계**

**✔ 비연결성**</span>

![6](https://user-images.githubusercontent.com/87301268/224227234-28a3f50a-d2c0-4b35-99a6-2e77993461ca.png)

<br>

**✔ 비신뢰성**</span>

![7](https://user-images.githubusercontent.com/87301268/224227255-da389581-d5aa-4b02-865f-a619b08bd3dc.png)
![8](https://user-images.githubusercontent.com/87301268/224227283-144cef58-f2cb-4b00-9ea0-d05eb8593932.png)

- 메시지를 한 번에 보낼 때 보통 1500byte 가 넘어가면 부담스러워 나눠 보내는데</span>,
- 인터넷 망안에 있는 노드들을 통해서 패킷마다 노드를 각각 선택해서 따로 보내게 되는 상황이 발생하다보니
- 클라이언트가 보낸 메시지 순서가 서버가 받은 메시지 순서와 상이하게 됩니다.

<br>

### **4\. TCP / UDP**

**✔ 앞서 보았던 IP 프로토콜의 한계점들을 해결</span> 해주는 것이 TCP 입니다**.

4.1 인터넷 프로토콜 4계층

![9](https://user-images.githubusercontent.com/87301268/224227392-d69f0bad-bf90-4ff9-a299-1ec69e679ba1.png)

<br>

4.2 프로토콜 계층

![10](https://user-images.githubusercontent.com/87301268/224227423-fca5bd44-dfd6-442c-86e3-c94d5f6c097e.png)

1.  Hello world!' 라는 메시지를 보낼 때 SOCKET 라이브러리를 통해서 OS계층에서 TCP 정보를 감싼다.
2.  그 밑에 IP 패킷이 생성되서 IP와 관련된 정보도 있고 그 안에 TCP와 관련된 정보가 있다.
3.  이 메시지를 랜카드를 통해서 나갈 때 Ethernet frame을 포함해서 나가게 된다.

> Ethernet frame : 램 카드에 등록된 맥주소의 물리적인 정보

<br>

4.3 TCP / IP 패킷 정보

![11](https://user-images.githubusercontent.com/87301268/224228214-fce1b08e-7cda-4c6d-ba71-3eca8f3dda8e.png)

<br>

**✔ IP 프로토콜에서 해결이 안된 순서 제어 문제들이 TCP 프로토콜이 해결이 되고 전송 데이터를 넣게 됩니다.**

<br>

### **5\. TCP(Transmission Control Protocol : 전송 제어 프로토콜)의 특징**

**✔ TCP 3 way handshake (가상 연결)**

![12](https://user-images.githubusercontent.com/87301268/224228233-924dc4f5-e04b-433f-a376-cb50793e974d.png)

- SYN(synchronize)</span> : 접속 요청
- ACK(acknowledge)</span> : 요청 수락

1\. 클라이언트에서 먼저 SYN 메시지를 서버에게 접속을 허락해달라고 요청

2\. 서버는 접속을 수락하고 ACK 메시지를 클라이언트 한테 보낼 때 서버도 접속을 허락해달라고 SYN 메시지와 함께 보냄

3\. 클라이언트가 접속을 수락하고 서버에서 ACK 메시지를 보냄.

➡ 참고로 요즘 최적화가 잘 되서 마지막 ACK를 보낼 때 데이터도 전송.

4\. 3단계를 거쳐 연결이 되고나면 데이터를 전송.

<br>

위에 TCP 연결이 되었다고 연결이 된 게 아니라 **개념적으로 연결되어 있을 뿐**</span>입니다.

인터넷 망에 있는 수 많은 서버들이 연결되어 있는 건지 잘 모릅니다.

<br>

✔ 데이터 전달 보증</span>

![13](https://user-images.githubusercontent.com/87301268/224228245-f2f3a015-3edc-41b3-8eed-b6542dda0af6.png)

메시지에 TCP 프로토콜이 포함되어 있으면 메시지를 전송할 때 서버에서 잘 받았다고 다시 보내는데

클라이언트가 메시지를 잘 전달 됐는지 안됐는지 이해를 할 수 있습니다.

<br>

✔ 순서보장</span>

![14](https://user-images.githubusercontent.com/87301268/224228254-d209a149-990f-4d48-9731-4a04a03b844a.png)

TCP 정보 안에는 전송 제어, 순서, 검증 정보가 있습니다.

<br>

### **6\. UDP(User Datagram Protocol : 사용자 데이터그램 프로토콜)의 특징**

- TCP 3 way handshake X
- 데이터 전달 보증 X
- 순서 보장 X

TCP는 데이터 양도 많고 3 way hands 때문에 전송 속도가 느린 반면에

UDP는 아무것도 없기 때문에 상대적으로 전송 속도가 빠릅니다.

<br>

### **7\. PORT**

**✔  클라이언트 PC에서 IP가 한 개만 할당</span>되어 있어 있는데 게임용, 음악용 등 구분하기위해 PORT를 사용**

![15](https://user-images.githubusercontent.com/87301268/224228260-3e7c850f-59c8-483f-bce4-84c835afb79c.png)

클라이언트에서 게임도 하고 화상통화도 하고 웹 브라우저도 하고 있으면 여러 개의 서버랑 통신 해야 됩니다.

클라이언트 IP에서 패킷이 올텐데 이게 게임에서 온 패킷인지 화상통화에서 온 패킷인지 웹 브라우저에서는 패킷인지 알 수가 없습니다.

<br>

**이러한 문제로 어떻게 구분할 수 있을까❓**

![16](https://user-images.githubusercontent.com/87301268/224228294-ad53a656-9837-4b66-8b52-2f054f1c43c9.png)

위에 봤던 TCP/IP 패킷 정보에 TCP와 UDP에서 출발지 PORT와 목적지 PORT가 있습니다.

IP는 목적지 서버를 찾는 용도이고 서버 안에서 돌아가는 애플리케이션들을 구분하는게 PORT 입니다.</span>

<br>

**✔ 같은 IP 내에서 프로세스 구분**

![17](https://user-images.githubusercontent.com/87301268/224228304-10e9c5c0-9595-42fa-bff1-bc965b11668d.png)

위와 같이 예시처럼 각각 클라이언트와 서버 안에 맞는 PORT 번호를 찾아서 연결하면 됩니다.

여기서 패킷을 보낼 때 IP와 PORT를 포함해서 보냅니다.

<br>

### **7\. DNS**

✔ **IP 주소의 문제점**

![18](https://user-images.githubusercontent.com/87301268/224228316-21e16761-e7a1-493f-88fc-e5df426a5b0e.png)

IP를 가지고 서로 통신을 할 수 있지만 IP가 숫자로 되어 있어서 다 기억하기가 어렵습니다.

그리고 IP가 바뀌는 일이 많아져서 접속이 안되는 경우가 생깁니다.

<br>

✔ **DNS (Domain Name System : 도메인 네임 시스템)**

![19](https://user-images.githubusercontent.com/87301268/224228327-d95a74ab-6c83-4d81-97a4-715031a105df.png)

클라이언트가 DNS 서버에다가 도메인에 맞는 IP를 달라고 요청을 하면 DNS 서버가 응답을 하고

클라이언트는 서버에 도메인으로 접속할 수 있습니다.

<br>

```toc

```

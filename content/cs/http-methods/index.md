---
emoji: 📖
title: HTTP - 메서드
date: '2023-02-17'
author: 최현호
tags: HTTP
categories: CS
---

> 김영한님의 모든 개발자를 위한 HTTP 웹 기본 지식을 수강하면서 정리한 내용 입니다.

<br>

### **1\. HTTP API 를 만들어 보기**

회원 정보 관리 API 설계

1\. 회원 **목록 조회** :  /read-member-list  
2\. 회원 **조회** :  /read-member-by-id  
3\. 회원 **등록** : /create-member  
4\. 회원 **수정** : /update-member  
5\. 회원 **삭제** : /delete-member

➡️ 요구사항 기반으로 API 를 만들면 위와 같이 현업에서 잘못된 API URI 설계를 합니다.

<br>

### **1.1  API 설계 분리**

리소스 : 회원

행위 : 조회, 등록, 수정, 삭제

➡️ API 설계 할 때 리소스와 해당 리소스를 대상으로 하는 행위를 분리해야 합니다.

➡️ 회원이라는 리소스만 식별하고 해당 리소스를 URI 에 매핑하면 됩니다.

<br>

### **1.2 API 재설계**

1\. 회원 **목록 조회** :  /members  
2\. 회원 **조회** : /members/{id}  
3\. 회원 **등록** : /members/{id}  
4\. 회원 **수정** : /members/{id}  
5\. 회원 **삭제** : /members/{id}

➡️ 아직도 행위는 따로 구분되지 않습니다.

➡️ 구분하는 방법은 URI 리소스만 식별해 놓으면 HTTP 메서드인 GET, POST, PUT, DELETE 등 조회, 수정, 수정, 삭제 역할을 수행 합니다.

➡️ 추가로 계층 구조상 상위 컬렉션을 보고 복수 단어 사용을 권장 합니다.(member → members)

<br>

### **2\. HTTP 메서드** 

**HTTP 메서드 종류**

- <span style='background-color : #fff5b1'>**GET**</span> : 리소스를 조회
- <span style='background-color : #fff5b1'>**POST**</span> : 요청 데이터를 담아서 처리
- <span style='background-color : #fff5b1'>**PUT**</span> : 리소스를 대체, 해당 리소스가 없으면 생성
- PATCH : 리소스 부분 변경
- <span style='background-color : #fff5b1'>**DELETE**</span> : 리소스 삭제
- HEAD : GET과 동일하지만 메시지 부분을 제외하고 상태 줄과 헤더만 반환
- OPTIONS : 대상 리소스에 대한 통신 가능 옵션(메서드)를 설명 (주로 CORS에서 사용)
- TRACE : 대상 리소스에 대한 경로를 따라 메시지 루프백 테스트를 수행.

<br>

#### **GET**

<span style='background-color : #fff5b1'>**리소스를 조회하는데 보통 사용 됩니다.**</span>

- 서버에 전달하고 싶은 데이터는 쿼리 파라미터 또는 쿼리 스트링을 통해서 전달 합니다.
- GET 은 메세지 바디를 전달할 수 있지만, 실무에서 거의 사용하지 않습니다.(지원하지 않는 서버가 많다.)

![1](https://user-images.githubusercontent.com/87301268/224240236-fca0ca99-b3fb-436e-9970-99b35fb5cd43.png)
![2](https://user-images.githubusercontent.com/87301268/224240240-67482a8f-605c-42d6-bf72-38306d13241e.png)

클라이언트에서 /members/100 을 요청하고 서버에서는 /members/100 에서 데이터베이스를 조회하여 응답 메시지를 보냅니다.

<br>

#### **POST**

<span style='background-color : #fff5b1'>**클라이언트에서 메시지 바디를 통해 서버로 요청한 후 서버가 데이터를 처리하는 기능을 수행 합니다.**</span>

- 전달된 데이터로 신규 데이터 등록이나 변경된 프로세스를 다룰 때 많이 사용 합니다.

![3](https://user-images.githubusercontent.com/87301268/224240245-87e6072f-39f3-43ed-aa96-156bd152c189.png)
![4](https://user-images.githubusercontent.com/87301268/224240253-eb8e8d42-aa20-4217-a704-be148a655253.png)
![5](https://user-images.githubusercontent.com/87301268/224240258-6eae90fd-57ff-4d1e-95cb-f993ba9b4f92.png)

리소르를 /members 로 전달하고  즉, 클라이언트는 필요한 데이터를 서버에 전달하고 서버에서는 데이터를 내부적으로 어떻게 처리할건지 미리 약속을 합니다. 그 후 서버는 /members/100 이라는 신규 리소스 식별자를 생성하고 자원이 생산된 경로를 응답 메시지로 보냅니다.

<br>

#### **PUT**

<span style='background-color : #fff5b1'>**리소스가 있으면 대체하고, 리소스가 없으면 생성 합니다.**</span>

- POST 와 다른 점은 PUT 은 클라이언트가 구체적인 리소스의 전체 위치를 알고 URI 를 지정해서 서버에 전달 합니다.

<br>

**1\. 리소스가 <span style='background-color : #fff5b1'>있는 경우</span>**

![6](https://user-images.githubusercontent.com/87301268/224240261-2155887c-43a1-4770-a7bd-899582030b05.png)
![7](https://user-images.githubusercontent.com/87301268/224240265-81a81697-6dd7-401a-a734-89a776f0e282.png)

클라이언트가 /members/100 리소스 지정해서 데이터를 서버에게 보내면 서버도 /members/100 리소스가 있습니다.

그러면 클라이언트가 보낸 리소스로 <span style='background-color : #fff5b1'>**대체**</span> 해버립니다.

<br>

**2\. 리소스가 <span style='background-color : #fff5b1'>없는 경우</span>**

![8](https://user-images.githubusercontent.com/87301268/224240269-53e89dad-b693-4456-baf2-c3203f53b6fb.png)
![9](https://user-images.githubusercontent.com/87301268/224240274-7be77b2a-86da-4c40-aa73-04e696199a9e.png)

클라이언트가 members/100 리소스 지정해서 데이터를 서버에게 보냈는데 <span style='background-color : #fff5b1'>**서버에서 해당 리소스가 없어서 신규 리소스로 생성**</span> 됩니다.

<br>

**✅ PUT 주의 사항**

![10](https://user-images.githubusercontent.com/87301268/224241397-97b72fb5-da1a-41b7-9de2-d739883b56ee.png)
![11](https://user-images.githubusercontent.com/87301268/224241402-909970f6-ed29-4d59-a14e-a6e8ac80bbca.png)

클라이언트가 /members/100 데이터에 username이 없고 age로 지정해서 보내면 서버에서는 age를 업데이트를 하는데 username 자체가 날아가버립니다. <span style='background-color : #fff5b1'>**기존 리소스를 새로운 리소스로 완전히 대체하는 것이 중점!**</span> 이렇게 되면 리소스를 수정하기 어렵다.

<br>

#### **PATCH**

![12](https://user-images.githubusercontent.com/87301268/224241999-870f17e1-e19a-4efe-9d7c-0dec7e9e9a01.png)
![13](https://user-images.githubusercontent.com/87301268/224242010-4c0f905a-134d-4823-b66f-327bfed8bf86.png)

리소스를 <span style='background-color : #fff5b1'>**부분 변경**</span> 합니다. 클라이언트가 /members/100 데이터에 username이 없고 age로 지정해서 보내면 서버에서는 username은 남아있고 age만 변경!

<br>

#### **DELETE**

![14](https://user-images.githubusercontent.com/87301268/224241439-8cba021d-bbd0-4ead-a53d-38f1c20ca673.png)
![15](https://user-images.githubusercontent.com/87301268/224241448-449b999c-90a4-4dcc-8f0e-f54df1a36b43.png)

클라이언트가 /members/100 를 삭제해달라고 요청하면 <span style='background-color : #fff5b1'>**서버에서 리소스를 삭제 합니다.**</span>

<br>

### **3\. HTTP 메서드 속성**

![16](https://user-images.githubusercontent.com/87301268/224241454-1b222692-fc8e-4fdd-9c33-0f37ebed4a7d.png)

<br>

#### **안전(Safe Methods)**

**호출해도 <span style='background-color : #fff5b1'>리소스가 변경하지 않습니다.</span>**

- **GET은 단순히 조회만 하기 때문에 안전** 합니다 이유는 ? 한번 호출해도 여러번 호출해도 변경이 일어나지 않기 때문!
- <span style='background-color : #fff5b1'>**POST, PUT, PATCH, DELETE는 안전하지 않습니다.**</span>
- 만약에 그래도 계속 호출해서 서버에서 로그가 계속 쌓게되서 서버 장애가 일어날 때는 안전은 그런 부분까지 고려하지 않습니다.
- <span style='background-color : #fff5b1'>**안전은 해당 리소스만 고려**</span>

<br>

#### **멱등(Idempotent Methods)**

**연산을 여러 번 적용하더라도 <span style='background-color : #fff5b1'>결과가 달라지지 않는 성질</span>** 을 멱등성(idempotence) 이라고 합니다.

- GET은 한 번 조회하든 두 번 조회하든 같은 결과로 조회 됩니다.
- PUT은 결과를 대체하기 때문에 같은 요청을 여러 번 해도 최종 결과는 동일 합니다.
- DELETE는 결과를 삭제하기 때문에 같은 요청을 여러 번 해도 삭제된 결과는 동일 합니다.
- POST은 멱등이 아닙니다. 두 번 호출하면 같은 결제가 중복해서 발생해서 새로운 리소스로 구별이 됩니다.

<br>

#### **캐싱 가능 Cacheable**

웹 브라우저에 용량이 큰 이미지를 한번 요청을 하면 그 다음에 똑같이 용량이 큰 이미지를 요청할 필요 없습니다.

똑같은 이미지를 서버에서 다운로드 받으면 오래 걸리기 때문에 비효율적 입니다.

그래서 <span style='background-color : #fff5b1'>**로컬 PC에 웹 브라우저 저장을 하고 있을 때 캐시라고 합니다.**</span>

- 캐시는 GET, HEAD, POST, PATCH 가능 하지만 실제로는 GET, HEAD 정도만 캐시로 사용
- POST, PATCH는 캐시를 하려면 본문 내용으로 리소스랑 캐시 키가 맞아아야 되는데 복잡해서 구현이 쉽지 않습니다.
- GET, HEAD는 URI만 캐시 키로 캐시해서 비교적 간단합니다.

<br>

```toc

```

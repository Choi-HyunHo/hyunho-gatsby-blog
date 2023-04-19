---
emoji: 📖
title: 원티드 - 프리온보딩 프론트엔드 챌린지 Week 2-1
date: '2023-04-10'
author: 최현호
tags: React
categories: React
---

해당 포스트는 원티드의 [프리온보딩 프론트엔드 챌린지](https://www.wanted.co.kr/events/pre_challenge_fe_8) 강의 내용 복습 겸 정리 입니다.

### Week 2-1. 현업에서 React를 최적화하는 방법

리액트에 사용되는 최적화 hook 외에도 다양한 사이트로 최적화를 할 수 있는 방법에 대해 알려주셨습니다.

Lighthouse, Profiler, 개발자도구 Performance 등 당장 사용하지 않더라도 언제 사용할지 모르니까 조금이라도 정리해두자..

<br>

### Lighthouse

구글에서 만든 퍼포먼스 측정 도구

➡️ [Lighthouse](https://github.com/GoogleChrome/lighthouse/blob/HEAD/docs/user-flows.md)

- 다양한 지표들이 있다.
- 3 가지 주요 타입
  - Navigation
  - Timespan
  - Snapshot

<br>

### Profiler

React 에서 제공하는 성능 측정 도구

➡️ [Profiler](https://react.dev/reference/react/Profiler)

- 컴포넌트별로 렌더링 시간을 확인 할 수 있다.
- 주요 용어 <br>
  - phase: mount, update, nested-update
  - actualDuration: Profiler를 렌더링하는데 걸린 시간
  - baseDuration: 아무런 최적화 없이 Profiler를 렌더링할 때 걸릴 시간 (예상치)
  - startTime: rendering을 시작한 시간
  - endTime: rendering이 commit된 시간

<br>

### 개발자도구

Performance 탭

- 지표를 보고 개선할 내용은 크게 없고 개념을 알 수 있다.

➡️ [Core Web Vitals](https://web.dev/vitals/#core-web-vitals)

- 주요 용어
  - LCP : Largest Contentful Paint
  - FID : First Input Delay
  - CLS : Cumulative Layout Shift

<br>

### Next.js - First Load JS

- 성능 개선 후 개선사항 도출

➡️ [@next/bundle-analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)

<br>

```toc

```

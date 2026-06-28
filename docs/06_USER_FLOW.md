# 06_USER_FLOW.md

# Planat

### User Flow

Version 1.0

---

# Purpose

This document defines the primary user flows for the MVP.

Each flow describes:

- User Goal
- User Action
- System Response
- Expected Experience

The MVP focuses on a single happy path for usability testing.

---

# Primary User Journey

```text
앱 실행

↓

내 식물

↓

식물 선택

↓

식물 상세

↓

물 주기

↓

오늘의 미션

↓

AI 진단

↓

알림 확인

↓

캘린더

↓

스토어
```

---

# Flow 01

## Browse My Plants

### User Goal

내가 키우는 식물을 확인한다.

---

### User Actions

앱 실행

↓

내 식물 화면 진입

↓

등록된 식물 확인

↓

원하는 식물 선택

---

### System Response

- 식물 목록 표시
- 물주기 상태 표시
- 오늘의 미션 여부 표시
- 현재 건강 상태 표시

---

### Experience Goal

사용자는

"오늘 어떤 식물을 돌볼까?"

를 자연스럽게 생각하게 된다.

---

# Flow 02

## Water a Plant

### User Goal

식물에게 물을 준다.

---

### User Actions

식물 상세

↓

물 주기 버튼 탭

---

### System Response

💧 물방울 애니메이션

↓

식물 상태 업데이트

↓

토스트 메시지

↓

Calendar 자동 저장

↓

최근 관리 기록 업데이트

---

### Experience Goal

물을 주는 행동이

기록이 아니라

돌봄처럼 느껴져야 한다.

---

# Flow 03

## Complete Today's Mission

### User Goal

오늘의 작은 관찰을 수행한다.

---

### User Actions

오늘의 미션 확인

↓

식물 관찰

↓

관찰 결과 선택

예시

🌱 새 잎이 생겼어요

🍃 잎이 노랗게 변했어요

☀️ 변화가 없어요

↓

(선택)

메모 작성

↓

(선택)

사진 추가

↓

미션 완료

---

### System Response

미션 완료 표시

↓

Calendar 자동 저장

↓

최근 관리 기록 업데이트

↓

선택한 메모와 사진 저장

---

### Experience Goal

관찰은 쉽고,

기록은 자연스럽게 이루어진다.

---

# Flow 04

## AI Diagnosis

### User Goal

식물의 문제를 이해한다.

---

### User Actions

AI 진단 시작

↓

질문 확인

↓

답변 선택

↓

다음 질문

↓

진단 결과 확인

↓

관리 방법 확인

---

### System Response

질문은 한 번에 하나씩 제공

↓

이전 관리 기록 참고

↓

원인 설명

↓

관리 방법 추천

↓

Calendar 자동 저장

---

### Experience Goal

AI가 답을 대신 주는 것이 아니라,

사용자가 식물을 이해하도록 돕는다.

---

# Flow 05

## Check Notifications

### User Goal

오늘 확인해야 하는 내용을 살펴본다.

---

### User Actions

알림 버튼 탭

↓

알림 목록 확인

↓

알림 선택

---

### System Response

예시

🌧

오늘 오후에는 비가 올 예정이에요.

↓

베란다 식물을 안으로 들여볼까요?

---

또는

🌱

새로운 잎이 생겼는지 함께 살펴봐요.

---

### Experience Goal

알림은

명령이 아니라

돌봄을 제안한다.

---

# Flow 06

## View Calendar

### User Goal

식물과 함께한 시간을 돌아본다.

---

### User Actions

캘린더 진입

↓

날짜 선택

↓

기록 확인

---

### System Response

표시 내용

💧 물 주기

☑ 오늘의 미션

🌱 관찰 결과

🤖 AI 진단

📷 사진 (선택)

📝 메모 (선택)

---

### Experience Goal

사용자는

해야 했던 일을 보는 것이 아니라

함께 보낸 시간을 떠올린다.

---

# Flow 07

## Browse Store

### User Goal

식물 용품을 둘러본다.

---

### User Actions

스토어 진입

↓

상품 선택

↓

찜

또는

구매하기

---

### System Response

상품 상세 표시

↓

찜 상태 변경

↓

Mock 구매 완료

---

### Experience Goal

스토어는

쇼핑몰보다

식물을 위한 추천 공간처럼 느껴져야 한다.

---

# Cross Flow

## Automatic Recording

The following actions should automatically update the Calendar.

- Watering
- Mission Completion
- Observation
- AI Diagnosis

Text notes and photos remain optional.

Users should never need to manually create Calendar records.

---

# Cross Flow

## Navigation

Users should always be able to return using

Back

or

Bottom Navigation.

Navigation depth should never exceed three levels.

---

# Happy Path for Usability Testing

Task 1

등록된 식물을 찾아보세요.

↓

Task 2

몬스테라에게 물을 주세요.

↓

Task 3

오늘의 미션을 수행해 보세요.

↓

Task 4

AI 진단을 이용해 식물 상태를 확인해 보세요.

↓

Task 5

오늘의 알림을 확인해 보세요.

↓

Task 6

캘린더에서 오늘 기록이 저장되었는지 확인해 보세요.

↓

Task 7

스토어에서 화분을 찜해 보세요.

---

# User Flow Principles

Every flow should satisfy the following conditions.

✔ One clear goal

✔ One primary action

✔ Immediate feedback

✔ Automatic recording

✔ Minimal cognitive load

✔ Warm emotional experience

✔ Clear next step

---

# Final Principle

Users should never wonder

"What should I do next?"

Every completed action should naturally guide them toward the next meaningful interaction with their plant.

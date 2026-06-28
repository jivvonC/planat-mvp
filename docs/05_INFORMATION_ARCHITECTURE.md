# 05_INFORMATION_ARCHITECTURE.md

# Planat

### Information Architecture

Version 1.0

---

# Purpose

This document defines the overall information architecture of Planat.

The structure is intentionally simple to reduce cognitive load and support a smooth usability testing experience.

The application consists of three primary navigation tabs and several secondary screens.

---

# Navigation Structure

```
Planat

├── 내 식물 (Home)
│   ├── 식물 목록
│   ├── 식물 등록 (MVP에서는 더미 데이터만 제공)
│   └── 개별 식물 상세
│       ├── 식물 정보
│       ├── 물 주기
│       ├── 오늘의 미션
│       ├── 관리 팁
│       ├── AI 진단
│       │   ├── 진단 질문
│       │   └── 진단 결과
│       └── 최근 관리 기록
│
├── 캘린더
│   ├── 월간 캘린더
│   ├── 날짜별 기록
│   └── 관리 타임라인
│
└── 스토어
    ├── 상품 목록
    ├── 상품 상세
    ├── 찜하기
    └── 구매하기(Mock)
```

---

# Global Navigation

Bottom Navigation consists of three tabs.

## 1. 내 식물

Primary Hub of the application.

Users begin and return here most frequently.

Purpose

- View all registered plants
- Check today's care status
- Enter Plant Detail
- Start most interactions

---

## 2. 캘린더

Timeline of shared moments.

Purpose

- Review care history
- View watering history
- View observation history
- View AI diagnosis history
- View optional notes and photos

---

## 3. 스토어

Plant care products.

Purpose

- Browse products
- Save favorites
- Experience purchase flow

---

# Screen Hierarchy

## Level 1

Primary Navigation

- 내 식물
- 캘린더
- 스토어

---

## Level 2

Secondary Screens

내 식물

↓

식물 상세

캘린더

↓

날짜 상세

스토어

↓

상품 상세

---

## Level 3

Task Flow Screens

식물 상세

↓

AI 진단

↓

AI 결과

---

# Screen Descriptions

## 내 식물

Role

Application Home

Purpose

Allow users to quickly understand

- today's care
- registered plants
- current plant status

Primary Actions

- Select Plant
- Register Plant (future)
- Open Notifications

---

## 식물 상세

Role

Primary interaction screen.

Most user actions occur here.

Purpose

Help users spend time with one plant.

Primary Actions

- Water
- Complete today's mission
- Observe changes
- Read care tip
- Start AI diagnosis

---

## AI Diagnosis

Role

Guided observation.

Purpose

Help users identify plant problems through observation instead of guesswork.

Primary Actions

- Answer questions
- View diagnosis
- Read solution

---

## Calendar

Role

Relationship timeline.

Purpose

Help users remember

not tasks,

but moments spent caring.

Primary Actions

- Browse history
- Open specific date
- View photos
- Read notes

---

## Store

Role

Supporting feature.

Purpose

Allow users to discover useful products.

Primary Actions

- Browse
- Like
- Mock Purchase

---

# Global Components

The following components are available throughout the application.

- Bottom Navigation
- Notification Center
- Back Button
- Toast Messages
- Modal
- Bottom Sheet

---

# Navigation Rules

Users should never become lost.

Navigation depth should remain shallow.

Maximum navigation depth

Level 1

↓

Level 2

↓

Level 3

No screen should require navigating deeper than three levels.

---

# Information Priority

Information should always follow this order.

For Plant Detail

1. Plant

2. Current Status

3. Today's Care

4. Primary Action

5. Helpful Information

6. Previous History

---

For Calendar

1. Selected Date

2. Timeline

3. Optional Notes

4. Photos

---

For Store

1. Product

2. Benefits

3. Price

4. Favorite

5. Purchase

---

# MVP Navigation Flow

The usability testing flow should naturally follow this order.

Launch

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

---

# Information Architecture Principles

Keep navigation simple.

Reduce unnecessary choices.

One clear action per screen.

Users should always know

- where they are
- what they can do
- what happens next

The application should feel easy to explore even for first-time users.

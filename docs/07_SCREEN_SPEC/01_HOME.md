# 01_HOME.md

# Screen Specification

## Home (내 식물)

Version 1.0

---

# Screen Goal

The Home screen is the emotional entry point of Planat.

Rather than functioning as a dashboard, it should feel like opening the door to the user's own small planet.

The purpose of this screen is to help users choose which plant they want to spend time with today.

The Home screen should immediately communicate:

- These are **my plants**
- They are living together on my little planet
- There is something small I can do today

---

# User Goal

The user wants to

- see all registered plants
- understand today's care at a glance
- choose one plant to interact with
- enter Plant Detail naturally

---

# Entry Points

- App Launch
- Bottom Navigation (내 식물)

---

# Exit Points

Users can navigate to

- Plant Detail
- Notification
- Calendar
- Store

---

# Screen Structure

```
Status Bar

↓

Header

↓

Planet Hero

↓

Today's Summary

↓

Bottom Navigation
```

The Home screen intentionally contains very few sections.

The planet should remain the visual focus.

---

# Header

Height

56px

Contents

- Greeting
- Notification Button

Examples

좋은 아침이에요, 지원님 🌿

오늘 식물은 어떤 하루를 보냈을까요?

오늘도 식물과 함께해볼까요?

The greeting changes depending on the time of day.

Notification icon appears on the right.

Unread notifications display a small badge.

---

# Hero Section

This is the most important section.

Purpose

Create emotional attachment.

---

## Planet Illustration

Place the custom **planet.png** illustration at the center.

The planet is not decorative.

It represents the user's own world.

---

## Plant Arrangement

Display all registered plants surrounding the planet.

Current MVP

8 plants

Arrangement should feel organic rather than perfectly symmetrical.

Each plant slightly overlaps the planet's orbit while remaining individually tappable.

---

## Plant Interaction

Tapping a plant immediately opens Plant Detail.

The selected plant gently scales up before navigation.

Hover effects are not required.

---

## Animation

Planet

Very slow floating animation.

Plants

Gentle idle movement.

The screen should feel alive without distracting the user.

---

# Today's Summary

Located directly below the Hero.

Purpose

Help users quickly understand today's priorities.

Maximum

Three summary cards.

---

Examples

💧

오늘 물을 줘야 하는 식물

1개

---

🌱

오늘의 미션

2개

---

☀️

새로운 관리 팁

1개

Each card should navigate to the related feature.

---

# Bottom Navigation

Persistent.

Tabs

- 내 식물
- 캘린더
- 스토어

The Home tab is active.

---

# Screen States

Normal

↓

One plant requires watering

↓

Mission available

↓

Unread notification

These states should update automatically based on mock data.

---

# Motion

Planet

Very slow floating.

Plants

Small breathing animation.

Plant Selection

Scale 1.0

↓

1.05

↓

Navigate

Summary Cards

Fade Up on screen load.

Notification Badge

Soft pop animation.

---

# Automatic Updates

When the user waters a plant

↓

Today's Summary updates automatically.

When a mission is completed

↓

Mission count decreases.

When notifications are read

↓

Badge count updates.

The Home screen should always reflect the latest application state.

---

# UX Writing

Greeting Examples

좋은 아침이에요, 지원님 🌿

오늘도 식물과 함께해볼까요?

오늘은 어떤 식물과 시간을 보내볼까요?

Summary Examples

오늘 물을 줘야 하는 식물이 있어요.

오늘의 작은 미션이 기다리고 있어요.

새로운 관리 팁이 도착했어요.

---

# Accessibility

Every plant icon should have a minimum touch target of 44 × 44 px.

Plant labels should remain readable.

Maintain sufficient spacing between tappable elements.

---

# Cursor Notes

The Home screen is **not** a dashboard.

Do not use large lists or tables.

The first thing users should notice is the **planet**, not statistics.

The emotional hierarchy should always be:

1. My Planet
2. My Plants
3. Today's Care
4. Navigation

The Home screen should make users feel:

**"Welcome back. Your little planet is waiting for you."**

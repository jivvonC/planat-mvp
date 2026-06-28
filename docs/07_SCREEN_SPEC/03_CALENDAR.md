# 03_CALENDAR.md

# Screen Specification

## Calendar

Version 2.0

---

# Screen Goal

The Calendar screen represents the user's ongoing relationship with their plants.

Rather than serving as a productivity tracker, it should help users both **care for** and **look back on** the time they have spent together.

The screen is divided into two distinct experiences.

- **Calendar** → Caring & Recording
- **Timeline** → Reflecting & Remembering

---

# User Goal

The user wants to:

- Quickly record today's care
- Review previous care records
- Revisit their plant's growth journey through photos and memories

---

# Entry Points

- Bottom Navigation (캘린더)

---

# Exit Points

- Plant Detail (future)
- Bottom Navigation

---

# Screen Structure

```text
Status Bar

↓

Header

↓

Segmented Tab

(Calendar | Timeline)

↓

Selected Tab Content

↓

Bottom Navigation
```

The selected tab should persist while the app remains open.

---

# Header

Height

56px

Contents

- Title: 캘린더

The header should remain simple.

Avoid unnecessary actions.

---

# Segmented Tab

Two tabs.

## Calendar

Primary care experience.

## Timeline

Memory experience.

The active tab should be visually emphasized.

Transition

Crossfade.

---

# TAB 01

# Calendar

## Goal

Help users easily record today's care and review management history.

---

## Layout

```text
Quick Record Hero

↓

Monthly Calendar

↓

Selected Date Records
```

---

# Quick Record Hero

This section always represents **today**.

Purpose

Allow users to record today's care with the smallest possible effort.

Headline Example

오늘 식물과

어떤 시간을 보낼까요?

---

## Quick Actions

💧 물주기

🌱 영양제

📷 사진

📝 메모

All actions should be accessible with one tap.

---

### Water

One tap.

↓

Immediately recorded.

---

### Fertilizer

One tap.

↓

Immediately recorded.

---

### Photo

Open image picker.

↓

Record photo.

---

### Memo

Open small bottom sheet.

↓

Optional short note.

---

Quick actions should automatically update

- Calendar
- Timeline
- Recent Activity

No additional confirmation is required.

---

# Monthly Calendar

Purpose

Display plant care history.

The calendar is used for navigation,

not detailed information.

---

Display

- Today's date
- Dates with records
- Selected date

Each recorded date should show small event indicators.

Examples

💧

📷

🌱

🤖

More than one event on the same day should be represented by multiple indicators.

---

Interaction

Tap Date

↓

Update Daily Records

↓

Smooth Fade Animation

---

# Selected Date Records

Purpose

Display all records for the selected date.

Examples

💧

물을 주었어요.

09:12

---

🌱

새 잎이 올라왔어요.

19:20

---

📷

오늘의 모습을 남겼어요.

사진 보기

---

📝

새 잎이 지난주보다 많이 자랐어요.

Cards should remain compact.

Newest record first.

---

Empty State

이날은 아직 함께한 기록이 없어요.

---

# TAB 02

# Timeline

## Goal

Help users revisit their plant's growth journey.

This tab should feel more like a photo journal than a history log.

---

## Layout

```text
Plant Filter

↓

Photo Timeline

↓

Timeline Events
```

---

# Plant Filter

Default

전체

Users may filter by individual plant.

Examples

전체

몬이

바비

선이

필리

체인

Changing the filter updates the timeline immediately.

---

# Photo Timeline

This is the visual focus of the Timeline tab.

Photos should appear in reverse chronological order.

Large photo cards are preferred.

Each photo contains

- Date
- Plant Name
- Optional Memo

Example

6월 24일

📷

몬이

"새 잎이 처음 펼쳐졌어요."

---

# Timeline Events

If no photo exists,

display care events as compact timeline cards.

Possible events

💧 Watering

🌱 Observation

🤖 AI Diagnosis

📝 Memo

Cards should appear between photo entries in chronological order.

---

# Motion

Tab Change

Crossfade

↓

Calendar

↓

Timeline

Photo Cards

Fade Up

Timeline Cards

Slide Up

Date Selection

Fade

---

# Automatic Updates

The following actions should update both tabs automatically.

- Watering
- Fertilizer
- Observation
- Mission Completion
- AI Diagnosis
- Photo Upload
- Memo Creation

Users should never manually synchronize records.

---

# UX Writing

Calendar Hero

오늘 식물과

어떤 시간을 보낼까요?

Quick Actions

💧 물주기

🌱 영양제

📷 사진

📝 메모

Timeline Empty State

아직 함께한 순간이 없어요.

오늘의 작은 기록부터 시작해볼까요?

---

# Accessibility

Quick Action buttons must have a minimum touch target of 44 × 44 px.

Calendar dates should remain easy to tap.

Timeline cards should maintain generous spacing.

Support one-handed scrolling.

---

# Cursor Notes

The Calendar screen contains **two different experiences**.

## Calendar Tab

Focus on **recording**.

The hero section should encourage quick, low-friction logging.

## Timeline Tab

Focus on **reflection**.

Photos should be more visually prominent than text.

Never design the Timeline as a simple activity log.

It should feel like a personal growth journal.

---

# Emotional Hierarchy

Calendar

Today

↓

Quick Record

↓

Calendar

↓

Daily Records

Timeline

Photos

↓

Growth

↓

Care History

↓

Memories

---

# Final Principle

The Calendar helps users care for their plants.

The Timeline helps users remember the time they have spent together.

Together, they transform simple records into meaningful memories.

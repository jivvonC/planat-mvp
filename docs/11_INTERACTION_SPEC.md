# 11_INTERACTION_SPEC.md

# Planat

### Interaction Specification

Version 1.0

---

# Purpose

This document defines how every major interaction in Planat behaves.

Interactions should feel calm, natural, and emotionally rewarding.

Users should always feel they are caring for their plants—not operating software.

Every interaction should provide immediate feedback while minimizing cognitive effort.

---

# Interaction Principles

Every interaction should follow these rules.

- One clear action.
- Immediate visual feedback.
- Minimal effort.
- Automatic recording.
- Warm emotional response.
- No unnecessary confirmation dialogs.

---

# Interaction 01

## Water Plant

### User Goal

Give water to the selected plant.

---

### Trigger

Tap the **물 주기** button.

---

### System Response

- Update watering status
- Mark today's watering as completed
- Update plant health state (mock)
- Save activity to Calendar
- Add entry to Recent Activity

---

### Animation

- Water droplet falls onto the plant.
- Plant gently reacts (slight bounce or leaf movement).
- Water button changes to completed state.

Duration

Approximately 500–700ms.

---

### Feedback

Toast

> 오늘도 식물과 좋은 시간을 보냈어요.

---

### State Changes

Water Button

Default

↓

Completed

Plant Status

Needs Water

↓

Watered Today

---

### Calendar Update

Automatically create

💧 물을 주었어요.

---

### Failure State

Not required for MVP.

---

# Interaction 02

## Today's Mission

### User Goal

Complete today's observation.

---

### Trigger

Tap today's mission card.

---

### System Response

Open Bottom Sheet.

Display observation options.

Examples

🌱 새 잎이 생겼어요.

🍃 잎 색이 변했어요.

☀️ 특별한 변화는 없어요.

---

### User Choice

Select one observation.

Optional

- 메모 작성
- 사진 추가

Tap 완료.

---

### Animation

Checkbox animation.

Mission card changes to completed.

Bottom Sheet closes.

---

### Feedback

Toast

> 오늘의 작은 돌봄을 마쳤어요.

---

### State Changes

Mission

Pending

↓

Completed

---

### Calendar Update

Automatically save

- Observation
- Mission Completion
- Optional Note
- Optional Photo

---

# Interaction 03

## AI Diagnosis

### User Goal

Understand the cause of a plant problem.

---

### Trigger

Tap **AI 진단 시작하기**.

---

### System Response

Display one question at a time.

Never show multiple questions simultaneously.

---

### Flow

Question

↓

Select Answer

↓

Next Question

↓

Diagnosis

↓

Solution

---

### Animation

Progress indicator updates.

Question card crossfades.

---

### Feedback

No "Success" message.

Instead,

transition naturally into the diagnosis result.

---

### State Changes

Diagnosis History

Updated

Calendar

Updated

Recent Activity

Updated

---

### Calendar Update

🤖 AI 진단 완료

---

# Interaction 04

## Notification

### User Goal

Understand today's recommendations.

---

### Trigger

Tap notification icon.

---

### System Response

Unread notifications appear first.

Tap a notification.

↓

Navigate to related screen.

Examples

Weather

↓

Plant Detail

Mission Reminder

↓

Today's Mission

---

### Animation

Notification card slightly lifts on tap.

Unread badge disappears.

---

### State Changes

Unread

↓

Read

---

# Interaction 05

## Calendar

### User Goal

Look back at previous care.

---

### Trigger

Select a date.

---

### System Response

Timeline updates.

Display

💧 Water

☑ Mission

🌱 Observation

🤖 AI Diagnosis

📷 Photo

📝 Note

---

### Animation

Timeline fades.

Selected date highlights.

---

### State Changes

Selected Date

Updated

---

# Interaction 06

## Store

### User Goal

Browse products.

---

### Trigger

Tap product.

---

### System Response

Navigate to Product Detail.

---

Favorite

Tap Heart

↓

Filled Heart

↓

Toast

> 마음에 드는 상품으로 저장했어요.

---

Purchase

Tap 구매하기

↓

Mock Purchase

↓

Toast

> 장바구니에 담았어요.

---

### State Changes

Favorite

On / Off

---

# Interaction 07

## Navigation

### Bottom Navigation

Transition

Crossfade.

Maintain screen state whenever possible.

Do not recreate screens unnecessarily.

---

### Back Navigation

Always return to the previous screen.

Preserve user progress.

---

# Interaction Feedback Rules

Every interaction should include

- Visual Feedback
- State Change
- Emotional Feedback

Avoid interactions with no response.

---

# Loading States

Loading should feel lightweight.

Examples

Skeleton Cards

Fade Animation

Small Spinner

Avoid blocking the screen.

---

# Empty States

Always include

Illustration

↓

Message

↓

Primary Action

Never show an empty list without guidance.

---

# Confirmation

Avoid confirmation dialogs whenever possible.

Preferred

Tap

↓

Immediate Action

↓

Undo (future)

Instead of

Tap

↓

Confirmation Modal

↓

Action

---

# Automatic Recording

The following interactions should automatically create Calendar entries.

- Watering
- Mission Completion
- Observation Selection
- AI Diagnosis

Users never manually create calendar records.

---

# Accessibility

Every interaction must

- be possible with one hand
- provide clear visual feedback
- avoid requiring precise gestures
- support touch targets ≥ 44px

---

# Cursor Rules

When implementing interactions:

- Always respond immediately to user input.
- Every action should visibly change the interface.
- Use subtle animations only.
- Keep transitions under 700ms.
- Never interrupt the user's flow with unnecessary dialogs.
- Automatically update all related UI states.
- Preserve navigation history.
- Favor one-tap interactions whenever possible.

---

# Final Principle

Users should never think,

"I just completed a feature."

They should feel,

"I just spent a little time with my plant."

Every interaction should strengthen that feeling.

# 06_NOTIFICATION.md

# Screen Specification

## Notification

Version 1.0

---

# Screen Goal

The Notification screen helps users stay connected with their plants through timely, gentle suggestions.

Notifications should never feel like obligations or alarms.

Instead, they should feel like small messages from the user's plants.

The experience should encourage care—not create pressure.

---

# User Goal

The user wants to:

- Check what happened today
- Know if any plant needs attention
- Discover helpful suggestions
- Quickly navigate to the related screen

---

# Entry Points

- Home (Notification Icon)

---

# Exit Points

- Plant Detail
- Calendar
- AI Diagnosis
- Back

---

# Screen Structure

```text
Status Bar

↓

Header

↓

Today's Message

↓

Unread Notifications

↓

Earlier Notifications
```

---

# Header

Height

56px

Contents

- Back Button
- Title: 알림

---

# Today's Message

Purpose

Set a warm emotional tone before displaying notifications.

Examples

🌿
오늘 식물이 전하고 싶은 이야기가 있어요.

☀️
햇살이 좋은 날이에요.
식물과 잠깐 시간을 보내볼까요?

🌱
오늘도 작은 변화를 함께 발견해봐요.

🍃
식물들은 오늘도 천천히 자라고 있어요.

✨
잠깐만 살펴봐도 식물은 기뻐할 거예요.

---

오늘도 작은 돌봄이

기다리고 있어요.

Only one message should appear.

---

# Unread Notifications

Unread notifications always appear first.

Each notification is displayed as a rounded card.

Maximum

3 unread notifications.

---

## Notification Types

### Care Reminder

💧 물을 줄 시간이 되었어요.

### Environment

🌧 오늘 오후에는 비가 올 예정이에요.

### Today's Mission

🌱 오늘의 작은 미션이 도착했어요.

### AI Suggestion

🤖 AI와 함께 상태를 살펴볼까요?

### Care Completed ⭐

✨ 오늘도 식물을 잘 돌봐주셨네요.

관리 기록이 캘린더에 저장되었어요.

Tap
↓

Calendar

### Plant Insight ⭐

🌿 몬이가 새 잎을 틔울 준비를 하고 있어요.

최근 관리 기록을 바탕으로
오늘은 햇빛을 조금 더 받아보면 좋겠어요.

Tap
↓

Plant Detail
---

## Weather Notification

Icon

🌧

Title

오늘 오후에는 비가 올 예정이에요.

Message

베란다에 있는 알로에를

잠시 안으로 들여볼까요?

Tap

↓

Plant Detail

---

## Water Reminder

Icon

💧

Title

물을 줄 시간이 되었어요.

Message

몬이가 오늘 물을 기다리고 있어요.

Tap

↓

Plant Detail

---

## Today's Mission

Icon

🌱

Title

오늘의 작은 미션이 도착했어요.

Message

새 잎이 생겼는지 함께 살펴볼까요?

Tap

↓

Plant Detail

---

## AI Recommendation

Icon

🤖

Title

AI 진단을 추천드려요.

Message

잎 끝이 갈색으로 변했다면

원인을 함께 찾아볼까요?

Tap

↓

AI Diagnosis

---

# Earlier Notifications

Read notifications are grouped separately.

Display

Date

↓

Notification Cards

Cards appear with lower emphasis.

No unread badge.

---

# Notification Card

Contents

- Plant Thumbnail (optional)
- Icon
- Title
- Short Description
- Time

Maximum

Two lines of text.

Tap

↓

Navigate

↓

Mark as Read

---

# Motion

Notification Card

Fade Up

Unread Badge

Disappear

List

Slide

---

# Automatic Updates

Reading a notification

↓

Unread Count decreases

↓

Notification becomes Read

↓

Home Badge updates

If the related action is completed

↓

Relevant notification is automatically removed or archived.

AI Diagnosis Completed

↓

AI Recommendation notification is automatically archived.

Water Completed

↓

Water Reminder disappears.

Mission Completed

↓

Today's Mission notification disappears.

Example

Water Plant

↓

Water Reminder disappears

---

# Empty State

Illustration

↓

오늘은 새로운 알림이 없어요.

↓

식물들이 모두 건강하게 지내고 있어요. 🌿

---

# UX Writing

Today's Message

오늘 식물이

전하고 싶은 이야기가 있어요.

Examples

💧

물을 줄 시간이 되었어요.

🌱

오늘의 작은 미션이 기다리고 있어요.

☀️

오늘은 햇빛이 잘 들어오는 창가가 좋아요.

🌧

비가 올 예정이에요.

🤖

AI와 함께 상태를 확인해볼까요?

---

# Accessibility

Notification cards should have a minimum touch target of 44 × 44 px.

Cards should be easily distinguishable with sufficient spacing.

Unread notifications should be identifiable without relying only on color.

---

# Cursor Notes

This screen should not resemble a system notification center.

Notifications are part of the plant care experience.

Avoid technical wording or warning-style language.

Use positive, encouraging language.

Keep notifications concise and actionable.

Unread notifications should always appear before read notifications.

---

# Emotional Hierarchy

1. Today's Message

↓

2. Unread Notifications

↓

3. Earlier Notifications

The first thing users should notice is not urgency, but a gentle invitation to care.

4. Positive Feedback

When appropriate,
show positive notifications acknowledging the user's recent care.

Users should occasionally feel rewarded,
not only reminded.

---

# Final Principle

Notifications should never interrupt the user's day.

They should simply remind them that somewhere,

a small plant is quietly waiting for a little attention.

# Notification Philosophy

Notifications are conversations,
not reminders.

A notification should feel like
a quiet message from one of the user's plants.

Whenever possible:

- encourage instead of warn
- celebrate instead of pressure
- teach instead of command

Users should finish reading a notification
feeling motivated—not guilty.

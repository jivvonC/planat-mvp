# 13_STATE_TRANSITION_SPEC.md

# Planat

### State Transition Specification

Version 1.0

---

# Purpose

This document defines how application state changes after user interactions.

The goal is to ensure that all related UI remains synchronized.

Whenever a user performs an action, every affected component should update automatically.

Users should never feel that different parts of the application are disconnected.

---

# State Management Principles

Every interaction should update

- UI
- Local State
- Mock Data
- Calendar
- Recent Activity

simultaneously.

No manual refresh should ever be required.

---

# Event 01

## Water Plant

### Trigger

Tap

💧 물 주기

---

### Before

Plant Status

Needs Water

Water Button

Default

Today's Record

Not Created

---

### State Changes

Plant

lastWatered

Updated

↓

needsWater

false

↓

wateringStatus

Completed

---

Mission

No Change

---

Recent Activity

Add

💧 물을 주었어요.

---

Calendar

Create

Water Record

---

Plant Card

Update badge

↓

오늘 물 완료

---

Notification

Remove

Water Reminder

(if exists)

---

### Animation

Water Drop

↓

Plant Reaction

↓

Toast

---

### UX Feedback

오늘도 식물과 좋은 시간을 보냈어요.

---

# Event 02

## Complete Today's Mission

### Trigger

Observation Selected

↓

완료

---

### Before

Mission

Pending

---

### State Changes

Mission

Completed

↓

Observation

Saved

↓

Optional Memo

Saved

↓

Optional Photo

Saved

---

Calendar

Create

Mission Record

Observation Record

---

Recent Activity

Add

오늘의 미션 완료

---

Plant Detail

Mission Card

↓

Completed

---

### Animation

Checkbox

↓

Card Success State

↓

Bottom Sheet Close

---

### Feedback

오늘의 작은 돌봄을 마쳤어요.

---

# Event 03

## AI Diagnosis Completed

### Trigger

Diagnosis Finished

---

### State Changes

Diagnosis History

Add

↓

Plant Health

Update

↓

Recent Activity

Add

↓

Calendar

Create Diagnosis Record

---

Recommended Tip

Updated

---

Notification

Future recommendation may change

(Mock)

---

### Animation

Progress

↓

Diagnosis Card

↓

Result

---

### Feedback

식물의 상태를 함께 확인했어요.

---

# Event 04

## Read Notification

### Trigger

Tap Notification

---

### Before

Unread

---

### State Changes

Notification

Unread

↓

Read

Badge Count

Updated

---

If Notification links to Plant

Navigate

↓

Plant Detail

---

Animation

Unread Dot

↓

Disappear

---

# Event 05

## Favorite Product

### Trigger

Tap Heart

---

### Before

Favorite

Off

---

### State Changes

Favorite

On

↓

Product

Liked

---

Animation

Heart Fill

↓

Small Scale

---

Feedback

마음에 드는 상품으로 저장했어요.

---

# Event 06

## Mock Purchase

### Trigger

Tap

구매하기

---

### State Changes

Purchase Status

Completed

(Mock)

---

Animation

Button

↓

Success

---

Feedback

장바구니에 담았어요.

---

No real payment.

---

# Event 07

## Open Calendar Date

### Trigger

Select Date

---

### State Changes

Selected Date

Updated

↓

Timeline

Updated

↓

Photo

Updated

↓

Memo

Updated

---

Animation

Timeline Fade

---

# Event 08

## Switch Bottom Navigation

### Trigger

Select Navigation Tab

---

### State Changes

Active Tab

Updated

↓

Screen

Changed

---

State Preservation

Maintain

Scroll Position

Selection

Screen State

Whenever possible.

---

Animation

Crossfade

---

# Event 09

## Open Plant Detail

### Trigger

Tap Plant Card

---

### State Changes

Selected Plant

Updated

↓

Plant Detail

Loaded

↓

Today's Mission

Loaded

↓

Recent Activity

Loaded

↓

Care Tip

Loaded

---

Animation

Shared Element (future)

or

Fade

---

# Event 10

## Return to Plant List

### Trigger

Back Button

---

### State Changes

Return

↓

Plant List

---

Keep

Scroll Position

Plant Card State

Completed Water Badge

Mission Badge

---

Do not reload the screen.

---

# Global State

The following data should be globally accessible.

Current Plant

Calendar Records

Notifications

Today's Missions

Weather

Store Products

---

# State Synchronization

Whenever one state changes,

all dependent components must update.

Example

Watering

↓

Plant Detail

↓

Plant Card

↓

Calendar

↓

Recent Activity

↓

Notification

↓

Mission

(if needed)

No screen should display outdated information.

---

# State Priority

Priority 1

Plant Status

Mission

Calendar

---

Priority 2

Recent Activity

Notification

Store

---

Priority 3

Animation

Toast

---

Data consistency is always more important than animations.

---

# Persistence

The MVP does not require a backend.

Persist state using

- Local mock data
- React state
- Zustand (recommended)

Changes only need to remain during the current session.

---

# Cursor Rules

Whenever implementing state transitions:

- Update all affected UI immediately.
- Never require manual refresh.
- Keep interactions optimistic.
- Automatically create Calendar records.
- Automatically update Recent Activity.
- Remove completed reminders.
- Preserve navigation state.
- Avoid duplicate records.

Before completing an interaction, ask:

"Which other screens should know about this change?"

Update them as well.

---

# Final Principle

Users should experience the application as one connected system.

Every action should ripple naturally through the product,

just like caring for one plant gradually changes the story told by the Calendar.

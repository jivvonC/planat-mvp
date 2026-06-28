# 02_PLANT_DETAIL.md

# Screen Specification

## Plant Detail

Version 2.0

---

# Screen Goal

The Plant Detail screen is the heart of Planat.

This is where users spend time with an individual plant.

Rather than presenting a large amount of information, the screen should answer one simple question:

**"What does this plant need today?"**

The experience should feel calm, personal, and focused.

---

# User Goal

The user wants to:

- Check today's care status
- Quickly complete today's care
- Understand the current growing environment
- Receive personalized guidance
- Start an AI diagnosis if needed

---

# Entry Points

- Home (내 식물)

- Notification (future)

- Calendar (future)

---

# Exit Points

- Home

- AI Diagnosis

---

# Screen Structure

```text
Status Bar

↓

Header

↓

Plant Hero

↓

Today's Care

↓

Weather & Environment

↓

Care Tip

↓

Floating AI Button
```

---

# Header

Height

56px

Contents

- Back Button
- Plant Nickname
- More Menu (future)

Example

←

몬이

⋯

---

# Plant Hero

This is the emotional focus of the screen.

Purpose

Help users immediately reconnect with their plant.

---

Contents

- Large Plant Illustration
- Plant Nickname
- Species
- Health Status Badge

Example

🌿

몬이

Monstera Deliciosa

🟢 건강해요

---

Animation

The plant should gently float.

Leaves may slightly sway.

Movement should feel subtle and alive.

---

# Today's Care

This is the most important section of the screen.

Purpose

Present today's essential actions in one place.

---

Contents

## Water

💧 물 주기

One-tap interaction.

Immediately updates

- Calendar
- Timeline
- Recent Activity

---

## Today's Mission

🌱 오늘의 미션

Example

새 잎이 올라왔는지 살펴보세요.

Tap

↓

Observation Selection

↓

Mission Complete

↓

Calendar Update

---

This card should clearly indicate whether today's care has been completed.

---

# Weather & Environment

Purpose

Help users understand whether the current environment is suitable.

Display current weather together with the ideal growing conditions.

---

Contents

Current Weather

☀️

31°C

Humidity

72%

---

Ideal Environment

🌿

18~25°C

Bright Indirect Light

---

Contextual Recommendation

오늘은 조금 더 시원한 곳으로 옮겨보는 건 어떨까요?

or

오늘은 오후에 비가 와요.

베란다 식물을 잠시 안으로 들여볼까요?

---

# Care Tip

Purpose

Provide one personalized recommendation.

Examples

선인장은 하루 정도 바람을 쐬어주는 것도 좋아요.

---

새 잎이 자라는 시기에는 흙이 너무 마르지 않도록 해주세요.

---

Care Tips should be concise.

Maximum

Two lines before expansion.

---

# Floating AI Diagnosis Button

Position

Bottom Right

Persistent while scrolling.

---

Label

AI 진단

---

Purpose

Allow users to quickly diagnose plant problems.

Tap

↓

Navigate to AI Diagnosis

---

Style

Rounded Floating Action Button

Primary Color

Plant + Sparkle icon

Avoid oversized FAB.

---

# Motion

Plant

Gentle floating.

Today's Care

Fade Up.

Weather Card

Fade.

Care Tip

Slide Up.

FAB

Scale on tap.

---

# Automatic Updates

Watering

↓

Today's Care

↓

Calendar

↓

Timeline

↓

Home Summary

---

Mission Completion

↓

Today's Care

↓

Calendar

↓

Timeline

---

AI Diagnosis

↓

Care Tip

↓

Recent Activity

↓

Timeline

---

# UX Writing

Examples

오늘 식물과

어떤 시간을 보내볼까요?

---

💧

물을 줄 시간이 되었어요.

---

🌱

새 잎이 생겼는지 살펴보세요.

---

☀️

오늘은 조금 더 시원한 곳이 좋아요.

---

AI FAB

AI 진단

---

# Accessibility

Touch Target

Minimum

44 × 44

Maintain sufficient spacing between cards.

Support comfortable one-handed interaction.

FAB should never cover important content.

---

# Cursor Notes

This screen should not feel like a dashboard.

The plant illustration is always the visual focus.

Today's Care is the functional focus.

The AI button is a supporting action, not the primary action.

Information hierarchy should always be:

1. Plant

2. Today's Care

3. Weather & Environment

4. Care Tip

5. AI Diagnosis

Users should immediately understand what they can do today without reading large amounts of text.

---

# Final Principle

The Plant Detail screen should feel like spending a quiet moment with one living companion.

The user should leave this screen feeling:

"I know exactly how to take care of my plant today."

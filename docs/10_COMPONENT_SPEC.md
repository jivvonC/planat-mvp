# 10_COMPONENT_SPEC.md

# Planat

### Component Specification

Version 1.0

---

# Purpose

This document defines all reusable UI components used in Planat.

Components should be designed for consistency, reusability, and simplicity.

Whenever possible, build components once and reuse them throughout the application.

---

# Component Architecture

Planat follows a simplified Atomic Design structure.

```
Atoms
↓

Molecules

↓

Organisms

↓

Templates
```

---

# ATOMS

Smallest reusable UI elements.

---

## Button

### Purpose

Primary user action.

### Variants

- Primary
- Secondary
- Ghost
- Text

### States

- Default
- Pressed
- Disabled
- Loading

### Rules

- Rounded corners
- Comfortable padding
- Large touch area (44px minimum)

---

## Icon

### Purpose

Visual support for actions.

### Sources

- Custom Plant Icons
- Lucide Icons

### Rules

Use custom icons whenever available.

---

## Badge

### Purpose

Display lightweight status information.

Examples

- 오늘의 미션
- 물 필요
- 건강
- AI 추천

---

## Chip

### Purpose

Quick selectable options.

Examples

🌱 새 잎

🍃 잎이 노래짐

☀️ 햇빛 충분

---

# MOLECULES

---

## PlantCard

### Purpose

Display a plant in the Plant List.

### Contents

- Plant Image
- Nickname
- Species
- Water Status
- Health Badge

### Interaction

Tap

↓

Plant Detail

---

## WaterButton

### Purpose

Quick watering.

### Interaction

Tap

↓

Animation

↓

Toast

↓

Calendar Update

### States

Default

Completed

Disabled

---

## MissionCard

### Purpose

Display today's observation mission.

### Contents

Mission

Progress

Completion State

---

## StatusCard

### Purpose

Display current plant condition.

Examples

💧 물 필요

☀️ 햇빛 충분

🌱 새 잎

---

## CareTipCard

### Purpose

Display personalized care recommendations.

May include

Weather

Environment

Plant-specific tips

---

## NotificationCard

### Purpose

Display notification summary.

Types

Weather

Reminder

Mission

AI

---

## ProductCard

### Purpose

Display a product inside Store.

Contents

Image

Title

Price

Favorite

---

# ORGANISMS

---

## BottomNavigation

Contains

- 내 식물
- 캘린더
- 스토어

Persistent across all main screens.

---

## PlantHero

### Purpose

Emotional focus of Plant Detail.

Contents

Plant Illustration

Nickname

Species

Health

Water Status

Plant should have subtle floating animation.

---

## Today'sMissionSection

Contains

MissionCard

↓

Observation Bottom Sheet

↓

Completion Feedback

---

## QuickActionSection

Contains

Water Button

AI Diagnosis

Future Actions

---

## CareTipSection

Contains

Multiple CareTipCards.

Maximum

Three visible cards.

---

## RecentActivitySection

Contains

Recent care records.

Maximum

Three records.

---

## NotificationList

Displays grouped notifications.

Unread first.

Read later.

---

## CalendarTimeline

Displays chronological care history.

Includes

💧 Water

☑ Mission

🌱 Observation

🤖 Diagnosis

📷 Photo

📝 Note

---

## ProductGrid

Displays Store products.

2-column grid.

---

# TEMPLATES

---

## Plant List Screen

Uses

Header

↓

Planet Hero

↓

Plant Cards

↓

Bottom Navigation

---

## Plant Detail Screen

Uses

Header

↓

Plant Hero

↓

Today's Status

↓

Mission Section

↓

Quick Actions

↓

Care Tip

↓

Recent Activity

↓

Bottom Navigation

---

## Calendar Screen

Uses

Header

↓

Calendar

↓

Timeline

↓

Bottom Navigation

---

## Notification Screen

Uses

Header

↓

Notification List

---

## Store Screen

Uses

Header

↓

Featured Products

↓

Product Grid

↓

Bottom Navigation

---

# Shared Behaviors

The following components automatically update after user interaction.

Water Button

↓

Plant Status

↓

Recent Activity

↓

Calendar

Mission

↓

Calendar

↓

Recent Activity

↓

Mission State

AI Diagnosis

↓

Calendar

↓

Recent Activity

↓

Plant Status

Users should never manually update records.

---

# Motion Rules

Buttons

Small scale animation.

Cards

Fade + Slide.

Plant Hero

Gentle floating.

Bottom Sheets

Slide from bottom.

Toast

Fade in / Fade out.

Avoid excessive animations.

---

# Accessibility

All interactive components must

- have touch targets ≥ 44px
- provide visual pressed states
- support one-handed use
- maintain sufficient color contrast
- avoid relying on color alone to communicate status

---

# Naming Convention

Use PascalCase for components.

Examples

PlantCard

WaterButton

MissionCard

CareTipCard

PlantHero

BottomNavigation

NotificationCard

CalendarTimeline

---

# Cursor Rules

When generating new UI:

- Reuse existing components whenever possible.
- Do not create duplicate components with similar purposes.
- Prefer composition over duplication.
- Keep components focused on a single responsibility.
- Keep components small and reusable.
- Separate presentation from state management where possible.

Before creating a new component, ask:

"Can this be built by combining existing components?"

If the answer is yes,

reuse instead of creating a new one.

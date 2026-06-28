# 15_CURSOR_DEVELOPMENT_RULES.md

# Planat

### Cursor Development Rules

Version 1.0

---

# Purpose

This document defines the development rules that Cursor must follow while building Planat.

Cursor should always prioritize:

- Consistency
- Reusability
- Readability
- Maintainability
- User Experience

These rules override Cursor's default implementation preferences whenever there is a conflict.

---

# Development Goal

The goal is **not** to build a production-ready service.

The goal is to build a high-quality interactive MVP for usability testing.

Focus on polish rather than completeness.

Prioritize interaction quality over feature quantity.

---

# Tech Stack

The project should use:

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Zustand
- Framer Motion
- shadcn/ui
- Lucide React

No backend.

No authentication.

No API calls.

All data should come from local mock JSON.

---

# Project Structure

Use the following folder structure.

```text
src/

assets/
  images/
  icons/

components/
  ui/
  common/
  plants/
  calendar/
  store/
  ai/

pages/
  Plants/
  PlantDetail/
  Calendar/
  Store/
  Notification/
  AIDiagnosis/

layouts/

hooks/

store/

data/
  plants.json
  missions.json
  notifications.json
  calendar.json
  diagnosis.json
  careTips.json
  products.json

types/

utils/

styles/

App.tsx
main.tsx
```

---

# Component Rules

Every component should have one responsibility.

Prefer

Small reusable components

instead of

Large monolithic screens.

---

Use composition.

Never duplicate UI.

---

Examples

Good

PlantHero

↓

WaterButton

↓

MissionCard

↓

RecentActivity

Bad

PlantDetailEverything.tsx

---

# State Management

Use Zustand.

Separate

UI State

and

Business State.

Examples

UI

- Bottom Sheet
- Toast
- Modal

Business

- Plants
- Missions
- Calendar
- Notifications

---

Never use prop drilling when state becomes shared across multiple screens.

---

# Routing

Use React Router.

Recommended routes

```text
/

↓

/plants

↓

/plants/:id

↓

/plants/:id/diagnosis

↓

/calendar

↓

/store

↓

/notifications
```

---

# Styling Rules

Use Tailwind CSS.

Do not use inline styles.

Avoid custom CSS files unless absolutely necessary.

Use utility classes first.

---

Always follow

- 16px horizontal margin
- 8pt spacing system
- Pretendard typography
- Design System documentation

---

# Animation Rules

Use Framer Motion.

Animation should be

Gentle

Subtle

Slow

Natural

Never flashy.

---

Recommended

Fade

Slide

Scale (small)

Floating

---

Avoid

Bounce

Shake

Rotation

Large movement

---

# Data Rules

Use only local mock JSON.

Never hardcode data directly inside components.

Load data from

```text
src/data
```

Components should receive data via props or Zustand store.

---

# TypeScript Rules

Strict mode.

No `any`.

Always create interfaces inside

```text
src/types
```

Never define interfaces inside components.

---

# Naming Convention

Components

PascalCase

Example

PlantCard.tsx

MissionCard.tsx

---

Hooks

usePlant.ts

useMission.ts

---

Utils

camelCase

---

Constants

UPPER_CASE

---

Files

Use PascalCase for React components.

---

# Responsive Design

Develop mobile first.

Reference size

393 × 852

Do not optimize for desktop.

Desktop preview is only for development.

---

# Screen Development Order

Always build in this order.

1

Bottom Navigation

↓

2

Plant List

↓

3

Plant Detail

↓

4

Water Interaction

↓

5

Today's Mission

↓

6

Calendar

↓

7

AI Diagnosis

↓

8

Notifications

↓

9

Store

Do not jump ahead.

Complete one screen before starting the next.

---

# Cursor Workflow

Before writing code,

Cursor should

1.

Read

Design System

↓

2.

Read

Screen Specification

↓

3.

Read

Interaction Specification

↓

4.

Read

Data Model

↓

5.

Implement

Only then move to the next screen.

---

# UI Principles

Every screen should answer three questions immediately.

Where am I?

↓

What can I do?

↓

What should I do next?

Never leave the user uncertain.

---

# UX Principles

Users should

care

instead of

manage.

Interactions should

feel rewarding,

not productive.

Reduce cognitive load whenever possible.

---

# Code Quality Rules

Keep components under approximately 200 lines whenever practical.

Extract reusable logic into hooks.

Avoid duplicate code.

Prefer readability over clever implementations.

Comment only when the code's intent is not obvious.

---

# Error Handling

The MVP should fail gracefully.

Use friendly fallback UI.

Avoid browser alerts.

Never expose technical error messages to users.

---

# Performance

Do not optimize prematurely.

Prioritize

clarity

maintainability

and

interaction quality.

Only optimize if noticeable issues arise.

---

# Git Commit Style

Recommended commit prefixes

feat:

fix:

refactor:

style:

docs:

Example

feat: implement watering interaction

---

# Things Cursor Should NEVER Do

❌ Ignore the Design System

❌ Ignore Screen Specifications

❌ Use inconsistent spacing

❌ Create duplicate components

❌ Hardcode repeated values

❌ Use `any`

❌ Mix business logic with UI components

❌ Add unnecessary libraries

❌ Build desktop-first layouts

❌ Replace the UX writing with generic system messages

❌ Make interactions feel mechanical

---

# Before Completing Any Screen

Cursor must verify:

□ Does the layout follow the Design System?

□ Are existing components reused?

□ Is the interaction defined in Interaction Spec?

□ Does the state update according to State Transition Spec?

□ Is mock data loaded from the correct source?

□ Is the UX writing consistent?

□ Is the screen usable with one hand?

□ Does the interface feel calm?

If any answer is "No",

revise before continuing.

---

# Final Principle

Cursor is not simply implementing screens.

Cursor is helping create a product that makes people want to spend a few quiet moments with their plants.

Every implementation decision should support that experience.

Never create placeholder designs or make UX decisions that are not described in the documentation.

If any specification is unclear, stop and ask before implementing.

"If you are Cursor, read 19_CURSOR_START_PROMPT.md before making any changes to this project."

# 🌿 Planat

> **"내가 소비한 시간만큼, 우리는 서로에게 특별해집니다."**

Planat is a mobile-first plant care application designed to help users build a lasting relationship with their plants.

Unlike traditional plant management apps that focus on schedules and reminders, Planat encourages users to spend a small moment each day observing, caring for, and growing together with their plants.

This repository contains the complete product specification for the Planat MVP.

---

# Project Status

Current Stage

✅ Product Design Complete

⬜ Development Not Started

⬜ UI Implementation

⬜ Usability Testing

⬜ Iteration

---

# Project Goal

Build a high-fidelity interactive MVP for usability testing.

The MVP should demonstrate:

- Low-friction plant care recording
- AI-guided plant diagnosis
- Weather-aware care recommendations
- Timeline-based growth memories
- Recommendation-based plant store

The goal is **not** to build a production-ready application.

The goal is to validate the product experience.

---

# Documentation Structure

## 00. Project Overview

Overall project summary.

```
00_PROJECT_OVERVIEW.md
```

---

## Product Strategy

Defines what Planat is.

```
01_PRODUCT_REQUIREMENTS.md
02_BRAND_GUIDELINE.md
03_UX_WRITING_GUIDE.md
04_EXPERIENCE_PRINCIPLES.md
05_INFORMATION_ARCHITECTURE.md
06_USER_FLOW.md
```

---

## Screen Specifications

Defines every screen.

```
07_SCREEN_SPEC/

01_HOME.md

02_PLANT_DETAIL.md

03_CALENDAR.md

04_AI_DIAGNOSIS.md

05_AI_RESULT.md

06_NOTIFICATION.md

07_STORE.md

08_PRODUCT_DETAIL.md
```

---

## Design

Defines visual consistency.

```
08_DESIGN_SYSTEM.md

09_LAYOUT_SYSTEM.md

10_COMPONENT_SPEC.md
```

---

## Product Logic

Defines behavior.

```
11_INTERACTION_SPEC.md

12_MOCK_DATA_SPEC.md

13_STATE_TRANSITION_SPEC.md

14_DATA_MODEL.md
```

---

## Development

Defines implementation rules.

```
15_CURSOR_DEVELOPMENT_RULES.md

16_ASSET_GUIDE.md

17_TECH_STACK_AND_SETUP.md

18_IMPLEMENTATION_PHASES.md
```

---

# Reading Order

For understanding the product

```
00

↓

01

↓

02

↓

04

↓

05

↓

06
```

---

For designing UI

```
08

↓

09

↓

10

↓

07_SCREEN_SPEC
```

---

For development

```
15

↓

17

↓

14

↓

13

↓

11

↓

12

↓

18
```

---

# Cursor Workflow

Cursor should always work in the following order.

```
Read Documentation

↓

Understand Design System

↓

Check Screen Specification

↓

Implement Current Phase

↓

Verify Interaction

↓

Complete Phase

↓

Proceed to Next Phase
```

Never skip documentation.

---

# Design Principles

Planat should always feel:

🌿 Warm

🌎 Calm

✨ Gentle

🌱 Encouraging

Never:

❌ Mechanical

❌ Technical

❌ Overwhelming

---

# Core Product Philosophy

Planat is not a productivity app.

Users are not completing tasks.

They are spending time with living companions.

Every interaction should reinforce one idea:

> **"Taking care of a plant is also taking care of yourself."**

---

# MVP Scope

Included

✅ Plant Management

✅ Calendar

✅ Timeline

✅ AI Diagnosis

✅ Notifications

✅ Store

Excluded

❌ Login

❌ Backend

❌ Real Weather API

❌ Real AI API

❌ Payments

❌ Cloud Sync

❌ Social Features

---

# Technical Stack

Framework

- React
- Vite
- TypeScript

Styling

- Tailwind CSS
- shadcn/ui

State

- Zustand

Animation

- Framer Motion

Routing

- React Router

Icons

- Lucide React

---

# Current Repository Structure

```
docs/

07_SCREEN_SPEC/

00_PROJECT_OVERVIEW.md

01_PRODUCT_REQUIREMENTS.md

02_BRAND_GUIDELINE.md

03_UX_WRITING_GUIDE.md

04_EXPERIENCE_PRINCIPLES.md

05_INFORMATION_ARCHITECTURE.md

06_USER_FLOW.md

08_DESIGN_SYSTEM.md

09_LAYOUT_SYSTEM.md

10_COMPONENT_SPEC.md

11_INTERACTION_SPEC.md

12_MOCK_DATA_SPEC.md

13_STATE_TRANSITION_SPEC.md

14_DATA_MODEL.md

15_CURSOR_DEVELOPMENT_RULES.md

16_ASSET_GUIDE.md

17_TECH_STACK_AND_SETUP.md

18_IMPLEMENTATION_PHASES.md
```

Source code will be created after Phase 1.

---

# Development Roadmap

Phase 1

Project Setup

↓

Phase 2

Design Foundation

↓

Phase 3

Home

↓

Phase 4

Plant Detail

↓

Phase 5

Calendar

↓

Phase 6

AI Diagnosis

↓

Phase 7

Notifications

↓

Phase 8

Store

↓

Phase 9

State Integration

↓

Phase 10

Polish

↓

Phase 11

Asset Integration

↓

Phase 12

Usability Testing

---

# Definition of Success

The MVP is considered successful if users can:

- Register and browse plants
- Complete today's care with minimal effort
- Diagnose a plant using AI
- Record care without feeling burdened
- Review growth through Timeline
- Complete the planned usability testing scenario without assistance

---

# Final Principle

Planat is not about growing more plants.

It is about growing a stronger relationship with the ones you already have.

Every design decision, interaction, and implementation should support that purpose.

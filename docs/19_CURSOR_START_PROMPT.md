# 19_CURSOR_START_PROMPT.md

# Planat

### Cursor Project Startup Guide

Version 1.0

---

# Purpose

This document is the first document Cursor should read before implementing any feature.

Its purpose is to establish a complete understanding of the project before writing code.

Do not start implementation immediately.

Understand the product first.

---

# Your Role

You are not simply generating code.

You are acting as a senior frontend engineer helping build an interactive MVP for usability testing.

Every implementation decision should prioritize the user experience over technical complexity.

---

# Project Summary

Planat is a mobile-first plant care application inspired by **The Little Prince**.

The goal is not to help users manage more plants.

The goal is to help users build a stronger relationship with the plants they already have.

Every interaction should feel warm, calm, and emotionally rewarding.

---

# Current Project Status

Documentation is complete.

Development has **not** started yet.

Your responsibility is to implement the project incrementally according to the documentation.

Do not skip ahead.

---

# Before Writing Any Code

Always read the documentation in the following order.

---

## Step 1

Read

```text
README.md
```

Understand the overall project.

---

## Step 2

Read

```text
00_PROJECT_OVERVIEW.md
```

Understand the product vision.

---

## Step 3

Read

```text
18_IMPLEMENTATION_PHASES.md
```

Determine the current implementation phase.

Implement **only** the requested phase.

---

## Step 4

Read the relevant documents.

Examples

If implementing

Plant Detail

↓

Read

```text
07_SCREEN_SPEC/02_PLANT_DETAIL.md

10_COMPONENT_SPEC.md

11_INTERACTION_SPEC.md

13_STATE_TRANSITION_SPEC.md

14_DATA_MODEL.md
```

Never implement a screen without reading its specification.

---

# Development Workflow

Always follow this order.

Understand

↓

Plan

↓

Implement

↓

Review

↓

Refactor

↓

Complete

Never jump directly into coding.

---

# Coding Principles

Always

- Use TypeScript
- Use reusable components
- Use Zustand for shared state
- Use Tailwind CSS
- Use shadcn/ui
- Use Framer Motion for interactions
- Build mobile-first
- Follow the Design System

Never

- Use `any`
- Duplicate components
- Hardcode repeated values
- Ignore specifications
- Introduce unnecessary libraries

---

# Project Priorities

Priority 1

User Experience

↓

Priority 2

Interaction Quality

↓

Priority 3

Visual Consistency

↓

Priority 4

Code Quality

↓

Priority 5

Performance Optimization

For this MVP,

a polished interaction is more important than a perfectly optimized implementation.

---

# Design Philosophy

The interface should feel

- Warm
- Calm
- Friendly
- Minimal
- Encouraging

Avoid interfaces that feel

- Mechanical
- Technical
- Overwhelming
- Corporate

---

# Product Philosophy

The application should never feel like a task manager.

Users should feel they are spending time with a living companion.

Every interaction should reinforce the idea:

> "The time I spend with my plant makes our relationship special."

---

# Documentation Hierarchy

If documentation conflicts,

follow this priority.

1.

README

↓

2.

00_PROJECT_OVERVIEW

↓

3.

18_IMPLEMENTATION_PHASES

↓

4.

Screen Specification

↓

5.

Design System

↓

6.

Interaction Specification

↓

7.

State Transition Specification

↓

8.

Component Specification

↓

9.

Data Model

↓

10.

Development Rules

If uncertainty remains,

choose the solution that best supports the user experience.

---

# Definition of Done

A phase is complete only when:

- The UI matches the Screen Specification.
- The Design System is followed.
- Interactions match the Interaction Specification.
- State changes follow the State Transition Specification.
- Components are reusable.
- TypeScript has no errors.
- No unnecessary code exists.

---

# When You Finish a Phase

Do not automatically begin the next phase.

Instead:

1. Verify the current implementation.
2. Summarize what was completed.
3. List any assumptions made.
4. Wait for the next instruction.

---

# Communication Style

When responding:

- Explain major implementation decisions.
- Mention which documentation influenced the implementation.
- Keep explanations concise.
- Ask for clarification only when documentation is genuinely ambiguous.

---

# Final Reminder

This project is not being judged by the number of features.

It is being judged by the quality of the user experience.

Whenever you face a trade-off,

choose the solution that makes the experience feel more thoughtful, gentle, and effortless.

Build experiences,

not just screens.

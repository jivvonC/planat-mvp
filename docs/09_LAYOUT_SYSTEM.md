# 09_LAYOUT_SYSTEM.md

# Planat

### Layout System

Version 1.0

---

# Purpose

This document defines the structural layout system used throughout Planat.

Rather than specifying individual UI components, this document defines how information should be arranged on the screen.

The goal is to create layouts that feel calm, spacious, and focused.

Users should immediately understand what deserves their attention.

---

# Core Philosophy

The interface should always emphasize

Plant

↓

Care

↓

Information

↓

History

The plant is always the visual center of the experience.

Everything else supports it.

---

# Layout Principles

## Principle 01

One Primary Focus

Every screen should contain one clear visual focal point.

Never compete for attention.

---

## Principle 02

Vertical Storytelling

Information should naturally flow from top to bottom.

Users should feel they are moving through a story rather than scanning a dashboard.

---

## Principle 03

Comfortable Spacing

Whitespace is part of the design.

Avoid dense layouts.

Allow components to breathe.

---

## Principle 04

Cards Before Lists

Prefer grouped cards instead of long text lists.

Cards improve readability and reduce cognitive load.

---

# Standard Screen Structure

Most screens follow the same structure.

```
Status Bar

↓

Header

↓

Hero Area

↓

Primary Action

↓

Supporting Information

↓

History / Secondary Content

↓

Bottom Navigation
```

---

# Header

Height

56px

Contains

- Page Title
- Back Button (if needed)
- Notification Button (optional)

Headers should remain visually lightweight.

---

# Hero Area

The Hero Area is the emotional center of the screen.

Recommended height

25%–35% of the viewport.

Contents may include

- Plant Illustration
- Planet Illustration
- Greeting
- Current Plant Status

Only one hero illustration should exist per screen.

---

# Primary Action Area

Immediately below the Hero.

Contains

- Water Button
- Today's Mission
- AI Diagnosis

Maximum

Three primary actions.

Primary actions should always appear without scrolling.

---

# Supporting Information

Contains

- Care Tips
- Weather Information
- Plant Information

These sections support the primary interaction.

Never compete visually with the Hero or Primary Actions.

---

# History Section

Placed near the bottom.

Contains

- Recent Activity
- Calendar Preview
- Previous Care Records

History is for reflection,

not action.

---

# Scrolling

Every screen should scroll vertically.

Never require horizontal scrolling.

Avoid deep nested scrolling.

---

# Visual Hierarchy

Priority Order

1

Hero Illustration

↓

2

Today's Status

↓

3

Primary Action

↓

4

Mission

↓

5

Care Tip

↓

6

Recent Activity

↓

7

Secondary Information

---

# Plant List Layout

```
Header

↓

Planet Hero

↓

Plant Cards

↓

Bottom Navigation
```

Planet illustration should remain the visual center.

Plant cards surround the planet rather than replacing it.

---

# Plant Detail Layout

```
Header

↓

Plant Hero

↓

Today's Status

↓

Today's Mission

↓

Primary Actions

↓

Care Tip

↓

Recent Activity

↓

Bottom Navigation
```

This is the primary screen of the application.

The Hero Illustration should occupy approximately one-third of the screen.

---

# AI Diagnosis Layout

```
Header

↓

Current Question

↓

Answer Options

↓

Progress

↓

Next
```

Only one question should appear at a time.

Reduce decision fatigue.

---

# AI Result Layout

```
Header

↓

Diagnosis Result

↓

Explanation

↓

Recommended Care

↓

Return Button
```

Do not overwhelm users with scientific terminology.

---

# Calendar Layout

```
Header

↓

Monthly Calendar

↓

Selected Date

↓

Timeline

↓

Optional Notes

↓

Photos
```

The timeline should be more visually prominent than the calendar grid itself.

---

# Notification Layout

```
Header

↓

Unread Notifications

↓

Earlier Notifications
```

Unread notifications should always appear first.

Use generous spacing between notification cards.

---

# Store Layout

```
Header

↓

Featured Products

↓

Category

↓

Product Grid
```

Cards should remain large enough for comfortable tapping.

---

# Empty States

Illustration

↓

Friendly Message

↓

Primary Action

Never show empty lists without guidance.

---

# Bottom Sheets

Used for

- Mission Completion
- Observation Selection
- Quick Actions

Maximum Height

Approximately 70% of the screen.

Rounded Top Corners

16px

---

# Modals

Use only when confirmation is necessary.

Prefer Bottom Sheets whenever possible.

---

# Floating Elements

Avoid floating buttons.

Floating UI should be used sparingly.

The interface should remain visually calm.

---

# Layout Rules for Cursor

Whenever generating layouts:

- Design mobile-first (393 × 852 reference).
- Keep 16px horizontal margins.
- Respect safe areas.
- One Hero Illustration per screen.
- Show primary actions before secondary information.
- Keep most important content above the fold.
- Avoid visual clutter.
- Prefer vertical stacking over complex grids.
- Maintain generous whitespace.
- Do not place more than three equally weighted cards in one viewport.

---

# Final Principle

The interface should never feel like a dashboard.

It should feel like quietly opening the door to your own little planet.

Every screen should invite users to pause,

look at their plant,

and spend a little time with it.

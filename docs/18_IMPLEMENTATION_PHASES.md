# 18_IMPLEMENTATION_PHASES.md

# Planat

### Implementation Phases

Version 1.0

---

# Purpose

This document defines the recommended implementation order for Planat.

The project should be developed incrementally.

Each phase builds upon the previous one.

Cursor should complete one phase before moving to the next.

Never implement multiple phases simultaneously.

---

# Development Principles

- Build from foundation to features.
- Complete one experience before starting another.
- Verify each phase before continuing.
- Reuse components whenever possible.
- Follow all previous documentation.

---

# Phase 1

## Project Foundation

### Goal

Create the development environment.

### Deliverables

- React + Vite project
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zustand
- React Router
- ESLint
- Prettier
- Folder structure
- Empty asset folders
- Empty mock data

### References

- 14_DATA_MODEL.md
- 15_CURSOR_DEVELOPMENT_RULES.md
- 16_ASSET_GUIDE.md
- 17_TECH_STACK_AND_SETUP.md

### Definition of Done

- Project runs successfully
- Folder structure matches specification
- No TypeScript errors
- No lint errors

---

# Phase 2

## Design Foundation

### Goal

Build reusable UI foundations.

### Deliverables

- Typography
- Color Tokens
- Spacing System
- Buttons
- Cards
- Chips
- Badges
- Bottom Navigation
- Shared Layout Components

### References

- 08_DESIGN_SYSTEM.md
- 09_LAYOUT_SYSTEM.md
- 10_COMPONENT_SPEC.md

### Definition of Done

- All shared components are reusable
- Mobile layout follows 393 × 852 guideline
- Navigation is functional

---

# Phase 3

## Home (My Plants)

### Goal

Build the main entry experience.

### Deliverables

- Home Screen
- Planet Hero
- Plant Arrangement
- Greeting
- Notification Badge
- Today's Summary

### References

- 01_HOME.md
- 10_COMPONENT_SPEC.md
- 12_MOCK_DATA_SPEC.md

### Definition of Done

Users can:

- View all plants
- Select a plant
- Open Plant Detail

---

# Phase 4

## Plant Detail

### Goal

Build the primary care experience.

### Deliverables

- Plant Hero
- Today's Care
- Water Button
- Weather Card
- Care Tip
- Floating AI Button

### References

- 02_PLANT_DETAIL.md
- 11_INTERACTION_SPEC.md
- 13_STATE_TRANSITION_SPEC.md

### Definition of Done

Users can:

- Water a plant
- View today's mission
- Read care tips
- Launch AI Diagnosis

---

# Phase 5

## Calendar

### Goal

Build the care recording experience.

### Deliverables

Calendar Tab

- Quick Record Hero
- Monthly Calendar
- Daily Records

Timeline Tab

- Plant Filter
- Photo Timeline
- Timeline Cards

### References

- 03_CALENDAR.md
- 11_INTERACTION_SPEC.md
- 12_MOCK_DATA_SPEC.md

### Definition of Done

Users can:

- Record care
- Browse calendar
- Browse timeline
- Switch tabs

---

# Phase 6

## AI Experience

This phase is intentionally divided into two implementation steps.

Step 1 focuses on the guided diagnosis flow.

Step 2 focuses on presenting the diagnosis result.

Do not implement both steps simultaneously.

### Goal

Build the AI-powered plant diagnosis experience.

The implementation should be completed in two incremental steps.

---

### Phase 6-1

#### AI Diagnosis

##### Goal

Build the guided diagnosis experience.

##### Deliverables

- Question Flow
- Progress Indicator
- Observation Guide
- Answer Cards
- Diagnosis State Management

##### References

- 04_AI_DIAGNOSIS.md

##### Definition of Done

Users can:

- Start a diagnosis
- Answer all questions
- Complete the diagnosis flow

Do NOT implement the result screen in this step.

---

### Phase 6-2

#### AI Result

##### Goal

Build the diagnosis result experience.

##### Deliverables

- Diagnosis Summary
- Possible Cause
- Personalized Solution
- Recommended Next Actions
- Return to Plant Detail

##### References

- 05_AI_RESULT.md

##### Definition of Done

Users can:

- View diagnosis results
- Understand the likely cause
- Read personalized care recommendations
- Return to Plant Detail

---

# Phase 7

## Notification

### Goal

Build the notification center.

### Deliverables

- Notification List
- Today's Message
- Read / Unread State

### References

- 06_NOTIFICATION.md

### Definition of Done

Users can:

- Read notifications
- Open related screens
- Automatically clear completed reminders

---

# Phase 8

## Store

### Goal

Build the recommendation-based store.

### Deliverables

- Store Screen
- Category Chips
- Product Grid
- Product Detail
- Favorite
- Mock Purchase

### References

- 07_STORE.md
- 08_PRODUCT_DETAIL.md

### Definition of Done

Users can:

- Browse products
- Filter products
- Favorite products
- Complete a mock purchase

---

# Phase 9

## State Integration

### Goal

Connect all features into a unified experience.

### Deliverables

- Shared Zustand Stores
- Automatic State Synchronization
- Calendar Updates
- Timeline Updates
- Notification Updates

### References

- 13_STATE_TRANSITION_SPEC.md
- 14_DATA_MODEL.md

### Definition of Done

Changes made in one screen are reflected throughout the application.

No manual refresh is required.

---

# Phase 10

## Polish & Motion

### Goal

Improve the overall experience.

### Deliverables

- Motion refinement
- Loading states
- Empty states
- Toast messages
- Interaction polish

### References

- 04_EXPERIENCE_PRINCIPLES.md
- 11_INTERACTION_SPEC.md

### Definition of Done

The application feels calm, responsive, and cohesive.

---

# Phase 11

## Asset Integration

### Goal

Replace placeholders with final design assets.

### Deliverables

- Plant illustrations
- Planet illustration
- Navigation icons
- Product images
- Backgrounds

### References

- 16_ASSET_GUIDE.md

### Definition of Done

No placeholder images remain.

All project assets are integrated.

---

# Phase 12

## Final QA & Usability Test Preparation

### Goal

Prepare the MVP for usability testing.

### Deliverables

- Bug fixes
- Interaction review
- Responsive verification
- UX writing review
- Accessibility check
- Mock data validation

### References

All documentation

### Definition of Done

The application is stable enough for moderated usability testing.

Participants can complete the planned user flow without assistance.

---

# Cursor Workflow

For every phase:

1. Read the referenced documentation.
2. Implement only the features included in the current phase.
3. Reuse existing components.
4. Verify against the Design System.
5. Test interactions.
6. Confirm the Definition of Done before proceeding.

A phase may be divided into smaller implementation steps when explicitly instructed.

Never implement future implementation steps unless requested.

---

# Recommended Prompt Strategy

Instead of asking Cursor to build the whole application at once, use incremental prompts.

Examples:

- "Implement Phase 1 according to the documentation."
- "Phase 1 is complete. Proceed to Phase 2."
- "Implement Phase 4 only. Do not modify completed phases."
- "Implement Phase 6-1 only. Do not implement Phase 6-2."
- "Review Phase 5 against the Screen Specification and Interaction Specification."

This approach produces more stable, maintainable, and predictable results.

---

# Final Principle

Planat should not be built screen by screen.

It should be built experience by experience.

Every completed phase should feel like a complete, usable part of the product before moving on to the next.

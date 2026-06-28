# 14_DATA_MODEL.md

# Planat

### Data Model Specification

Version 1.0

---

# Purpose

This document defines the data models used throughout Planat.

The project uses local mock data only.

No backend or database is required.

All models should be written as TypeScript interfaces and stored as mock JSON.

The **Plant** model is the central entity of the application.

All other models should relate to a specific plant.

---

# Data Model Architecture

```text
User

↓

Plant

├── Mission
├── CalendarRecord
├── CareTip
├── DiagnosisHistory
├── RecentActivity

↓

Notification

↓

Store Product
```

---

# Core Models

## User

Represents the current user.

```ts
interface User {
  id: string;
  name: string;
  greeting: string;
}
```

Example

- id
- name
- greeting

---

## Plant

The central model of Planat.

```ts
interface Plant {
  id: string;

  nickname: string;

  species: string;

  image: string;

  location: "Indoor" | "Outdoor";

  healthStatus: "Healthy" | "Needs Water" | "Needs Attention";

  wateringCycle: number;

  lastWatered: string;

  nextWatering: string;

  missionId: string;

  recentActivityIds: string[];

  calendarRecordIds: string[];

  diagnosisIds: string[];

  careTipId: string;

  recommendedProductIds: string[];
}
```

---

# Feature Models

## Mission

Represents today's observation task.

```ts
interface Mission {
  id: string;

  plantId: string;

  title: string;

  description: string;

  observationOptions: string[];

  completed: boolean;

  completedAt?: string;
}
```

---

## CalendarRecord

Represents one event in the Calendar timeline.

```ts
interface CalendarRecord {
  id: string;

  plantId: string;

  type: "watering" | "mission" | "observation" | "diagnosis" | "photo" | "note";

  title: string;

  description?: string;

  date: string;

  photoUrl?: string;
}
```

---

## Observation

Represents today's observation.

```ts
interface Observation {
  id: string;

  plantId: string;

  missionId: string;

  selectedOption: string;

  note?: string;

  photoUrl?: string;

  createdAt: string;
}
```

---

## RecentActivity

Shown inside Plant Detail.

```ts
interface RecentActivity {
  id: string;

  plantId: string;

  icon: string;

  title: string;

  createdAt: string;
}
```

---

## CareTip

Represents contextual care guidance.

```ts
interface CareTip {
  id: string;

  plantId: string;

  title: string;

  description: string;

  category: "weather" | "watering" | "environment" | "growth";
}
```

---

## DiagnosisHistory

Stores completed AI diagnoses.

```ts
interface DiagnosisHistory {
  id: string;

  plantId: string;

  result: string;

  cause: string;

  solution: string;

  createdAt: string;
}
```

---

## Notification

Represents app notifications.

```ts
interface Notification {
  id: string;

  type: "weather" | "mission" | "care" | "diagnosis";

  title: string;

  message: string;

  relatedPlantId?: string;

  isRead: boolean;

  createdAt: string;
}
```

---

## StoreProduct

Represents a product shown in the Store.

```ts
interface StoreProduct {
  id: string;

  name: string;

  image: string;

  category: string;

  price: number;

  description: string;

  liked: boolean;
}
```

---

# UI Models

## Bottom Navigation

```ts
interface NavigationState {
  currentTab: "plants" | "calendar" | "store";
}
```

---

## Toast

```ts
interface Toast {
  id: string;

  message: string;

  visible: boolean;
}
```

---

## Bottom Sheet

```ts
interface BottomSheetState {
  open: boolean;

  type: "mission" | "observation" | "photo";
}
```

---

# Relationships

Each Plant owns

- one Mission
- many Calendar Records
- many Recent Activities
- many Diagnosis Histories
- many Care Tips
- many Observations

Notifications may reference one Plant.

Store Products are independent.

---

# Data Flow

Example

Water Plant

↓

Update Plant

↓

Create Calendar Record

↓

Create Recent Activity

↓

Refresh Plant Detail

↓

Refresh Calendar

↓

Update Plant Card

---

# Mock Data Organization

```text
mock/

plants.json

missions.json

calendar.json

notifications.json

diagnosis.json

careTips.json

store.json

user.json
```

---

# Naming Convention

IDs

Use UUID-like strings.

Images

Use file names matching existing assets.

Example

monstera.png

planet.png

cactus.png

---

# Cursor Rules

When generating data:

- Every entity must have an id.
- Every relationship should reference ids instead of nested objects.
- Keep Plant as the central model.
- Avoid duplicate information across models.
- Mock data should be easy to extend.
- Prefer composition over deeply nested structures.
- Separate UI state from business data.

---

# Design Principle

Data should support the experience,

not complicate it.

The data model should remain simple enough that Cursor can understand and maintain it,

while still supporting all interactions defined in the previous documents.

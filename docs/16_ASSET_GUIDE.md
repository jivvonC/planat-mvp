# 16_ASSET_GUIDE.md

# Planat

### Asset Guide

Version 1.0

---

# Purpose

This document defines how visual assets should be organized and used throughout the Planat project.

Cursor should always use the provided project assets before generating placeholders or generic illustrations.

Assets are part of the product identity and should be reused consistently across all screens.

---

# Asset Directory Structure

```text
src/

assets/

├── icons/
│
│   ├── navigation/
│   ├── plants/
│   └── ui/
│
├── images/
│
│   ├── backgrounds/
│   ├── illustrations/
│   ├── onboarding/
│   └── products/
│
└── animations/
```

---

# Naming Convention

Use English file names.

Use lowercase kebab-case.

Examples

```
planet.png

monstera.png

mini-baobab.png

heart-chain.png

my-plants.png

calendar.png

store.png
```

Avoid

```
몬스테라.png

Plant1.png

IMG_001.png
```

---

# Asset Categories

## Navigation Icons

Used only inside Bottom Navigation.

Current Assets

- my-plants.png
- calendar.png
- store.png

Location

```
assets/icons/navigation/
```

Usage

Persistent Bottom Navigation.

Do not use these icons anywhere else.

---

## Plant Icons

Represent registered plants.

Current Assets

- monstera.png
- mini-baobab.png
- cactus.png
- sansevieria.png
- pilea.png
- aloe-vera.png
- heart-chain.png
- succulent.png

Location

```
assets/icons/plants/
```

Usage

- Home Hero
- Plant Detail
- Timeline (optional thumbnail)
- Related Plants (Store)

These illustrations are the visual identity of each plant.

Do not replace them with generic icons.

---

## Planet Illustration

Current Asset

planet.png

Location

```
assets/images/illustrations/
```

Usage

Only on the Home screen.

Purpose

Represents the user's personal planet.

This is the visual centerpiece of the Home experience.

Do not reuse it on other screens.

---

## Product Images

Location

```
assets/images/products/
```

Purpose

Store

Product Detail

Mock shopping experience

Placeholder product images may be used during MVP development.

---

## Background Images

Location

```
assets/images/backgrounds/
```

Purpose

Decorative backgrounds

Special event backgrounds (future)

Onboarding (future)

Avoid heavy background illustrations on core screens.

---

## UI Icons

Location

```
assets/icons/ui/
```

Examples

- water
- fertilizer
- mission
- ai
- weather
- notification
- note
- photo

These icons should remain simple and consistent.

Use Lucide React when a custom icon is unavailable.

---

# Screen Asset Mapping

## Home

Assets

- planet.png
- Plant Icons
- Navigation Icons

Planet appears in the center.

Plants surround the planet.

---

## Plant Detail

Assets

- Selected Plant Illustration

Optional

Weather Icon

Water Icon

Mission Icon

The selected plant should be the largest visual element.

---

## Calendar

Assets

- Water Icon

- Fertilizer Icon

- Camera Icon

- Note Icon

- AI Icon

Timeline photos use uploaded mock images.

---

## Timeline

Assets

- Plant Thumbnail

- Photo

Timeline should prioritize photos over icons whenever available.

---

## AI Diagnosis

Assets

- AI Icon

- Observation Icons

Examples

Leaf

Sun

Water

Soil

Avoid decorative illustrations.

Focus on clarity.

---

## Notification

Assets

- Weather Icon

- Water Icon

- Mission Icon

- AI Icon

Keep notification cards lightweight.

---

## Store

Assets

- Product Images

- Plant Thumbnails (Recommended Plants)

---

## Product Detail

Assets

- Large Product Image

- Related Plant Icons

---

# Placeholder Policy

Until final assets are available

Cursor may use

- Lucide React Icons
- Neutral Placeholder Images

However

Custom project assets always take priority.

---

# Image Rules

Plant illustrations

- Never crop aggressively.
- Preserve aspect ratio.
- Center within their container.
- Do not stretch.

Product images

- Square ratio preferred.
- Consistent padding.

Background images

- Decorative only.
- Never reduce readability.

---

# Animation Assets

Currently

None.

Use Framer Motion instead.

Future animations

should be stored in

```
assets/animations/
```

---

# Asset Loading Rules

Import assets directly.

Example

```tsx
import monstera from "@/assets/icons/plants/monstera.png";
```

Do not hardcode asset paths as strings.

---

# Cursor Rules

When implementing UI:

- Always check for an existing project asset before generating placeholders.
- Never substitute plant illustrations with generic plant icons.
- Use the Planet illustration only on the Home screen.
- Maintain consistent sizing across similar assets.
- Preserve image quality and aspect ratio.
- Use Lucide React only when a matching custom asset does not exist.
- Organize new assets according to the directory structure defined above.

---

# Future Assets

The following assets may be added later.

- Onboarding illustrations
- Empty state illustrations
- Achievement illustrations
- Seasonal backgrounds
- Promotional store banners
- Additional plant illustrations
- Weather illustrations
- Lottie animations

The folder structure should support future expansion without requiring reorganization.

---

# Final Principle

Visual assets are not decoration.

They communicate warmth, care, and personality.

Whenever possible,

let the illustrations tell the story before the interface does.

# 07_STORE.md

# Screen Specification

## Store

Version 1.0

---

# Screen Goal

The Store helps users discover products that support better plant care.

It should feel like a curated recommendation space rather than a traditional shopping mall.

Products are presented in the context of caring for plants.

---

# User Goal

The user wants to:

- Browse useful plant care products
- Discover recommendations related to their plants
- Save products they like
- Experience a simple purchase flow (Mock)

---

# Entry Points

- Bottom Navigation (스토어)

---

# Exit Points

- Product Detail
- Bottom Navigation

---

# Screen Structure

```text
Status Bar

↓

Header

↓

Recommended Products

↓

Category Chips

↓

Product Grid

↓

Product Detail

↓

Bottom Navigation
```

---

# Header

Contents

Title

스토어

Subtitle

식물을 위한 작은 준비를 해볼까요?

---

# Recommended Products

Purpose

Highlight products that match the user's plants and explain why they are recommended.

Recommendations should feel personalized based on the user's plants, care history, and recent activities.

Users should immediately understand why a product appears here.

Maximum

3 recommendation cards.

Examples

🌿 몬이에게 추천해요.

최근 과습 진단을 받아
배수가 좋은 화분을 추천해요.

↓

🌵 선인장에게 추천해요.

최근 실내에서 키우고 있어
통풍이 좋은 화분받침을 추천해요.

↓

🌱 새 잎이 나오고 있어요.

성장을 도와줄 영양제를 추천해요.

Each recommendation card contains:

- Product Image
- Product Name
- Recommendation Reason
- Optional related plant
- Navigate to Product Detail

ex.
🪴

테라코타 화분

최근 과습 진단을 받아
배수가 좋은 화분을 추천해요.

몬이

---

# Recommendation Strategy

Products should not be recommended randomly.

Recommendations may be based on:

- Plant species
- Recent care history
- AI diagnosis result
- Current weather
- Current season

The recommendation reason should always be visible to the user.

---

# Category Chips

Display horizontally scrollable chips.

Examples

전체

화분

영양제

흙

물뿌리개

식물등

분무기

행잉 플랜터

지지대

Selecting a chip filters the product grid.

---

# Product Grid

Two-column grid.

Each Product Card contains:

- Product Image
- Product Name
- Price
- Like Button

Tap Card

↓

Product Detail

Tap Heart

↓

Toggle Favorite

↓

Toast

마음에 드는 상품으로 저장했어요.

---

# Empty State

검색 결과가 없어요.

다른 카테고리를 둘러볼까요?

---

# Motion

Cards

Fade Up

Category Chips

Slide

Heart

Scale + Fill

---

# Automatic Updates

Plant status changes

↓

Recommended products automatically update.

AI diagnosis results

↓

Relevant products receive higher recommendation priority.

---

# UX Writing

추천 상품

식물에 꼭 필요한 아이템을 준비했어요.

카테고리

전체

화분

영양제

흙

---

Toast

마음에 드는 상품으로 저장했어요.

---

# Accessibility

- Product Cards ≥ 44px touch target
- Horizontal chips remain easy to scroll
- Two-column layout maintains comfortable spacing

---

# Cursor Notes

Do not design this screen like an online marketplace.

The emotional focus is helping users care for their plants.

Recommendations should appear before categories.

Recommendations should always explain why they are recommended.

Users should feel that the Store understands their plants.

Avoid displaying products without context.

---

# Final Principle

The Store should inspire users to better care for their plants,

not encourage unnecessary shopping.

Every recommendation should answer one question:

"Why is this useful for my plant right now?"

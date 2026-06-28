# 08_PRODUCT_DETAIL.md

# Screen Specification

## Product Detail

Version 1.0

---

# Screen Goal

The Product Detail screen explains why a product is useful for plant care.

Rather than emphasizing sales, the screen should help users understand the value of the product in relation to their plants.

---

# User Goal

The user wants to:

- Understand the product
- Learn why it is recommended
- Save it for later
- Experience a simple purchase flow

---

# Entry Points

- Store

---

# Exit Points

- Store

---

# Screen Structure

```text
Status Bar

↓

Header

↓

Product Image

↓

Product Information

↓

Why We Recommend It

↓

Related Plants

↓

Bottom Action Bar
```

---

# Header

Contents

- Back Button
- Favorite Button

---

# Product Image

Large hero image.

Centered.

Maintain generous whitespace.

---

# Product Information

Contents

- Product Name
- Price
- Short Description

Example

행잉 화분

₩18,000

늘어지는 식물을 건강하게 키울 수 있도록 도와주는 행잉 화분이에요.

---

# Why We Recommend It

Purpose

Connect the product to plant care.

Examples

하트 체인처럼 아래로 자라는 식물에 적합해요.

통풍이 잘 되어 과습을 줄이는 데 도움이 돼요.

분갈이를 앞둔 식물에게 추천드려요.

Use 2–3 concise recommendation cards.

---

# Related Plants

Show which of the user's plants could benefit from this product.

Example

추천 식물

💚 체인

🌿 몬이

🌵 선이

Tapping a plant is optional (future enhancement).

---

# Bottom Action Bar

Fixed to the bottom.

Contains

♡ 찜하기

구매하기

Purchase is a mock interaction only.

No real payment flow.

---

# Motion

Image

Fade In

Recommendation Cards

Slide Up

Favorite Button

Scale + Fill

Purchase Button

Soft Press Animation

---

# Automatic Updates

찜하기

↓

Store Grid

↓

Favorite State

↓

Toast

---

구매하기

↓

Mock Purchase

↓

Toast

장바구니에 담았어요.

---

# UX Writing

Recommendation

이런 식물에게 잘 어울려요.

Helpful Tip

분갈이 시기에 함께 사용하면 더 좋아요.

Buttons

찜하기

구매하기

Toast

장바구니에 담았어요.

---

# Accessibility

- Bottom buttons ≥ 44px height
- Hero image should not be cropped
- Recommendation cards should be easy to scan

---

# Cursor Notes

Do not overemphasize the product price.

Focus on why the product is useful.

This screen should educate first, then support purchase.

Avoid overwhelming users with technical specifications.

---

# Final Principle

Users should leave this screen thinking,

"This product could help me take better care of my plant,"

rather than,

"I need to buy this."

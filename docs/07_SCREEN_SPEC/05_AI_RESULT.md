# 05_AI_RESULT.md

# Screen Specification

## AI Diagnosis Result

Version 1.0

---

# Screen Goal

The AI Result screen explains the most likely cause of the plant's condition and recommends practical next steps.

The purpose is not simply to display a diagnosis, but to reassure and educate the user.

The tone should always remain supportive.

---

# User Goal

The user wants to:

- Understand what is happening
- Learn why it happened
- Know what to do next
- Feel confident caring for the plant

---

# Entry Points

- AI Diagnosis

---

# Exit Points

- Plant Detail

- Calendar (future)

---

# Screen Structure

```text
Status Bar

↓

Header

↓

Diagnosis Summary

↓

Based on Your Observations

↓

Why This Happened

↓

Today's Care

↓

Prevention Tip

↓

Primary Button
```

---

# Header

Contents

- Back Button
- Title: 진단 결과

---

# Diagnosis Summary

The most prominent section.

Display

🌿

과습 가능성이 높아요.

Use a simple, reassuring tone.

Avoid alarming language.

---

# Based on Your Observations

Purpose

Increase trust by explaining which observations led to the diagnosis.

Display

✓ 잎 끝이 갈색으로 변했어요.

✓ 흙이 아직 촉촉했어요.

✓ 최근 물을 주었어요.

Keep this section short (maximum 3 observations).

The content should be generated from the answers collected in Phase 6-1.

---

# Why This Happened

Purpose

Help users understand the reasoning behind the diagnosis.

Example

흙이 아직 충분히 마르지 않은 상태에서 물을 자주 주면 뿌리에 산소가 부족해질 수 있어요.

잎 끝이 갈색으로 변하는 것은 과습의 대표적인 신호 중 하나예요.

---

# Recommended Care

Provide 2–3 clear actions.

Example

오늘 이렇게 해보세요.

✔ 물은 하루 정도 쉬어볼게요.

✔ 통풍이 잘 되는 곳으로 옮겨주세요.

✔ 흙이 마르면 다시 물을 주세요.

Actions should be short and actionable.

---

# Prevention Tip

Purpose

Help users avoid the same issue in the future.

Example

다음에는 흙이 2~3cm 정도 말랐는지 확인한 뒤 물을 주는 습관을 들여보세요.

앞으로는 이렇게 관찰해보세요.

---

# Primary Button

Label

확인했어요

Tap

↓

Plant Detail

---

# Motion

Diagnosis Card

Fade In

↓

Care Cards

Slide Up

↓

Primary Button

Fade In

---

# Automatic Updates

When the user reaches this screen:

Automatically

- Save Diagnosis History
- Update Calendar
- Add Recent Activity

No additional confirmation is required.

---

# UX Writing

Diagnosis

과습 가능성이 높아요.

Support

너무 걱정하지 않아도 괜찮아요.

조금만 관리하면 다시 건강하게 자랄 수 있어요.

Primary Button

확인했어요

---

# Accessibility

Keep paragraphs short.

Use bullet points for care instructions.

Maintain comfortable spacing.

---

# Cursor Notes

Do not overwhelm users with long explanations.

Avoid scientific terminology unless necessary.

Prioritize reassurance over technical accuracy.

Explain the reasoning behind the diagnosis using the user's own observations.

Users should understand why the result was reached, not simply accept it.

This screen should feel like a doctor calmly explaining the situation after an examination.

---

# Final Principle

Users should leave this screen thinking:

"I know what happened."

"I know what to do next."

"I can take good care of my plant."

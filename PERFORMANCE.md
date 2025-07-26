# 🚀 PERFORMANCE.md

This document tracks frontend performance optimizations applied to the project, focusing on reducing JavaScript bundle size, improving load times, and optimizing route-level behavior.

---

## 📚 Table of Contents

- [Project Overview](#project-overview)
- [Initial Performance Metrics](#initial-performance-metrics)
- [Optimization 1: Lazy Loading Modal Components](#optimization-1-lazy-loading-modal-components)
- [Optimization 2: Replacing react-select with Downshift](#optimization-2-replacing-react-select-with-downshift)
- [Lessons Learned](#lessons-learned)

---

## 📁 Project Overview

This document summarizes frontend optimization efforts focused on:

- Reducing JavaScript bundle size per route
- Improving perceived and actual performance metrics
- Applying best practices for modular and dynamic UI loading

---

## 📊 Initial Performance Metrics

### 🔹 First Load JavaScript Size

> Baseline size of JS required to load initial page
> <img width="822" height="276" alt="Screenshot_375" src="https://github.com/user-attachments/assets/8e202e86-b303-4efd-8a2a-ec578460d192" />

---

### 🔹 Bundle Analyzer (Initial)

<img width="1919" height="947" alt="Screenshot_376" src="https://github.com/user-attachments/assets/a44a890a-6090-4656-9926-eace5526506d" />

---

### 🔹 Lighthouse Baseline

<img width="929" height="619" alt="Screenshot_384" src="https://github.com/user-attachments/assets/bd6bd42c-e94f-4ee2-afa2-ab8d3c334ea7" />

---

## ⚙️ Optimization 1: Lazy Loading Modal Components

### 🧠 Problem

- Modal components like `AddDocumentModal`, `EditDocumentModal`, etc., were **eagerly imported** in routes like `Documents`, `Teachers`, and `Leave`.
- Even if modals weren't opened, their code was **bundled into the main JavaScript payload**, bloating the bundle size unnecessarily.

### 💡 Solution

Converted all modal imports to `next/dynamic()` with `ssr: false` to lazy-load modals **only when needed**:

```tsx
// Before
import AddTeacherModal from '@/components/modals/AddTeacherModal'

// After
const AddTeacherModal = dynamic(() => import('@/components/modals/AddTeacherModal'), {
  ssr: false
})
```

# 🧪 Measurable Impact

<img width="1107" height="487" alt="Screenshot_365" src="https://github.com/user-attachments/assets/ad85ed0f-5c78-4d3f-ab28-41ff814202a2" />

## 📦 Bundle size savings by route

| Route         | Before Gzipped | After Gzipped | Reduction               |
| ------------- | -------------- | ------------- | ----------------------- |
| Documents     | 295 kB         | 243 kB        | ↓ 52 kB (**17.6%**)     |
| Teachers      | 273 kB         | 233 kB        | ↓ 40 kB (**14.7%**)     |
| Teachers/[id] | 310 kB         | 278 kB        | ↓ 32 kB (**10.3%**)     |
| Leave         | 311 kB         | 184 kB        | ↓ 127 kB (**40.8%**) ✅ |

📌 **Savings ranged from 32–127 kB**, depending on how many modals were bundled in the route.

---

## ⚙️ Optimization 2: Replacing `react-select` with Downshift

### 🧠 Problem

`react-select` was the **largest single library** in the Documents and Teachers bundles.
Its features were **overkill** for the app’s simple dropdown use case.

<img width="1919" height="956" alt="Screenshot_370" src="https://github.com/user-attachments/assets/8ff9b302-e13f-4c02-992b-1a107b450586" />

### 💡 Solution

Replaced `react-select` with **Downshift** — a lightweight, headless UI utility — to retain full control while trimming bundle size.

### 📉 Measurable Impact

**Library size impact**:

<img width="1918" height="990" alt="Screenshot_373" src="https://github.com/user-attachments/assets/c8ec4258-733f-445b-8cdc-f793ab84cd5f" />

- Dropped `react-select` from **#1** to **#5** in the bundle analyzer rank.
- Saved **~28 kB** across key routes.

**Detailed reduction**:

<img width="647" height="320" alt="Screenshot_371" src="https://github.com/user-attachments/assets/85e98116-2522-457d-aef6-0844ad5aceb2" />

| Route     | Before Gzipped | After Gzipped | Reduction           |
| --------- | -------------- | ------------- | ------------------- |
| Documents | 243 kB         | 215 kB        | ↓ 28 kB (**11.5%**) |

---

# 🚀 Performance Improvements

## 📊 Total Bundle Size Reduction

| Optimization   | Affected Routes                           | Total Before Gzipped | Total After Gzipped | Total Reduction | % Reduction |
| -------------- | ----------------------------------------- | -------------------- | ------------------- | --------------- | ----------- |
| Optimization 1 | Documents, Teachers, Teachers/[id], Leave | 1,189 kB             | 938 kB              | **251 kB**      | **21.1%**   |
| Optimization 2 | Documents                                 | 243 kB               | 215 kB              | **28 kB**       | **11.5%**   |
| **Combined**   | All routes                                | _1,432 kB_           | _1,153 kB_          | **279 kB**      | **19.5%**   |

## 💡 Lessons Learned

- 📦 **Lazy loading** large UI components (modals) is a quick win with **significant bundle savings**.
- 🎯 Avoid **overpowered libraries** like `react-select` when lightweight options (e.g. Downshift) are enough.
- 📉 Regular use of **bundle analyzers** and **route-specific audits** is key to **performance sustainability**.
- 🧼 Refactors like **scoping shared providers** and **splitting dynamic features** encourage better architecture and **long-term maintainability**.

```

```

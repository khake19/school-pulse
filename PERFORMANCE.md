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

![First Load JS](docs/images/Screenshot_375.png)

---

### 🔹 Bundle Analyzer (Initial)

![Analyzer](docs/images/Screenshot_376.png)

---

### 🔹 Route-Specific: Documents

![Documents Route](docs/images/Screenshot_374.png)

---

### 🔹 Lighthouse Baseline

![Lighthouse](docs/images/Screenshot_367.png)

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
  ssr: false,
})

# 🧪 Measurable Impact

## 📦 Bundle size savings by route

| Route          | Before Gzipped | After Gzipped | Reduction               |
|----------------|----------------|---------------|--------------------------|
| Documents      | 295 kB         | 243 kB        | ↓ 52 kB (**17.6%**)      |
| Teachers       | 273 kB         | 233 kB        | ↓ 40 kB (**14.7%**)      |
| Teachers/[id]  | 310 kB         | 278 kB        | ↓ 32 kB (**10.3%**)      |
| Leave          | 311 kB         | 184 kB        | ↓ 127 kB (**40.8%**) ✅  |

📌 **Savings ranged from 32–127 kB**, depending on how many modals were bundled in the route.

---

## ⚙️ Optimization 2: Replacing `react-select` with Downshift

### 🧠 Problem
`react-select` was the **largest single library** in the Documents and Teachers bundles.
Its features were **overkill** for the app’s simple dropdown use case.

### 💡 Solution
Replaced `react-select` with **Downshift** — a lightweight, headless UI utility — to retain full control while trimming bundle size.

### 📉 Measurable Impact

**Library size impact**:
- Dropped `react-select` from **#1** to **#5** in the bundle analyzer rank.
- Saved **~34 kB** across key routes.

**Detailed reduction**:

| Route     | Before Gzipped | After Gzipped | Reduction              |
|-----------|----------------|---------------|-------------------------|
| Documents | 243 kB         | 215 kB        | ↓ 28 kB (**11.5%**)     |

---

# 🚀 Performance Improvements

## 📊 Total Bundle Size Reduction

| Optimization     | Affected Routes                         | Total Before Gzipped | Total After Gzipped | Total Reduction | % Reduction |
|------------------|-----------------------------------------|-----------------------|----------------------|------------------|-------------|
| Optimization 1   | Documents, Teachers, Teachers/[id], Leave | 1,189 kB              | 938 kB               | **251 kB**       | **21.1%**    |
| Optimization 2   | Documents                               | 243 kB                | 215 kB               | **28 kB**        | **11.5%**    |
| **Combined**     | All routes                              | *1,432 kB*            | *1,153 kB*           | **279 kB**       | **19.5%**    |


## 💡 Lessons Learned

- 📦 **Lazy loading** large UI components (modals) is a quick win with **significant bundle savings**.
- 🎯 Avoid **overpowered libraries** like `react-select` when lightweight options (e.g. Downshift) are enough.
- 📉 Regular use of **bundle analyzers** and **route-specific audits** is key to **performance sustainability**.
- 🧼 Refactors like **scoping shared providers** and **splitting dynamic features** encourage better architecture and **long-term maintainability**.
```

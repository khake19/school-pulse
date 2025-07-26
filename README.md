# 🏫 SchoolPulse

SchoolPulse is a school information system designed to manage teachers and Officer Administrator data with a clean, modern UI. Built with React and Chakra UI, it’s focused on ease of use, fast filtering, and real-time feedback.

> This project is a work in progress. Focus so far has been on clean architecture and working components — additional features like the dashboard summary are actively being developed.

## ✨ Features

### 🔐 Authentication & Role-Based Access

Secure login system for admin users with protected routes.

### 📋 Teacher Management

View, add, edit, and delete teachers with real-time updates and form validation.

### 📄 Document Management

Upload and preview teacher documents (e.g., DTRs) with JPEG support.

### 🧾 Form Handling with Validation

Robust forms using React Hook Form and Zod for schema-based validation.

### 🔍 Advanced Table Filtering

Search, filter, and paginate teacher records with dynamic query handling.

### 📦 Performance Optimizations

- Lazy-loaded modal components with `next/dynamic`
- Replaced `react-select` with lightweight Downshift
- Reduced JS bundle size by up to **40% per route**
- Bundle analysis tracked via `PERFORMANCE.md`

[Read the full performance breakdown →](./PERFORMANCE.md)

### ⚛️ Responsive UI with Chakra UI

Clean, accessible, and mobile-friendly interface using Chakra UI components.

### ⚙️ Modular State Management

Global state powered by Zustand with zustand-lens for scalable access patterns.

### 🧰 Domain-Based Code Structure

Feature-first architecture with clear module separation for maintainability.

## 🧱 Tech Stack

| Tech                       | Purpose                     |
| -------------------------- | --------------------------- |
| **React (App Router)**     | Frontend framework          |
| **Next.js**                | Routing & build system      |
| **TypeScript**             | Type safety                 |
| **Zustand + zustand-lens** | Global state management     |
| **Chakra UI**              | Component styling & layout  |
| **React Hook Form**        | Form handling               |
| **Zod**                    | Schema validation & parsing |

## 🧑‍💻 Folder Structure (Simplified)

```
src/
├── components/         # Shared and page-specific UI components
├── hooks/              # Custom React hooks
├── modules/            # Feature-based modules (e.g. teachers/)
├── stores/             # Zustand global state
├── services/           # API services
├── utils/              # Helpers and utility functions
├── app/                # App Router pages and layout
│   ├── api/            # Next.js API route handlers (backend endpoints)
│   ├── documents/      # Document-related pages and components
│   ├── teachers/       # Teacher-related pages and components
│   └── ...             # Other feature pages
└── styles/             # Theme and global style definitions (if any)
```

**Folder Descriptions:**

- **app/**: Main entry point for Next.js App Router. Contains all route segments, layouts, and API endpoints.
- **components/**: Shared, reusable UI components used across multiple pages or modules.
- **hooks/**: Custom React hooks for encapsulating logic like data fetching, modal state, etc.
- **modules/**: Domain-driven feature folders, each with their own components, types, and helpers.
- **stores/**: Zustand store definitions and slices for global state management.
- **services/**: Functions for communicating with backend APIs (REST, GraphQL, etc.).
- **utils/**: Utility functions and helpers that are not domain-specific.
- **styles/**: Theme and global style definitions (if using Chakra UI or styled-components).

> 💡 _The project follows a modular and scalable architecture, inspired by real production standards._

## 🧪 Live Demo

🌐 [https://school-pulse-git-main-khake19s-projects.vercel.app](https://school-pulse-git-main-khake19s-projects.vercel.app)

**Login Credentials:**

- Email: `test@schoolpulse.com`
- Password: `password123`

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/khake19/school-pulse.git

# 2. Install dependencies
cd school-pulse
npm install

# 3. Setup environment variables
# Create .env file based on .env.example

# 4. Start dev server
npm run dev
```

## 📽 Demo Video

Watch a quick demo on Loom:  
[▶️ SchoolPulse Walkthrough](https://www.loom.com/share/d7b8d714631c475a82581080719a5d8a?sid=fadc10eb-7939-4f00-bb09-8f6fdc254747)

## 📚 Planned Improvements

- [ ] Add loading spinners + toast feedback for forms
- [ ] Improve table UX and responsive handling

## 🧠 Design Decisions

- Zustand was chosen for its simplicity, with `zustand-lens` used to allow modular state access and better scalability.
- Chakra UI was used for a consistent and accessible design system.
- Code is organized per domain/module for better separation and onboarding.

## ⚙️ Requirements

- Node.js v18+ (recommended)
- npm or yarn

## 👨‍🔧 Developer Notes

This app is part of a larger system:

- Backend repo: [school_pulse_api](https://github.com/khake19/school_pulse_api)

## 📝 License

MIT

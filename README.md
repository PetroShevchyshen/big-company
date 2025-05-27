# Big Company

Stack: **React + TypeScript + Vite** starter template with Tailwind CSS, Router v6, and Zustand for state management for fast SPA development.

---

## 🛠️ Quick start

```bash
# 1. Clone the repository
git clone https://github.com/PetroShevchyshen/big-company.git
cd big-company

# 2. Install dependencies
npm install          # or pnpm install / yarn

# 3. Start the local development server
npm run dev          # http://localhost:5173

# 4. Build the production version
npm run build

# 5. Preview the production build
npm run preview
```

### Structure

```bash
big-company/
├── public/                 # Static files and assets
├── src/                    # Main application source
│   ├── api/                # API utility functions
│   ├── assets/             # Images, icons, etc.
│   ├── components/         # Reusable UI components
│   ├── constants/          # App-wide constant values
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Route-level page components
│   ├── store/              # Application state management
│   ├── types/              # TypeScript type declarations
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
├── tsconfig*.json          # TypeScript configuration files
└── package.json            # Project dependencies and scripts

```

## 🔍 Implementation Overview

### 🔀 Routing

The project uses **React Router v6** to handle client-side routing:

- Defined in `App.tsx` using the `<Routes>` and `<Route>` components.
- Route paths are centralized in `src/constants/routes.ts` for consistency.
- Nested routing is used:
  A root route (`ROUTES.HOME`) renders a shared `<Layout>` component, and inside it are nested routes:
  - `/` → `Home` page
  - `/users` → `Users` page
  - `/overview` → `Overview` page
  - `/settings` → `Settings` page

This structure allows easy layout composition and separation of concerns between different views.

---

### 🧠 State Management

Global state is handled with **Zustand** — a minimal, scalable state management library:

- Defined in `src/store/user-store.ts`.
- The store (`useUserStore`) includes:
  - `users`: an array of users fetched from an API.
  - `loading`: a boolean flag for tracking request status.
  - `error`: stores any error messages.
  - `fetchUsers`: an async function that:
    - Calls `getUsers()` from the API.
    - Updates the store depending on success or failure.
- Middleware `devtools` is used to integrate with Redux DevTools for debugging.

Example usage:

```ts
const { users, loading, fetchUsers } = useUserStore();
useEffect(() => {
  fetchUsers();
}, []);
```

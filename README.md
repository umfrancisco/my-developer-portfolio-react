# React + Vite

This project provides a minimal setup to get **React** working with **Vite**, including Hot Module Replacement (HMR) and basic ESLint configuration.

## Getting Started

### 1. Prerequisites

Make sure you have the following installed:

* **Node.js** (recommended: version 18+)
* **npm** (comes with Node) or **yarn**

You can check your versions with:

```bash
node -v
npm -v
```

---

### 2. Installation

2.1 Clone the repository:

```bash
git clone https://github.com/umfrancisco/my-developer-portfolio-react.git
cd my-developer-portfolio-react
```

2.2 Install dependencies:

```bash
npm install
```

2.3 Add your github and other professional informations at App.jsx

```javascript
<Profile 
  githubUrl="https://github.com/your_github"
  linkedinUrl="https://www.linkedin.com/in/your_name"
  fullName="Your full name"
  techStack = "Your tech stack"
/>
<RepoList username="your_github_username" />
```

---

### 3. Running the Development Server

Start the app in development mode:

```bash
npm run dev
```

Then open your browser and go to:

```
http://localhost:5173
```

---

### 4. Build for Production

To generate an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ⚙️ Available Plugins

Currently, two official plugins are available:

* **@vitejs/plugin-react**
  Uses Babel for Fast Refresh
  https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react

* **@vitejs/plugin-react-swc**
  Uses SWC for Fast Refresh
  https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc

---

## 🧹 ESLint Configuration

For production applications, it is recommended to use **TypeScript** with type-aware linting.

Check out the official TypeScript template:
https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts

And the TypeScript ESLint docs:
https://typescript-eslint.io

---

## 📌 Scripts

* `npm run dev` → Start development server
* `npm run build` → Build for production
* `npm run preview` → Preview production build

---

## 📄 Notes

This is a minimal setup intended as a starting point. You can extend it with:

* Routing (React Router)
* State management (Redux, Zustand)
* UI libraries (MUI, Tailwind)
* API integration

---


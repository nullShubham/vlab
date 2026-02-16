# 🧪 V-Lab Pharma Frontend

This is the frontend repository for the **V-Lab Pharma** project, built with modern web technologies and a focus on performance and developer experience.

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 7](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (using `@tailwindcss/vite`)
- **Optimization:** [React Compiler](https://react.dev/learn/react-compiler) (via `babel-plugin-react-compiler`)
- **Fonts:** [Inter](https://fontsource.org/fonts/inter)

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with HMR. |
| `npm run build` | Builds the project for production (runs `tsc` and `vite build`). |
| `npm run lint` | Runs ESLint to check for code quality issues. |
| `npm run preview` | Locally previews the production build. |

## 📁 Project Structure

- `src/main.tsx`: Application entry point.
- `src/App.tsx`: Root component.
- `src/index.css`: Global styles and Tailwind CSS configuration.
- `vite.config.ts`: Vite configuration including React Compiler and Tailwind plugins.

## 🎨 Development Conventions

- **Modern Syntax:** Follow React 19 patterns and hooks.
- **Styling:** Use Tailwind CSS utility classes. The project uses Tailwind 4, which is configured via `@import "tailwindcss"` in `src/index.css` and the `@tailwindcss/vite` plugin.
- **Performance:** The React Compiler is enabled to automatically optimize re-renders.
- **Type Safety:** Use TypeScript for all components and logic. Ensure `tsc` passes before building.
- **Linting:** Follow the ESLint configuration defined in `eslint.config.js`.

## 📝 TODOs

- [ ] Set up a robust component library or design system.
- [ ] Integrate with the backend API.
- [ ] Implement routing (e.g., React Router).
- [ ] Add state management if necessary.

# Material UI React App

This project is a modern React application built with:

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for fast development
- [Material UI (MUI)](https://mui.com/) for UI components
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [TanStack Table](https://tanstack.com/table/v8) for advanced tables

## Features

- Responsive UI with Material UI and Tailwind CSS
- User table with sorting and pagination (TanStack Table)
- Redux state management (with hydration support)
- Example components: Button, Card, Checkbox, Select, TextField, Typography
- Routing with React Router
- ESLint and TypeScript strict configuration

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)

### Installation

```bash
git clone <your-repo-url>
cd MaterialUI
npm install
```

### Development

```bash
npm run dev
```

App will be available at [http://localhost:5173](http://localhost:5173) by default.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Project Structure

- `src/components/` – UI and feature components (e.g., `ReactTable`, `MuiButton`, etc.)
- `src/constants/data.json` – Mock user data for the table
- `src/Redux/` – Redux store, slices, actions, and hooks
- `src/App.tsx` – Main app component
- `src/main.tsx` – Entry point

## Main Dependencies

- `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`
- `@reduxjs/toolkit`, `react-redux`
- `@tanstack/react-table`
- `tailwindcss`, `@tailwindcss/vite`
- `react-router-dom`

## Example: User Table

The `ReactTable` component displays a paginated, sortable table of users from `data.json` using TanStack Table and Material UI components.

## License

MIT

## 🧱 UI Architecture & Library Usage

This project demonstrates how multiple modern UI tools can work together in a real-world React application. Each library has a clear responsibility in the architecture.

### 🎨 Tailwind CSS — Layout & Styling Foundation

Tailwind is used for:

- Layout (flex, grid, spacing, alignment)
- Responsive design
- Utility-based styling across pages

It acts as the **layout engine** of the application.

---

### 🟣 shadcn/ui — Design System Components

shadcn provides reusable styled components such as:

- Buttons
- Cards
- Inputs
- Avatars
- Dropdown menus

These components are stored inside the project and customized with Tailwind, forming the **visual design system**.

---

### 🟢 Radix UI — Accessibility & Interaction Layer

Radix is used indirectly through shadcn components and powers:

- Dropdown behavior
- Focus management
- Keyboard navigation
- Accessible UI interactions

Radix acts as the **behavior and accessibility engine** of the UI.

---

### 🔵 React Hook Form — Form State Management

React Hook Form is used for:

- Handling form state
- Validation rules
- Error handling
- Submission logic

It manages the **form logic layer** of the application.

---

### 🟡 Ant Design — Enterprise Components

Ant Design is used selectively for complex UI elements such as:

- Data tables
- Advanced forms

It serves as the **enterprise component layer**, used only where it speeds up development.

---

### 🧭 Architectural Philosophy

Instead of relying on a single UI library, this project demonstrates a layered approach:

- **Tailwind** → Layout and spacing
- **shadcn** → Design system components
- **Radix** → Interaction logic and accessibility
- **React Hook Form** → Form handling
- **Ant Design** → Complex data-driven components

This mirrors how modern production React applications structure their UI stack.

---

### 🚀 Learning Outcome

This project showcases:

- Component-based architecture
- Design system thinking
- Accessible UI practices
- Form validation strategies
- Selective use of enterprise components

It can serve as a reference for building scalable React dashboards with modern UI tooling.

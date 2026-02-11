# Role-Based Multi-Stage Registration Dashboard

## Overview

This project is a **React-based, role-driven registration dashboard** that simulates a real-world onboarding flow commonly used in education portals and SaaS applications.

The main focus of the project is to demonstrate proper React architecture, controlled routing, validation handling, and structured component design rather than complex UI styling.

---

## Purpose

The application guides users through a three-stage registration process based on a selected role and ensures that:

- Each stage is completed in order
- Validation is enforced before proceeding
- Navigation is strictly controlled
- Progress is dynamically calculated and clearly displayed
- Completed stages cannot be revisited

---

## Key Features

- Role-based dynamic forms (Student, Teacher, Professor)
- Three-stage controlled registration workflow
- Nested routing with a shared dashboard layout
- Single progress bar rendered once in the layout
- Dynamic progress calculation based on form completion
- Strict validation with auto-focus on invalid inputs
- Stage locking and route protection
- Success page with read-only data summary
- Centralized state management using React hooks
- Combination of functional and class components

---

## Technology Used

- React
- React Router (Nested Routing with useOutletContext)
- Functional Components
- One Class Component (Stage 3 – Additional Information)
- Tailwind CSS (basic styling only)

> No backend, Redux, Context API, LocalStorage, or UI frameworks were used.

---

## Application Flow

1. User selects a role (Stage 1)
2. Role-specific details are collected dynamically (Stage 2)
3. Additional information is validated using a class component (Stage 3)
4. Registration completion is confirmed on the Success page
5. State resets when exiting the registration flow

Each stage is locked after completion and direct URL access to incomplete stages is restricted.

---

## Core React Concepts Demonstrated

- `useState` for form values, validation errors, and stage control
- `useEffect` for route protection and controlled navigation behavior
- `useRef` for focusing the first invalid input and preventing double submissions
- `useMemo` for derived progress calculation
- Class component state handling for complex form validation
- Component modularization with clear separation of concerns

---

## Conclusion

This project demonstrates a clean, structured, and scalable approach to building multi-step, role-based registration systems in React.

It reflects real-world onboarding patterns while strictly adhering to the assignment constraints and emphasizing logic, architecture, and correct React usage over visual design.

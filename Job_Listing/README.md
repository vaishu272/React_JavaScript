# ReactPro - Job Listing Application

A modern React application built with Vite that displays job openings from top tech companies. This project showcases component-based architecture, reusable card components, and listed the jobs with array objects.

## Features

- **Job Listings**: Display multiple job postings with company details
- **Company Information**: Shows company logo, name, and job title
- **Job Details**: Includes salary, location, employment type, and experience level
- **Responsive Card Component**: Reusable Card component for displaying job openings
- **Icon Support**: Integrated with Lucide React for icons
- **Modern Build Setup**: Powered by Vite for fast development and optimized builds

## Tech Stack

- **React** 19.2.0 - UI library
- **Vite** 7.2.4 - Build tool
- **Lucide React** 0.563.0 - Icon library
- **ESLint** - Code quality
- **Prettier** - Code formatting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## Project Structure

```
src/
├── App.jsx           - Main application component with job listings
├── App.css           - Application styles
├── main.jsx          - Application entry point
├── index.css         - Global styles
├── components/
│   └── Card.jsx      - Reusable card component for job listings
└── assets/           - Static assets
```

## Component Details

### Card Component

The `Card` component is responsible for rendering individual job listings with:

- Company branding
- Job title and posting date
- Employment type and experience level badges
- Salary and location information

## Features Included

- Component-based architecture
- Dynamic data rendering with arrays
- Styled components and CSS modules
- ESLint configuration for code quality
- Prettier for consistent code formatting

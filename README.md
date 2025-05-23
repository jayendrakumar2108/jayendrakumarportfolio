# Safety Incident Dashboard

A modern, responsive web application for tracking and managing safety incidents.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent, scalable icons
- **Build Tool**: Vite for fast development and optimized builds

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Features

- 📋 View and manage incidents with detailed information
- 🔍 Filter incidents by severity (Low, Medium, High)
- ⏱️ Sort by date (newest/oldest first)
- 📝 Report new incidents with form validation
- 📱 Fully responsive design
- 🎨 Visual severity indicators
- ⚡ Optimized performance with React.memo and useMemo

## Design Decisions

- **Component Structure**: Modular components for better maintainability and reusability
- **State Management**: React's built-in useState and useMemo for efficient state handling
- **Type Safety**: TypeScript for enhanced developer experience and code reliability
- **Accessibility**: Semantic HTML and ARIA attributes for better screen reader support
- **Visual Feedback**: Subtle animations for user interactions
- **Error Handling**: Form validation with clear error messages
- **Performance**: Optimized re-renders with proper state management

## Project Structure

```
src/
├── components/         # React components
├── data/              # Mock data
├── types/             # TypeScript interfaces
└── App.tsx            # Root component
```

## Development Notes

- All data is managed in frontend state (no backend required)
- New incidents persist only for the current session
- Responsive design works across all device sizes
- Built with scalability in mind for future features
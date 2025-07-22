# System Patterns

The application follows a component-based architecture with a clear separation of concerns between the UI, business logic, and data layers.

## Frontend

- **UI:** Built with **React** and **Next.js**, using a responsive layout that adapts to different screen sizes.
- **State Management:** A combination of React's built-in hooks (`useState`, `useContext`) and a custom `useProgress` hook for managing user progress. The `AuthContext` manages user authentication state.
- **Data Fetching:** A custom `api` utility (`src/lib/api.ts`) handles all API requests to the backend.
- **Routing:** Next.js file-based routing is used for all pages. Middleware (`src/middleware.ts`) protects routes that require authentication.

## Backend

- **Authentication:** Handled by **Supabase**, which provides user authentication and management services.
- **Database:** A **PostgreSQL** database provided by Supabase stores user data, progress, and other application data.
- **API:** A combination of Supabase's auto-generated APIs and custom API routes built with Next.js API routes.

## Data Flow

- **Course Data:** Loaded from a file-based system using a `course-loader` utility.
- **Internship Data:** Loaded from individual `metadata.json` files for each internship.
- **User Data:** Fetched from the Supabase backend via the `api` utility and managed by the `AuthContext`.

The login page has been implemented on the frontend and is now connected to the backend running on port 5000. The `apiClient` has been updated to reflect the new backend URL. The root layout has been updated to conditionally render the sidebar based on the user's authentication status, and the middleware has been updated to correctly handle route protection. The `AuthContext` has been updated to use `js-cookie` for storing the authentication token. The issue with redirection after login has been resolved by updating the `AuthContext`, `LoginForm`, and `middleware` to correctly handle the redirection. The `Layout` component has been refactored into its own file to prevent re-rendering issues.

**Recent Updates (Internship Section Fixes):**
- Resolved "Route not found" errors for internship pages.
- Corrected the API route handler at `src/app/api/internships/[internshipId]/route.ts` to dynamically use `internshipId` and extract the internship title from `internship.json`.
- Updated `src/middleware.ts` to correctly exclude API routes from middleware processing.
- Resolved a routing conflict by renaming `src/app/api/internships/route.ts` to `src/app/api/internships/all/route.ts`.
- Corrected the `baseURL` in `src/lib/api.ts` to `http://localhost:3005` and ensured `api.get` always uses it.
- Updated `src/contexts/AuthContext.tsx`, `src/app/my-internships/page.tsx`, and `src/app/internships/[internshipId]/page.tsx` to use the new `/api/internships/all` endpoint for fetching all internships.
- Removed a conflicting `rewrites` configuration from `next.config.ts` that was redirecting API calls.
- Fixed `TypeError: Cannot read properties of undefined (reading 'map')` in `src/app/internships/[internshipId]/weeks/[weekId]/page.tsx` by adding conditional rendering checks for `week.concepts`, `week.dailyPlan`, `week.checklist`, and `week.tips` to ensure they are arrays before mapping.
- Reverted `src/app/internships/[internshipId]/weeks/[weekId]/page.tsx` to directly fetch internship data via API, as the underlying routing issues are now resolved.
- Fixed the "Hydration failed" error in `src/components/layout/NavigationBar.tsx` by standardizing class names for consistent server/client rendering.
- Configured `api.ts` to route authentication calls to `http://localhost:5000` and other API calls to `http://localhost:3005`.
- Fixed the `params` awaiting warning in `src/app/api/internships/[internshipId]/route.ts`.
- Refactored the layout to use a left-side sidebar for desktop view and a mobile-only header.
- Removed the "Settings" navigation item from the sidebar.
- Applied consistent background styling to the `/profile` page.
- Configured `api.ts` to route PUT requests for `/connect/user/profile` to `http://localhost:5000`.
- Updated the profile page to fetch the full user profile from the backend, including the phone number, to correctly populate the form fields.
- Corrected the API endpoint URL in the profile page to ensure that profile updates are sent to the correct endpoint.
- The favicons have been updated and the `layout.tsx` file has been updated to include the new favicons.
- The profile page has been updated to use `react-hook-form` and `zod` for form validation.
- The `AuthContext` has been updated to include a `fetchUser` function.
- All the missing UI components have been added.
- Fixed the casing issue with the `Button` component.
- The `Toaster` component has been added to the layout.
- Removed the `pages` directory.
- Fixed the manifest error.

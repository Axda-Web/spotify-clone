# Topify

[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white&style=flat-square)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat-square)](https://reactjs.org/)
[![Zustand](https://img.shields.io/badge/Zustand-FFA500?logo=zustand&logoColor=white&style=flat-square)](https://github.com/pmndrs/zustand)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-1A202C?logo=radix-ui&logoColor=white&style=flat-square)](https://radix-ui.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3CC98C?logo=supabase&logoColor=white&style=flat-square)](https://supabase.io/)

![screenshot](/screenshot.jpg)

## Description

Full stack Spotify Clone project. This web application is built using the latest web technologies, combining the power of Next.js for a seamless and responsive user interface, Supabase for managing user data and playlists, and Tailwind CSS for a modern and visually stunning design.

This project explores various concepts and features including:

- Server Side Rendering
- Server Components
- Routing
- Form Validation with React Hook Form
- Responsive Design
- User authentication with Supabase
- File and image upload using Supabase storage
- Server error handling with react-toast
- Play song audio
- Favorites system
- Global state management using Zustand

and more.

## Technologies Used

- [Next.js](https://nextjs.org) - Version 13.4.19
- [TypeScript](https://www.typescriptlang.org) - Version 5.2.2
- [Tailwind CSS](https://tailwindcss.com) - Version 3.3.3
- [Zustand](https://zustand-demo.pmnd.rs/) - Version 4.4.1
- [Radix UI](https://www.radix-ui.com/) (Modal & Slider components.) - Version 1.1.2

## Getting Started

To get started with the Topify project, follow the steps below:

1. Clone the repository:

   ```shell
   git clone https://github.com/Axda-Web/topify
   ```

2. Change into the project directory:

   ```shell
   cd topify
   ```

3. Install the project dependencies:

   ```shell
   npm install
   ```

4. Set up API keys config:

- Create an `.env.local` file at the root of the project.
- Add those variables to the `.env.local` file.

  Example:

  ```shell
    NEXT_PUBLIC_SUPABASE_URL={your-api-token-here}
    NEXT_PUBLIC_SUPABASE_ANON_KEY={your-api-token-here}
    SUPABASE_SERVICE_ROLE_KEY={your-api-token-here}
  ```

  Make sure to replace `{your-api-token-here}` with your actual API tokens from your Supabase config.

5. Use `database.sql` file, create songs and liked_songs table on Supabase.

6. Run the project in development mode:

   ```shell
   npm run dev
   ```

7. Run the project in production mode:

   ```shell
   npm run build
   npm run start
   ```

A deployed version of the Topify project is available on Vercel at [Topify](https://topify-orcin.vercel.app/).

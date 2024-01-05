# Tour-Tap React + Vite Project

[Live Website](https://tour-tap.web.app)

Admin Login Credential:

- Email: imran@gmail.com
- Password: aaaaaa

## Project Overview

Tour-Tap is a web application catering to tourists, providing features for three different user roles: Admin, Tourist/Normal User, and TourGuide. Users can create accounts by clicking the sign-up button in the navbar, uploading their images via ImageBB. Firebase is employed for authentication.

## Features

1. **Role-based Authentication:**

   - Users can sign up and log in with Firebase authentication.
   - Three roles: Admin, Tourist, and TourGuide.
   - Different dashboards for each role, offering role-specific functionalities.

2. **Tour Package Management:**

   - Utilizes the `react-tabs` npm package for a clean display of overview, packages, and tour guide information.
   - Users can view available tour packages and book them.
   - Booking involves a modal to add custom details to the booked package.
   - My Booking route displays all the user's booking information.
   - Users can also add packages to their wishlist.

3. **Protected Routes:**

   - Implements protected routes to verify user authentication.
   - Redirects non-logged-in users to the login page.
   - Manages loading states to prevent forced redirection.

4. **Role-Based Dashboard:**

   - Displays role-specific content in the dashboard.
   - Allows users to manage role-related activities and understand the overall workflow.

5. **CRUD Operations:**
   - Implements CRUD operations on the backend.
   - Utilizes `react-hot-toast` for user-friendly messages.
   - Provides informative messages when there's no data to display.

## Technology Stack

### Frontend

- React
- Tailwind CSS
- Firebase
- Tanstack Query
- Framer Motion
- React Router
- React Hook Form
- Axios
- Lottie Files

### Backend

- Express
- Mongoose
- CORS
- Dotenv
- Cookieparser
- Jsonwebtoken

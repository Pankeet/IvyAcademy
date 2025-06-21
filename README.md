**Table** **of** **Contents**

> • <u>Project Overview</u> • <u>Tech Stack</u>
>
> • <u>Features</u>
>
> • <u>Screenshots</u>
>
> • <u>File Highlights</u>
>
> • <u>Setup and Installation</u> • <u>Contributing</u>
>
> • <u>License</u>

**Project** **Overview**

IvyAcademy is a modern Learning Management System (LMS) built with the
MERN stack (MongoDB, Express.js, React, and Node.js). It is designed for
speed and simplicity, featuring minimal CSS for fast load times. The
user experience is enhanced by smooth animations (using GSAP and Framer
Motion) and a clean, responsive design. IvyAcademy aims to provide a
fast, responsive, and modern user experience for both students and
administrators.

**Tech** **Stack**

The project uses a full MERN stack and related technologies: -
**MongoDB** (database) - **Express.js** (backend framework) - **React**
(frontend library) - **Node.js** (server runtime) - **Mongoose**
(MongoDB ODM for schema and data modeling) - **GSAP** (GreenSock
Animation Platform for JavaScript animations) - **Framer** **Motion**
(animation library for React components) - **Axios** (for HTTP
requests) - **React-Toastify** (toast notifications) -**bcrypt.js**
(password hashing) - **JSON** **Web** **Tokens** **(JWT)**
(authentication tokens)

**Features**

> • **Authentication:** Users and admins can sign up and log in. The
> system uses JWT-based authentication with secure password hashing
> (bcrypt).
>
> • **User** **Roles:** Separate user and admin roles with separate
> collections ( users and admins ) in MongoDB.
>
> • **Courses:** Browse available courses and purchase them. Courses
> data is stored in a courses collection. Purchases are tracked in a
> purchases collection.
>
> • **Animations:** Smooth animations on UI interactions using GSAP and
> Framer Motion for a modern feel.
>
> • **Minimal** **UI:** A clean, minimalist interface ensures fast
> loading times and intuitive navigation.
>
> 1
>
> • **Mobile** **Responsive:** Fully responsive layout, optimized for
> mobile devices.
>
> • **Serverless** **Deployment:** Backend is compatible with serverless
> platforms (e.g., Vercel, Netlify) for easy deployment.

**Screenshots** IvyAcademy Dashboard

*(Screenshots* *will* *be* *added* *soon)*

**File** **Highlights**

> • **Frontend** **Components:**
>
> • src/components/SignUp.jsx – User registration form component. •
> src/components/Navbar.jsx – Main navigation bar with links.
>
> • **Backend** **Controllers:**
>
> • controllers/userController.js – Handles user authentication and
> management. • controllers/adminController.js – Handles admin login and
> course management. • controllers/courseController.js – Manages course
> listing and purchase logic.
>
> • **Backend** **Models** **(Mongoose** **Schemas):**
>
> • models/User.js , models/Admin.js – Schemas for user and admin
> accounts. • models/Course.js – Schema for course data.
>
> • models/Purchase.js – Schema for tracking course purchases.

**Setup** **and** **Installation** 1. **Clone** **the** **repository:**

> git clone https://github.com/yourusername/IvyAcademy.git
>
> 2\. **Backend** **setup:**
>
> 3\. Navigate to the backend directory: cd IvyAcademy/backend 4.
> Install dependencies: npm install
>
> 5\. Create a .env file with the following variables:
>
> MONGO_URL=your_mongo_connection_string
> JWT_USER_SECRET=your_jwt_secret_key
>
> 6\. Start the backend server (with nodemon for hot-reloading): npm run
> dev (or npm start ) 7. **Frontend** **setup:**
>
> 8\. Navigate to the frontend directory: cd ../frontend 9. Install
> dependencies: npm install
>
> 10\. Start the development server: npm run dev (if using Vite) or npm
> start (if using Create React App)
>
> 2
>
> 11\. **Access** **the** **application:**
>
> Open your browser to
> [<u>http://localhost:3000</u>](http://localhost:3000) (or the Vite
> default port). The backend will run on another port (e.g., 5000)
> configured via the .env file.

**Contributing**

Contributions are welcome! To contribute: - Fork the repository.

\- Create a new feature branch (e.g., feature/my-new-feature ). - Make
your changes and commit them with clear messages.

\- Push your branch to GitHub and open a Pull Request.

Please follow code style guidelines and include tests/updates for new
features. You can also open issues to discuss bugs or enhancements
before working on them.

**License**

This project currently has **no** **license**. Contributions are
accepted under the assumption that the project remains open source. If
you use or adapt this code, please attribute appropriately and contact
the repository owner for permission details.

> 3

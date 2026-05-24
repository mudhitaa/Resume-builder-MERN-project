# EasyResume(Resume Builder) – MERN Stack Application

A full-stack Resume Builder web application that allows users to create, edit, preview, and save professional resumes with real-time updates and authentication.

---

## Features

- User authentication (Register / Login / JWT)
- Protected routes (resume builder accessible only after login)
- Create and update resume in real time
- Live resume preview
- Multiple resume sections:
  - Personal Information
  - Summary
  - Skills
  - Work Experience
  - Education
  - Projects
  - Certifications
- Add / remove dynamic fields (array-based sections)
- Fetch saved resume on login
- Profile management (update user info)
- Form validation using Zod
- Secure password hashing (bcrypt)
- JWT-based authentication
- Responsive UI
- Toast notifications for feedback

---
## Live Demo
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen?style=for-the-badge)](https://resume-builder-mern-project.vercel.app)
[https://resume-builder-mern-project.vercel.app](https://resume-builder-mern-project.vercel.app)

### Test Account
You can log in with the following credentials:

| Field | Value |
|---|---|
| **Username** | Alice |
| **Email** | alice@gmail.com |
| **Password** | Alice123# |

> Or feel free to register your own account!
> 
> Backend is hosted on Render free tier — 
> first load may take 30-60 seconds to wake up.

## Tech Stack

### Frontend
- React (Vite)
- TypeScript
- React Hook Form
- Zod
- Axios
- Tailwind CSS
- React Router
- js-cookie
- Sonner (toast notifications)
- jsPDF / HTML-to-Image (PDF export)

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs
- Zod validation
- CORS
- Helmet
- Express Rate Limiting

---

## Installation & Setup
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Make sure you have the following installed on your machine:
* [Node.js](https://nodejs.org) (v16 or higher recommended)
* [npm](https://npmjs.com) (comes with Node)
* [pnpm](https://pnpm.io) (`npm install -g pnpm`)
* [MongoDB](https://mongodb.com) (Local instance or Atlas cloud cluster)

### Installation & Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/mudhitaa/Resume-builder-MERN-project.git
cd Resume-builder-MERN-project
```
#### 2. Backend Setup (Server)
Navigate to the server directory, install dependencies, and configure your environment variables.
```bash
cd server
pnpm install
```
Create a `.env` file in the root of the `server` directory and add your configuration:
```env
PORT=9005
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
*Note: Replace `your_mongodb_connection_string` and `your_secret_key` with your actual MongoDB credentials and a secure secret phrase.*

Start the backend development server:
```bash
pnpm dev
```
#### 3. Frontend Setup (Client)
Navigate to the client directory, install dependencies, and launch the application.
Create a `.env` file in the root of the `client` directory:
```env
VITE_APP_BASE_URL=http://localhost:9005/api/v1/
```
```bash
cd client
pnpm install
pnpm run dev
```

### Deployment Ports
* **Backend:** Runs on `http://localhost:9005`
* **Frontend:** Open the URL provided in your terminal output (usually `http://localhost:5173` or `http://localhost:3000`) to view the application in your browser.

# Future Improvements
- Drag and drop section reordering
- Resume sharing via public link
- Dark mode support
- Mobile app version

# Author 
Mudhita Bajracharya
GitHub: https://github.com/mudhitaa

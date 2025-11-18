# 🍃 GreenNest – Indoor Plant Care & Store

![GreenNest Screenshot](https://i.ibb.co/My1HtbWR/greennestss.png)

## 🌱 About Greennest
GreenNest is an elegant single-page web application built for plant lovers who want to nurture and decorate their homes with healthy indoor plants. The platform allows users to explore plant care guides, buy plants, and book expert consultations — ensuring a greener and healthier living space during any season.

## Project Overview

**Objective:**  
Building a responsive and visually appealing single-page application for indoor plant lovers, enabling them to explore plant care guides, buy plants, and book expert consultations.

**Target Audience:**  
Plant enthusiasts, home decorators, and anyone interested in nurturing indoor plants with expert guidance.

**Key Metrics:**  
- User registrations and logins  
- Number of plant purchases and consultation bookings  
- User engagement with care guides and DIY projects  
- Average rating of plants and services  

**Deployment:**  
The project is deployed as a Single Page Application (SPA) hosted on Netlify for the frontend.

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, DaisyUI, Framer Motion  
- **Authentication:** Firebase Authentication (Email/Password, Google Sign-In)  
- **State Management & API:** Axios  
- **Styling:** TailwindCSS, DaisyUI  
- **Animations:** Framer Motion  
- **Routing:** React Router  
- **Notifications:** React Hot Toast, React Toastify  
- **Build Tool:** Vite  
- **Linting:** ESLint  

---


## 🧩 Core Features & Functional Requirements
- Responsive, visually appealing plant care and store platform.
- Secure Firebase authentication (Signup, Login, Google Sign-In, Forgot Password).
- Fetch plant data from JSON for product/service listings.
- Protected route for service details and profile management.
- SPA functionality with a minimalist and calming design.

---

## Project Live Link  
[https://b12-a09-green-nest-ph.netlify.app/](https://b12-a09-green-nest-ph.netlify.app/)

---

## Dependencies

```json
{
  "name": "b12-a09-green-nest",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.15",
    "axios": "^1.12.2",
    "firebase": "^12.4.0",
    "framer-motion": "^12.23.24",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.4",
    "react-toastify": "^11.0.5",
    "tailwindcss": "^4.1.15"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "daisyui": "^5.3.7",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "vite": "^7.1.7"
  }
}

```
---

## Installation

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/SadiaAhmedBushra/b12-a09-green-nest.git
cd b12-a09-green-nest/client

# Install client dependencies
npm install
```
  
## After Installation

Start the frontend client
```bash
npm run dev
```
Then open your browser and visit:
http://localhost:3000

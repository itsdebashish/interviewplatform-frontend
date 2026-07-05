# Interview Platform Frontend

A modern, scalable frontend application for the **AI Interview Platform**, built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. The application provides a responsive and intuitive user experience for candidates and administrators, supporting authentication, coding assessments, AI-powered interview feedback, and real-time interview management.

## 🚀 Features

* Secure authentication and authorization
* Responsive dashboard for candidates and administrators
* Coding assessment interface
* AI-powered interview feedback visualization
* Interview scheduling and management
* Real-time notifications
* User profile management
* Modern, responsive UI built with Tailwind CSS
* Modular and feature-based architecture
* REST API integration
* Protected routing

## 🛠️ Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* React Hook Form
* Zod
* Zustand
* Monaco Editor
* WebSocket (STOMP/SockJS)

## 📂 Project Structure

```text
src/
├── assets/
├── components/
├── config/
├── context/
├── features/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── store/
├── types/
├── utils/
├── App.tsx
└── main.tsx
```

## ⚙️ Getting Started

### Prerequisites

* Node.js 20+
* npm

### Installation

```bash
git clone https://github.com/itsdebashish/interviewplatform-frontend.git
cd ai-interview-platform-frontend
npm install
```

### Run Development Server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Environment Variables

Create a `.env` file in the project root.

```env
VITE_API_BASE_URL=http://localhost:8080/api/v1
VITE_WS_URL=http://localhost:8080/ws
```

Update these values according to your deployment environment.

## 📌 Planned Features

* JWT Authentication
* Role-based authorization
* AI interview evaluation
* Online code editor
* Coding execution dashboard
* Interview history
* Admin dashboard
* Analytics and reports
* Real-time notifications
* Dark mode support

## 🤝 Backend

This frontend is designed to work with the ** Interview Platform Backend**, a Spring Boot application providing secure REST APIs, authentication, interview management, AI review services, and real-time communication.

## 📄 License

This project is licensed under the MIT License.

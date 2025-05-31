# 💬 Real-Time Chat App with Authentication

A full-stack real-time chat application built with **React**, **Node.js**, **Socket.IO**, and **JWT-based authentication**. This project allows users to sign up, log in securely, and chat with others in real-time.

---

## 🚀 Features

- 🔐 **JWT Authentication** (Login / Signup / Logout)
- 💬 **Real-Time Chat** using **Socket.IO**
- 🔄 **Zustand** for global state management
- 🧠 Protected routes using React Router
- 🌐 Responsive and modern UI with **Tailwind CSS**
- ⚙️ Axios for API communication
- 🛡️ Auth checks on route load and API calls
- 🎯 Scalable architecture with clean code separation

---

## 🛠️ Tech Stack

### Frontend:
- React
- React Router
- Zustand
- Axios
- Tailwind CSS
- Lucide Icons

### Backend:
- Node.js
- Express.js
- Socket.IO
- JSON Web Token (JWT)
- CORS, Bcrypt, and other common middlewares

---

## 📁 Folder Structure
root/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── store/
│ │ └── App.jsx
│ └── tailwind.config.js
│
├── server/ # Node.js backend
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ ├── middleware/
│ └── index.js
│
├── README.md


---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/realtime-chat-app.git
cd realtime-chat-app
```

###2. Install dependencies
```bash
Copy
Edit
# For frontend
cd client
npm install

# For backend
cd ../server
npm install
```
###3.Environment Variables
Create a .env file in server/ with:

```bash
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
###4. Start the App
```bash
Copy
Edit
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm run dev
```


🧠 Learnings
Implemented secure JWT-based authentication from scratch

Managed global state with Zustand instead of Redux

Used Socket.IO for live real-time communication

Improved my debugging and full-stack integration skills

🙌 Acknowledgements
Inspired by real-world messaging platforms

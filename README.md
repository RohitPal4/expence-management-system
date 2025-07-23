# 💸 Expense Management System

A full-stack Expense Management application built using the **MERN Stack** (MongoDB, Express.js, React, Node.js). Users can securely sign up, log in, and manage income and expenses with real-time tracking.

---

## 🚀 Live Demo

🌐 Deployed (Client + Server):  
👉 [https://expence-management-system.onrender.com](https://expence-management-system.onrender.com)

---

## 🛠️ Tech Stack

**Frontend (React):**
- React
- React Router DOM
- Axios
- Ant Design / Bootstrap

**Backend (Node + Express):**
- Express.js
- MongoDB + Mongoose
- JWT for Auth
- bcryptjs for Password Hashing
- CORS
- Nodemailer (for password reset)

---

## 📦 Features

- 🔐 Secure Login / Registration with JWT
- 💰 Add, Delete, and View Transactions
- 📊 Filter by Date / Category
- 📈 Expense & Income Visualization
- 🔒 Password reset via email
- ☁️ Fully deployed on Render (both client + server)

---

## ⚙️ Local Development Setup

### 1. Clone the repository

```bash
git clone https://github.com/RohitPal4/expence-management-system.git
cd expence-management-system
```

---

### 2. Install dependencies

#### Backend

```bash
npm install
```

#### Frontend

```bash
cd client
npm install
```

---

### 3. Create `.env` file in root (same level as `server.js`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

---

### 4. Start the application

#### Backend

```bash
npm run server
```

#### Frontend

```bash
cd client
npm start
```

Visit: `http://localhost:3000`

---

## 📁 Folder Structure

```
expence-management-system/
├── client/                  # React Frontend
│   ├── build/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── styles/
│       └── App.js
│
├── config/                  # MongoDB config
├── controllers/             # Controller logic
├── middlewares/             # Auth & error middleware
├── models/                  # Mongoose models
├── routes/                  # Route definitions
├── utils/                   # Email utilities
├── testEmail.js             # Optional mail test
├── server.js                # Express server entry
├── .env
├── package.json
└── README.md
```

---

## 🔄 CORS & Axios Setup

### Backend (`server.js`):

```js
app.use(cors({
  origin: ['http://localhost:3000', 'https://expence-management-system.onrender.com'],
  credentials: true
}));
```

### Frontend (`axiosConfig.js`):

```js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://expence-management-system.onrender.com/api/v1',
  withCredentials: true
});

export default axiosInstance;
```

---

## 🧑‍💻 Author

Made with ❤️ by [Rohit Pal](https://github.com/RohitPal4)

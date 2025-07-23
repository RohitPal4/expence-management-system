
````markdown
# 💸 Expense Management System

A full-stack Expense Management application built with the **MERN Stack** (MongoDB, Express.js, React, Node.js). Users can securely sign up, log in, and manage their income and expenses with real-time tracking.

## 🚀 Live Demo

🌐 Frontend + Backend (same domain):  
👉 [https://expence-management-system.onrender.com](https://expence-management-system.onrender.com)

---

## 🛠️ Tech Stack

**Frontend:**
- React
- Axios
- React Router
- Ant Design / Bootstrap (UI)

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (Authentication)
- bcrypt (Password Hashing)
- CORS

---

## 📦 Features

- 🔐 User Authentication (Register/Login)
- 📊 Add, View & Delete Transactions
- 📈 Income vs Expense Chart
- 🔍 Filter by Date / Category
- 🧠 Data stored securely in MongoDB
- ☁️ Deployed on Render (Client + Server)

---

## ⚙️ Environment Setup (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/RohitPal4/expence-management-system.git
cd expence-management-system
````

### 2. Install dependencies

#### Backend:

```bash
cd backend
npm install
```

#### Frontend:

```bash
cd ../client
npm install
```

### 3. Add `.env` in `backend` folder

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run locally

#### Backend:

```bash
npm run server
```

#### Frontend:

```bash
npm start
```

Visit: `http://localhost:3000`

---

## 📁 Folder Structure

```
expence-management-system/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.js
│   │   └── index.js
└── README.md
```

---

## 🔐 CORS & Axios Config

**Backend:**

```js
app.use(cors({
  origin: ['http://localhost:3000', 'https://expence-management-system.onrender.com'],
  credentials: true
}));
```

**Frontend Axios Setup:**

```js
const axiosInstance = axios.create({
  baseURL: 'https://expence-management-system.onrender.com/api/v1',
  withCredentials: true
});
```

---

## 🧑‍💻 Author

Made with ❤️ by [Rohit Pal](https://github.com/RohitPal4)



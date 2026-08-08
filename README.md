# 🌐 Social Media Platform

A full-stack social media web application that allows users to create accounts, authenticate securely, create posts, interact with other users, comment, like content, manage profiles, and connect with other users.

The project is built with a simple and practical full-stack architecture using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL.

---

## 🚀 Features

### 🔐 Authentication
- User registration
- User login
- Secure password hashing with bcrypt
- JWT-based authentication
- Logout functionality
- Protected API routes

### 👤 User Profiles
- View user profiles
- Update profile information
- Profile picture upload
- Display user posts
- Follow/unfollow functionality

### 📝 Posts
- Create posts
- View posts in the feed
- Upload post content/images
- Delete posts
- User-specific posts

### ❤️ Social Interactions
- Like/unlike posts
- Add comments
- View comments
- Delete comments
- Follow/unfollow users

### 🔎 Search
- Search for users
- Find profiles and content

### 🔔 Notifications
- User interaction notifications
- Follow and engagement notifications

### 📱 Frontend
- Responsive interface
- Dark-themed UI
- Login and registration pages
- Social media feed
- Profile pages
- Post interactions

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Fetch API

### Backend
- Node.js
- Express.js
- REST APIs
- JWT
- bcrypt
- Multer

### Database
- MySQL
- mysql2

### Development Tools
- Visual Studio Code
- Git
- GitHub
- MySQL Workbench
- Postman / Browser Developer Tools

---

## 📂 Project Structure

```text
social-media-app/
│
├── client/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── profile.html
│   └── upload.html
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env.example
│   ├── app.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md

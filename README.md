# 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🚀 [Quick Start](#quick-start)
5. 🛠️ [Setup & Configuration](#setup)
6. 📜 [License](#license)

---

## 🤖 Introduction

A powerful **SaaS platform** designed to help users **manage expenses and budgets** efficiently. It features **AI-powered financial advice**, providing personalized recommendations based on income, expenses, and budgets. Built with **Next.js, Tailwind CSS, and Google Gemini AI**, it delivers an intuitive and responsive user experience.

---

## ⚙️ Tech Stack

- **Next.js** – Framework for server-side rendering and API routes.
- **TypeScript** – Strongly-typed JavaScript for better maintainability.
- **Tailwind CSS** – Modern utility-first styling framework.
- **Google Gemini AI** – AI-driven financial advice generation.
- **Clerk** – Authentication & user management.
- **Nodemailer** – For sending welcome emails.
- **NeonDB** – PostgreSQL cloud database.
- **Drizzle** – TypeScript ORM for database management.

---

## 🔋 Features

✅ **Income & Expense Tracking** – Add, edit, and delete financial records.

✅ **Budget Management** – Set budget limits and track overspending.

✅ **AI-Powered Financial Advice** – Get personalized insights based on financial data using **Google Gemini AI**.

✅ **User Authentication** – Secure sign-up/login with **Clerk**.

✅ **Automated Welcome Emails** – New users receive welcome emails via **Nodemailer**.

✅ **Responsive Design** – Optimized for desktop, tablet, and mobile.

✅ **Cloud Database** – Uses **NeonDB** for scalable PostgreSQL storage.

✅ **Efficient ORM** – **Drizzle** simplifies database interactions.

---

## 🚀 Quick Start

### **1️⃣ Prerequisites**
Ensure you have installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### **2️⃣ Clone the Repository**

```bash
  git clone https://github.com/yourusername/expense-tracker.git
  cd expense-tracker
```

### **3️⃣ Install Dependencies**

```bash
  npm install
  # or
  yarn install
```

### **4️⃣ Configure Environment Variables**

Create a **`.env.local`** file in the root directory and add:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

NEXT_PUBLIC_GEMINI_API_KEY=
NEXT_PUBLIC_DATABASE_URL=

EMAIL_USER=
EMAIL_PASS=
```

Replace placeholders with actual API keys and credentials.

### **5️⃣ Run the Project**

```bash
  npm run dev
  # or
  yarn dev
```

Visit **[http://localhost:3000](http://localhost:3000)** to access the app.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📜 License

This project is **open-source** and available under the [MIT License](LICENSE).

---

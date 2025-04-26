# 🍽️ Food Delivery Website

This is a simple and clean **Food Delivery Web Application** where users can **login using Mobile OTP authentication** and view a list of available restaurants fetched from **Supabase** backend.

---
**Jam Link** - https://jam.dev/c/94a823b4-7439-4ca4-aa27-99648a8e9f91
## 🚀 Features

- 📱 **Mobile Number OTP Login** (Supabase Authentication)
- 🍔 **Restaurant List Display** (Fetched from Supabase Database)
- ⚡ **React.js Frontend** with **Tailwind CSS** styling
- 🔒 **Session Management** using `sessionStorage`
- 🛠️ **Supabase** used for both Authentication and Database
- 🌐 Responsive Design for all devices

---

## 📚 Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend-as-a-Service:** Supabase (Auth + Database)
- **Authentication:** Mobile OTP
- **State Management:** React Hooks (`useState`, `useEffect`)

---

## 🛠️ Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Amansingh-06/food-fast.git
   cd food-delevery

   npm install
   
🔑 Authentication Flow
User enters mobile number → receives OTP.

User submits OTP → Supabase verifies OTP.

On successful login → sessionStorage.setItem('isLoggedIn', 'true').

Navbar dynamically shows Login/Logout based on login status.

📦 Supabase Database Structure
Table: Restaurant

Fields Example:

id (Primary Key)

name (Text)

location (Text)

rating (Decimal)

imageUrl (Text URL)
description(Text)



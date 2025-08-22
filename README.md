# 🛍️ Next.js Product App

A simple product management application built with **Next.js 15 (App Router)** and **NextAuth.js**.  
Users can browse products publicly and, after login, add new products via a protected dashboard.

---

## 🚀 Features
- Public Landing Page with sections (Navbar, Hero, Highlights, Footer)
- Authentication with **NextAuth.js** (Google or Credentials)
- Product List & Product Details pages (public)
- Protected Dashboard → Add Product (only for logged-in users)
- Mock backend using Next.js Route Handlers (`/api`)
- Optional:
  - Toast notifications
  - Theme toggle (dark/light)
  - Loading spinners

---

## 🛠️ Tech Stack
- **Next.js 15 (App Router)**
- **NextAuth.js**
- **Prisma + SQLite** (or mock JSON data)
- **Tailwind CSS** for styling
- **React Hot Toast** for notifications

---

## 📦 Installation & Setup

# Clone the repository
```bash
git clone https://github.com/Md-Ramjan-Ali/Travel-Agency
```
```bash
cd Travel-Agency
```
# Install dependencies
```bash
npm install
```
# Setup environment
```bash
cp .env.example .env.local
```
# Fill in NEXTAUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET

# Run development server
npm run dev

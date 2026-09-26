# CosmoShop 🚀

CosmoShop is a space-themed e-commerce web application built with React and TypeScript.

This is an **educational portfolio project** created to practice frontend development, explore modern web technologies, and demonstrate my programming skills.

> [!WARNING]
> **Educational Project — Not a Real Online Store**
>
> CosmoShop is a demo application and does not process real payments or sell actual products.
>
> **Please do not use your real personal information when registering.** Use fictional usernames and passwords instead.
>
> User accounts, cart data, and order history are stored in the browser's `localStorage`. This is a demonstration implementation and is not secure for real user data.

## ✨ Features

- **Product Catalog** — Browse products in a space-themed store.
- **Product Details** — View product information and descriptions.
- **User Authentication** — Register, log in, and log out using a demo authentication system.
- **Shopping Cart** — Add products, remove items, and adjust quantities.
- **Checkout** — Place demo orders and calculate the total price.
- **My Orders** — View order history, including order dates, totals, and purchased items.
- **Persistent Storage** — Save demo user accounts, cart contents, and orders using `localStorage`.
- **Client-Side Routing** — Navigate between pages using React Router.

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **React Router**
- **CSS Modules**
- **LocalStorage API**
- **ESLint**

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BOgdanRoz/CosmoShop.git
   ```

2. Navigate to the project directory:

   ```bash
   cd CosmoShop
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## 📦 Available Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start the development server     |
| `npm run build`   | Build the project for production |
| `npm run preview` | Preview the production build     |
| `npm run lint`    | Run ESLint                       |

## 💾 Data Storage

CosmoShop uses the browser's `localStorage` to simulate data persistence.

- User accounts are stored locally.
- Shopping carts are saved separately for each user.
- Orders are saved and associated with the current user.
- Data remains in the browser until it is cleared.

This implementation is intended for demonstration purposes only. It does not include a production backend, secure authentication, or real payment processing.

## 🎯 Project Goals

The main goals of this project were to:

CosmoShop is my first project built with TypeScript. It was an opportunity to gain hands-on experience with TypeScript and apply it in a real-world-style React application.

- Practice building a multi-page React application.
- Improve TypeScript skills and component architecture.
- Work with React Hooks and state management.
- Implement client-side routing.
- Practice data persistence with `localStorage`.
- Build a complete e-commerce-style user flow, from browsing products to viewing order history.

## 📄 License

This project was created for educational and portfolio purposes.

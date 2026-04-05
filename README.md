# 📊 Finance Dashboard

A modern, responsive, dark-themed Finance Dashboard built with **React**, **Vite**, and **Tailwind CSS**. It provides a sleek, high-end user interface for tracking budgets, transactions, analytics, and administrative settings. 

---

## ✨ Features
- **Dashboard Overview**: Custom charts (using Recharts), AI Summaries, and modular quick invoice widgets.
- **Transactions Page**: A fully functional table with dynamically applied search filtering and an active pagination workflows.
- **Dynamic Scheduler**: Interactive task lists where you can review workflows and actively mark upcoming/recurring payments as paid.
- **Interactive Settings Structure**: Clean dynamic sub-navigation tabs (Profile Details, Security, Notifications) featuring working form states.
- **Fully Responsive Architecture**: Modular flex-box design optimized for seamless multi-screen use natively featuring custom-designed scrollbars and sticky headers.

## 🛠️ Tech Stack
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 (Featuring custom fluid CSS layout configuration)
- **Icons**: Lucide-React
- **Charts**: Recharts

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Setup

1. **Navigate to the project** (or clone the repository):
   ```bash
   cd Finance_Dashboard
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Interact with the App:**
   Open your browser and go to the locally hosted application at `http://localhost:5173`.

---

## 📂 Project Structure

- `src/App.jsx`: State management hub routing global layouts and main application wrappers.
- `src/index.css`: Tailwind setup injecting fundamental styles and specialized utilities (e.g., `.custom-scrollbar`).
- `src/components/`: Contains all functional React components mapping out individual pages (`SettingsPage`, `ListPage`, `Sidebar`, etc.) as well as modular visual widgets.

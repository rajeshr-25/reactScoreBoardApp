# 🏏 Cricket Score Board

A simple, real-time cricket scoring app built with **React**. Track runs, wickets, balls, and overs during a cricket match with a clean, interactive scoreboard.

---

## 📸 Features

- **Live Score Tracking** — Add 1, 2, 3, 4, or 6 runs per ball
- **Wicket Counter** — Record wickets as they fall
- **Auto Over Calculation** — Overs increment automatically every 6 balls
- **Ball Counter** — Resets to 0 at the start of each new over

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above)
- npm or yarn

### Installation

# Clone the repository
git clone https://github.com/your-username/cricket-score-board.git

# Navigate into the project
cd cricket-score-board

# Install dependencies
npm install

# Start the development server
npm run dev


---

## 🛠️ Tech Stack

Technology	Purpose
React	UI framework
useState	Managing score, balls, wickets, overs
useEffect	Auto-detecting over completion
CSS	Custom styling


---

## 📁 Project Structure

cricket-score-board/
├── src/
│   ├── App.jsx       # Main scoreboard component
│   └── App.css       # Styles
├── public/
├── package.json
└── README.md


---

## 🎮 How to Use

1. Click **1 Run**, **2 Runs**, **3 Runs**, **4 Runs**, or **6 Runs** to add runs for each delivery.
2. Click **Wicket** to record a fallen wicket.
3. The **Balls** counter tracks deliveries in the current over.
4. After every **6 balls**, the **Over** count increments and the ball counter resets automatically.

---

## 📌 Component Overview

### `App.jsx`

**State**
State	Type	Description
runs	number	Total runs scored
balls	number	Balls bowled in current over
over	number	Completed overs
wickets	number	Total wickets fallen


**Functions**
Function	Description
addScore(score)	Adds runs and increments ball count
addWicket()	Increments the wicket counter


A `useEffect` hook watches the `balls` state — when it reaches 6, it auto-increments the over and resets the ball counter.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

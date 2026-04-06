🏏 Cricket Score Board
A simple, real-time cricket scoring app built with React. Track runs, wickets, balls, and overs during a cricket match with a clean, interactive scoreboard.

📸 Features

Live Score Tracking — Add 1, 2, 3, 4, or 6 runs per ball
Wicket Counter — Record wickets as they fall
Auto Over Calculation — Overs increment automatically every 6 balls
Ball Counter — Resets to 0 at the start of each new over


🚀 Getting Started
Prerequisites

Node.js (v16 or above)
npm or yarn

Installation
bash# Clone the repository
git clone https://github.com/your-username/cricket-score-board.git

# Navigate into the project
cd cricket-score-board

# Install dependencies
npm install

# Start the development server
npm run dev

🛠️ Tech Stack
TechnologyPurposeReactUI frameworkuseStateManaging score, balls, wickets, oversuseEffectAuto-detecting over completionCSSCustom styling

📁 Project Structure
cricket-score-board/
├── src/
│   ├── App.jsx       # Main scoreboard component
│   └── App.css       # Styles
├── public/
├── package.json
└── README.md

🎮 How to Use

Click 1 Run, 2 Runs, 3 Runs, 4 Runs, or 6 Runs to add runs for each delivery.
Click Wicket to record a fallen wicket.
The Balls counter tracks deliveries in the current over.
After every 6 balls, the Over count increments and the ball counter resets automatically.


📌 Component Overview
App.jsx
StateTypeDescriptionrunsnumberTotal runs scoredballsnumberBalls bowled in the current overovernumberCompleted overswicketsnumberTotal wickets fallen
FunctionDescriptionaddScore(score)Adds runs and increments ball countaddWicket()Increments the wicket counter
A useEffect hook watches the balls state — when it reaches 6, it auto-increments the over and resets the ball counter.

📄 License
This project is open source and available under the MIT License.

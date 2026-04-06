import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [runs, setRuns] = useState(0);
  const [balls, setBalls] = useState(0);
  const [over, setOver] = useState(0);
  const [wickets, setWickets] = useState(0);

  const addScore = (score) => {
    setRuns(runs + score);
    setBalls(balls + 1);
  };

  useEffect(() => {
    if (balls >= 6) {
      setOver(over + 1);
      setBalls(0);
    }
  }, [balls]);

  const addWicket = () => {
    setWickets(wickets + 1);
  };

  return (
    <div className="wrapper">
      <div className="board">
        <h2 className="board-title">Score Board</h2>
        <div className="stats-grid">
          <div className="stat-card runs">
            <div className="stat-label">Runs</div>
            <div className="stat-value">{runs}</div>
          </div>
          <div className="stat-card wickets">
            <div className="stat-label">Wickets</div>
            <div className="stat-value">{wickets}</div>
          </div>
          <div className="stat-card balls">
            <div className="stat-label">Balls</div>
            <div className="stat-value">{balls}</div>
          </div>
          <div className="stat-card over">
            <div className="stat-label">Over</div>
            <div className="stat-value">{over}</div>
          </div>
        </div>
        <div className="divider" />
        <div className="btn-grid">
          <button className="run-btn" onClick={() => addScore(1)}>
            1 Run
          </button>
          <button className="run-btn" onClick={() => addScore(2)}>
            2 Runs
          </button>
          <button className="run-btn" onClick={() => addScore(3)}>
            3 Runs
          </button>
          <button className="run-btn four" onClick={() => addScore(4)}>
            4 Runs
          </button>
          <button className="run-btn six" onClick={() => addScore(6)}>
            6 Runs
          </button>
          <button className="run-btn wicket" onClick={addWicket}>
            Wicket
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

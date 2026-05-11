import { initGame } from "./Data/data.js";
import {
  GlobalEvent,
  initHistory,
  registerMoveListener,
  registerTurnListener,
  registerStatusListener,
  registerCaptureListener,
  undoMove,
  redoMove,
  getMoveHistory,
  getCapturedCounts,
  getCurrentTurn,
  loadSavedGame,
  getHistoryData,
} from "./Events/global.js";
import { initGameRender } from "./Render/main.js";

const globalState = initGame();
let keySquareMapper = {};

globalState.flat().forEach((square) => {
  keySquareMapper[square.id] = square;
});

initGameRender(globalState);
GlobalEvent();
initHistory();
initGameUI();

function initGameUI() {
  const turnLabel = document.getElementById("turnLabel");
  const whiteTimerLabel = document.getElementById("whiteTimer");
  const blackTimerLabel = document.getElementById("blackTimer");
  const statusMessage = document.getElementById("statusMessage");
  const moveHistoryList = document.getElementById("moveHistoryList");
  const whiteCapture = document.getElementById("whiteCapture");
  const blackCapture = document.getElementById("blackCapture");
  const undoBtn = document.getElementById("undoBtn");
  const redoBtn = document.getElementById("redoBtn");
  const saveGameBtn = document.getElementById("saveGameBtn");
  const loadGameBtn = document.getElementById("loadGameBtn");
  const toggleClockBtn = document.getElementById("toggleClockBtn");
  const resetPositionBtn = document.getElementById("resetPositionBtn");
  const bulletBtn = document.getElementById("bulletBtn");
  const blitzBtn = document.getElementById("blitzBtn");
  const rapidBtn = document.getElementById("rapidBtn");
  const classicalBtn = document.getElementById("classicalBtn");
  const customMinutes = document.getElementById("customMinutes");
  const setCustomTimeBtn = document.getElementById("setCustomTimeBtn");
  const themeSelect = document.getElementById("themeSelect");

  let whiteSeconds = 600;
  let blackSeconds = 600;
  let currentClock = "white";
  let timerRunning = true;
  let timerInterval = null;

  function formatTime(seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  }

  function updateClockLabels() {
    if (whiteTimerLabel) whiteTimerLabel.textContent = formatTime(whiteSeconds);
    if (blackTimerLabel) blackTimerLabel.textContent = formatTime(blackSeconds);
  }

  function updateStatus(message) {
    if (statusMessage) statusMessage.textContent = message;

    if (/checkmate|stalemate|time over/i.test(message)) {
      timerRunning = false;
      if (toggleClockBtn) toggleClockBtn.textContent = "Start Clock";
    }
  }

  function updateCaptureCounts() {
    const counts = getCapturedCounts();
    if (whiteCapture) whiteCapture.textContent = counts.whiteCaptured;
    if (blackCapture) blackCapture.textContent = counts.blackCaptured;
  }

  function formatAlgebraicMove(move) {
    const pieceName = move.piece.replace(/^(WHITE_|BLACK_)/, "");
    const isPawn = pieceName === "PAWN";
    const isCapture = move.capture || move.enPassant;
    const promotionSuffix = move.promotion ? "=Q" : "";
    const checkSuffix = move.checkmate ? "#" : move.check ? "+" : "";

    if (move.castle) {
      return move.to[0] === "g" ? `O-O${checkSuffix}` : `O-O-O${checkSuffix}`;
    }

    if (isPawn) {
      if (isCapture) {
        return `${move.from[0]}x${move.to}${promotionSuffix}${checkSuffix}`;
      }
      return `${move.to}${promotionSuffix}${checkSuffix}`;
    }

    const notationMap = {
      KING: "K",
      QUEEN: "Q",
      ROOK: "R",
      BISHOP: "B",
      KNIGHT: "N",
    };

    const prefix = notationMap[pieceName] || "";
    return `${prefix}${isCapture ? "x" : ""}${move.to}${promotionSuffix}${checkSuffix}`;
  }

  function renderMoveHistory() {
    if (!moveHistoryList) return;
    const moves = getMoveHistory();
    moveHistoryList.innerHTML = "";
    moves.forEach((move, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${formatAlgebraicMove(move)}`;
      moveHistoryList.appendChild(li);
    });
  }

  function setTimeControl(seconds) {
    whiteSeconds = seconds;
    blackSeconds = seconds;
    currentClock = "white";
    timerRunning = true;
    updateClockLabels();
    updateStatus(`Time control set to ${seconds / 60} minute(s). White to move.`);
    if (turnLabel) turnLabel.textContent = "White";
  }

  function applyTheme(theme) {
    document.body.className = theme;
    document.body.classList.add("theme-base");
    if (theme === "theme-light") {
      document.body.style.color = "#252525";
    } else {
      document.body.style.color = "";
    }
  }

  function startClock() {
    timerRunning = true;
  }

  function updateTurn(turn) {
    currentClock = turn;
    if (turnLabel) turnLabel.textContent = turn.charAt(0).toUpperCase() + turn.slice(1);
    updateStatus(`${turn.charAt(0).toUpperCase() + turn.slice(1)} to move.`);
  }

  function updateTimer() {
    if (!timerRunning) return;
    if (currentClock === "white") {
      if (whiteSeconds > 0) whiteSeconds -= 1;
    } else {
      if (blackSeconds > 0) blackSeconds -= 1;
    }
    updateClockLabels();

    if (whiteSeconds <= 0 || blackSeconds <= 0) {
      timerRunning = false;
      updateStatus(`Time over for ${whiteSeconds <= 0 ? "White" : "Black"}.`);
      document.body.classList.add("time-up");
    }
  }

  function toggleClock() {
    timerRunning = !timerRunning;
    if (toggleClockBtn) {
      toggleClockBtn.textContent = timerRunning ? "Pause Clock" : "Start Clock";
    }
    updateStatus(timerRunning ? "Clock running." : "Clock paused.");
  }

  function resetGame() {
    window.location.reload();
  }

  function saveGame() {
    const historyState = getHistoryData();
    const payload = {
      snapshot: JSON.parse(JSON.stringify(globalState)),
      historyStates: historyState.historyStates,
      historyMoves: historyState.historyMoves,
      historyIndex: historyState.historyIndex,
      whiteSeconds,
      blackSeconds,
      currentClock,
      turn: getCurrentTurn(),
    };
    localStorage.setItem("chessGameSave", JSON.stringify(payload));
    updateStatus("Game saved locally.");
  }

  function loadGame() {
    const saved = localStorage.getItem("chessGameSave");
    if (!saved) {
      updateStatus("No saved game found.");
      return;
    }
    try {
      const data = JSON.parse(saved);
      if (loadSavedGame(data)) {
        whiteSeconds = data.whiteSeconds ?? 600;
        blackSeconds = data.blackSeconds ?? 600;
        currentClock = data.currentClock ?? getCurrentTurn();
        updateClockLabels();
        updateCaptureCounts();
        renderMoveHistory();
        updateStatus("Loaded saved game.");
      }
    } catch (error) {
      updateStatus("Unable to load saved game.");
    }
  }

  if (undoBtn) {
    undoBtn.addEventListener("click", () => {
      if (undoMove()) {
        renderMoveHistory();
        updateCaptureCounts();
        updateTurn(getCurrentTurn());
      }
    });
  }

  if (redoBtn) {
    redoBtn.addEventListener("click", () => {
      if (redoMove()) {
        renderMoveHistory();
        updateCaptureCounts();
        updateTurn(getCurrentTurn());
      }
    });
  }

  if (saveGameBtn) {
    saveGameBtn.addEventListener("click", saveGame);
  }

  if (loadGameBtn) {
    loadGameBtn.addEventListener("click", loadGame);
  }

  if (toggleClockBtn) {
    toggleClockBtn.addEventListener("click", toggleClock);
  }

  if (resetPositionBtn) {
    resetPositionBtn.addEventListener("click", resetGame);
  }

  if (bulletBtn) {
    bulletBtn.addEventListener("click", () => setTimeControl(60));
  }

  if (blitzBtn) {
    blitzBtn.addEventListener("click", () => setTimeControl(300));
  }

  if (rapidBtn) {
    rapidBtn.addEventListener("click", () => setTimeControl(600));
  }

  if (classicalBtn) {
    classicalBtn.addEventListener("click", () => setTimeControl(900));
  }

  if (setCustomTimeBtn && customMinutes) {
    setCustomTimeBtn.addEventListener("click", () => {
      const minutes = Number(customMinutes.value) || 10;
      const seconds = Math.max(1, Math.min(60, minutes)) * 60;
      setTimeControl(seconds);
    });
  }

  if (themeSelect) {
    themeSelect.addEventListener("change", (event) => {
      applyTheme(event.target.value);
    });
  }

  registerMoveListener(() => {
    renderMoveHistory();
    updateCaptureCounts();
  });

  registerTurnListener((turn) => {
    updateTurn(turn);
  });

  registerStatusListener((message) => {
    updateStatus(message);
  });

  registerCaptureListener((counts) => {
    if (whiteCapture) whiteCapture.textContent = counts.whiteCaptured;
    if (blackCapture) blackCapture.textContent = counts.blackCaptured;
  });

  updateClockLabels();
  updateCaptureCounts();
  renderMoveHistory();
  updateStatus("Game ready. White to move.");
  applyTheme("theme-default");

  timerInterval = setInterval(updateTimer, 1000);
  window.addEventListener("beforeunload", () => {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
  });
}

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

export { globalState, keySquareMapper };

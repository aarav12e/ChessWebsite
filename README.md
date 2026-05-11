<div align="center">

```
 ██████╗██╗  ██╗███████╗███████╗███████╗    ██╗    ██╗███████╗██████╗ ███████╗██╗████████╗███████╗
██╔════╝██║  ██║██╔════╝██╔════╝██╔════╝    ██║    ██║██╔════╝██╔══██╗██╔════╝██║╚══██╔══╝██╔════╝
██║     ███████║█████╗  ███████╗███████╗    ██║ █╗ ██║█████╗  ██████╔╝███████╗██║   ██║   █████╗  
██║     ██╔══██║██╔══╝  ╚════██║╚════██║    ██║███╗██║██╔══╝  ██╔══██╗╚════██║██║   ██║   ██╔══╝  
╚██████╗██║  ██║███████╗███████║███████║    ╚███╔███╔╝███████╗██████╔╝███████║██║   ██║   ███████╗
 ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝     ╚══╝╚══╝ ╚══════╝╚═════╝ ╚══════╝╚═╝   ╚═╝   ╚══════╝
```

### ♟️ A fully playable chess game — built from scratch with pure Vanilla JavaScript. No framework. No shortcuts.

<br/>

[![JavaScript](https://img.shields.io/badge/JavaScript-97.9%25-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://github.com/aarav12e/ChessWebsite)
[![CSS](https://img.shields.io/badge/CSS3-1.6%25-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/aarav12e/ChessWebsite)
[![HTML](https://img.shields.io/badge/HTML5-0.5%25-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/aarav12e/ChessWebsite)
[![Zero Frameworks](https://img.shields.io/badge/Frameworks-ZERO-FF4444?style=for-the-badge)](https://github.com/aarav12e/ChessWebsite)

<br/>

[![Live Demo](https://img.shields.io/badge/♟️_Play_Now-aarav12e.github.io/ChessWebsite-00C853?style=for-the-badge)](https://aarav12e.github.io/ChessWebsite/)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-181717?style=for-the-badge&logo=github&logoColor=white)](https://aarav12e.github.io/ChessWebsite/)
[![Stars](https://img.shields.io/github/stars/aarav12e/ChessWebsite?style=for-the-badge&color=FFD700&logo=github)](https://github.com/aarav12e/ChessWebsite/stargazers)
[![Dependency](https://img.shields.io/badge/Dependencies-1_(deepcopy_only)-blueviolet?style=for-the-badge)](https://github.com/aarav12e/ChessWebsite/blob/main/package.json)

</div>

---

## ♟️ What is This?

**Chess Website** is a fully playable chess game built entirely from scratch using **pure Vanilla JavaScript** — no React, no Vue, no Angular, no game engine. Just raw HTML, CSS, and JS with a single utility dependency (`deepcopy` for board state cloning).

The codebase is structured as a custom **MVC chess engine** with cleanly separated layers for Data, Events, Rendering, and Helpers — a serious piece of software architecture for a "website."

> *No framework needed. Just 64 squares, 32 pieces, and JavaScript.*

---

## 🌐 Play It Now

<div align="center">

### 👉 [aarav12e.github.io/ChessWebsite](https://aarav12e.github.io/ChessWebsite/)

*Open in browser. Start playing. Instantly.*

</div>

---

## ♟️ The Board

```
    a    b    c    d    e    f    g    h
  ┌────┬────┬────┬────┬────┬────┬────┬────┐
8 │ ♜ │ ♞ │ ♝ │ ♛ │ ♚  │ ♝ │ ♞ │ ♜  │  ← Black pieces
  ├────┼────┼────┼────┼────┼────┼────┼────┤
7 │ ♟ │ ♟ │ ♟ │ ♟  │ ♟ │ ♟ │ ♟ │ ♟  │  ← Black pawns
  ├────┼────┼────┼────┼────┼────┼────┼────┤
6 │    │    │    │    │    │    │    │    │
  ├────┼────┼────┼────┼────┼────┼────┼────┤
5 │    │    │    │    │    │    │    │    │
  ├────┼────┼────┼────┼────┼────┼────┼────┤
4 │    │    │    │    │    │    │    │    │
  ├────┼────┼────┼────┼────┼────┼────┼────┤
3 │    │    │    │    │    │    │    │    │
  ├────┼────┼────┼────┼────┼────┼────┼────┤
2 │ ♙ │ ♙ │ ♙ │ ♙ │ ♙  │ ♙ │ ♙ │ ♙ │  ← White pawns
  ├────┼────┼────┼────┼────┼────┼────┼────┤
1 │ ♖ │ ♘ │ ♗ │ ♕  │ ♔ │ ♗ │ ♘ │ ♖ │  ← White pieces
  └────┴────┴────┴────┴────┴────┴────┴────┘
    a    b    c    d    e    f    g    h

  White: ♔ ♕ ♖ ♗ ♘ ♙     Black: ♚ ♛ ♜ ♝ ♞ ♟
```

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| ♟️ **Full Chess Rules** | Complete legal move validation for all 6 piece types |
| 👑 **Check Detection** | Real-time check detection after every move |
| ☠️ **Checkmate & Stalemate** | End-game conditions properly detected and handled |
| 🏰 **Castling** | Kingside and queenside castling with all legal conditions |
| ⚡ **En Passant** | Special pawn capture move fully implemented |
| 👸 **Pawn Promotion** | Pawns reaching the back rank are promoted to Queen |
| 🖱️ **Click-to-Move** | Select a piece → valid moves highlighted → click to move |
| 🟢 **Move Highlighting** | Legal squares lit up after piece selection |
| 🎨 **Piece Images** | Real chess piece artwork via `Assets/images/pieces/` |
| 🔁 **Turn Management** | Strict White → Black → White alternation enforced |
| 📋 **Board State** | Full 8×8 board state managed in `Data/` layer |
| 🔄 **Deep Copy** | Board state deep-cloned for safe move simulation |

---

## 🏗️ Custom MVC Engine Architecture

This project doesn't use any game engine or framework. It's a hand-rolled chess engine with a clean separation of concerns:

```
  ┌─────────────────────────────────────────────────────────────────┐
  │                    CHESS ENGINE ARCHITECTURE                    │
  │                                                                 │
  │   ┌─────────────┐   ┌─────────────┐   ┌─────────────────────┐  │
  │   │   DATA/     │   │   EVENTS/   │   │      RENDER/        │  │
  │   │  (Model)    │   │(Controller) │   │      (View)         │  │
  │   │             │   │             │   │                     │  │
  │   │ Board state │   │ Click events│   │ Draw board tiles    │  │
  │   │ Piece data  │   │ Move input  │   │ Place piece images  │  │
  │   │ Turn state  │   │ Game flow   │   │ Highlight squares   │  │
  │   │ Game flags  │   │ Validation  │   │ Animate moves       │  │
  │   └──────┬──────┘   └──────┬──────┘   └──────────┬──────────┘  │
  │          │                 │                      │             │
  │          └────────────┬────┘                      │             │
  │                       ▼                           │             │
  │              ┌─────────────────┐                  │             │
  │              │    HELPER/      │                  │             │
  │              │  (Utilities)    │◄─────────────────┘             │
  │              │                 │                                │
  │              │ Move generation │                                │
  │              │ Check detection │                                │
  │              │ Castling logic  │                                │
  │              │ En passant      │                                │
  │              │ Pawn promotion  │                                │
  │              └─────────────────┘                                │
  └─────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
ChessWebsite/
│
├── 📄 index.html              ← App shell — loads scripts, sets up the board container
├── 📄 index.js                ← Entry point — initializes game, wires up modules
│
├── 📂 Data/                   ← MODEL — game state
│   ├── board.js               ← 8×8 board matrix representation
│   ├── pieces.js              ← Piece type definitions & initial positions
│   └── gameState.js           ← Turn tracker, castling flags, en passant state
│
├── 📂 Events/                 ← CONTROLLER — user interaction
│   ├── clickHandler.js        ← Handles square click → selects piece or executes move
│   └── moveHandler.js         ← Validates move, updates board state, switches turn
│
├── 📂 Helper/                 ← UTILITIES — chess logic
│   ├── moveGenerator.js       ← Generates legal moves per piece type
│   ├── checkDetector.js       ← Is king in check? Checkmate? Stalemate?
│   ├── castling.js            ← Kingside / queenside castling conditions
│   ├── enPassant.js           ← En passant capture logic
│   └── promotion.js           ← Pawn promotion handler
│
├── 📂 Render/                 ← VIEW — drawing the board & pieces
│   ├── boardRenderer.js       ← Draws the 8×8 grid with alternating tile colors
│   ├── pieceRenderer.js       ← Places piece images on correct squares
│   └── highlighter.js         ← Highlights selected piece + valid move squares
│
├── 📂 Others/                 ← Miscellaneous utilities / constants
│
├── 📂 Assets/
│   └── 📂 images/
│       └── 📂 pieces/         ← Chess piece image files
│           ├── wK.png  wQ.png  wR.png  wB.png  wN.png  wP.png
│           └── bK.png  bQ.png  bR.png  bB.png  bN.png  bP.png
│
├── 📂 styles/
│   └── style.css              ← Board styling, piece layout, highlight colors
│
├── 📂 .vscode/                ← VS Code editor config
├── 📄 package.json            ← Only 1 dependency: deepcopy
└── 📄 .gitignore
```

---

## 🧠 Chess Logic — How It Works

### Move Generation

```javascript
// Helper/moveGenerator.js
// Every piece has its own movement rules

const getMoves = (piece, position, board) => {
    switch (piece.type) {
        case "pawn":   return getPawnMoves(piece, position, board);
        case "rook":   return getRookMoves(position, board);        // Sliding: horizontal + vertical
        case "bishop": return getBishopMoves(position, board);      // Sliding: diagonal
        case "queen":  return getQueenMoves(position, board);       // Rook + Bishop combined
        case "knight": return getKnightMoves(position, board);      // L-shape jumps
        case "king":   return getKingMoves(position, board);        // One square any direction
    }
};
```

### Check Detection

```javascript
// Helper/checkDetector.js
// After every move: simulate it, check if own king is in check

const isInCheck = (board, color) => {
    const kingPos = findKing(board, color);
    const opponent = color === "white" ? "black" : "white";

    // If any opponent piece can attack the king's square → in check
    return getAllMoves(board, opponent).some(move =>
        move.to.row === kingPos.row && move.to.col === kingPos.col
    );
};

// A move is only legal if it doesn't leave own king in check
const isLegalMove = (board, move, color) => {
    const newBoard = deepcopy(board);       // ← why deepcopy exists
    applyMove(newBoard, move);
    return !isInCheck(newBoard, color);
};
```

### Special Moves

```
  CASTLING
  ─────────────────────────────────────────────────────────
  Conditions:
  ✅ King has not moved this game
  ✅ Chosen Rook has not moved this game
  ✅ No pieces between King and Rook
  ✅ King is not currently in check
  ✅ King does not pass through attacked squares
  ✅ King does not land on attacked square

  Kingside:  ♔ e1 → g1,  ♖ h1 → f1
  Queenside: ♔ e1 → c1,  ♖ a1 → d1

  ─────────────────────────────────────────────────────────
  EN PASSANT
  ─────────────────────────────────────────────────────────
  Triggered when opponent pawn advances 2 squares
  Capturing pawn moves diagonally to the passed square
  Captured pawn is removed from its current position

  ─────────────────────────────────────────────────────────
  PAWN PROMOTION
  ─────────────────────────────────────────────────────────
  Pawn reaches row 8 (White) or row 1 (Black)
  → Automatically promoted to Queen
```

---

## 🎨 Board Rendering

```javascript
// Render/boardRenderer.js
// Generates the 8×8 grid from scratch in JS — no HTML table

const renderBoard = () => {
    for (let row = 7; row >= 0; row--) {
        for (let col = 0; col < 8; col++) {
            const tile = document.createElement("div");
            tile.classList.add("tile");

            // Alternating light/dark squares
            tile.classList.add((row + col) % 2 === 0 ? "dark-tile" : "light-tile");

            tile.dataset.row = row;
            tile.dataset.col = col;
            boardEl.appendChild(tile);
        }
    }
};

// Render/highlighter.js — show legal moves when piece selected
const highlightMoves = (moves) => {
    moves.forEach(move => {
        const tile = getTile(move.to.row, move.to.col);
        tile.classList.add("highlight");    // green dot overlay
    });
};
```

---

## 🛠️ Tech Stack

| Layer | Technology | Details |
|-------|-----------|---------|
| **Language** | ![JavaScript](https://img.shields.io/badge/-Vanilla_JS_ES6+-F7DF1E?logo=javascript&logoColor=black&style=flat-square) | 97.9% — zero frameworks |
| **Styling** | ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat-square) | 1.6% — board grid, piece layout |
| **Structure** | ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat-square) | 0.5% — minimal shell |
| **Architecture** | Custom MVC | Data / Events / Helper / Render layers |
| **Dependency** | `deepcopy ^2.1.0` | Board state deep-cloning for move simulation |
| **Hosting** | ![GitHub Pages](https://img.shields.io/badge/-GitHub_Pages-181717?logo=github&logoColor=white&style=flat-square) | Static deploy — zero infra |

> ⚡ **One dependency.** The entire chess engine — move generation, check detection, castling, en passant, pawn promotion — is hand-written in Vanilla JavaScript.

---

## 🔄 Game Flow

```
  ♟️  Page Loads
        │
        ▼
  📋  Board initialized (8×8 matrix in Data/)
  ♟️  Pieces placed at starting positions
  🎨  Board rendered (Render/ draws tiles + images)
        │
        ▼
  🕹️  WHITE'S TURN
        │
        ▼  Player clicks a square
  ┌─────────────────────────────────────────────┐
  │  Is there a white piece on this square?     │
  │  YES → Generate legal moves (Helper/)       │
  │         Highlight valid squares (Render/)   │
  │  NO  → Deselect / ignore                    │
  └─────────────────┬───────────────────────────┘
                    │ Player clicks a highlighted square
                    ▼
  ┌─────────────────────────────────────────────┐
  │  Execute move:                              │
  │  ① Deep-copy board state (deepcopy)         │
  │  ② Apply move to copy                       │
  │  ③ Check if own king is in check            │
  │     ❌ YES → illegal, reject move           │
  │     ✅ NO  → commit move to real board      │
  │  ④ Check for special moves:                 │
  │     → Castling?  → En passant?             │
  │     → Pawn at back rank? → Promote         │
  │  ⑤ Re-render board (Render/)               │
  │  ⑥ Switch turn                             │
  └─────────────────┬───────────────────────────┘
                    │
                    ▼
  ┌─────────────────────────────────────────────┐
  │  Check opponent state:                      │
  │  → In check?                               │
  │  → Has legal moves?                        │
  │     NO moves + in check  → CHECKMATE 🏆   │
  │     NO moves + not check → STALEMATE 🤝   │
  │     Has moves            → Continue ▶     │
  └─────────────────────────────────────────────┘
        │
        ▼
  ♟️  BLACK'S TURN (repeat)
```

---

## ♟️ Piece Movement Reference

| Piece | Symbol | Movement |
|-------|--------|----------|
| ♔ King | K | One square in any direction |
| ♕ Queen | Q | Any number of squares — horizontal, vertical, diagonal |
| ♖ Rook | R | Any number of squares — horizontal or vertical only |
| ♗ Bishop | B | Any number of squares — diagonal only |
| ♘ Knight | N | L-shape: 2+1 squares, jumps over pieces |
| ♙ Pawn | P | 1 forward (2 on first move), captures diagonally |

---

## 🚀 Getting Started

### No Build Step Needed — Just Open

```bash
# Clone the repository
git clone https://github.com/aarav12e/ChessWebsite.git
cd ChessWebsite

# Option 1: Open directly in browser
open index.html         # macOS
start index.html        # Windows
xdg-open index.html     # Linux

# Option 2: Serve locally (recommended for proper module loading)
npx serve .
# → Open http://localhost:3000
```

### Install the one dependency (optional for dev)

```bash
npm install    # installs deepcopy only
```

---

## ☁️ Deployment

Deployed on **GitHub Pages** — zero config, zero infra, zero cost.

```
  📦 git push origin main
         │
         ▼
  🔁 GitHub Pages auto-deploys
         │
         ▼
  🌐 Live at aarav12e.github.io/ChessWebsite
```

---

## 🗺️ Roadmap

```
  ✅ Done
  ─────────────────────────────────────────────────
  ✅ Full legal move generation (all 6 piece types)
  ✅ Check, checkmate & stalemate detection
  ✅ Castling (kingside + queenside)
  ✅ En passant
  ✅ Pawn promotion
  ✅ Move highlighting
  ✅ GitHub Pages deployment

  🔜 Ideas for Future
  ─────────────────────────────────────────────────
  🔜 AI opponent (Minimax + Alpha-Beta pruning)
  🔜 Move history / notation (PGN format)
  🔜 Undo last move button
  🔜 Timer / chess clock (Blitz, Rapid, Classical)
  🔜 Promotion choice (Queen / Rook / Bishop / Knight)
  🔜 Sound effects (move, capture, check)
  🔜 Board flip (play as Black)
  🔜 Online multiplayer (WebSockets)
```

---

## 🤝 Contributing

```bash
# Fork → Clone → Branch
git checkout -b feature/ai-minimax

# Make changes → Commit
git commit -m "feat: add minimax AI with alpha-beta pruning"

# Push → Open PR
git push origin feature/ai-minimax
```

---

## 👨‍💻 Author

<div align="center">

**Aarav Kumar**
*JavaScript Developer · B.Tech CDS (2028) · Ignite Club*

[![GitHub](https://img.shields.io/badge/GitHub-aarav12e-181717?style=for-the-badge&logo=github)](https://github.com/aarav12e)
[![Play Chess](https://img.shields.io/badge/♟️_Play_Now-ChessWebsite-00C853?style=for-the-badge)](https://aarav12e.github.io/ChessWebsite/)

</div>

---

<div align="center">

```
    a    b    c    d    e    f    g    h
  ┌────┬────┬────┬────┬────┬────┬────┬────┐
1 │    │    │    │    │ ♔  │    │    │    │
  ├────┼────┼────┼────┼────┼────┼────┼────┤
2 │    │    │    │    │    │    │    │    │
  ├────┼────┼────┼────┼────┼────┼────┼────┤
3 │    │    │    │    │ ♟  │    │    │    │
  ├────┼────┼────┼────┼────┼────┼────┼────┤
8 │    │    │    │ ♚  │    │    │    │    │
  └────┴────┴────┴────┴────┴────┴────┴────┘

         ♔  CHECK.   Your move.
```

*Built with ♟️ pure JavaScript — because real programmers don't need a framework to play chess*

**`< / ChessWebsite >`**

</div>

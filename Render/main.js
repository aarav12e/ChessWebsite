import * as piece from "../Data/pieces.js";
import { ROOT_DIV } from "../Helper/constants.js";
import { globalState } from "../index.js";

const globalPiece = new Object();

function updateGlobalPieceMapping(data) {
  Object.keys(globalPiece).forEach((key) => delete globalPiece[key]);

  data.flat().forEach((square) => {
    const piece = square.piece;
    if (!piece || !piece.piece_name) return;

    switch (piece.piece_name) {
      case "WHITE_KING":
        globalPiece.white_king = piece;
        break;
      case "BLACK_KING":
        globalPiece.black_king = piece;
        break;
      case "WHITE_QUEEN":
        globalPiece.white_queen = piece;
        break;
      case "BLACK_QUEEN":
        globalPiece.black_queen = piece;
        break;
      case "WHITE_ROOK":
        if (globalPiece.white_rook_1) {
          globalPiece.white_rook_2 = piece;
        } else {
          globalPiece.white_rook_1 = piece;
        }
        break;
      case "BLACK_ROOK":
        if (globalPiece.black_rook_1) {
          globalPiece.black_rook_2 = piece;
        } else {
          globalPiece.black_rook_1 = piece;
        }
        break;
      case "WHITE_BISHOP":
        if (globalPiece.white_bishop_1) {
          globalPiece.white_bishop_2 = piece;
        } else {
          globalPiece.white_bishop_1 = piece;
        }
        break;
      case "BLACK_BISHOP":
        if (globalPiece.black_bishop_1) {
          globalPiece.black_bishop_2 = piece;
        } else {
          globalPiece.black_bishop_1 = piece;
        }
        break;
      case "WHITE_KNIGHT":
        if (globalPiece.white_knight_1) {
          globalPiece.white_knight_2 = piece;
        } else {
          globalPiece.white_knight_1 = piece;
        }
        break;
      case "BLACK_KNIGHT":
        if (globalPiece.black_knight_1) {
          globalPiece.black_knight_2 = piece;
        } else {
          globalPiece.black_knight_1 = piece;
        }
        break;
      case "WHITE_PAWN":
        if (!globalPiece.white_pawn) {
          globalPiece.white_pawn = piece;
        }
        break;
      case "BLACK_PAWN":
        if (!globalPiece.black_pawn) {
          globalPiece.black_pawn = piece;
        }
        break;
      default:
        break;
    }
  });
}

// function globalStateRender (this function is usefull to render pieces from globalStateData) => use when updating globalState
function globalStateRender() {
  globalState.forEach((row) => {
    row.forEach((element) => {
      if (element.highlight) {
        const hightlightSpan = document.createElement("span");
        hightlightSpan.classList.add("highlight");
        document.getElementById(element.id).appendChild(hightlightSpan);
        // } else if (element.highlight === null) {
      } else {
        const el = document.getElementById(element.id);
        const highlights = Array.from(el.getElementsByTagName("span"));
        highlights.forEach((element) => {
          el.removeChild(element);
        });
        // document.getElementById(element.id).innerHTML = "";
      }
    });
  });
}


function selfHighlight(piece) {
  document
    .getElementById(piece.current_position)
    .classList.add("highlightYellow");
}

// use when you want to render pieces on board
function pieceRender(data) {
  data.forEach((row) => {
    row.forEach((square) => {
      // if square has piece
      if (square.piece) {
        const squareEl = document.getElementById(square.id);

        // create piece
        const piece = document.createElement("img");
        piece.src = square.piece.img;
        piece.classList.add("piece");

        // insert piece into square element
        squareEl.appendChild(piece);
      }
    });
  });
}

// use when you want to render board for first time when game start
function initGameRender(data) {
  ROOT_DIV.innerHTML = "";

  data.forEach((element) => {
    const rowEl = document.createElement("div");
    element.forEach((square) => {
      const squareDiv = document.createElement("div");
      squareDiv.id = square.id;
      squareDiv.classList.add(square.color, "square");

      if (!square.piece) {
        if (square.id[1] == 7) {
          square.piece = piece.blackPawn(square.id);
        }

        if (square.id == "h8" || square.id == "a8") {
          square.piece = piece.blackRook(square.id);
        }

        if (square.id == "b8" || square.id == "g8") {
          square.piece = piece.blackKnight(square.id);
        }

        if (square.id == "c8" || square.id == "f8") {
          square.piece = piece.blackBishop(square.id);
        }

        if (square.id == "d8") {
          square.piece = piece.blackQueen(square.id);
        }

        if (square.id == "e8") {
          square.piece = piece.blackKing(square.id);
        }

        if (square.id[1] == 2) {
          square.piece = piece.whitePawn(square.id);
        }

        if (square.id == "d1") {
          square.piece = piece.whiteQueen(square.id);
        }

        if (square.id == "e1") {
          square.piece = piece.whiteKing(square.id);
        }

        if (square.id == "h1" || square.id == "a1") {
          square.piece = piece.whiteRook(square.id);
        }

        if (square.id == "b1" || square.id == "g1") {
          square.piece = piece.whiteKnight(square.id);
        }

        if (square.id == "c1" || square.id == "f1") {
          square.piece = piece.whiteBishop(square.id);
        }
      }

      rowEl.appendChild(squareDiv);
    });
    rowEl.classList.add("squareRow");
    ROOT_DIV.appendChild(rowEl);
  });

  pieceRender(data);
  updateGlobalPieceMapping(data);
}

// render hightlight circle
function renderHighlight(squareId) {
  const hightlightSpan = document.createElement("span");
  hightlightSpan.classList.add("highlight");
  document.getElementById(squareId).appendChild(hightlightSpan);
}

// clear all highlights from the board
function clearHightlight() {
  const flatData = globalState.flat();

  flatData.forEach((el) => {
    if (el.captureHighlight) {
      document.getElementById(el.id).classList.remove("captureColor");
      el.captureHighlight = false;
    }

    if (el.highlight) {
      el.highlight = null;
    }

    globalStateRender();
  });
}

export {
  initGameRender,
  renderHighlight,
  clearHightlight,
  selfHighlight,
  globalStateRender,
  globalPiece,
  updateGlobalPieceMapping
};

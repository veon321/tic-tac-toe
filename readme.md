# Tic-Tac-Toe with Timers

A modern, responsive, and minimalist Tic-Tac-Toe game built using vanilla HTML, CSS, and JavaScript. The game features interactive hover effects, a move countdown timer, a total game duration clock, and a fully fluid layout.

## Live Demo

You can play the game live here: [veon321.github.io/tic-tac-toe/](https://veon321.github.io/tic-tac-toe/)

## Features

- **Move Timer:** Each player has 10 seconds to make a move. If the time runs out, the turn automatically switches to the other player.
- **Game Timer:** The entire match lasts for 120 seconds (2 minutes). If no one wins before the time runs out, the game ends.
- **Smart Hover Preview:** Hovering over an empty cell shows a semi-transparent preview of the current player's mark (X or O).
- **Responsive Layout (CSS Clamp):** The board and fonts scale smoothly using the `clamp()` function, making it fully playable on mobile devices without breaking the grid.
- **Seamless Grid Design:** The board layout utilizes CSS Grid and `gap` properties to create clean, sharp table lines without double borders.
- **Result Screen:** No annoying pop-up alerts! The game result (Win/Draw) is displayed directly on the webpage with a "Play again" button to restart.

## File Structure

The project is structured following the Separation of Concerns principle:

- `index.html` - Contains the skeleton and structural layout of the game.
- `style.css` - Handles the modern styling, centering, responsiveness (`clamp()`), and grid layout.
- `skrypt.js` - Contains the core game logic, win/draw detection, and timer management.

## How to Play

1. Open the Live Demo link or `index.html` in any modern web browser.
2. Player X always starts first (marks are red, Player O marks are blue).
3. Click on any empty square to place your mark before your 10-second timer hits 0.
4. Line up 3 of your marks horizontally, vertically, or diagonally to win.
5. If all squares are filled or the total 120s timer runs out, the game ends in a draw.
6. Click the **"Zagraj ponownie"** (Play again) button to reset the board and start a new match.

## Technologies Used

- HTML5
- CSS3 (Flexbox, CSS Grid, and Fluid Typography with `clamp()`)
- JavaScript (ES6+)

## Repository Link

Find the source code here: [github.com/veon321/tic-tac-toe](https://github.com/veon321/tic-tac-toe)

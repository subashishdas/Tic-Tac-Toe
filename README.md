# **Tic-Tac-Toe Game**

A simple **Tic-Tac-Toe** game built with **React.js**. This game allows two players to take turns placing Xs and Os on a 3x3 board. The first player to align three identical symbols horizontally, vertically, or diagonally wins. The project also includes a reset option to start a new game.

---

## **Features**

- Two-player game (X and O)
- Displays a winner message with images
- Lock mechanism to stop moves after the game is won
- Reset functionality to start a new game
- Clean and responsive UI with CSS styling

---

## **Technologies Used**

- **React.js**: Component-based UI library
- **CSS**: Styling for the game board and layout
- **Images**: Icons for X and O (stored locally)

---

## **How to Run the Project Locally**

### **Prerequisites**

Make sure you have the following installed:

- **Node.js** (v14+ recommended)
- **npm** or **yarn**

### **Installation Steps**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/tic-tac-toe-react.git
   cd tic-tac-toe-react
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

4. Open the browser and visit:
   ```
   http://localhost:3000
   ```

## **Project Structure**

```
/src
├── /assets         // Contains circle and cross images
├── /components
│   └── TicTacToe.jsx   // Main component logic
│   └── TicTacToe.css   // Styling for the game
├── index.js        // Entry point
└── App.js          // App wrapper
```

## **How to Play**

1. Two players take turns clicking on the boxes
2. Player X starts first, followed by Player O
3. The first player to get 3 of their symbols in a row, column, or diagonal wins
4. Click the **Reset** button to start a new game

## **Screenshots**

- Game Board
- Winner Announcement

## **CSS Styling and Colors**

- **Board Background:** Light grey (`#f0f0f0`)
- **X Color (Cross):** Red (`#e74c3c`)
- **O Color (Circle):** Blue (`#3498db`)
- **Title:** Purple gradient for dynamic feel

## **Future Improvements**

- Add a **score counter** to track wins
- Implement an **AI bot** for single-player mode
- Enhance **responsiveness** for mobile devices

## **Contributing**

Feel free to fork this repository and submit pull requests. Any contributions to improve the game are welcome.

## **License**

This project is licensed under the **MIT License**.

## **Contact**

If you have any questions or suggestions, feel free to reach out:

- **Email:** subashishdas897@gmail.com
- **GitHub:** subashishdas

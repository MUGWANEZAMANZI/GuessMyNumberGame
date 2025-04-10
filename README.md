Welcome to the **Guess My Number** game! This is a fun and interactive mobile game built using **React Native** and **Expo**. The app allows the user to pick a number, and the app will try to guess it based on user feedback.

---

### Features
- **User Input**: The user selects a number between 1 and 99.
- **AI Guessing**: The app uses a binary search algorithm to guess the number.
- **Interactive Feedback**: The user provides feedback (higher or lower) to guide the app's guesses.
- **Game Over Screen**: Displays the number of rounds it took for the app to guess the number.
- **Custom Styling**: Beautiful UI with custom fonts, colors, and animations.

---

### Screens
1. **Start Game Screen**:
   - Allows the user to input a number.
   - Validates the input to ensure it's between 1 and 99.

2. **Game Screen**:
   - Displays the app's current guess.
   - Provides buttons for the user to indicate if the guess is too high or too low.

3. **Game Over Screen**:
   - Displays the total number of rounds it took to guess the number.
   - Includes a button to start a new game.

---

### Technologies Used
- **React Native**: For building the mobile app.
- **Expo**: For development and deployment.
- **Custom Fonts**: Integrated using `expo-font`.
- **React Native Components**: Used for styling and layout (e.g., `View`, `Text`, `ImageBackground`).
- **Expo Linear Gradient**: For background gradients.
- **Expo Splash Screen**: To manage the app's splash screen.

---

### Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/guess-my-number.git
   cd guess-my-number
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Run the app on an emulator or physical device:
   - Press `a` to open the app on an Android emulator.
   - Press `i` to open the app on an iOS simulator (macOS only).

---

### File Structure
- **`App.js`**: Entry point of the app, manages navigation between screens.
- **screens**: Contains the main screens (`StartGameScreen`, `GameScreen`, `GameOverScreen`).
- **components**: Reusable UI components like `PrimaryButton`, `Card`, `Title`, etc.
- **`constants/Colors.js`**: Centralized color definitions for consistent styling.
- **assets**: Contains fonts, images, and other static assets.

---

### How to Play
1. Enter a number between 1 and 99 on the **Start Game Screen**.
2. The app will start guessing your number.
3. Use the "Higher" or "Lower" buttons to guide the app.
4. Once the app guesses your number, the **Game Over Screen** will display the total rounds taken.
5. Start a new game by pressing the "Start a New Game" button.

---

### Customization
- **Colors**: Modify Colors.js to change the app's color scheme.
- **Fonts**: Replace the fonts in the fonts directory and update the `useFonts` hook in App.js.
- **Images**: Replace the success image in success.png with your own.

---

### Known Issues
- Ensure the emulator or physical device is properly connected to avoid `adb` errors.
- If fonts fail to load, check the paths in the `useFonts` hook.

---

### Future Enhancements
- Add sound effects for a more interactive experience.
- Implement a leaderboard to track the fastest guesses.
- Add animations for transitions between screens.

---

### License
This project is licensed under the MIT License. Feel free to use and modify it as you like.

---

Enjoy playing **Guess My Number**! 🎉![WhatsApp Image 2025-04-10 at 14 05 45_5367a972](https://github.com/user-attachments/assets/5b29fcb8-be29-458c-8df4-1c4140f074a8)   

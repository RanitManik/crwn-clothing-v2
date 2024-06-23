# CRWN Clothing

A modern e-commerce application built with React and Firebase, configured using Vite.

## Table of Contents

- [Installation](#installation)
- [Firebase Configuration](#firebase-configuration)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/RanitManik/crwn-clothing-v2.git
   cd crwn-clothing-v2
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory of your project and add your Firebase configuration values. Use the `.env.example` file as a template.

   ```plaintext
   VITE_FIREBASE_API_KEY=your-api-key-here
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain-here
   VITE_FIREBASE_PROJECT_ID=your-project-id-here
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket-here
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id-here
   VITE_FIREBASE_APP_ID=your-app-id-here
   ```

4. **Run the development server:**

   ```sh
   npm run dev
   ```

## Firebase Configuration

To configure Firebase for this project:

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or use an existing one.
3. Navigate to the project settings and locate your Firebase configuration.
4. Copy the configuration details and replace the placeholders in your `.env.local` file.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm run dev`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run format`

Formats the codebase using Prettier.

## Project Structure

Here is an overview of the project's structure:

```
crwn-clothing/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── routes/
│   ├── App.jsx
│   ├── main.jsx
│   └── utils/firebase/
│       └── firebase.utils.js
├── .env.example
├── .env.local (not included in version control)
├── .gitignore
├── .prettierrc
├── index.html
├── postcss.config.js
├── .eslintrc.cjs
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository:**

   Click the "Fork" button at the top right of the repository page.

2. **Create a new branch:**

   ```sh
   git checkout -b feature-branch
   ```

3. **Make your changes:**

   Implement your feature or fix the bug.

4. **Commit your changes:**

   ```sh
   git commit -m 'Add some feature'
   ```

5. **Push to the branch:**

   ```sh
   git push origin feature-branch
   ```

6. **Open a pull request:**

   Go to the original repository on GitHub and click the "New Pull Request" button.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

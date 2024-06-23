# [CRWN Clothing](https://crwn-clothing-v2-live.vercel.app/)

The modern e-commerce application is developed using React, Redux, and React Hooks, integrated with Firebase and the
Stripe API. The project is set up with Vite and styled using SCSS.

It is based on the **[ZeroToMastery React Course](https://zerotomastery.io/courses/learn-react/)**.

## Table of Contents

- [Installation](#installation)
- [Firebase Configuration](#firebase-configuration)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgment](#acknowledgment)

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

   Create a `.env.local` file in the root directory of your project and add your Firebase configuration values. Use
   the `.env.example` file as a template.

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

Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the
build for the best performance.

### `npm run lint`

Lints the codebase using ESLint. This ensures your code adheres to specified linting rules and conventions. It
checks `.js` and `.jsx` files, reports any unused disable directives, and sets the maximum number of warnings to 0.

### `npm run preview`

Previews the production build locally. Useful for testing the production build before deploying.

### `npm run format`

Formats the codebase using Prettier. It targets all `.js` and `.jsx` files within the `src` directory to ensure
consistent code formatting.

## Technologies Used

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)

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

## Acknowledgment

This project, CRWN Clothing, is a testament to the collaborative effort and educational resources provided by the
developer community and online learning platforms. I would like to express our gratitude to the following:

1. **Zero To Mastery Academy:** A special thanks to the Zero To Mastery
   Academy, _[Andrei Neagoie](https://zerotomastery.io/about/instructor/andrei-neagoie/)_
   and _[Yihua Zhang](https://zerotomastery.io/about/instructor/yihua-zhang/)_
   for their
   comprehensive **[React Course](https://zerotomastery.io/courses/learn-react/)**. The course's practical and hands-on
   approach provided the foundation and inspiration for this project.

2. **Open Source Libraries and Tools:** This project leverages numerous open-source libraries and tools, including
   React, Redux, Firebase, and Stripe API. I am grateful to the developers and maintainers of these libraries for their
   continuous effort in creating and maintaining high-quality tools that make building modern web applications possible.

3. **The Developer Community:** A heartfelt thank you to the developer community for the constant support, feedback, and
   contributions. Your discussions, tutorials, and shared knowledge have been invaluable in the development process.

4. **Contributors:** To all those who have contributed to this project through code, documentation, or any other form of
   support, your efforts are greatly appreciated. Your contributions have helped improve the quality and functionality
   of the project.

5. **Friends and Family:** Lastly, a big thank you to our friends and family for their unwavering support and
   encouragement throughout the development of this project.

_I hope that this project not only serves as a valuable resource for others but also encourages further learning and
development within the community._

---

<p align="center">Thank you for exploring the <strong>crwn-clothing-v2</strong>! Happy coding! 🚀</p>


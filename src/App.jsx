import React from "react";

function App() {
  return (
    <div className="gradient-bg flex min-h-screen items-center justify-center from-blue-500 to-purple-600 p-8">
      <div className="max-w-xl transform rounded-lg bg-white p-8 shadow-lg transition duration-500 hover:scale-105">
        <h1 className="mb-4 animate-bounce text-center text-4xl font-bold text-gray-800">
          Hello World
        </h1>
        <p className="mb-6 rounded-md bg-amber-100 p-6 text-gray-600">
          Welcome to our React application enhanced with Tailwind CSS. This
          application is built using the modern web development stack: Vite,
          React, Tailwind CSS, and Prettier.
        </p>
        <div className="prose mt-6">
          <p>
            Tailwind CSS is a utility-first CSS framework that provides
            low-level utility classes to build custom designs without any
            annoying opinionated styles you have to fight to override. Paired
            with React, it makes building beautiful and interactive user
            interfaces a breeze.
          </p>
          <p>
            Explore the power of combining these technologies to create
            stunning, responsive, and animated web applications. Enjoy the
            seamless development experience with Prettier ensuring your code
            stays clean and consistent.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

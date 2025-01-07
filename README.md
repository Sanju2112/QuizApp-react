# React Quiz App  
## Description  

The **React Quiz App** is a responsive web application for testing React knowledge. Styled with **Tailwind CSS**, it features React-specific questions, real-time score calculation, and a clean, modern UI.  


## Features  

- Multiple-choice questions on React concepts  
- Score calculation at the end of the quiz  
- Responsive design with Tailwind CSS  


## Technologies  

- **React**: JSX, Components, Hooks  
- **Tailwind CSS**: Utility-first styling  


## Installation  

1. Clone the repo:  
   ```bash  
   git clone https://github.com/Sanju2112/QuizApp-react.git  
   ```  

2. Navigate to the project folder:  
   ```bash  
   cd QuizApp-react 
   ```

3. Install dependencies:  
   ```bash  
   npm install  
   ```

4. Install Tailwind CSS via npm:  
   ```bash  
   npm install -D tailwindcss postcss autoprefixer  
   ```

5. Initialize Tailwind CSS configuration:  
   ```bash  
   npx tailwindcss init  
   ```

6. Set up Tailwind in the `tailwind.config.js` file:  
   ```js  
   module.exports = {  
     content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  
     theme: {  
       extend: {},  
     },  
     plugins: [],  
   };  
   ```

7. Add Tailwind’s directives to your `src/index.css` (or `src/tailwind.css`) file:  
   ```css  
   @tailwind base;  
   @tailwind components;  
   @tailwind utilities;  
   ```

8. Start the development server:  
   ```bash  
   npm start  
   ```  


## License  

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).  

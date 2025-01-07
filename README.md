Quiz Application

A full-stack Quiz Application that allows users to attempt quizzes, track their progress, and view results. The project is divided into two main parts: the Frontend and the Backend.


Features

User-friendly interface for taking quizzes.

Responsive design for seamless use across devices.

Real-time quiz updates and tracking.

Backend API for quiz management, scoring, and tracking user progress.

Technologies Used

Frontend:

React.js: For building a dynamic and responsive user interface.

Axios: For making API requests.

Tailwind CSS: For styling and layout.

React Hooks: For managing state and side effects.

Backend:

Node.js: For the server runtime environment.

Express.js: For creating RESTful APIs.

MongoDB: For storing quizzes and user progress.

Mongoose: For schema-based interaction with MongoDB.

Frontend

The frontend is built using React.js, providing a smooth user experience and responsive design.

Frontend Setup

Clone the repository:

git clone <repository-url>
cd quiz-app-frontend

Install dependencies:

npm install

Start the development server:

npm start

Access the application in your browser at:

http://localhost:8000

Frontend Key Features

Responsive Layout: Adapts seamlessly to various screen sizes using Tailwind CSS.

Quiz Display: Fetches quiz data from the backend and displays questions and options.

Progress Tracker: Tracks the current question and shows total questions.

Dynamic Styling: Highlights answered questions and displays progress visually.

Error Handling: Displays error messages using toast notifications for API issues.

Important Components:

Quiz: Displays the questions and handles navigation (next/previous).

Points: Tracks and shows the user's current progress in the quiz.

Header: Main layout with a responsive and visually appealing design.# quiz-app-frontend

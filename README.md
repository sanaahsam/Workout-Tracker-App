Workout Tracker App

Welcome to the Workout Tracker App! This MERN stack project empowers users to track and manage their workout routines effortlessly. Whether you're a fitness enthusiast or a beginner, this application provides a user-friendly interface for logging exercises, sets, and reps. The app utilizes React for the frontend, Node.js and Express for the backend, and MongoDB for data storage.
Features

    User Authentication: Securely sign up and log in to access personalized workout tracking features.
    Exercise Log: Add, edit, and delete exercises with ease. Record exercise names, sets, and reps.
    Flexible Workouts: Customize your workout routine by adding as many exercises as you like.

Technologies Used

    Frontend: React
    Backend: Node.js, Express
    Database: MongoDB
    Authentication: JSON Web Tokens (JWT)

Getting Started
Clone the Repository

bash

git clone https://github.com/yourusername/workout-tracker.git
cd workout-tracker

Install Dependencies

bash

# Install server dependencies
cd backend
npm install

# Install client dependencies
cd ../frontend
npm install

Set Environment Variables

Create a .env file in the backend directory with the following content:

env

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Run the Application

bash

# Start the server
cd backend
npm start

# Start the client
cd ../frontend
npm start

Open your browser and navigate to http://localhost:3000 to access the Workout Tracker App.
Contributing

Contributions are welcome! If you'd like to enhance the app or fix any bugs, feel free to submit a pull request.
License

This project is licensed under the MIT License.

Happy exercising! 💪🏋️‍♀️

# README.md

## ChatApp

ChatApp is a real-time chat application built with React, Express, and MongoDB. It allows users to send and receive messages instantly.

### Features

- **Real-time Messaging**: ChatApp provides real-time messaging functionality using Socket.IO, enabling users to send and receive messages instantly.
- **User Authentication**: Users can sign up, log in, and log out securely using JSON Web Tokens (JWT).
- **Secure Communication**: Messages are encrypted using bcryptjs for secure communication between users.
- **Persistent Storage**: ChatApp stores user information and chat history in a MongoDB database using Mongoose.
- **Easy Deployment**: The application is designed with ease of deployment in mind, making it simple to deploy to various platforms.

### Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    ```bash
    cp .env.example .env
    PORT=xxx
    MONGO_DB_URI=xxxxxxxxxxxxxxxxxxxxxxxxxx
    JWT_SECRET=xxxxxxxxxxxxxxxxxx
    ```

    Edit the `.env` file and provide necessary environment variables such as database connection URI, JWT secret, etc.

4. Start the server:

    ```bash
    npm run server
    ```

5. Start the client:

    ```bash
    npm start
    ```

6. Open your browser and navigate to `http://localhost:${PORT}` to access the application.

### Technologies Used

- React
- Express
- MongoDB
- Socket.IO
- JSON Web Tokens (JWT)
- bcryptjs
- dotenv

### License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

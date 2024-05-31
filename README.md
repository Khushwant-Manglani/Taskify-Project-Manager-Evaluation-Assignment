## Taskify Documentation

### Overview

Taskify is a web application designed to help users organize their daily tasks, set reminders, and collaborate with team members. It provides functionalities for creating, editing, and deleting tasks.

### Technologies Used

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- Styling: Tailwind CSS
- Routing: React Router

### Features

1. **User Authentication**: Users can register and login to access their tasks.
2. **Task Management**: Users can create, edit, and delete tasks.
3. **Responsive Design**: The application is responsive and works seamlessly across different devices and screen sizes.
4. **Secure Authentication**: JWT tokens are used for secure authentication and authorization.
5. **Clean UI**: The user interface is designed to be intuitive and user-friendly.

### Frontend Structure

- **Components**: Contains all React components used in the frontend.
  - `TaskList.js`: Displays a list of tasks.
  - `Task.js`: Represents an individual task.
  - `AddTask.js`: Form for adding a new task.
  - `Login.js`: Form for user login.
  - `Register.js`: Form for user registration.
- **Contexts**: Contains the AuthContext for managing user authentication state.
- **Services**: Contains API service functions for making requests to the backend.

### Backend Structure

- **Routes**: Contains route handlers for different endpoints.
  - `/api/auth`: Handles user authentication (login and registration).
  - `/api/tasks`: Handles CRUD operations for tasks.
- **Controllers**: Contains controller functions for handling requests.
- **Models**: Contains Mongoose models for defining MongoDB schemas.

### Getting Started

1. Clone the repository: `git clone https://github.com/Khushwant-Manglani/Taskify-Project-Manager-Evaluation-Assignment`
2. Install dependencies:
   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the `backend` directory.
   - Define the following variables:
     ```
     PORT=5000
     MONGODB_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     ```
4. Start the backend server: `npm start` (inside the `backend` directory).
5. Start the frontend server: `npm run dev` (inside the `frontend` directory).
6. Access the application in your browser: `http://localhost:5173`

### Future Improvements

1. Real-time collaboration features.
2. Task prioritization and categorization.
3. Integration with calendar applications for reminders.
4. Enhanced user profiles and settings.
5. Performance optimizations for large task lists.

### Contributors

- [Khushwant Manglani](mailto:your.email@example.com) - Project Lead & Developer

### License

This project is licensed under the [MIT License](LICENSE).

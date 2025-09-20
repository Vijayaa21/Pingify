# Pingify

Pingify is a modern web application designed to facilitate real-time chat and user management. The project is structured as a full-stack application with a React-based frontend and a Node.js/Express backend.

## Features

- User authentication (login, registration)
- Real-time chat interface
- User profile management
- Responsive and modern UI

## Project Structure

```
Pingify/
├── client/        # Frontend (React + Vite)
│   ├── public/    # Static assets
│   ├── src/       # Source code
│   │   ├── assets/      # Images and icons
│   │   ├── components/  # React components (ChatContainer, Sidebar, RightPanel)
│   │   ├── lib/         # Utility libraries (db.js)
│   │   ├── pages/       # Page components (HomePage, LoginPage, ProfilePage)
│   │   ├── App.jsx      # Main app component
│   │   ├── main.jsx     # Entry point
│   │   └── index.css    # Global styles
│   ├── package.json     # Frontend dependencies
│   └── vite.config.js   # Vite configuration
├── server/        # Backend (Node.js + Express)
│   ├── src/
│   │   ├── controllers/ # Route controllers (auth.controller.js)
│   │   ├── lib/         # Backend utilities
│   │   ├── middleware/  # Express middleware
│   │   ├── models/      # Database models
│   │   └── routes/      # API routes (auth.route.js)
│   └── package.json     # Backend dependencies
└── README.md      # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Vijayaa21/Pingify.git
   cd Pingify
   ```

2. **Install dependencies for both client and server:**
   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```

### Running the Application

#### Start the Backend Server
```sh
cd server
npm run dev
```

#### Start the Frontend (Vite Dev Server)
```sh
cd client
npm run dev
```

The frontend will typically run on [http://localhost:5173](http://localhost:5173) and the backend on [http://localhost:3000](http://localhost:5000) by default.


## License

This project is licensed under the MIT License.


# Movies Project

A React-based application that allows users to log in, view a list of movies fetched from an API, and view detailed information about each movie. The project uses Redux Toolkit for state management and React Router v6.4+ for page routing.

## Features

- User login functionality
- Display a list of movies from an external API
- Click on a movie to navigate to a page with detailed information
- Uses Redux Toolkit for state management
- Utilizes React Router v6.4+ for navigation between pages

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/movies-project.git
cd movies-project
```

### 2. Install dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Start the development server

Once the dependencies are installed, you can start the application with:

```bash
npm run dev
```

This will start a local development server, typically at `http://localhost:3000`.

### 4. Environment Variables

Make sure to configure any necessary environment variables for your API and authentication. You can do this by creating a `.env` file at the root of your project.

Example `.env` file:

```env
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your_api_key_here
```

### 5. Application Structure

- `src/` - Contains all the source code
  - `src/components/` - React components for different parts of the application
  - `src/features/` - Redux slices for managing state
  - `src/pages/` - Pages corresponding to different routes
  - `src/services/` - API calls and other service-related functions
- `public/` - Static files like images and icons

## API Used

This project uses an external API to fetch the movie data. You can replace the current API with your own in the `src/services/api.js` file.

## Technologies Used

- React
- Redux Toolkit
- React Router v6.4+
- Vite (for faster development builds)

## License

This project is licensed under private use only

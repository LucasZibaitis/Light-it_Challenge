# Patient Management Application

## Overview

This application is a Single Page Application (SPA) built with ReactJS and NextJS, designed to manage patient data. It uses TailwindCSS for styling and Redux for global state management.

## Project Structure

- **`app/components/`**: Contains reusable components organized in subfolders.
- **`app/containers/`**: Contains main components rendered by `page.js`.

## Design Decisions

- **State Management**: Redux is used for global state management to handle patient data and UI states efficiently.
- **Styling**: TailwindCSS is chosen for its utility-first approach, allowing for rapid and responsive design.

## Technologies Used

- **ReactJS**: For building the user interface.
- **NextJS**: Framework for server-side rendering and routing.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Redux**: State management library for handling global state.
- **Axios**: For making HTTP requests.

## Running the Application Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/LucasZibaitis/Light-it_Challenge.git
    ```
2. Navigate to the project directory:
    ```bash
    cd patient-management_frontend
    ```
3. Create a `.env.local` file in the root directory with the following content:
    ```env
    NEXT_PUBLIC_API_URL=https://63bedcf7f5cfc0949b634fc8.mockapi.io/users
    ```
4. Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```
5. Start the development server:
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```
6. Open the application in your browser:
    [http://localhost:3000](http://localhost:3000)



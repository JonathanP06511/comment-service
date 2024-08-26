# Comment service API

This project is a Information API built with Node.js and Express. It uses Swagger for API documentation and provides an endpoint for comments


## Technologies Used

- **Node.js**: JavaScript runtime for server-side execution.
- **Express**: Framework for Node.js that facilitates web application development.
- **Morgan**: Middleware for logging HTTP requests.
- **CORS**: Middleware for allowing requests from different domains.

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/JonathanP06511/comment-service.git
    ```

2. Navigate to the project directory:
    ```bash
    cd <project directory>
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```
    ```

## Usage

1. Start the server:
    ```bash
    node server.js
    ```

2. The API will be available at `http://localhost:3040`.

## Project Structure

- `app.py`: Main file where the Flask application is configured and run.
- `controllers/commentcontroller.js`: Defines routes for the comment API.
- `models/image_service.py`: Contains the database.
- `routes/commentRoutes`: Contains the routes for comment API.

## Routes

- `GET /api/comments`: Endpoint to get comments
- `POST /api/comments`: Endpoint to create comments

## Docker

To run this project in a Docker container:

1. Build the Docker image:
    ```bash
    docker build -t comment-service .
    ```

2. Run the Docker container:
    ```bash
    docker run -p 3040:3040 comment-service
    ```

3. The API will be available at `http://localhost:3040` inside the Docker container.



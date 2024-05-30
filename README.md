Multi-Container Application with Docker Compose
  - Create a shopping list app to which you can add and delete items
  - Program a full stack web application with a React frontend,
    a Flask backend, and a SQLite database running in two 
    containers and one volume via Docker Compose

Set up Flask Backend
  - Create a Flask application in a subdirectory called /backend in your root project folder
  - Integrate SQLite and SQLAlchemy for database operations
  - Configure CORS to allow requests from your frontend domain

Develop React Frontend
  - Initialize a new React project using the 'create-react-app' terminal command in a subdirectory called /frontend
  - Develop a component to interact with the Flask API
  - Implement Bootstrap CSS if desired

Dockerize
  - Create a Dockerfile in both /backend and /frontend that configures installation
    dependencies and run commands for each container
  - Create a 'docker-compose.yml' file in root project directory to orchestrate both containers,
    database services, and specify database volume
  - Build the Docker images to ensure correct configurations

Build and Run All Services with Docker Compose
  - Use the 'docker-compose up' command to build and start all services defined in your Docker Compose file
  - Verify that the containers are properly linked and can communicate with each other
  - Perform functional testing to ensure the React app can fetch, display, and manipulate data via the Flask API
  - Check error handling and data validation across both platforms

Preview of Application:

---------------------------------
| Shopping List                 |
---------------------------------
|                               |
| Add new item: [_____________] |
| [Add]                         |
---------------------------------
| - Milk       [Delete]         |
| - Eggs       [Delete]         |
| - Bread      [Delete]         |
---------------------------------





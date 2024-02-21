# Clustered Data Warehouse Project Documentation

## Introduction
This document serves as comprehensive documentation for the Clustered Data Warehouse project. The project aims to receive payload data from requests, validate it, and store it in the database. This documentation outlines the project structure, flow, and how to run it.

Initially, the project structure was designed and the flow was outlined to ensure efficient implementation.

The project utilizes Spring Boot (Maven) for its backend implementation and React.js for the frontend.

Handling and validating the data, particularly the deal details, is a crucial aspect of this project. In Spring Boot, various methods are available for data validation, including built-in and custom approaches. For this project, Exceptions are utilized for data validation to provide cleaner code and greater control over the project's behavior. Additionally, the frontend validates data before sending it to the backend to ensure data integrity.

## Project Flow
1. **Data Reception**: Deal details are received via HTTPS requests to the `/api/deal/save` endpoint. This endpoint is configured with a POST method to facilitate data submission to the database. Additionally, a `/api/deal/deals` endpoint has been added to retrieve all deals stored in the database successfully.

2. **Data Validation**: Upon receiving deal details, the data is validated using the `validateData()` function implemented in the `DealService` class. If the validation fails, a `RuntimeException` is thrown and appropriately handled in the `DealController` class. In the successful validation case, the process proceeds to execute the saveDeal() method.

3. **Duplicate Detection**: Before saving the deal data, the system checks for duplicate entries based on the deal ID. If a duplicate entry is detected, a `RuntimeException` is thrown and appropriately handled in the `DealController` class.

4. **Saving Deal Data**: After successful validation and duplicate detection, the deal data is saved into the database. The `DealController` class sends a response with a message indicating successful data storage and returns a 200 status code.

## Logging
Logging plays a crucial role in tracking the flow of data and debugging potential issues within the application. Throughout the project, logging statements are strategically placed to provide insights into the execution path and any encountered errors or exceptions. By leveraging logging effectively throughout the project, it becomes easier to trace the execution flow, identify potential issues, and maintain the overall health of the application.

## Testing
Testing is conducted using JUnit and Mockito to ensure the reliability and correctness of the code. Various test scenarios, including edge cases and normal cases, are implemented to validate the functionality of the application.

## Docker
The project utilizes Docker for containerization. Three Docker images are employed: one for the MongoDB database, one for the Spring Boot application, and another for the React.js frontend. These images are combined in the docker-compose.yml file, providing a convenient deployment solution.

## Frontend
The frontend, built with React.js, consists of two pages: the Home Page for saving deals and the `/show` page for listing saved deals. Frontend validation ensures data integrity before sending it to the backend.

## How to Run the Project
Follow these steps to run the project:

1. **Build Docker Images**: Execute the following command to build Docker images for the application:
    ```bash
    make build
    ```

2. **Start the Application**: Launch application containers using Docker Compose:
    ```bash
    make run
    ```

3. **Stop the Application**: Stop running containers with:
    ```bash
    make stop
    ```

4. **View Available Commands**: To view available commands and descriptions, use:
    ```bash
    make help
    ```

Ensure that the `docker-compose.yml` file exists before running the commands.
After bulding and running the project, `http://localhost:3000` to test the application via user interface.


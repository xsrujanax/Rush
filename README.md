# Rush E-Commerce Platform

## Overview

Rush is a Spring Boot-based e-commerce application that uses MongoDB as the database backend. It is designed to provide a modern, scalable platform for online shopping experiences, with features such as user management, product catalog, and secure API endpoints.

---

## Features

- **User Management**: CRUD operations for user profiles.
- **Product Management**: Add, update, and delete product listings.
- **RESTful APIs**: Secure and scalable API endpoints for all functionalities.
- **MongoDB Integration**: Schema-less and flexible database for dynamic data models.
- **Spring Boot Security**: Default security with basic authentication for development.

---

## Tech Stack

- **Backend**: Spring Boot 3.4.0
- **Database**: MongoDB (Hosted on MongoDB Atlas)
- **Build Tool**: Maven
- **Java Version**: 22.0.1

---

## Setup Instructions

### Prerequisites

1. **Java Development Kit (JDK)**: Ensure Java 22.0.1 is installed.
2. **Maven**: Installed and configured in your system PATH.
3. **MongoDB Atlas**: A free cluster with database and user credentials.

### Steps to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/rush.git
   cd rush
   ```

2. Configure MongoDB connection:

   - Update `src/main/resources/application.properties`:
     ```properties
     spring.data.mongodb.uri=mongodb+srv://<username>:<password>@cluster0.mongodb.net/rush?retryWrites=true&w=majority
     spring.data.mongodb.database=rush
     ```

3. Build the project:

   ```bash
   mvn clean install
   ```

4. Run the application:

   ```bash
   mvn spring-boot:run
   ```

5. Access the application:

   - APIs are available at: `http://localhost:8080`

---

## API Endpoints

### User Management

- **Get all users**:

  - `GET /api/users`

- **Get user by ID**:

  - `GET /api/users/{id}`

- **Create a user**:

  - `POST /api/users`

- **Update a user**:

  - `PUT /api/users/{id}`

- **Delete a user**:

  - `DELETE /api/users/{id}`

### Product Management

- **Get all products**:

  - `GET /api/products`

- **Get product by ID**:

  - `GET /api/products/{id}`

- **Create a product**:

  - `POST /api/products`

- **Update a product**:

  - `PUT /api/products/{id}`

- **Delete a product**:

  - `DELETE /api/products/{id}`

---

## Security

- The application uses Spring Security with default authentication.
- Use the auto-generated password displayed in the logs to access protected endpoints.

---

## Status

This project is under development.

---

## Future Enhancements

- Integration with a frontend using React.
- Advanced authentication with OAuth2/JWT.
- Deployment to cloud platforms like AWS or GCP.

---

## Contact

For questions or support, contact [srujana.guttula\@outlook.com].


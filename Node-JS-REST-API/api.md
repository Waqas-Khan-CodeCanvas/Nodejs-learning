#  Getting Started with REST APIs

A **REST API (Representational State Transfer API)** allows applications to communicate over HTTP. It uses standard methods like **GET**, **POST**, **PUT**, and **DELETE** to perform operations on server data. REST APIs are essential for building web services.

---

## 1 Core HTTP Methods

| Method | Purpose                       |
|--------|-------------------------------|
| **GET**    | Retrieve data from the server      |
| **POST**   | Create new data on the server      |
| **PUT**    | Update existing data on the server |
| **DELETE** | Remove data from the server        |

---

## 2 REST API Endpoints

Endpoints are the URLs where your API can be accessed. Here’s an example for **Users**:

| Method | Endpoint       | Description                  |
|--------|---------------|------------------------------|
| **GET**    | `/users`       | Retrieve all users           |
| **GET**    | `/users/:id`   | Retrieve a user by ID        |
| **POST**   | `/users`       | Create a new user            |
| **PUT**    | `/users/:id`   | Update a user by ID          |
| **DELETE** | `/users/:id`   | Delete a user by ID          |

> 💡 Tip: Check the `api.js` file to see how these endpoints are implemented in code.

---

## 3 Key Concepts

| Concept       | What it Means                                      |
|---------------|---------------------------------------------------|
| **Endpoint**      | URL where the API can be accessed               |
| **HTTP Method**   | Action to perform (GET, POST, PUT, DELETE)     |
| **Request Body**  | Data sent to the server (for POST/PUT requests)|
| **Response**      | Data returned from the server                  |
| **Status Code**   | Indicates success or failure (e.g., 200, 404) |

---

## 4 Summary

REST APIs let you **interact with a server over HTTP**. Using tools like **Express.js**, you can quickly create APIs to:

- **Create** data  
- **Read** data  
- **Update** data  
- **Delete** data  

REST APIs are the backbone of modern web services — simple, flexible, and powerful. 

#  REST API & Postman Cheat Sheet

A **quick reference guide** for working with REST APIs and testing them using Postman. Ideal for developers, QA, and teams.

---

## 1 REST APIs Overview

A **REST API** allows applications to communicate over HTTP using standard methods.  
You can **Create, Read, Update, and Delete (CRUD)** data through endpoints.

###  Core HTTP Methods

| Method | Purpose                          | Emoji |
|--------|---------------------------------|-------|
| <span style="color:green;">**GET**</span>  | Retrieve data from the server       | 🟢 GET |
| <span style="color:blue;">**POST**</span>   | Create new data on the server       | 🔵 POST |
|<span style="color:orange;">**PUT**</span>   | Update existing data on the server  | 🟠 PUT |
| <span style="color:red;">**DELETE**</span>| Remove data from the server         | 🔴 DELETE |

---

###  Example: Users API Endpoints

| Method | Endpoint       | Description                |
|--------|---------------|----------------------------|
| 🟢 **GET**    | `/users`       | Retrieve all users         |
| 🟢 **GET**    | `/users/:id`   | Retrieve a user by ID      |
| 🔵 **POST**   | `/users`       | Create a new user          |
| 🟠 **PUT**    | `/users/:id`   | Update a user by ID        |
| 🔴 **DELETE** | `/users/:id`   | Delete a user by ID        |

> 💡 Tip: Check your `api.js` or backend code to see how these endpoints are implemented.

---

###  Key REST API Concepts

| Concept        | Explanation                                           |
|----------------|------------------------------------------------------|
| **Endpoint**      | URL where the API can be accessed                   |
| **HTTP Method**   | Action to perform (GET, POST, PUT, DELETE)         |
| **Request Body**  | Data sent to the server (for POST/PUT requests)     |
| **Response**      | Data returned from the server                        |
| **Status Code**   | Indicates success or failure (e.g., 200, 404)      |

---

## 2 Introduction to Postman

**Postman** is a powerful tool for **testing, debugging, and organizing REST API requests**.

###  Key Features

| Feature                 | What it Does                                         |
|-------------------------|-----------------------------------------------------|
| **Send Requests**        | Make GET, POST, PUT, DELETE requests easily        |
| **Inspect Responses**    | View server responses including body & headers    |
| **Environment Variables**| Store reusable values like API keys or URLs       |
| **Collections**          | Group API requests for better organization        |
| **Automated Testing**    | Write tests to validate API responses             |

---

###  Sending Requests in Postman

1. Click **New Request**  
2. Enter the **endpoint URL** (e.g., `{{base_url}}/users`)  
3. Select the **HTTP method** (GET, POST, PUT, DELETE)  
4. Add **headers** (e.g., Authorization) or **body data** (for POST/PUT)  
5. Click **Send** to view the response  

>  Responses include:
> - **Status Code** (success or error)
> - **Body** (data returned)
> - **Headers** (metadata)

---

###  Organizing Requests with Collections

**Example: Users API Collection**
```
Users API Collection 
├─ 🟢 GET /users
├─ 🟢 GET /users/:id
├─ 🔵 POST /users
├─ 🟠 PUT /users/:id
└─ 🔴 DELETE /users/:id
```

- Collections help **organize requests** and **share them with teams**.

---

###  Environment Variables

| Variable        | Example Use Case                     |
|-----------------|-------------------------------------|
| `{{base_url}}`   | Base URL of the API                  |
| `{{auth_token}}` | Authorization token for requests    |

> 🔑 Example: Use `{{base_url}}/users` instead of hardcoding URLs.

---

## 3 HTTP Status Codes

| Code | Meaning                | Emoji   |
|------|------------------------|--------|
| 200  | OK / Success           | ✅ 200 |
| 201  | Created                | 🟢 201 |
| 400  | Bad Request            | ⚠️ 400 |
| 401  | Unauthorized           | 🔒 401 |
| 404  | Not Found              | ❌ 404 |
| 500  | Server Error           | 🔴 500 |

> 💡 Tip: Status codes are crucial for debugging and validating API behavior.

---

## 4 Quick REST API Reference (CRUD)

| Action                  | Method | Endpoint        | Emoji |
|-------------------------|--------|----------------|-------|
| Get all users           | GET    | `/users`       | 🟢 GET |
| Get user by ID          | GET    | `/users/:id`   | 🟢 GET |
| Create a new user       | POST   | `/users`       | 🔵 POST |
| Update user by ID       | PUT    | `/users/:id`   | 🟠 PUT |
| Delete user by ID       | DELETE | `/users/:id`   | 🔴 DELETE |

---

## 5 Best Practices & Summary

- **Always test endpoints in Postman** before integrating into apps  
- **Use environment variables** to avoid hardcoding sensitive info  
- **Organize requests in collections** for better workflow and team collaboration  
- **Check response status codes** to debug quickly  
- Together, REST APIs + Postman make **development faster, organized, and reliable** 

---

> ⚡ Pro Tip: Keep this cheat sheet handy as a **starter guide** when building or testing APIs.

📌 TODO REST API (Pure Node.js – No Frameworks)

A clean, production-ready RESTful TODO API built using only Node.js core modules (http, url).
No Express. No external libraries.
Works with mobile apps, web apps, Postman, and direct browser hits.

🚀 Features

✔ Full REST API

✔ Handles GET, POST, PATCH, DELETE

✔ Works with mobile apps (React Native, Flutter, Android, iOS)

✔ Works with browser clients

✔ Handles multiple content types:

application/json

text/html

Fallback for browsers without JSON requests

✔ CORS enabled (mobile & browser compatible)

✔ Clean internal router (no Express)

✔ In-memory database (simple & fast)

✔ Built-in error handling

✔ Code is modular and production-ready

📁 Project Structure
.
├── server.js
├── README.md


server.js contains the entire HTTP server + routing + controller logic.

⚙️ Installation
1. Clone repository
git clone <your-repo-url>
cd your-project

2. Install Node.js (if not installed)

Download from: https://nodejs.org

3. Run the server
node server.js


Server starts at:

http://localhost:3000

📝 API Documentation
Base URL
http://localhost:3000

📌 Endpoints
➤ 1. Get All Todos
GET /todos

Response:

[
  {
    "id": 1,
    "title": "Buy milk",
    "completed": false
  }
]

➤ 2. Get Todo by ID
GET /todos/:id

Example:

GET /todos/1

➤ 3. Create a Todo
POST /todos

Headers:

Content-Type: application/json


Body:

{
  "title": "Buy milk"
}


Response:

{
  "id": 1,
  "title": "Buy milk",
  "completed": false
}

➤ 4. Update a Todo (partial update)
PATCH /todos/:id

Headers:

Content-Type: application/json


Body (any field optional):

{
  "completed": true
}

➤ 5. Delete a Todo
DELETE /todos/:id

Response:

{
  "message": "Todo deleted successfully"
}

🌐 Content-Type Handling
✔ JSON Requests

Mobile apps & frontend clients should use:

Content-Type: application/json

✔ HTML Requests

If you hit the server from a browser (no JSON), it returns a friendly HTML message.

🔒 CORS Support

CORS is fully enabled for:

Mobile apps

Browsers

Frontend frameworks

Allowed:

GET, POST, PATCH, DELETE, OPTIONS
Content-Type

🏗 Future Improvements

This project is designed to be extendable. You can easily add:

✔ File/database persistence

✔ JWT authentication

✔ Logging system

✔ Input validation

✔ WebSockets for real-time sync

✔ Rate limiting

Just modify the routing or controllers as needed.

❤️ Author

Made with clean code & no frameworks — perfect for learning or for a lightweight production API.

If you want advanced features (DB, auth, full frontend, mobile integration, etc.), just ask!

If you want, I can also generate:

📌 A GitHub-ready repository
📌 A Postman collection
📌 A frontend UI
📌 A mobile client (React Native / Flutter)

Just tell me!
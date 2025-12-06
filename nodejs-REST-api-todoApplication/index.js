import http from "http";
import { URL } from "url";

// In-memory database (swap with DB if needed)
let todos = [
  { id: 1, title: "Learn JavaScript basics", completed: false },
  { id: 2, title: "Complete Node.js tutorial", completed: true },
  { id: 3, title: "Build a REST API using Node.js", completed: false },
  { id: 4, title: "Practice algorithm problems on LeetCode", completed: false },
  { id: 5, title: "Learn async/await in JavaScript", completed: true },
  { id: 6, title: "Read about event loop in Node.js", completed: false },
  { id: 7, title: "Implement a todo app in pure Node.js", completed: true },
  { id: 8, title: "Learn about HTTP methods (GET, POST, PATCH, DELETE)", completed: false },
  { id: 9, title: "Understand JSON and data serialization", completed: false },
  { id: 10, title: "Refactor code to make it modular", completed: false },
  { id: 11, title: "Practice CSS Flexbox and Grid", completed: false },
  { id: 12, title: "Build a simple React app", completed: true },
  { id: 13, title: "Learn React hooks (useState, useEffect)", completed: false },
  { id: 14, title: "Connect React frontend to Node.js backend", completed: false },
  { id: 15, title: "Implement form validation in React", completed: false },
  { id: 16, title: "Understand REST vs GraphQL", completed: false },
  { id: 17, title: "Learn about npm scripts and package.json", completed: true },
  { id: 18, title: "Use Git to track code changes", completed: false },
  { id: 19, title: "Create branches and merge in Git", completed: false },
  { id: 20, title: "Solve coding problems in arrays and strings", completed: false },
  { id: 21, title: "Understand closures in JavaScript", completed: false },
  { id: 22, title: "Practice object-oriented programming in JS", completed: false },
  { id: 23, title: "Learn about JavaScript prototypes", completed: false },
  { id: 24, title: "Use fetch API to call backend services", completed: false },
  { id: 25, title: "Handle errors in async functions", completed: false },
  { id: 26, title: "Write unit tests using Jest", completed: false },
  { id: 27, title: "Understand ES6 modules", completed: false },
  { id: 28, title: "Learn about JavaScript promises", completed: false },
  { id: 29, title: "Implement authentication with JWT", completed: false },
  { id: 30, title: "Practice data structures: linked lists, stacks, queues", completed: false },
  { id: 31, title: "Write comments and documentation for code", completed: true },
  { id: 32, title: "Optimize code for performance", completed: false },
  { id: 33, title: "Debug Node.js applications using console and debugger", completed: false },
  { id: 34, title: "Learn about npm dependencies and versions", completed: false },
  { id: 35, title: "Build RESTful routes in Node.js", completed: false },
  { id: 36, title: "Understand CORS and configure headers", completed: false },
  { id: 37, title: "Practice recursion problems", completed: false },
  { id: 38, title: "Learn about JavaScript map, filter, reduce", completed: false },
  { id: 39, title: "Implement local storage in frontend apps", completed: false },
  { id: 40, title: "Understand middleware in Node.js", completed: false },
  { id: 41, title: "Learn WebSockets for real-time communication", completed: false },
  { id: 42, title: "Practice asynchronous iteration with for-await-of", completed: false },
  { id: 43, title: "Learn debugging with Chrome DevTools", completed: false },
  { id: 44, title: "Set up ESLint for code quality", completed: false },
  { id: 45, title: "Understand the difference between var, let, const", completed: true },
  { id: 46, title: "Write clean code following best practices", completed: false },
  { id: 47, title: "Build a small project combining frontend and backend", completed: false },
  { id: 48, title: "Learn about Node.js streams", completed: false },
  { id: 49, title: "Practice error handling with try/catch", completed: false },
  { id: 50, title: "Understand event-driven architecture", completed: false },
  { id: 51, title: "Learn about API versioning and documentation", completed: false },
  { id: 52, title: "Refactor callback-based code to use async/await", completed: false }
];

let nextId = todos.length + 1;


//Utility: Send JSON response 
function sendJSON(res, statusCode, data) {
    res.writeHead(statusCode, { 
        "Content-Type": "application/json", 
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
    });
    res.end(JSON.stringify(data));
}

// Utility: Send HTML response
function sendHTML(res, html) {
    res.writeHead(200, { 
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*",
    });
    res.end(html);
}

// Utility: Parse JSON request body 
function parseBody(req) {
    return new Promise((resolve, reject) => {
        let body = "";

        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            if (!body) return resolve({});

            try {
                resolve(JSON.parse(body));
            } catch (err) {
                reject("Invalid JSON");
            }
        });
    });
}


//ROUTE HANDLERS


async function handleGetTodos(req, res) {
    sendJSON(res, 200, todos);
}

async function handleGetTodoById(req, res, id) {
    const todo = todos.find(t => t.id === id);
    if (!todo) return sendJSON(res, 404, { error: "Todo not found" });

    sendJSON(res, 200, todo);
}

async function handleCreateTodo(req, res) {
    try {
        const body = await parseBody(req);
        if (!body.title) return sendJSON(res, 400, { error: "Title is required" });

        const newTodo = {
            id: nextId++,
            title: body.title,
            completed: false,
        };

        todos.push(newTodo);
        sendJSON(res, 201, newTodo);
    } catch (error) {
        sendJSON(res, 400, { error });
    }
}

async function handleUpdateTodo(req, res, id) {
    try {
        const body = await parseBody(req);
        const todo = todos.find(t => t.id === id);

        if (!todo) return sendJSON(res, 404, { error: "Todo not found" });

        if (body.title !== undefined) todo.title = body.title;
        if (body.completed !== undefined) todo.completed = body.completed;

        sendJSON(res, 200, todo);
    } catch (error) {
        sendJSON(res, 400, { error });
    }
}

async function handleDeleteTodo(req, res, id) {
    const idx = todos.findIndex(t => t.id === id);

    if (idx === -1) return sendJSON(res, 404, { error: "Todo not found" });

    todos.splice(idx, 1);
    sendJSON(res, 200, { message: "Todo deleted successfully" });
}


//SERVER & ROUTER


const server = http.createServer(async (req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const path = parsedUrl.pathname;
    const method = req.method;
    const contentType = req.headers["content-type"];

    // CORS Preflight
    if (method === "OPTIONS") {
        res.writeHead(204, {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        });
        return res.end();
    }

    
    // HTML fallback (for browser direct hits)
    
    if (contentType === "text/html") {
       return sendHTML(res, `
    <h1>TODO API is running</h1>
    <p>You can use Postman, mobile apps, or frontend to interact via JSON.</p>

    <h3>Current Todos:</h3>
    <ul>
        ${
            todos.length === 0 
                ? "<li>No todos yet.</li>"
                : todos.map(todo => `
                    <li>
                        <strong>${todo.title}</strong> 
                        — ${todo.completed ? "Completed" : " Not completed"}
                    </li>
                    `).join("")
            }
        </ul>
    `);
    }

  
    // ROUTING
   

    // GET /todos
    if (method === "GET" && path === "/todos") {
        return handleGetTodos(req, res);
    }

    // GET /todos/:id
    if (method === "GET" && /^\/todos\/\d+$/.test(path)) {
        const id = parseInt(path.split("/")[2]);
        return handleGetTodoById(req, res, id);
    }

    // POST /todos
    if (method === "POST" && path === "/todos") {
        if (contentType !== "application/json") {
            return sendJSON(res, 400, { error: "Content-Type must be application/json" });
        }
        return handleCreateTodo(req, res);
    }

    // PATCH /todos/:id
    if (method === "PATCH" && /^\/todos\/\d+$/.test(path)) {
        if (contentType !== "application/json") {
            return sendJSON(res, 400, { error: "Content-Type must be application/json" });
        }
        const id = parseInt(path.split("/")[2]);
        return handleUpdateTodo(req, res, id);
    }

    // DELETE /todos/:id
    if (method === "DELETE" && /^\/todos\/\d+$/.test(path)) {
        const id = parseInt(path.split("/")[2]);
        return handleDeleteTodo(req, res, id);
    }

    // Default 404 for unknown routes
    sendJSON(res, 404, { error: "Route not found" });
});


server.listen(3001, () => {
    console.log(" Server running on port 3000");
});

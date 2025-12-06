# Getting Started with Express.js

Express.js is a fast, unopinionated, and minimalist web framework for Node.js. It makes building web applications and APIs simple and quick.

---

## 1. Prerequisites

Before starting, make sure you have:

### Node.js
Download and install Node.js from the official website:

[Download Node.js](https://nodejs.org/)

### npm
npm comes bundled with Node.js. After installation, you can check the versions:

```bash
# check the instalation
node -v
npm -v
```

## 2. Create a New Project
    1: Make a new folder for your project and navigate into it:

```bash
# make folder for project
mkdir my-express-app
cd my-express-app
npm init -y

# This  will creates a package.json file.

```
## 3. Install Express
    Install Express using npm:

```bash
# open termainl and run this command

npm install express

# This will initialize the express app in you working directory
```
## 4. Create a Simple Server
   Create a file named app.js:

```bash
const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

### Run the server

``` bash
# opent the terminal and run this command

node app.js

````
Open your browser and visit: http://localhost:3000

You should see Hello, Express!



## 5. Key Concepts

| Concept       | Description                                   |
|---------------|-----------------------------------------------|
| `app`         | Main Express application object               |
| `app.get()`   | Define a route that responds to **GET** requests |
| `req`         | Represents the **HTTP** request               |
| `res`         | Represents the **HTTP** response              |
| `app.listen()`| Starts the server on a specified port         |


## Summary

Express.js allows you to quickly create web servers and APIs with minimal code. Start small, then gradually add routes, middleware, and databases.

## Simple Express Server

This is a basic Node.js project using [Express](https://expressjs.com/) to create a minimal web server that responds with "Hello World".

### Features

- Lightweight Express setup
- Listens on port `5004`
- Root route (`/`) returns a simple HTML response

### Prerequisites

- [Node.js](https://nodejs.org/) (v12+ recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository or download the project files.

2. Navigate to the project directory:

   ```bash
   cd your-project-directory
   ```

3. Install dependencies:

   ```bash
   npm install express
   ```

### Running the Server

Start the server with:

```bash
node server.js
```

> If you are using ES modules, ensure `"type": "module"` is set in your `package.json`.

The server will start on [http://localhost:5004](http://localhost:5004)

### Output

Visiting the root URL (`/`) will return:

```html
<h2>Hello World</h2>
```

### License

This project is open-source and free to use.

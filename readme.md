# Express.js Todo REST API

A simple REST API built using **Node.js and Express.js** to perform CRUD (Create, Read, Update, Delete) operations on todo data.

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <project-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
npm run start
```

The server runs at:

```text
http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/data` | Get all todos |
| POST | `/data` | Add a new todo |
| PUT | `/data/:id` | Update a todo |
| DELETE | `/data/:id` | Delete a todo |

## Usage

Use **Postman** to test the API.

### GET – Fetch Todos

```http
GET http://localhost:3000/data
```

### POST – Add a Todo

```http
POST http://localhost:3000/data
```

Body (select `raw` → `JSON`):

```json
{
    "id": 4,
    "title": "Learn Express",
    "completed": false
}
```

### PUT – Update a Todo

```http
PUT http://localhost:3000/data/4
```

Body (select `raw` → `JSON`):

```json
{
    "id": 4,
    "title": "Learn Node.js",
    "completed": true
}
```

### DELETE – Remove a Todo

```http
DELETE http://localhost:3000/data/4
```

## Note

- Data is stored in an in-memory array.
- All data will be reset when the server restarts.
- `express.json()` is used to parse incoming JSON request bodies.
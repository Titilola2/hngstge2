# Person API
This is a simple REST API for managing person records. It supports basic CRUD operations (Create, Read, Update, Delete) for person records. The API is built using Node.js, Express, and MongoDB.

## Prerequisites
Before you begin, ensure you have met the following requirements:

- **Node.js:** Make sure Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

- **MongoDB:** Install and run MongoDB on your system. You can download MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community).

- **Postman:** You can use Postman to test the API endpoints. You can download Postman from [postman.com](https://www.postman.com/).

## Setup
1. Clone the repository to your local machine by running the command => git clone https://github.com/hokageCodes/hngx-task-two-backend
2. cd hngx-task-two-backend
3. yarn or npm  install
4. PORT=3000 and DB_URI=your_mongodb_connection

## Running The API
- npm start
- The API server will start, and you should see a message indicating that it's running on the specified port (e.g., Listening on port 3000).

## API Endpoints
### Create a New Person (POST)
- Endpoint: /api
- Method: POST
- Request Body: JSON object with name and hobby fields. e.g { "name": "John Doe", "hobby": "Programming" }
- Response: Details of the newly created person, including the custom id.

### Fetch a Person by ID (GET)
- Endpoint: /api/{id} (Replace {id} with the ID of the person you want to retrieve.)
- Method: GET
- Response: Details of the person with the specified ID, excluding "__v" and default "_id."

### Fetch a Person by Name (GET)
- Endpoint: /api?name={name} (Replace {name} with the name of the person you want to retrieve.)
- Details of the person with the specified name.

### Update a Person by ID (PUT)
- Endpoint: /api/{id} (Replace {id} with the ID of the person you want to update.)
- Request Body: JSON object with the updated name and hobby fields. e.g { "name": "Updated Name", "hobby": "Updated Hobby" }
- Response: Updated details of the person with the specified ID.

### Delete a Person by ID (DELETE)
- Endpoint: /api/{id} (Replace {id} with the ID of the person you want to delete.)
- Method: DELETE
- Response: A message indicating that the person was deleted successfully.

Also there are error handling cases like trying to get or delete a non exisiting user, among other checks.



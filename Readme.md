
# Job Posting App API

Welcome to the Job Posting App API! This API allows users to manage job listings through CRUD operations (Create, Read, Update, Delete). It's built using Express.js, Mongoose, and follows a model-controller structure for easy maintenance and scalability.

## Getting Started

To get started with using the Job Posting App API, follow the steps below:

### Prerequisites

- Node.js installed on your machine
- MongoDB database

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/shah9380/job-posting-app.git
```

2. Navigate to the project directory:

```bash
cd job-posting-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

By default, the server will run on `http://localhost:3000`.

### Usage

#### GET method

To retrieve all job listings, send a GET request to:

```
GET http://localhost:3000/api/v1/job/
```

#### POST method

To add a new job listing, send a POST request to:

```
POST http://localhost:3000/api/v1/job/
```

Include the job details in the request body in JSON format.

#### PUT method

To update an existing job listing, send a PUT request to:

```
PUT http://localhost:3000/api/v1/job/{jobId}
```

Replace `{jobId}` with the ID of the job listing you want to update. Include the updated job details in the request body in JSON format.

#### DELETE method

To delete a job listing, send a DELETE request to:

```
DELETE http://localhost:3000/api/v1/job/{jobId}
```

Replace `{jobId}` with the ID of the job listing you want to delete.

### Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
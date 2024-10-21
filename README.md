Expense Sharing and Tracking App
This is a simple Expense Sharing and Tracking application. It allows users to add expenses, track their personal expenses, and view overall expenses. The application is built using Node.js, Express, and MongoDB.

Table of Contents
Getting Started
APIs
How It Works
Folder Structure
Running the Application
Technologies Used
Getting Started
To get started with this project, you need to have Node.js and MongoDB installed on your machine. You can follow these steps:

Clone the Repository:

bash
Copy code
git clone <repository-url>
Navigate to the Project Directory:

bash
Copy code
cd ExpenseSharingAndTracking
Install Dependencies:

bash
Copy code
npm install
Set Up Environment Variables: Create a .env file in the root directory and add your MongoDB connection string:

c
Copy code
MONGODB_URI=<your-mongodb-connection-string>
Run the Application:

bash
Copy code
npm start
The application will run on http://localhost:8000.

APIs
1. Add a New Expense
Endpoint: POST /api/expenses
Description: Adds a new expense with details about participants and amounts owed.
Request Body:
json
Copy code
{
  "amount": 100,
  "participants": [
    {
      "userId": "user1_id",
      "amountOwed": 50
    },
    {
      "userId": "user2_id",
      "amountOwed": 50
    }
  ]
}
2. Get Expenses for a Specific User
Endpoint: GET /api/expenses/user/:userId
Description: Retrieves all expenses for a specific user.
Parameters:
userId: The ID of the user to get expenses for.
3. Get Overall Expenses
Endpoint: GET /api/expenses
Description: Retrieves all expenses across users.
4. Get Balance Sheet
Endpoint: GET /api/expenses/balance-sheet
Description: Downloads an Excel file containing the balance sheet of expenses.
How It Works
This application is organized into different parts:

Controllers
Controllers handle incoming requests and send responses. They process user input and call the services to perform actions. For example, the addExpense function in expenseController.js adds a new expense and sends back a success message.

Services
Services contain the business logic of the application. They interact with the database and perform operations like adding expenses or retrieving data. The expenseService.js has functions that the controller calls to add expenses or get user expenses.

Middleware
Middleware functions are used for validation and other processing. For example, validateExpense checks if the expense data provided by the user is valid before adding it.

Folder Structure
Here’s a brief overview of the project structure:

bash
Copy code
/ExpenseSharingAndTracking
│
├── /src
│   ├── /controllers       # Contains controller files for handling requests
│   ├── /models            # Contains Mongoose models for MongoDB
│   ├── /routes            # Contains route definitions
│   ├── /services          # Contains service files for business logic
│   ├── /middleware        # Contains middleware for request validation
│   ├── /config            # Contains configuration files like database connection
│   └── app.js             # Main application file
│
├── .env                   # Environment variables
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
Running the Application
Make sure your MongoDB server is running.
Follow the steps under "Getting Started" to install and run the application.
Use a tool like Postman to test the APIs.
Technologies Used
Node.js: JavaScript runtime for building server-side applications.
Express: Web framework for Node.js to handle routing and requests.
MongoDB: NoSQL database for storing expense data.
Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
Conclusion
This project is a simple application to track expenses shared among users. It is designed for learning purposes and can be extended with more features. Feel free to explore the code and modify it as you like!


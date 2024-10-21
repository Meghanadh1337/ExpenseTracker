# Expense Sharing and Tracking App - API Documentation

## Table of Contents
- [Add a New Expense](#add-a-new-expense)
- [Get Expenses for a Specific User](#get-expenses-for-a-specific-user)
- [Get Overall Expenses](#get-overall-expenses)
- [Get Balance Sheet](#get-balance-sheet)

## Add a New Expense

### Endpoint
`POST /api/expenses`

### Description
Adds a new expense with details about participants and amounts owed.

### Request Body
```json
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
### Response Body
```json
{
  "message": "Expense added successfully!",
  "expenseId": "expense_id_here"
}

### Get Expenses for a Specific User
Endpoint
GET /api/expenses/user/:userId

Description
Retrieves all expenses for a specific user.

Request Parameters
userId: The ID of the user to get expenses for.
{
  "expenses": [
    {
      "expenseId": "expense_id_1",
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
      ],
      "createdAt": "2024-10-21T12:00:00Z"
    },
    {
      "expenseId": "expense_id_2",
      "amount": 200,
      "participants": [
        {
          "userId": "user1_id",
          "amountOwed": 100
        },
        {
          "userId": "user3_id",
          "amountOwed": 100
        }
      ],
      "createdAt": "2024-10-21T13:00:00Z"
    }
  ]
}
Get Overall Expenses
Endpoint
GET /api/expenses

Description
Retrieves all expenses across users.
{
  "totalExpenses": 300,
  "expenses": [
    {
      "expenseId": "expense_id_1",
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
      ],
      "createdAt": "2024-10-21T12:00:00Z"
    },
    {
      "expenseId": "expense_id_2",
      "amount": 200,
      "participants": [
        {
          "userId": "user1_id",
          "amountOwed": 100
        },
        {
          "userId": "user3_id",
          "amountOwed": 100
        }
      ],
      "createdAt": "2024-10-21T13:00:00Z"
    }
  ]
}
Get Balance Sheet
Endpoint
GET /api/expenses/balance-sheet

Description
Downloads an Excel file containing the balance sheet of expenses.

Response
The response will be an Excel file containing the balance sheet data.

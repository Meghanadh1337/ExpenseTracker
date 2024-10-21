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
```

### Response Body
```json
{
  "message": "Expense added successfully!",
  "expenseId": "expense_id_here"
}
```

## Get Expenses for a Specific User

### Endpoint
`GET /api/expenses/user/:userId`

### Description
Retrieves all expenses for a specific user.

### Request Parameters
- `userId`: The ID of the user to get expenses for.

### Response Body
```json
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
```

## Get Overall Expenses

### Endpoint
`GET /api/expenses`

### Description
Retrieves all expenses across users.

### Response Body
```json
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
```

## Get Balance Sheet

### Endpoint
`GET /api/expenses/balance-sheet`

### Description
Downloads an Excel file containing the balance sheet of expenses.

### Response
The response will be an Excel file containing the balance sheet data.


<img width="1440" alt="Screenshot 2024-10-21 at 12 32 21 PM" src="https://github.com/user-attachments/assets/3bbee8ea-8c61-46b3-9a76-6f0aac63e78e">
<img width="1440" alt="Screenshot 2024-10-21 at 12 01 03 PM" src="https://github.com/user-attachments/assets/0cc7e2e1-baa6-46cc-8a29-822dc7dd29a3">
<img width="1440" alt="Screenshot 2024-10-21 at 12 01 04 PM" src="https://github.com/user-attachments/assets/73028ac5-9ece-47b6-ace2-37f7b6155734">
<img width="1440" alt="Screenshot 2024-10-21 at 12 01 06 PM" src="https://github.com/user-attachments/assets/c2a19216-c51e-46c1-86a5-949491fc4405">
<img width="1440" alt="Screenshot 2024-10-21 at 12 02 19 PM" src="https://github.com/user-attachments/assets/20b6afd0-9adb-45d1-9c41-a322409b45e7">
<img width="1440" alt="Screenshot 2024-10-21 at 12 27 00 PM" src="https://github.com/user-attachments/assets/552cb327-3177-4632-9f05-45c7268d434e">
<img width="1440" alt="Screenshot 2024-10-21 at 12 27 21 PM" src="https://github.com/user-attachments/assets/05d7df90-ab4f-4915-b73e-99ddd5a0e0b7">


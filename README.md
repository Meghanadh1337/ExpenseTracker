# Expense Sharing and Tracking App

This is a simple Expense Sharing and Tracking application. It allows users to add expenses, track their personal expenses, and view overall expenses. The application is built using Node.js, Express, and MongoDB.

## Table of Contents
- [Getting Started](#getting-started)
- [APIs](#apis)
- [How It Works](#how-it-works)
- [Folder Structure](#folder-structure)
- [Running the Application](#running-the-application)
- [Technologies Used](#technologies-used)
- [Conclusion](#conclusion)

## Getting Started
## Installation Instructions

To install the necessary packages and set up the application, follow these steps:

1. Ensure you have Node.js and MongoDB installed.
2. Clone the repository:

   ```bash
   git clone <repository-url>
## Examples

### Adding an Expense
**Request:**

```bash
curl -X POST http://localhost:8000/api/expenses -H "Content-Type: application/json" -d '{
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
}'




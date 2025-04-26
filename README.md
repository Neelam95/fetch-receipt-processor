# Fetch Receipt Processor - Backend Take-home Challenge

This project implements a simple RESTful API to process receipts and calculate points according to Fetch Rewards' scoring rules.

---

## 📦 Technology Stack

- Node.js
- Express.js
- Thunder Client (for API testing)

---

## 🚀 How to Run Locally

1. Install Node.js if you haven't already (https://nodejs.org/).

2. Clone this repository:

3. Install dependencies:

4. Start the server:

5. The server will run at `http://localhost:3000`

---

## 🛠 API Endpoints

### 1. Process Receipt

- **POST** `/receipts/process`
- **Body Example (JSON):**
```json
{
 "retailer": "Target",
 "purchaseDate": "2022-01-01",
 "purchaseTime": "14:33",
 "total": "9.00",
 "items": [
   { "shortDescription": "Peaches", "price": "1.50" },
   { "shortDescription": "Apples", "price": "3.25" }
 ]
}
{
  "id": "generated-receipt-id"
}


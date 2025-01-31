# Event Management System

A full-stack **Event Management System** that allows users to create, view, and manage events. This project includes functionalities like secure payments using M-Pesa, ticket generation, and event registration.

## Features

- **User Registration & Login:** Secure user authentication.
- **Event Creation:** Organizers can create events with various details like name, date, category, and capacity.
- **Ticket Booking:** Users can book tickets for available events.
- **M-Pesa Integration:** Secure payment processing using M-Pesa.
- **PDF Ticket Generation:** Automatically generates tickets for successful bookings.
- **Responsive UI:** User-friendly design for seamless interaction.

## Technologies Used

### Backend
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **MySQL**: Relational database for storing event and user data.

### Frontend
- **HTML/CSS**: For creating a responsive and engaging user interface.
- **JavaScript**: For handling form submissions and API calls.

### Tools
- **Railway**: For deployment and database hosting.
- **PDFKit**: For generating PDF tickets.
- **Multer**: For handling file uploads.

## Setup Instructions

### Prerequisites
1. **Node.js** (v18 or higher)
2. **MySQL** (Database setup is required)
3. **M-Pesa Credentials** (For payment integration)

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/username/Event-Management-System.git
   cd Event-Management-System
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the database:**
   * Use the provided Railway MySQL credentials or your own local setup.
   * Update `backend/src/config/database.js` with the appropriate MySQL connection details.
   * Run the SQL scripts (if provided) to set up tables.

4. **Run the server:**
   ```bash
   node server.js
   ```

5. **Access the application:**
   * Open your browser and navigate to: `http://localhost:3000`

## Environment Variables
Set up the following variables in a `.env` file (if not hardcoding):

```env
MYSQL_HOST=mysql.railway.internal
MYSQL_USER=root
MYSQL_PASSWORD=password
MYSQL_DATABASE=railway
MYSQL_PORT=3306
MPESA_CONSUMER_KEY=YOUR_CONSUMER_KEY
MPESA_CONSUMER_SECRET=YOUR_CONSUMER_SECRET
CALLBACK_URL=YOUR_NGROK_URL/api/mpesa/callback
```

## Deployment

### Railway Deployment
1. Push your code to GitHub and connect your repository to Railway.
2. Add the MySQL plugin to your project on Railway.
3. Set up your environment variables in Railway under the "Variables" tab.
4. Redeploy your project.

### Testing M-Pesa Integration
1. **Set up Ngrok**: Run Ngrok to expose your localhost to the internet.
   ```bash
   ngrok http 3000
   ```
   Copy the provided Ngrok URL and update the `CALLBACK_URL` environment variable.

2. **Perform a Test Payment**: Use the checkout form to test payments and verify callback handling.

3. **Verify Tickets**: Ensure the system generates tickets and stores payment information in the database.

## Acknowledgments
Special thanks to:
* **Safaricom M-Pesa API** for payment integration.
* **PDFKit** for generating PDF tickets.

## Authors
**[Group 19]**



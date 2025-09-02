# Node.js Real-Time Chat Application

## Overview

This is a simple real-time chat application built with Node.js, Express, and Socket.io. Users can send and receive messages instantly in the browser.

## Features

- Real-time messaging using WebSockets (Socket.io)
- Simple and intuitive web interface
- Supports multiple concurrent users
- Basic API endpoint for server status

## Setup Instructions

1. **Clone or copy the project folder**
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the server**
   ```bash
   node server.js
   ```
4. **Open the chat app in your browser**
   ```bash
   $BROWSER http://localhost:3000
   ```

## Project Structure

```
nodejs-chat-app/
├── public/
│   └── index.html      # Frontend chat interface
├── server.js           # Main server file (Express + Socket.io)
├── package.json        # Project metadata and dependencies
```

## How It Works

- The server serves the chat frontend from the `public` folder.
- Socket.io enables real-time communication between all connected clients.
- Messages sent from one user are broadcast to all users instantly.

## API Endpoints

- `GET /api/status`  
  Returns a JSON object with server status.

## Notes

- Open multiple browser tabs or windows to test real-time messaging.
- For production use, consider adding authentication, message history, and improved error handling.

## License

This project is for educational purposes.
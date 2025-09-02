const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from 'public'
app.use(express.static('public'));

// Example API endpoint with error handling
app.get('/api/status', (req, res) => {
  try {
    // Simulate possible error (remove/comment out in production)
    // throw new Error('Simulated error');
    res.json({ status: 'Server is running' });
  } catch (err) {
    // Log error and send error response
    console.error('API error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Socket.io logic
io.on('connection', (socket) => {
  console.log('New user connected');

  // Listen for chat messages
  socket.on('chat message', (msg) => {
    // Basic validation
    if (typeof msg !== 'string' || !msg.trim()) {
      socket.emit('chat error', 'Invalid message');
      return;
    }
    // Broadcast message to all clients
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Global error handler middleware (for Express routes)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
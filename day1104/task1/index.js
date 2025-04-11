const express = require('express');
const app = express();
const taskRoutes = require('./routes/task');

const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

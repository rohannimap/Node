const express = require('express');
const router = express.Router();
let tasks = require('../models/task');

// Get all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// Get one task
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');
  res.json(task);
});

// Create a new task
router.post('/', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update a task
router.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');
  task.title = req.body.title || task.title;
  task.completed = req.body.completed ?? task.completed;
  res.json(task);
});

// Delete a task
router.delete('/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.status(204).send();
});

module.exports = router;

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simple in-memory data store for example purposes
const projects = [];

app.get('/', (req, res) => {
  res.send('NEXBUILD API is running');
});

// Dashboard endpoint
app.get('/dashboard', (req, res) => {
  res.json({
    priorityTasks: [],
    criticalPath: [],
    aiInsights: [],
    weatherDelayRisk: null,
    materialArrivalTimeline: [],
    permittingStatus: []
  });
});

// Project Hub
app.get('/projects', (req, res) => {
  res.json(projects);
});

app.post('/projects', (req, res) => {
  const project = req.body;
  projects.push(project);
  res.status(201).json(project);
});

// Schedule placeholder
app.get('/schedule/:projectId', (req, res) => {
  // Would return Gantt data and tasks for the project
  res.json({ projectId: req.params.projectId, tasks: [] });
});

// Model Viewer placeholder
app.get('/model/:projectId', (req, res) => {
  res.json({ projectId: req.params.projectId, models: [] });
});

// Code Compliance placeholder
app.post('/code-compliance/:projectId', (req, res) => {
  res.json({ projectId: req.params.projectId, flags: [] });
});

// Submittals placeholder
app.get('/submittals/:projectId', (req, res) => {
  res.json({ projectId: req.params.projectId, submittals: [] });
});

// RFIs placeholder
app.get('/rfis/:projectId', (req, res) => {
  res.json({ projectId: req.params.projectId, rfis: [] });
});

// Chat placeholder
app.get('/chat/:projectId', (req, res) => {
  res.json({ projectId: req.params.projectId, messages: [] });
});

// Settings placeholder
app.get('/settings', (req, res) => {
  res.json({});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const { spawn } = require('child_process');
const path = require('path');

// Path to the Python script
const pythonScriptPath = path.join(__dirname, 'script.py');

// Spawn a new process to execute the Python script
const pythonProcess = spawn('python3', [pythonScriptPath]);

// Handle output from the Python script
pythonProcess.stdout.on('data', (data) => {
  console.log(`Python script output: ${data}`);
});

// Handle errors from the Python script
pythonProcess.stderr.on('data', (data) => {
  console.error(`Python script error: ${data}`);
});

// Handle the exit of the Python script
pythonProcess.on('close', (code) => {
  console.log(`Python script exited with code ${code}`);
});

const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/api', (req, res) => {
  // Get query parameters from the GET URL
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Get the current day of the week
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];

  // Get the current UTC time
  const currentUTC = new Date().toISOString();

  // State the GitHub repository information
  const githubFileUrl =
    'https://github.com/Abigail-cloud/host_endpoint/blob/master/app.js';
  const githubRepoUrl = 'https://github.com/Abigail-cloud/host_endpoint.git';
  // Create the response JSON
  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: currentUTC,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
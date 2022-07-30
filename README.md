<h1>Aircall</h1>
<p>This is a solution for <a href="https://github.com/aircall/frontend-hiring-test">Aircall</a></p>

<h2>How to run the app</h2>

<ol>
  <li>Clone the app from github</li>
  <li>Install the dependendcies using "npm install"</li>
  <li>Create a file named "access_token" in the directory of /src</li>
  <li>
    Paste this code to the file => const access_token: string = 'Your access key'; <br>
    export default access_token;
  </li>
  <li>Run the authentication code written down below (Run it using node)</li>
  <li>You will get access token, paste the access token to access_token variable inside 'Your access key' (step 4)</li>
  <li>Run 'npm start' in terminal</li>
  <li>The app now runs!</li>
</ol>

<h2>Authentication code</h2>

<pre>
  // Install axios using => npm install axios
  
const axios = require('axios').default;

  axios.post("https://frontend-test-api.aircall.io/auth/login",
    {
        username: "userName",
        password: "password"
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
</pre>
<p>Run this code in any javascript file you want my recommendation is create a file then run it using node</p>
<p>Note that access token is valid only 10 minutes so you need to run this code and get access token every 10 minutes</p>

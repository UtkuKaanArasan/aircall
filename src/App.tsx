import './App.css';
import React, { useState, useEffect } from 'react';
const axios = require('axios').default;

function App() {

  const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJDb3N5bGltZTAwMCIsInVzZXJuYW1lIjoiQ29zeWxpbWUwMDAiLCJpYXQiOjE2NTY4MDA4MzksImV4cCI6MTY1NjgwMTQzOX0.kxrsyyweb99xOipZO30RZjAx-nN7O5-tsdZDz1YxP9A';

  const [calls, setCalls] = useState([])

  console.log(calls);
  

  function getCalls() {
    axios.get('https://frontend-test-api.aircall.io/calls?offset=5&limit=5', {
      headers: {
        "Authorization": `Bearer ${access_token}`
      }
    }).then((res: any) => setCalls(res.data.nodes))
      .catch((err: any) => console.log(err))
  }

  useEffect(() => { getCalls() }, [])

  return (
    <div className="App">
      <ul>
        {calls.map(
          (item: any) => {
            return <li>{item.from}</li>
          }
        )}
      </ul>
    </div>
  );
}

export default App;

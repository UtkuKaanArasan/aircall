import './App.css';
import React, { useState, useEffect } from 'react';
const axios = require('axios').default;

function App() {

  const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJDb3N5bGltZTAwMCIsInVzZXJuYW1lIjoiQ29zeWxpbWUwMDAiLCJpYXQiOjE2NTY4MDI4NDYsImV4cCI6MTY1NjgwMzQ0Nn0.SobBplx8XXQteS3jc5sfsORs9A0zUobaJla1XRC3CmQ';

  const [calls, setCalls] = useState([])

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
            return <li key={item.id}>{item.from}</li>
          }
        )}
      </ul>
    </div>
  );
}

export default App;

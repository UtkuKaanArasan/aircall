// Styling
import './App.css';
// React, Hooks
import React, { useState, useEffect} from 'react';
//Context provider
import { CallContext } from './Context'
//Components
import CallList from './Components/CallList';
//Dependendies
const axios = require('axios').default;


function App() {
  // Access key changes every 10 minutes so assinged a variable to it
  const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJDb3N5bGltZTAwMCIsInVzZXJuYW1lIjoiQ29zeWxpbWUwMDAiLCJpYXQiOjE2NTY4OTEyMjAsImV4cCI6MTY1Njg5MTgyMH0.XNxJF_NBQCpJlUENNYc3VJmrX1lbun9skE9LkR2WCDw';

  function getCalls(limit:number) {
    axios.get(`https://frontend-test-api.aircall.io/calls?offset=${limit}&limit=${limit}`, {
      headers: {
        "Authorization": `Bearer ${access_token}`
      }
    }).then((res: any) => setCalls(res.data.nodes))
      .catch((err: any) => console.log(err))
  }

  const [calls, setCalls] = useState<object[]>([])

  // Get calls from api when rendered for the first time
  useEffect(() => { getCalls(10) }, [])

  return (
    <CallContext.Provider value={calls}>
      <div className="App">
        <CallList />
      </div>
    </CallContext.Provider>
  );
}

export default App;

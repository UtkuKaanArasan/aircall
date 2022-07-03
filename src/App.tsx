// Styling
import './App.css';
// Hooks
import React, { useState, useEffect, useContext, createContext } from 'react';
//Context provider
import { CallContext } from './Context'
//Components
import CallList from './Components/CallList';
//Dependendies
const axios = require('axios').default;


function App() {
  // Access key changes every 10 minutes so assinged a variable to it
  const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJDb3N5bGltZTAwMCIsInVzZXJuYW1lIjoiQ29zeWxpbWUwMDAiLCJpYXQiOjE2NTY4NTU4MTcsImV4cCI6MTY1Njg1NjQxN30.uPwAvYUZRCmoXgDsxQ8of1bycmYFPNVUhdgdq3ak4zE';

  function getCalls() {
    axios.get('https://frontend-test-api.aircall.io/calls?offset=25&limit=25', {
      headers: {
        "Authorization": `Bearer ${access_token}`
      }
    }).then((res: any) => setCalls(res.data.nodes))
      .catch((err: any) => console.log(err))
  }

  const [calls, setCalls] = useState<object[]>([])

  useEffect(() => { getCalls() }, [])

  return (
    <CallContext.Provider value={calls}>
      <div className="App">
        <CallList />
      </div>
    </CallContext.Provider>
  );
}

export default App;

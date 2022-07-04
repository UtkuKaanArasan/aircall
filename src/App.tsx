// Styling
import './App.css';
// React, Hooks
import React, { useState, useEffect} from 'react';
//Context provider
import { CallContext } from './Context'
//Components
import CallList from './Components/CallList';
import CallItemDetail from './Components/CallItemDetail/CallItemDetail';
//Dependendies
const axios = require('axios').default;

function App() {
  // Access key changes every 10 minutes so assinged a variable to it
  const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJDb3N5bGltZTAwMCIsInVzZXJuYW1lIjoiQ29zeWxpbWUwMDAiLCJpYXQiOjE2NTY5NzQzNTMsImV4cCI6MTY1Njk3NDk1M30.aaUgrrK_hAtzG8eqTO07I3B4dn2K-p_iZW352VSg72c';

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
  useEffect(() => { getCalls(3) }, [])

  return (
    <CallContext.Provider value={calls}>
      <div className="App">
        <CallList />
        <CallItemDetail />
      </div>
    </CallContext.Provider>
  );
}

export default App;

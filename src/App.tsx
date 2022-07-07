// Styling
import './App.css';
// React, Hooks
import React, { useState, useEffect } from 'react';
// Access token
import access_token from './access_token';
//Context provider
import { CallContext } from './Context'
//Components
import CallList from './Components/CallList';
import CallItemDetail from './Components/CallItemDetail/CallItemDetail';
// React Router
import { Routes, Route } from 'react-router-dom';
//Dependendies
const axios = require('axios').default;

function App() {
  
  function getCalls() {
    const apiLimit:number = 15
    axios.get(`https://frontend-test-api.aircall.io/calls?offset=${apiLimit}&limit=${apiLimit}`, {
      headers: {
        "Authorization": `Bearer ${access_token}`
      }
    }).then((res: any) => setCalls(res.data.nodes))
      .catch((err: any) => console.log(err))
  }

  const [calls, setCalls] = useState<object[]>([])

  // Get calls from api when rendered for the first time
  useEffect(() => { getCalls() }, [])

  return (
    <CallContext.Provider value={calls}>
        <Routes> {/* Router for call details */}
          <Route path='/call/:id' element={<CallItemDetail getCalls={getCalls} />} />
        </Routes>
      <div className="App">
        <CallList />
      </div>
    </CallContext.Provider>
  );
}

export default App;

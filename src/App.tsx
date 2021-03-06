// Styling
import './App.css';
// React, Hooks
import React, { useState, useEffect } from 'react';
// Access token
import access_token from './access_token';
//Context provider
import { CallContext } from './Context'
//Calls interface
import { Calls } from './Context';
//Components
import CallList from './Components/CallList/CallList';
import CallItemDetail from './Components/CallItemDetail/CallItemDetail';
import Header from './Components/Header/Header';
// React Router
import { Routes, Route, useMatch } from 'react-router-dom';
import Footer from './Components/PageSelect/PageSelect';
//Dependendies
const axios = require('axios').default;

function App() {

  function getCalls() {
    const apiLimit: number = 10
    axios.get(`https://frontend-test-api.aircall.io/calls?offset=${page}&limit=${apiLimit}`, {
      headers: {
        "Authorization": `Bearer ${access_token}`
      }
    }).then((res: any) => setCalls(res.data.nodes))
      .catch((err: any) => console.log(err))
  }

  const [calls, setCalls] = useState<Calls[]>([])
  const [page, setPage] = useState<number>(1)

  // Get calls from api when rendered for the first time
  useEffect(() => { getCalls() }, [])

  // Whenever page changes it gets the calls from api
  useEffect(() => {getCalls()}, [page])

  //Checks whether the app is at home page or not
  const home = useMatch('/')

  return (
    <CallContext.Provider value={calls}>
      <Routes> {/* Router for call details */}
        <Route path='/call/:id' element={<CallItemDetail getCalls={getCalls} />} />
      </Routes>
      <div className="App">
        {/* This allows to render call list if we are on root path */
          home ?
            <>
              <Header setCalls={setCalls} />
              <Footer page={page} setPage={setPage} />
              <CallList />
              <Footer page={page} setPage={setPage} />
            </>
            :
            null
        }
      </div>
    </CallContext.Provider>
  );
}

export default App;

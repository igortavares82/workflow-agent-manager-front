import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import About from 'pages/About'
import AgentTable from 'components/Agent/Table/Table'
import AgentsApi from 'api/AgentApi'
import logo from 'assets/logo.svg'
import './App.css'

// REDUX
// Import store and wrap app with redux provider
// import store from './store'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <AgentTable data={AgentsApi()} />
      </div>
    </div>
  )
}

export default App

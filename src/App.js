import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Provider } from 'react-redux'
import Post from './component/Post'
import Postform from './component/Postform'
import store from './Store'

class App extends Component {
  render () {
    return (
      <Provider store={ store }>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
          </header>
          <Postform />
          <hr />
          <Post />
        </div>
      </Provider>
    )
  }
}

export default App

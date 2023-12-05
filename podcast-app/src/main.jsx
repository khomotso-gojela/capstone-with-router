import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import favReducer from './Redux/favSlicer'

const store = configureStore({
  reducer: {
    favorites: favReducer
  }
})

store.subscribe(() => { console.log(store.getState())})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>    
  </React.StrictMode>,
)

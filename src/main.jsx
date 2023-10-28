import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Main() {
  return(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)

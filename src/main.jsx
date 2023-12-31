import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// import css
import "./assets/css/style.css"

function Main() {
  return(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)

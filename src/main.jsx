import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './components/app/App'
import Provider from "../context/index.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
        <App />
    </Provider>
  </StrictMode>,
)

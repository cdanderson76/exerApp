import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import AppContext from './context/WorkoutContext';
import AuthAppContext from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthAppContext>
      <AppContext>
        <App />
      </AppContext>
    </AuthAppContext>
  </StrictMode>
)

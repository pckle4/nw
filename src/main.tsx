
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Hide Lovable badge
const hideLovableBadge = () => {
  const lovableBadge = document.getElementById('lovable-badge');
  if (lovableBadge) {
    lovableBadge.style.display = 'none';
  }
};

// Run the hide badge function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', hideLovableBadge);

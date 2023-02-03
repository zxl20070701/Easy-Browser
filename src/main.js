import React from 'react'
import { createRoot } from 'react-dom/client'

import './styles/normalize.css'
import './styles/common.scss'

import App from './App.jsx'

createRoot(document.getElementById('app')).render(<App />)
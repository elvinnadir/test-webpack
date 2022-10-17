import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.scss'
import HackIcon from './hack.svg'

const rootApp = document.getElementById("app")
const root = createRoot(rootApp)

root.render(
    <div>
        <HackIcon />
    </div>
)
import React from 'react'
import { Link } from './Router'

const buttons = [
  ["generate", "Generate Sales Ticket"],
  ["addedit", "Add/Edit"],
  ["invoicing", "Invoicing"],
  ["report", "Report"],
  ["system", "System"],
  ["utility", "Utility"],
  ["help", "Help"],
  ["exit", "Exit"]
]

export default function App(){
  return (
    <div className="app">
      <div className="tabs">
        {buttons.map(b=>(
          <Link key={b[0]} href={b[0]}>{b[1]}</Link>
        ))}
      </div>

      <div className="grid">
        {buttons.map(b=>(
          <Link key={b[0]} className="btn" href={b[0]}>
            <div className="icon">⬜</div>
            <div>{b[1]}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

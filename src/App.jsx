import { useState } from 'react'
import LunchSelector from './components/LunchSelector'

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>What's For Lunch Today? 🍱</h1>
        <p>Decide your daily meal with style!</p>
      </header>
      <main>
        <LunchSelector />
      </main>
    </div>
  )
}

export default App

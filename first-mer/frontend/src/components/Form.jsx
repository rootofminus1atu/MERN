import React from 'react'
import { useState, useRef } from 'react'

export default function Form() {
  const titleRef = useRef()
  const [reps, setReps] = useState('')
  const [load, setLoad] = useState('')
  const [error, setError] = useState(null)

  const handleSumbit = async (e) => {
    e.preventDefault()

    const title = titleRef.current.value
    const workout = {title, reps, load}

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      titleRef.current.value = ""
      setReps('')
      setLoad('')
      setError(null)
      console.log('new workout added', json)
    }
  }

  return (
    <div className='form'>
      <h3>Add a new workout</h3>
      <form onSubmit={handleSumbit}>
        <label>Exercise title:</label>
        <input 
          type="text" 
          placeholder="Add something..." 
          ref={titleRef}
        />
        <label>How many reps?</label>
        <input 
          type="number" 
          placeholder="Add something..." 
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />
        <label>Load (in kg):</label>
        <input 
          type="number" 
          placeholder="Add something..." 
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />
        <button>Add workout</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

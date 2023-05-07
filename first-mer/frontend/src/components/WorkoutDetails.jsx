import React from 'react'

export default function WorkoutDetails({ workout }) {
  return (
    <div className='workout-details'>
      <h3>{workout.title}</h3>
      <p><strong>Reps:</strong> {workout.reps}</p>
      <p><strong>Load (kg):</strong> {workout.load}</p>
      <p>{workout.createdAt}</p>
    </div>
  )
}

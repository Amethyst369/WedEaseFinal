import React from 'react'
import './Sorting.css'
const Sorting = () => {
  return (
    <div>
          <section className="sorter-section">
      <h2 className="sorter-title">Sorter</h2>
      <div className="input-container">
        <label className="label">Enter the budget:</label>
        <input className="input-field" type="number" placeholder="Enter the budget" />
      </div>
      <div className="input-container">
        <label className="label">Enter the location:</label>
        <input className="input-field" type="text" placeholder="Enter the location" />
      </div>
      <div className="input-container">
        <label className="label">Enter number of people to invite:</label>
        <input className="input-field" type="number" placeholder="Enter number of people to invite" />
      </div>
      <div className="input-container">
     
      </div>
    </section>

    </div>
  )
}

export default Sorting

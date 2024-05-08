import { useState, useEffect } from 'react'

import './CountriesSection.css'

// runs with json-server
const FAKE_REQUEST_URL = 'http://localhost:8000/allContinents'

function CountriesSection() {
  const [apps, setApps] = useState([])

  useEffect(() => {
    fetch(FAKE_REQUEST_URL)
      .then(res => res.json())
      .then(data => setApps(data))
      .catch(err => console.error(err))
  }, [])


  return (
    <div className="countries-section-wrap">
      <h2 className="countries-section-header">Countries</h2>
    </div>
  )
}

export default CountriesSection

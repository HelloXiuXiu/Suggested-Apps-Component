import { useState, useEffect, useRef } from 'react'
import { useAnimateWithDelay } from '../hooks/useAnimateWithDelay.js'
import './SuggestedApps.css'

import AppPreview from './AppPreview.jsx'

// runs with json-server
const FAKE_REQUEST_URL = 'http://localhost:8000/apps'

function SuggestedApps() {
  const [apps, setApps] = useState([])
  const animWrapper = useRef(null)

  useEffect(() => {
    fetch(FAKE_REQUEST_URL)
      .then(res => res.json())
      .then(data => setApps(data))
      .catch(err => console.error("Error"))
  }, [])

  useAnimateWithDelay({
    parentElement: animWrapper, 
    animClass: 'active',
    delay: 3000,
    enabled: apps.length > 0
  })

  return (
    <div className="suggested-apps-wrap">
      <div className="suggested-apps-header">
        <h2 className="title">suggested apps</h2>
        <a className="info" href="#">i</a>
      </div>
      <div className="suggested-apps-body" ref={animWrapper}>
        { apps && apps.map(app => <AppPreview url={app.url} title={app.title} icon={app.icon} key={app.title} />) }
      </div>
    </div>
  )
}

export default SuggestedApps

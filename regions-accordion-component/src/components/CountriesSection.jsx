import { useState, useEffect } from 'react'
import CountriesAccordion from './CountriesAccordion.jsx'

import Button from './atoms/Button.jsx'
import SectionHeader from './atoms/SectionHeader.jsx'
import SectionFooter from './atoms/SectionFooter.jsx'
import SectionInfo from './atoms/SectionInfo.jsx'

import './CountriesSection.css'

// runs with json-server
const FAKE_REQUEST_URL = 'http://localhost:8000/allContinents'

function CountriesSection() {
  const [apps, setApps] = useState([])

  // useEffect(() => {
  //   fetch(FAKE_REQUEST_URL)
  //     .then(res => res.json())
  //     .then(data => setApps(data))
  //     .catch(err => console.error(err))
  // }, [])

  return (
    <div className="countries-section-wrap">
      <SectionHeader>Countries</SectionHeader>
      <SectionInfo>Select Region / Country to Include. Deselect Country, City to Exclude.</SectionInfo>
      <CountriesAccordion />
      <SectionFooter>
        <Button isAccent={false} isDisabled={false} clickHandler={null}>Cancel</Button>
        <Button isAccent={true}  isDisabled={true} clickHandler={null}>Apply</Button>
      </SectionFooter>
    </div>
  )
}

export default CountriesSection

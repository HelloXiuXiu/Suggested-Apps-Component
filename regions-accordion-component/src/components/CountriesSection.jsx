import { useState, useEffect } from 'react'
import CountriesAccordion from './CountriesAccordion.jsx'

import Section from './atoms/Section.jsx'
import Button from './atoms/Button.jsx'
import SectionHeader from './atoms/SectionHeader.jsx'
import SectionFooter from './atoms/SectionFooter.jsx'
import SectionInfo from './atoms/SectionInfo.jsx'
import Search from './atoms/Search.jsx'
import SectionBody from './atoms/SectionBody.jsx'
import SectionBodyLeft from './atoms/SectionBodyLeft.jsx'
import SectionBodyRight from './atoms/SectionBodyRight.jsx'

import './CountriesSection.css'

// runs with json-server
const FAKE_REQUEST_URL = 'http://localhost:8000/0'

function CountriesSection() {
  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    fetch(FAKE_REQUEST_URL)
      .then(res => res.json())
      .then(data => setAllCountries(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <Section>
      <SectionHeader>Countries</SectionHeader>
      <SectionInfo>Select Region / Country to Include. Deselect Country, City to Exclude.</SectionInfo>
      <SectionBody>
        <SectionBodyLeft>
          <Search />
          <CountriesAccordion allCountries={allCountries}/>
        </SectionBodyLeft>
        <SectionBodyRight />
      </SectionBody>
      <SectionFooter>
        <Button isAccent={false} isDisabled={false} clickHandler={null}>Cancel</Button>
        <Button isAccent={true}  isDisabled={true} clickHandler={null}>Apply</Button>
      </SectionFooter>
    </Section>
  )
}

export default CountriesSection

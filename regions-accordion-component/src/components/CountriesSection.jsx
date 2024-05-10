import { useState, useEffect } from 'react'

import Accordion from './atoms/Accordion.jsx'
import Arrow from './atoms/Arrow.jsx'
import Button from './atoms/Button.jsx'
import Loader from './atoms/Loader.jsx'
import Search from './atoms/Search.jsx'
import Section from './atoms/Section.jsx'
import SectionBody from './atoms/SectionBody.jsx'
import SectionBodyLeft from './atoms/SectionBodyLeft.jsx'
import SectionBodyRight from './atoms/SectionBodyRight.jsx'
import SectionFooter from './atoms/SectionFooter.jsx'
import SectionHeader from './atoms/SectionHeader.jsx'
import SectionInfo from './atoms/SectionInfo.jsx'

// runs with json-server
const FAKE_REQUEST_URL = 'http://localhost:8000/continents'

function getFlag(countryCode) {
  const codePoints = countryCode
    .split('')
    .map((char) => 127397 + char.charCodeAt())
  return (String.fromCodePoint(...codePoints) || '🏳️')
}

function toggleAccardion(e) {
  e.stopPropagation()
  const continent = e.target.closest('.continent')
  const country = e.target.closest('.country')

  if (country && continent) return

  const currentTarget = (country || continent)
  currentTarget.classList.toggle('open')

  if (continent) {
    const countries = Array.from(continent.nextElementSibling.querySelectorAll('.country'))
    if (countries) countries.forEach(el => el.classList.remove('open'))
  }
}

function CountriesSection() {
  const [continents, setContinents] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(FAKE_REQUEST_URL)
      .then(res => res.json())
      .then(data => {
        setContinents(data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <Section>
      <SectionHeader>Countries</SectionHeader>
      <SectionInfo>Select Region / Country to Include. Deselect Country, City to Exclude.</SectionInfo>
      <SectionBody>
        <SectionBodyLeft>
          <Search />
          {isLoading ?
            <Loader /> :
            <Accordion>
              {continents.map(continent => (
                <li className="continent-item" key={continent.uniq_id}>
                  <div className="continent" onClick={toggleAccardion}>
                    <Arrow />
                    <div className="continent-title">{continent.continent_name}</div>
                    <span className="hint">Continent</span>
                  </div>
                  <ul className="countries">
                    {continent.countries.map(country => (
                      <li className="country-item" key={country.uniq_id}>
                        <div className="country" onClick={toggleAccardion}>
                          <Arrow />
                          <div className="country-title">
                            <span className="country-flag">{getFlag(country.country_code)}</span> 
                            {country.country_name} - {country.country_code}
                          </div>
                          <span className="hint">Country</span>
                        </div>
                        <ul className="regions">
                          {country.regions.map(region => (
                            <li className="region-item" key={region.uniq_id}>
                              <div className="region">
                                <div className="region-title">{region.region_name}</div>
                                <span className="hint">Region</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </Accordion>
          }
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

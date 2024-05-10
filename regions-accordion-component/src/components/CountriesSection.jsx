import { useState, useEffect } from 'react'

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

import CountriesAccordion from './countries-accordion/CountriesAccordion.jsx'
import Continent from './countries-accordion/Continent.jsx'
import Country from './countries-accordion/Country.jsx'
import CountryWrap from './countries-accordion/CountryWrap.jsx'
import Region from './countries-accordion/Region.jsx'
import RegionWrap from './countries-accordion/RegionWrap.jsx'

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
  if (!country && !continent) return

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
            <CountriesAccordion>
              {continents.map(continent => (
                <Continent
                  toggleAccardion={toggleAccardion}
                  name={continent.continent_name}
                  key={continent.uniq_id}>
                  <CountryWrap>
                    {continent.countries.map(country => (
                      <Country
                        toggleAccardion={toggleAccardion}
                        flag={getFlag(country.country_code)}
                        name={country.country_name}
                        code={country.country_code}
                        key={country.uniq_id}>
                        <RegionWrap>
                          {country.regions.map(region => (
                            <Region name={region.region_name} key={region.uniq_id}/>
                          ))}
                        </RegionWrap>
                      </Country>
                    ))}
                  </CountryWrap>
                </Continent>
              ))}
            </CountriesAccordion>
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

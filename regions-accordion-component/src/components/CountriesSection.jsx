import { useState, useEffect } from 'react'

import Button from './atoms/Button.jsx'
import Excluded from './atoms/Excluded.jsx'
import Included from './atoms/Included.jsx'
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
  if (e.target.tagName === 'INPUT') return

  const continent = e.target.closest('.continent')
  const country = e.target.closest('.country')
  if (!country && !continent) return

  const currentTarget = (country || continent)
  currentTarget.classList.toggle('open')

  if (continent) {
    const countries = Array.from(continent.nextElementSibling.querySelectorAll('.country'))
    if (countries.length > 0) countries.forEach(el => el.classList.remove('open'))
  }
}

function CountriesSection() {
  const [continents, setContinents] = useState([])
  const [includedCountries, setIncludedCountries] = useState(new Map())
  const [excludedRegions, setExcludedRegions] = useState(new Map())
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

  function handleCountryCheckbox(e, countryObject) {
    e.stopPropagation()

    const updatedIncluded = new Map(includedCountries)
    const updatedExcluded = new Map(excludedRegions)

    if (e.target.checked) {
      updatedIncluded.set(countryObject.uniq_id, countryObject.country_name)
    } else {
      updatedIncluded.delete(countryObject.uniq_id)
      countryObject.regions.forEach(region => updatedExcluded.delete(region.uniq_id))
    }

    setIncludedCountries(updatedIncluded)
    setExcludedRegions(updatedExcluded)

    // change to state={excludedRegions.has(region.uniq_id)}
    const regions = Array.from(e.target.closest('.country-item').querySelectorAll('.region'))
    if (regions.length > 0) {
      regions.forEach(region => region.querySelector('input').checked = e.target.checked)
    }
  }

  function handleRegionCheckbox(e, countryObject, regionObject) {
    e.stopPropagation()

    const updatedIncluded = new Map(includedCountries)
    const updatedExcluded = new Map(excludedRegions)
    
    if (includedCountries.has(countryObject.uniq_id)) {
      if (e.target.checked) {
        updatedExcluded.delete(regionObject.uniq_id)
      } else {
        updatedExcluded.set(regionObject.uniq_id, `${regionObject.region_name} (${countryObject.country_name})`)
      }
    } else {
      updatedIncluded.set(countryObject.uniq_id, countryObject.country_name)
      countryObject.regions.forEach(region => {
        if (!excludedRegions.has(region.uniq_id) && region.uniq_id !== regionObject.uniq_id) {
          updatedExcluded.set(region.uniq_id, `${region.region_name} (${countryObject.country_name})`)
        }
      })
    }

    setIncludedCountries(updatedIncluded)
    setExcludedRegions(updatedExcluded)
  }

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
                  onToggleAccardion={toggleAccardion}
                  name={continent.continent_name}
                  key={continent.uniq_id}>
                  <CountryWrap>
                    {continent.countries.map(country => {
                      return (
                        <Country
                          onHandleCountryCheckbox={(e) => handleCountryCheckbox(e, country)}
                          onToggleAccardion={toggleAccardion}
                          flag={getFlag(country.country_code)}
                          name={country.country_name}
                          code={country.country_code}
                          key={country.uniq_id}>
                          <RegionWrap>
                            {country.regions.map(region => {
                              return (
                                <Region
                                  onHandleRegionCheckbox={(e) => handleRegionCheckbox(e, country, region)}
                                  name={region.region_name}
                                  key={region.uniq_id}/>
                              )}
                            )}
                          </RegionWrap>
                        </Country>
                      )}
                    )}
                  </CountryWrap>
                </Continent>
              ))}
            </CountriesAccordion>
          }
        </SectionBodyLeft>
        <SectionBodyRight>
          {includedCountries.size > 0 && <Included includedCountries={includedCountries} />}
          {excludedRegions.size  > 0 && <Excluded excludedRegions={excludedRegions} />}
          {!includedCountries.size && <div className="section-body-content no-select">Nothing Selected</div>}
        </SectionBodyRight>
      </SectionBody>
      <SectionFooter>
        <Button isAccent={false} isDisabled={false} clickHandler={null}>Cancel</Button>
        <Button isAccent={true}  isDisabled={true} clickHandler={null}>Apply</Button>
      </SectionFooter>
    </Section>
  )
}

export default CountriesSection

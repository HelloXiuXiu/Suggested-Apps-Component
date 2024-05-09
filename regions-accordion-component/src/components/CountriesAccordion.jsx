import { useState, useEffect } from 'react'

import './CountriesAccordion.css'

function CountriesAccordion({ allCountries }) {
  useEffect(() => {
    console.log(allCountries)
  }, [])

  return (
    <div className="countries-accordion-wrap">
      Countries
    </div>
  )
}

export default CountriesAccordion

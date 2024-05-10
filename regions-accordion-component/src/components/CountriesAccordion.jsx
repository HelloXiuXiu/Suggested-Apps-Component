import { useState, useEffect } from 'react'

import './CountriesAccordion.css'

function CountriesAccordion({ children }) {
  return (
    <ul className="accordion">
      {children}
    </ul>
  )
}

export default CountriesAccordion

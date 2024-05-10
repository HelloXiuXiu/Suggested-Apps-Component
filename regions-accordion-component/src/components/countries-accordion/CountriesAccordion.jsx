import './styles/CountriesAccordion.css'

function CountriesAccordion({ children }) {
  return (
    <ul className="countries-accordion">
      {children}
    </ul>
  )
}

export default CountriesAccordion

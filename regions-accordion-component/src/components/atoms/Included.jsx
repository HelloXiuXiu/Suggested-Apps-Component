import './Included.css'

function Included({ includedCountries }) {
  return (
    <div>
      <h3 className="countries-subheading">Include:</h3>
      <ul>
        {Array.from(includedCountries.values())
          .sort((a, b) => a.localeCompare(b))
          .map(countryName => (
          <li key={'incl' + countryName}>{countryName}</li>
        ))}
      </ul>
    </div>
  )
}

export default Included

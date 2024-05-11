import './Included.css'

function Included({ includedCountries }) {
  return (
    <div className="included">
      <h3 className="subheading">Include:</h3>
      <ul className="included-list">
        {Array.from(includedCountries.values())
          .sort((a, b) => a.localeCompare(b))
          .map(countryName => (
          <li className="included-item" key={'incl' + countryName}>{countryName}</li>
        ))}
      </ul>
    </div>
  )
}

export default Included

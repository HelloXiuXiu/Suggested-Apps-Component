import './Excluded.css'

function Excluded({ excludedRegions }) {
  return (
    <div>
      <h3 className="countries-subheading">Exclude:</h3>
      <ul>
        {Array.from(excludedRegions.values())
          .sort((a, b) => a.localeCompare(b))
          .map(regionName => (
          <li key={'excl' + regionName}>{regionName}</li>
        ))}
      </ul>
    </div>
  )
}

export default Excluded

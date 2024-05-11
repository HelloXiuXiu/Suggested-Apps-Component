import './Excluded.css'

function Excluded({ excludedRegions }) {
  return (
    <div className="excluded">
      <h3 className="subheading">Exclude:</h3>
      <ul className="excluded-list">
        {Array.from(excludedRegions.values())
          .sort((a, b) => a.localeCompare(b))
          .map(regionName => (
          <li className="excluded-item" key={'excl' + regionName}>{regionName}</li>
        ))}
      </ul>
    </div>
  )
}

export default Excluded

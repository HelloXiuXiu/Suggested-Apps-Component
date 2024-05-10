function Region({ name }) {
  return (
    <li className="region-item">
      <div className="region">
        <div className="region-title">{name}</div>
        <span className="hint">City</span>
      </div>
    </li>
  )
}

export default Region

function Region({ name }) {
  return (
    <li className="region-item">
      <div className="region">
        <label className="region-title">
          <input className="accordion-checkbox" type="checkbox" />
          {name}
        </label>
        <span className="hint">City</span>
      </div>
    </li>
  )
}

export default Region

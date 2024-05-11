function Region({ onHandleRegionCheckbox, name }) {
  return (
    <li className="region-item">
      <div className="region">
        <label className="region-title">
          <input className="accordion-checkbox" type={"checkbox"} onChange={onHandleRegionCheckbox}/>
          {name}
        </label>
        <span className="hint">City</span>
      </div>
    </li>
  )
}

export default Region

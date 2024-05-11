import Arrow from '../atoms/Arrow.jsx'

function Country({ onHandleCountryCheckbox, onToggleAccardion, isSelected, flag, name, code, children }) {
  return (
    <li className="country-item">
      <div className="country" onClick={onToggleAccardion}>
        <Arrow />
        <div className="country-title">
          <input className="accordion-checkbox" checked={isSelected} type="checkbox" onChange={onHandleCountryCheckbox}/>
          <span className="country-flag">{flag}</span> 
          {name} - {code}
        </div>
        <span className="hint">Country</span>
      </div>
      {children}
    </li>
  )
}

export default Country

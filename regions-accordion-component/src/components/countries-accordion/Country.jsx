import Arrow from '../atoms/Arrow.jsx'

function Country({ toggleAccardion, flag, name, code, children }) {
  return (
    <li className="country-item">
      <div className="country" onClick={toggleAccardion}>
        <Arrow />
        <div className="country-title">
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

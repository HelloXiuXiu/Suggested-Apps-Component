import Arrow from '../atoms/Arrow.jsx'

function Continent({ toggleAccardion, name, children }) {
  return (
    <li className="continent-item">
      <div className="continent" onClick={toggleAccardion}>
        <Arrow />
        <div className="continent-title">{name}</div>
        <span className="hint">Continent</span>
      </div>
      {children}
    </li>
  )
}

export default Continent

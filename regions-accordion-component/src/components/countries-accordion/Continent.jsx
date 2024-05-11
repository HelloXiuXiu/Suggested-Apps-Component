import Arrow from '../atoms/Arrow.jsx'

function Continent({ onToggleAccardion, name, children }) {
  return (
    <li className="continent-item">
      <div className="continent" onClick={onToggleAccardion}>
        <Arrow />
        <div className="continent-title">{name}</div>
        <span className="hint">Continent</span>
      </div>
      {children}
    </li>
  )
}

export default Continent

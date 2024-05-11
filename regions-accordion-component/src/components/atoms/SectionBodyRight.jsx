import './SectionBodyRight.css'

function SectionBodyRight({ children }) {
  return (
    <div className="section-body-right">
      { children }
      <div className="section-body-content no-select">Nothing Selected</div>
    </div>
  )
}

export default SectionBodyRight

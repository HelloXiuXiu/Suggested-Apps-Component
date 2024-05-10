import './Section.css'

function Section({ children = ''}) {
  return (
    <div className="section-wrap">
      {children}
    </div>
  )
}

export default Section

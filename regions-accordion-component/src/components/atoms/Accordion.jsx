import './Accordion.css'

function Accordion({ children = ''}) {
  return (
    <ul className="accordion">
      {children}
    </ul>
  )
}

export default Accordion

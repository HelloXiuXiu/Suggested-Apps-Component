import './SectionHeader.css'

function SectionHeader({ children }) {
  return (
    <div className="section-header">
      <h2>{ children }</h2>
      <div className="close-button-wrap">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{display: "block"}} xmlns="http://www.w3.org/2000/svg">
          <path className="close-button-fill" fillRule="evenodd" clipRule="evenodd" d="M4.29292 4.29289C4.68344 3.90237 5.31661 3.90237 5.70713 4.29289L12.0711 10.6568L18.435 4.29289C18.8256 3.90237 19.4587 3.90237 19.8492 4.29289C20.2398 4.68342 20.2398 5.31658 19.8492 5.70711L13.4853 12.0711L19.8493 18.435C20.2398 18.8256 20.2398 19.4587 19.8493 19.8492C19.4587 20.2398 18.8256 20.2398 18.4351 19.8492L12.0711 13.4853L5.70711 19.8492C5.31658 20.2398 4.68342 20.2398 4.29289 19.8492C3.90237 19.4587 3.90237 18.8256 4.29289 18.435L10.6569 12.0711L4.29292 5.70711C3.90239 5.31658 3.90239 4.68342 4.29292 4.29289Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  )
}

export default SectionHeader

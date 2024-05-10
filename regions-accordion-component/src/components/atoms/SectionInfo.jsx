import './SectionInfo.css'

function SectionInfo({ children = ''}) {
  return (
    <div className="section-info">
      <div className="info-icon">i</div>
      {children}
    </div>
  )
}

export default SectionInfo

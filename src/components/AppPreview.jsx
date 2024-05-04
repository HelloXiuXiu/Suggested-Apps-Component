import { useState, useEffect } from 'react'
import { useValidateImage } from '../hooks/useValidateImage.js'
import './AppPreview.css'

const BASE_URL = 'src/assets/icons/'
const DEFAULT_ICON = 'default.svg'

function AppPreview({ icon, title = '', url = '#',}) {
  const source = BASE_URL + (useValidateImage(BASE_URL, icon) ? icon : DEFAULT_ICON)

  return (
    <a className="app-preview-wrap" href={url}>
      <div className="app-preview-icon">
        <img className="icon-mask" src={source} alt={`${title} app icon`}/>
      </div>
      <h3 className="app-preview-title">{title}</h3>
    </a>
  )
}

export default AppPreview

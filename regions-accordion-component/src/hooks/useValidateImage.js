import { useState, useEffect } from 'react'

export function useValidateImage(baseUrl, icon) {
  let [result, setResult] = useState(true)
  if (!icon) return false

  useEffect(() => {
    fetch(baseUrl + icon)
      .then(res => {
        const contentType = res.headers.get('content-type')
        setResult((contentType.startsWith('image')) ? true : false)
      })
      .catch(err => console.error(err))
  },[])

  return result
}

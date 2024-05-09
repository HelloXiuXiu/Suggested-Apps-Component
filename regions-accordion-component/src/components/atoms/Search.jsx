import './Search.css'

function Search() {
  return (
    <div className="search">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="search-icon" fillRule="evenodd" clipRule="evenodd" d="M1.75 6.5C1.75 3.87665 3.87665 1.75 6.5 1.75C9.12335 1.75 11.25 3.87665 11.25 6.5C11.25 9.12335 9.12335 11.25 6.5 11.25C3.87665 11.25 1.75 9.12335 1.75 6.5ZM6.5 0.25C3.04822 0.25 0.25 3.04822 0.25 6.5C0.25 9.95178 3.04822 12.75 6.5 12.75C7.95561 12.75 9.29501 12.2524 10.3573 11.418L12.4697 13.5303C12.7626 13.8232 13.2374 13.8232 13.5303 13.5303C13.8232 13.2374 13.8232 12.7626 13.5303 12.4697L11.418 10.3573C12.2524 9.29501 12.75 7.95561 12.75 6.5C12.75 3.04822 9.95178 0.25 6.5 0.25Z" fill="currentColor"/>
      </svg>
      <input className="search-input" placeholder="Search Country, City"/>
    </div>
  )
}

export default Search

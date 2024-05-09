import './Button.css'

function Button({ isAccent = false, isDisabled = false, clickHandler, children }) {
  return (
    <div
      onClick={clickHandler}
      className={"button" + (isAccent ? " accent" : " secondary") + (isDisabled ? " disabled" : "")}>
        {children}
    </div>
  )
}

export default Button

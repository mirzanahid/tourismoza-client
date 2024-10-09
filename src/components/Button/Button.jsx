

const Button = ({label, onClick, type='button', className, disabled= false}) => {
    return (
      <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      >{label}</button>
    )
  }
  
  export default Button
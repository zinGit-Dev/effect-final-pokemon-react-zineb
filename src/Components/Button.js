export default function Button(props) {
    const { onClick, text, disabled, className } = props
    return (
      <button className = {className} onClick={onClick} disabled={disabled}>{text}</button>
    )
  }
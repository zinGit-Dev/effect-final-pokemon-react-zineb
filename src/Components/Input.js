export default function Input(props) {
    const { onChange, value, className } = props
    return (
      <input className={className} value={value} onChange={onChange} placeholder="Type pokemon name..." />
    )
  }

type ButtonProps = {
    name: string,
    className: string
}
const Button = (props: ButtonProps) => {
  return (
    <div>
        <button className={`cursor-pointer px-5 py-2 text-l font-normal rounded-full font-space ${props.className}`}>{props.name}</button>
    </div>
  )
}

export default Button
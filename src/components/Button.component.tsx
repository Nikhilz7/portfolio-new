
interface ButtonProps{
    value : string,
    link?: string;
    disabled: boolean,
    
}

const Button:React.FC<ButtonProps> = ({
    value,
    disabled,
    link,

}) => {
   const handleClick =() => {
    window.open(link, "_blank");
   }
  return (
    <button className=" p-2 m-2 btn shadow-[9px_9px_0px_rgb(0,0,0)] hover:shadow-[4px_4px_6px_violet] text-black bg-white ease-out hover:translate-y-1 hover:translate-x-1 transition-all rounded sm:text-2xl " disabled={disabled} onClick={handleClick}>
        {value}
    </button>
  )
}

export default Button;
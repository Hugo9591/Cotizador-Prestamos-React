//-------------------------------------------------------Hay 2 formas de usar props---------------------------------
function Button(props) {
  return (
    <button
          type="button"
          className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full
          hover:ring-2 hover:ring-offset-2 hover:ring-lime-500"
          onClick={props.fn}
    >{props.operador}</button>
  )
}

//--------DESTRUCTURING
// function Button({operador, fn}) {
//   return (
//     <button
//           type="button"
//           className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full
//           hover:ring-2 hover:ring-offset-2 hover:ring-lime-500"
//           onClick={fn}
//     >{operador}</button>
//   )
// }

export default Button


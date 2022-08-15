import { useState } from "react"

export const useCounter = (initialValue = 0 ) => {
  
  //armar nuestro contador
  const [counter, setCounter] = useState(initialValue)
    
  const increment = (value = 1) =>{
    setCounter(counter + value)
  }
  const decrement = (value = 1) =>{
    setCounter(counter - value)
  }
  const reset = () =>{
    setCounter(initialValue)
  }
//coma al final
  return {
    counter,
    increment,
    decrement,
    reset,
  }
}
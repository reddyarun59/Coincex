import React, { useState } from 'react'

const Counter = () => {
    const [value, setValue] =useState(0)

    const HandleSubtract=()=>{
        setValue(prevState=>prevState-1)
    }
    const HandleAdd=()=>{
        setValue(prevState=>prevState+1)
    }
  return (
    <div>Counter
        <div>
            <button onClick={HandleSubtract}>-</button>
            {value}
            <button onClick={HandleAdd}>+</button>
        </div>
    </div>
  )
}

export default Counter
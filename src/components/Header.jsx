import React from 'react'
import { ReactComponent as Logo } from "../coincexxx.svg"

const Header = () => {
  return (
    <div>
        <div className="shadow-xl">
            <div className="flex items-center">
                <Logo/>
                <h1 className="text-2xl font-bold">CoinCex</h1>
            </div>
        </div>
    </div>
  )
}

export default Header
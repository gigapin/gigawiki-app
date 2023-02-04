import { React, forwardRef } from "react"
import { FaMoon, FaSun } from 'react-icons/fa'

const IconTheme = forwardRef(({iconClassName}, ref) => {
  return (
    <div>
      {
        (iconClassName === 'block') ? <FaMoon className="w-6 h-6" ref={ref} /> : <FaMoon className="hidden w-6 h-6" />
      }
      {
        (iconClassName === 'hidden') ? <FaSun className="w-6 h-6" ref={ref} /> : <FaSun className="hidden w-6 h-6" />
      }
    </div>
  )
})

export default IconTheme
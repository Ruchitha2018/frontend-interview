import { useEffect, useState } from "react"
import Light from "./Light"

const TrafficLight = ({config, layout}) => {

    const [currentColor, setCurrentColor] = useState('green');

    useEffect(() => {
    const { duration, next} = config[currentColor]
    console.log(config[currentColor])
      const timerId = setTimeout(() => {
          setCurrentColor(next)
      },duration)
      return () => {
        clearTimeout(timerId)
      }
    },[currentColor])
    return (
        <div aria-live="polite" aria-label={`Current light: ${currentColor}`} className={`traffic-light--container ${layout === 'horizontal' ? 'horizontal': ''}`}>
        {Object.keys(config).map((color, index) => {
            return (
                <>
                <Light backgroundColor={color === currentColor ? config[color].backgroundColor : 'grey'}/>
                </>
            )
        })}
        </div>
    )
}

export default TrafficLight
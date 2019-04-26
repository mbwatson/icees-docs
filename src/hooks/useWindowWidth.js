import { useState, useEffect } from 'react'

let defaultWidth

if (typeof window !== `undefined`) {
    defaultWidth = window.innerWidth
}

const useWindowWidth = () => {
    const [width, setWidth] = useState(defaultWidth)
    
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    
    return width
}

export default useWindowWidth
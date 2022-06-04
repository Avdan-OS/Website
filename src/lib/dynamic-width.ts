import { useEffect } from 'react'

/**
 * An easy hook for dynamically changing DOM based on window size, fires on page load and resize
 * @param {hookCallback} callback - Callback function for hook
 */
const hook = (callback: (width: number) => void) => {
    useEffect(() => {
        window.addEventListener('load', ()=>{
            callback(window.innerWidth)
        })
        window.addEventListener('resize', ()=>{
            callback(window.innerWidth)
        })
    }, [])
}


/**
 * @callback hookCallback
 * @param {number} width - width of the current screen, in px
 */

export default hook

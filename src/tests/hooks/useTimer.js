import { useEffect, useState } from "react";

export function useTimer ({ minutes, started, finished, setFinished }) {
    const [ timeLeft, setTimeLeft ] = useState(minutes * 60)

    useEffect(() => {
        if(!started) return
        if(finished) return

        const endTime = Date.now() + minutes * 60 * 1000

        const timer = setInterval(() => {
            const remaining = Math.max(
                0,
                Math.ceil((endTime - Date.now()) / 1000 )
            )

            setTimeLeft(remaining)

            if(remaining === 0) {
                setFinished(true)
                clearInterval(timer)
            }
        }, 1000)

        return () => {
            setFinished(true)
            clearInterval(timer)
        }
    }, [started, finished])

    

    return timeLeft
}
import { useEffect, useState, useRef } from 'react'

const useScrollTrigger = (onTrigger = () => { }, onReset = () => { }) => {
    const scrollRef = useRef(null)
    const [isTriggered, setIsTriggered] = useState(false)

    // Trigger on global wheel down
    useEffect(() => {
        const handleWheel = (e) => {
            if (!isTriggered && e.deltaY > 0) {
                onTrigger()
                setIsTriggered(true)
            }
        }

        window.addEventListener('wheel', handleWheel, { passive: true })
        return () => window.removeEventListener('wheel', handleWheel)
    }, [isTriggered, onTrigger])

    // Reset when scroll hits the top
    useEffect(() => {
        const content = scrollRef.current
        if (!content) return

        const handleScroll = () => {
            if (content.scrollTop <= 0.5) {
                onReset()
                setIsTriggered(false)
            }
        }

        content.addEventListener('scroll', handleScroll)
        return () => content.removeEventListener('scroll', handleScroll)
    }, [onReset])

    useEffect(() => {
        if (isTriggered && scrollRef.current) {
            requestAnimationFrame(() => {
                scrollRef.current.scrollTop = 1
            })
        }
    }, [isTriggered])

    return { scrollRef, isTriggered }
}

export default useScrollTrigger

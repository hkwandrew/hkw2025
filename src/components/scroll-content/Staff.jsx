import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const Staff = ({ ...props }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [showOverlay, setShowOverlay] = useState(false)
    const formattedClass = props.staffName.toLowerCase().replace(/\s+/g, "-")

    // Handle delayed overlay logic
    useEffect(() => {
        let timeout
        if (isHovered) {
            timeout = setTimeout(() => setShowOverlay(true), 100) // delay before overlay shows
        } else {
            setShowOverlay(false)
            clearTimeout(timeout)
        }
        return () => clearTimeout(timeout)
    }, [isHovered])

    return (
        <div className={`staff-container staff ${formattedClass}`}>
            <div className='image-wrapper'>
                <motion.div
                    className="image"
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    style={{ backgroundImage: `url(./staff/${props.image})`, }}
                >
                    <AnimatePresence>
                        {showOverlay && (
                            <motion.div
                                className="overlay"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.p
                                    className="bio body-large"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    style={{
                                        color: props.color,
                                        backgroundColor: props.backgroundColor,
                                    }}
                                >
                                    {props.bio}
                                </motion.p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            <motion.div
                className="caption"
                animate={{
                    opacity: isHovered ? 0 : 1,
                    pointerEvents: isHovered ? 'none' : 'auto'
                }}
                transition={{ duration: 0.15 }}
                style={{
                    // width: props.captionWidth,
                    // height: props.captionHeight
                }}

            >
                <div
                    className="clip-path"
                    style={{
                        backgroundColor: props.backgroundColor,
                        width: props.captionWidth,
                        height: props.captionHeight,
                    }}
                >
                    <div
                        className="info"
                        style={{ color: props.color, }}
                    >
                        <p className="staff-name">{props.staffName}</p>
                        <p className="role">{props.role}</p>
                    </div>
                </div>
            </motion.div>
        </div >
    )
}

export default Staff

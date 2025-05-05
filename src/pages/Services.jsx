import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import colors from '../utilities/colors'

const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })


    const services = [
        { id: 0, title: 'Strategy', description: 'Crafting clever plans is our jam! We bring a deep business acumen to the table to map out strategies that turn your goals into reality.', clipPath: 'polygon(10% 13%, 67% 5%, 96% 75%, 0 92%)', backgroundColor: colors.hkw.yellow[300], width: '385px', height: '339.493px', },
        { id: 1, title: 'Branding', description: 'Identity crafted with depth and distinction, ensuring brands are not just seen, but remembered.', clipPath: 'polygon(0 17%, 84% 0, 100% 83%, 18% 100%)', backgroundColor: colors.hkw.orange[300], width: '340px', height: '385px', textColor: colors.hkw.neutral.white, },
        { id: 2, title: 'Graphic Design', description: 'Visual storytelling that captures attention, communicates clearly, and strengthens brand impact across every medium.', clipPath: 'polygon(100% 2%, 86% 52%, 98% 100%, 0 100%, 0 0)', backgroundColor: colors.hkw.blue[300], width: '385px', height: '339.493px', textColor: colors.hkw.neutral.white, },
        { id: 3, title: 'Web Design', description: 'Layouts built to engage, guide, and convert — merging aesthetic appeal with purposeful functionality.', clipPath: 'polygon(50% 15%, 100% 4%, 98% 100%, 0 100%, 2% 0)', backgroundColor: colors.hkw.yellow[300], width: '385px', height: '339.493px', },
        { id: 4, title: 'UI/UX', description: 'Human-centered experiences where every click, swipe, and scroll feels seamless, natural, and intuitive.', clipPath: 'polygon(10% 5%, 90% 20%, 100% 90%, 0% 100%)', backgroundColor: colors.hkw.red[300], width: '385px', height: '339.493px', textColor: colors.hkw.neutral.white, },
        { id: 5, title: 'Website Development', description: 'Robust, scalable code structures that power high-performing websites with precision, speed, and reliability.', clipPath: 'polygon(100% 83%, 16% 100%, 0 17%, 88% 7%)', backgroundColor: colors.hkw.blue[500], width: '385px', height: '339.493px', },
        { id: 6, title: 'Digital Marketing', description: 'Data-led campaigns that cut through the noise, build brand loyalty, and drive sustainable growth.', clipPath: 'polygon(100% 2%, 86% 52%, 98% 100%, 0 100%, 0 0)', backgroundColor: colors.hkw.orange[300], width: '385px', height: '339.493px', textColor: colors.hkw.neutral.white, },
        { id: 7, title: 'Creative Direction', description: 'Vision refined into reality — steering concepts into cohesive, powerful creative executions that command attention.', clipPath: 'polygon(10% 15%, 100% 18%, 110% 100%, 0 93%)', backgroundColor: colors.hkw.blue[300], width: '385px', height: '339.493px', textColor: colors.hkw.neutral.white, },
    ]

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const $mousePosition = 0

    return (
        <div className='services'>
            <h1 className='services-heading'>Our Services</h1>
            <motion.ul
                className='services-list'
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { transition: { staggerChildren: 0.1 } },
                    visible: { transition: { staggerChildren: 0.1 } },
                }}
            >
                {services.map((service, index) => {
                    const isDimmed = hoveredIndex !== null && hoveredIndex !== index

                    return (
                        <motion.li
                            key={index}
                            className='service'
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onMouseMove={handleMouseMove}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            animate={{ color: isDimmed ? 'rgb(191, 234, 247, .1)' : '#ade3e5' }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <span>{service.title}</span>
                        </motion.li>
                    )
                })}
            </motion.ul>
            ``
            <AnimatePresence>
                {hoveredIndex !== null && (

                    <motion.div
                        key="description"
                        className={`service-description service-description-${services[hoveredIndex].id}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            transform: services[hoveredIndex].transform,
                            backgroundColor: services[hoveredIndex].backgroundColor,
                            width: services[hoveredIndex].width,
                            height: services[hoveredIndex].height,
                            top: mousePosition.y - 75 - (hoveredIndex * 25),
                            left: mousePosition.x + 50,
                            clipPath: services[hoveredIndex].clipPath,
                            color: services[hoveredIndex].textColor,
                            padding: '94px 109px 107.49px 62px',
                        }}
                    >
                        <span className='service-description-text'>
                            {services[hoveredIndex].description}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Services

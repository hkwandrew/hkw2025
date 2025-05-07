import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'


const SidebarContent = ({ onClose, activeItem }) => {
    if (!activeItem) return null

    const { title, description, tags, content } = activeItem
    const [activeTab, setActiveTab] = useState(tags[0] || null)

    // Find the current tab's content
    const currentContentGroup = content.find(group => group.tag === activeTab)

    const sidebarRef = useRef(null)

    const { scrollYProgress } = useScroll({
        container: sidebarRef,
        layoutEffect: true,
        offset: ["start start", "end end"],
    })

    const clipPath = useTransform(
        scrollYProgress,
        [0, .1],
        [
            'polygon(0 10%, 95% 2%, 100% 50%, 100% 100%, 8% 100%)',
            'polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%)',
        ]
    )

    const paddingTop = useTransform(
        scrollYProgress,
        [0, .1],
        ['130.99px', '215.99px']
    )

    const paddingInline = useTransform(
        scrollYProgress,
        [0, .1],
        ['98px 98px', '98px 98px']
    )

    return (
        <motion.aside
            ref={sidebarRef}
            className="skewed-sidebar"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            style={{ clipPath }}
        >

            <motion.div className='sidebar-content' style={{ paddingTop, paddingInline }}>
                <button className='close-btn button' onClick={onClose} style={{ paddingTop }}>Close</button>
                <h2 className='sidebar-title'>{activeItem.title || ''} </h2>

                {activeItem.description && (
                    <p className='body-medium'>{activeItem.description}</p>
                )}

                <hr className='sidebar-divider' />

                {tags.length > 0 && (
                    <nav className='services-list'>
                        <p>Services:</p>
                        <ul className='tab-navigation'>
                            {tags.map(tag => (
                                <li
                                    key={tag}
                                    className={`tab-navigation-item ${tag === activeTab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tag)}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}

                <div className='sidebar-sections'>
                    {currentContentGroup?.blocks.map((block, index) => {
                        if (block.type === 'sidebarText') {
                            return <p key={index}>{block.content}</p>
                        } else if (block.type === 'sidebarImage') {
                            return <img key={index} src={`/hkw2025/images/${block.src}`} alt="" width={block.width} height={block.height} className={block.className} />
                        } else if (block.type === 'html') {
                            return <div key={index} dangerouslySetInnerHTML={{ __html: block.content }} />
                        } else if (block.type === 'video') {
                            return (
                                <video key={index} controls style={{ width: '100%' }}>
                                    <source src={block.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )
                        }
                        return null
                    })}
                </div>
            </motion.div>
        </motion.aside >
    )
}

export default SidebarContent

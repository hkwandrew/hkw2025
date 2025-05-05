import { motion } from 'motion/react'
import { workItems } from '../../utilities/workData'
import Logo from './Logo'
import useScrollTrigger from '../../utilities/useScrollTrigger'

const ContentBlock = ({ id, content: { type, ...props }, onClick }) => {
    return (
        <div className={`content-block ${id}`} onClick={onClick} style={{ cursor: 'pointer' }}>
            {type === 'scrollText' ? (
                <p>{props.content}</p>
            ) : type === 'scrollImage' ? (
                <Logo title={props.title} src={props.src} alt="" />
            ) : type === 'scrollVideo' ? (
                <video controls>
                    <source src={props.src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img src={props.src} alt="" />
            )}

        </div>
    )
}

const WorkScroll = ({ setWorkScrollContentVisible, setActiveItem }) => {

    const { scrollRef: workScrollRef, isTriggered: isWorkVisible } = useScrollTrigger(
        () => setWorkScrollContentVisible(true),
        () => {
            setWorkScrollContentVisible(false)
            setActiveItem(null)
        }
    )

    return (

        <div className="work-scroll-page">
            <motion.section
                className='scroll-content'
                ref={workScrollRef}
                tabIndex={-1}
                initial={{ y: '100%' }}
                animate={{ y: isWorkVisible ? 0 : '100%' }}
                transition={{ type: 'tween', duration: 0.4 }}
            >
                <div className='scroll-wrapper' style={{ marginTop: '15vh' }}>
                    {workItems.map((item, index) => (
                        <div key={index} className='scroll-item-wrapper'>
                            {item.content.map((block, index) => (
                                <ContentBlock
                                    key={index}
                                    id={item.id}
                                    content={block}
                                    onClick={() => setActiveItem(item)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </motion.section>

        </div >

    )
}

export default WorkScroll

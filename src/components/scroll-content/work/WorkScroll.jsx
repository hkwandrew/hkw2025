import { motion } from 'motion/react'
// import Logo from './Logo'
import useScrollTrigger from '../../../utilities/useScrollTrigger'
import { workItems, workScrollContent } from '../../../utilities/workData'

const ContentBlock = ({ item, onClick }) => {

    const { id, type, content } = item

    return (
        <div className={`content-block ${id}`} onClick={onClick} style={{ cursor: 'pointer' }}>
            {type === 'scrollText' ? (
                <p>{content}</p>
            ) : type === 'scrollImage' ? (
                <img src={`/hkw2025/images/${content}`} alt="" />
            ) : type === 'scrollVideo' ? (
                <video controls>
                    <source src={content} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img src={content} alt="" />
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
                    <div className='scroll-item-wrapper'>
                        {workScrollContent.map((item) => (
                            <ContentBlock
                                key={item.id}
                                item={item}
                                onClick={() => {
                                    const fullItem = workItems.find(w => w.id === item.workItemId)
                                    if (fullItem) setActiveItem(fullItem)
                                }}
                            />
                        ))}
                    </div>
                </div>
            </motion.section>

        </div >

    )
}

export default WorkScroll

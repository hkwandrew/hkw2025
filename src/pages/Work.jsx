import { motion } from 'motion/react'
import Letter from '../components/Letter'
import letterProps from '../utilities/letterProps'
import WorkScroll from '../components/scroll-content/work/WorkScroll'
import { useOutletContext } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import WorkItemSidebar from '../components/scroll-content/work/WorkItemSidebar'


const workWords = {
    H: [
        'Happy', 'Human-Centric', 'Hopeful', 'Handcrafted', 'Hands-on',
        'Helpful', 'Holistic', 'Heartfelt', 'High-Impact', 'Honest'
    ],
    K: [
        'Knowledgeable', 'Keen', 'Knavish', 'Kindhearted', 'Knitted',
        'Kinesthetic', 'Kudos-Worthy', 'Kickoff-Ready', 'Kempt', 'Kaleidoscopic'
    ],
    W: [
        'Worthwhile', 'Witty', 'Wise', 'Well-Rounded', 'Worthwhile',
        'Welcoming', 'Weighty', 'Wholesome', 'Workable', 'Wondrous'
    ],
}

const Work = ({ isWorkScrollContentVisible, isWorkVisible }) => {
    const [activeItem, setActiveItem] = useState(null)
    const { setWorkScrollContentVisible } = useOutletContext()
    
    useEffect(() => {
        if (activeItem) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [activeItem])

    return (
        <div className='work'>
            <motion.section className='hkw'>
                <Letter {...letterProps.H} words={workWords.H} />
                <Letter {...letterProps.K} words={workWords.K} />
                <Letter {...letterProps.W} words={workWords.W} />
            </motion.section>
            <section className='hero text-white'>
                <h1 className='about-title text-blue-400'>Happy, knowledgable work</h1>
                <article>
                    <p className='text-blue-400'>
                        Great design isn’t just about looking good—it’s about working hard. At HKW, we believe the best digital experiences and marketing campaigns come from caring enough to ask a few extra questions and go the extra mile to create true connection. Whether we’re helping a nonprofit amplify its mission or shaping a brand’s unique voice, we approach every project with curiosity, strategic thinking, and a touch of playfulness.
                    </p>
                    <p className='text-blue-400'>
                        We lean into the quirky, the unexpected, and the deeply meaningful—because authenticity resonates. Our portfolio reflects a mix of storytelling, design, development, real world things, and digital strategy. Take a look at what we’ve been working on, and if something sparks an idea, we’d love to hear from you.
                    </p>
                </article>
            </section>
            <WorkScroll setWorkScrollContentVisible={setWorkScrollContentVisible} setActiveItem={setActiveItem} />
            <WorkItemSidebar activeItem={activeItem} onClose={() => setActiveItem(null)} />
        </div>
    )
}

export default Work

import Letter from './Letter'
import letterProps from '../utilities/letterProps'

const aboutWords = {
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

const Hkw = () => {

    return (
        <section className='hkw'>
            <Letter {...letterProps.H} words={aboutWords.H} />
            <Letter {...letterProps.K} words={aboutWords.K} />
            <Letter {...letterProps.W} words={aboutWords.W} />
        </section>
    )
}

export default Hkw

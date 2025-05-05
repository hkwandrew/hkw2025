import { motion } from 'motion/react'
import aboutData from '../../utilities/aboutData'
import useScrollTrigger from '../../utilities/useScrollTrigger'
import Staff from './Staff'
import Trivia from './Trivia'
import Testimonial from './Testimonial'

const ContentBlock = ({ type, ...props }) => {
    switch (type) {
        case 'staff':
            return <Staff staffName={props.name} role={props.role} bio={props.bio} image={props.image} containerWidth={props.containerWidth} containerHeight={props.containerHeight} imageWidth={props.imageWidth} imageHeight={props.imageHeight} clipPath={props.clipPath} transform={props.transform} transformHOver={props.transformHover} captionWidth={props.captionWidth} captionHeight={props.captionHeight} captionTransform={props.captionTransform} captionClipPath={props.captionClipPath} backgroundColor={props.backgroundColor} captionClipPathWidth={props.captionClipPathWidth} captionClipPathHeight={props.captionClipPathHeight} captionClipPathTransform={props.captionClipPathTransform} infoWidth={props.infoWidth} infoColor={props.infoColor} infoTransform={props.infoTransform} color={props.color} captionLeft={props.captionLeft} captionBottom={props.captionBottom} path={props.path} />
        case 'trivia':
            return <Trivia trivia={props.text} index={props.index} triviaWidth={props.triviaWidth} triviaHeight={props.triviaHeight} triviaLeft={props.triviaLeft} triviaTop={props.triviaTop} triviaClipPathWidth={props.triviaClipPathWidth} triviaClipPathHeight={props.triviaClipPathHeight} triviaClipPath={props.triviaClipPath} triviaClipPathTransform={props.triviaClipPathTransform} triviaBackgroundColor={props.triviaBackgroundColor} triviaTextWidth={props.triviaTextWidth} triviaTextHeight={props.triviaTextHeight} triviaTextTransform={props.triviaTextTransform} triviaTextColor={props.triviaTextColor} triviaTextTop={props.triviaTextTop} triviaTextLeft={props.triviaTextLeft} />
        case 'testimonial':
            return <Testimonial name={props.name} role={props.role} quote={props.quote} height={props.height} width={props.width} left={props.left} top={props.top} testimonialBackgroundColor={props.testimonialBackgroundColor} testimonialWidth={props.testimonialWidth} testimonialHeight={props.testimonialHeight} testimonialTransform={props.testimonialTransform} testimonialClipPath={props.testimonialClipPath} testimonialLeft={props.testimonialLeft} testimonialTop={props.testimonialTop} attrContainerColor={props.attrContainerColor} attrContainerWidth={props.attrContainerWidth} attrContainerHeight={props.attrContainerHeight} attrContainerBottom={props.attrContainerBottom} attrContainerLeft={props.attrContainerLeft} attrWidth={props.attrWidth} attrHeight={props.attrHeight} attrClipPath={props.attrClipPath} attrBackgroundColor={props.attrBackgroundColor} attrTransform={props.attrTransform} textMargin={props.textMargin} textWidth={props.textWidth} textColor={props.textColor} textTransform={props.textTransform} attrTextTransform={props.attrTextTransform} textTop={props.textTop} textLeft={props.textLeft} attrTextColor={props.attrTextColor} attrTextWidth={props.attrTextWidth} attrBottom={props.attrBottom} attrRight={props.attrRight} testimonialTextLeft={props.testimonialTextLeft} testimonialTextTop={props.testimonialTextTop} />
        case 'cta-1':
            return (
                <div className='cta-1-wrapper'>

                    <div className='cta-1'>
                        <span className='cta-text'>Want to work with us?</span>
                    </div>
                    <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.94043" y="0.94043" width="80" height="80" rx="40" fill="white" />
                        <path d="M55.7004 35.2532C54.016 34.9436 52.056 36.3675 51.0386 38.9196C50.3703 40.5953 50.5608 42.7081 49.2836 43.2386C48.7958 43.4416 48.4463 43.1989 48.1966 42.7886C47.8661 42.0747 47.6219 40.9075 47.5141 39.2193L47.2873 24.9136C47.2795 23.8182 46.4756 22.9482 45.0406 22.9451C43.6057 22.9421 42.7444 23.8511 42.7512 24.9468L42.9992 37.9077C43.106 40.7576 41.9797 40.5046 41.4866 37.3658L41.4863 37.3647L38.8056 22.7399C38.6015 21.6087 37.5252 20.9018 36.2452 21.1567C34.9652 21.4115 34.2329 22.3912 34.4345 23.5219L37.2353 38.4876C37.7918 41.511 36.4539 40.6416 35.7049 38.5341L31.129 26.9793C30.6838 25.893 29.4395 25.3662 28.2197 25.8725C27.0001 26.38 26.4845 27.6122 26.9297 28.6986L31.1942 39.2388C32.8468 43.257 32.2684 44.6174 29.7768 40.4209L26.4292 34.1961C25.8873 33.1981 24.6779 32.7879 23.4463 33.4742C22.2147 34.1606 21.8996 35.3588 22.4404 36.3571L25.6528 42.1921C27.4465 46.5171 27.8709 48.2916 28.6115 51.3876C29.352 54.4838 33.0696 63.7322 43.9612 61.127C54.8529 58.5217 54.4464 46.922 54.3827 46.197C54.3827 46.197 54.1279 44.5321 54.9019 42.732C56.0025 40.1727 56.8266 38.5916 57.3287 37.6436C57.5835 37.164 57.5677 35.596 55.7004 35.2532Z" fill="#D25411" />
                        <path d="M48.9248 43.313C48.5617 43.2576 48.1989 42.9782 47.9854 42.2328C45.967 43.0175 43.2844 44.2772 41.6209 46.9211C39.4609 50.3515 39.6928 53.4457 40.1926 55.4332C40.5957 57.0356 41.6546 57.5871 41.342 55.1443C40.9457 52.0592 41.7107 45.561 48.9248 43.313Z" fill="white" />
                    </svg>
                </div>
            )
        case 'cta-2':
            return (
                <div className='cta-2-wrapper'>
                    <div className='cta-2'>
                        <span className='cta-text'>Say hello!</span>
                    </div>
                    <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="36.8989" width="80" height="80" rx="40" transform="rotate(-27.4669 0 36.8989)" fill="white" />
                        <path d="M64.4136 42.0866C62.7763 42.5889 61.6939 44.7562 61.9684 47.4899C62.1483 49.285 63.2918 51.0718 62.4033 52.1316C62.0641 52.5367 61.642 52.4825 61.2313 52.2336C60.6087 51.7526 59.8537 50.8297 58.9794 49.3814L52.1798 36.793C51.6676 35.8246 50.5531 35.4235 49.2785 36.0827C48.0039 36.7418 47.659 37.9456 48.1704 38.9147L54.3684 50.3001C55.7777 52.7795 54.6617 53.0745 52.7764 50.517L52.7757 50.5161L43.6516 38.7764C42.9488 37.8668 41.6678 37.736 40.6496 38.5526C39.6314 39.3691 39.4336 40.5761 40.134 41.4863L49.5218 53.4732C51.41 55.8991 49.822 55.7448 48.1854 54.2204L38.7958 46.0786C37.8997 45.3201 36.5527 45.4266 35.7039 46.4385C34.8558 47.4512 34.9667 48.7824 35.8628 49.5409L44.5081 56.9261C47.8277 59.7292 47.942 61.203 43.7957 58.6288L37.9543 54.6497C37.0132 54.0141 35.7509 54.2079 34.9747 55.3849C34.1986 56.562 34.4717 57.7705 35.4119 58.4068L40.9535 62.1024C44.5399 65.1126 45.7349 66.4913 47.82 68.8967C49.9051 71.3023 57.4694 77.7935 65.9316 70.4584C74.3939 63.1231 68.6831 53.0185 68.2921 52.4045C68.2921 52.4045 67.2981 51.0449 67.1546 49.0907C66.9507 46.3123 66.9527 44.5293 66.9609 43.4566C66.9658 42.9135 66.2285 41.5295 64.4136 42.0866Z" fill="#5A121B" />
                        <path d="M62.1193 52.3631C61.7716 52.4814 61.3208 52.4008 60.7875 51.8379C59.3586 53.4651 57.5594 55.8201 57.3028 58.9333C56.9686 62.9732 58.6015 65.6118 59.9617 67.1447C61.0584 68.3805 62.2523 68.3814 60.8483 66.3582C59.0737 63.8036 56.7552 57.6851 62.1193 52.3631Z" fill="white" />
                    </svg>
                </div>
            )
        default:
            return null
    }
}

const AboutScroll = ({ setScrollContentVisible }) => {
    const { scrollRef, isTriggered: isAboutVisible } = useScrollTrigger(
        () => setScrollContentVisible(true),
        () => setScrollContentVisible(false)
    )

    return (
        <motion.section
            className='scroll-content'
            ref={scrollRef}
            tabIndex={-1}
            initial={{ y: '100%' }}
            animate={{ y: isAboutVisible ? 0 : '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
        >
            <div
                className='scroll-wrapper'
                style={{ marginTop: '15vh' }}
            >
                {aboutData.map((item, index) => (
                    <div key={index} className='scroll-item-wrapper'>
                        <ContentBlock {...item} />
                    </div>
                ))}
            </div>
        </motion.section>
    )
}

export default AboutScroll

import ContactForm from '../components/ContactForm'
import { useOutletContext } from 'react-router-dom'
import AboutScroll from '../components/scroll-content/AboutScroll'
import Hkw from '../components/Hkw'

const About = () => {
    const { formRef, isInView, setAboutScrollContentVisible, isFormVisible, handleFormClose } = useOutletContext()

    return (
        <>
            <div className='about' onClick={() => handleFormClose()}>

                <Hkw />
                <section className='hero text-white'>
                    <h1 className='h5 about-title'>Happy, knowledgeable work</h1>
                    <p className='body-medium'>
                        We are a digital design and marketing studio based in Spokane,
                        Washington. We build unique online experiences and engaging
                        campaigns for non-profits and fun brands.
                    </p>
                </section>

                {!isFormVisible &&
                    <AboutScroll setScrollContentVisible={setAboutScrollContentVisible} />
                }

            </div>
            {!isInView && <ContactForm ref={formRef} />}
        </>
    )
}

export default About

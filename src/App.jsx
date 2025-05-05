import { useRef, useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavMenu from './components/NavMenu'
import Marmot from './components/Marmot'
import { useInView, motion, useMotionValue } from 'motion/react'

const App = () => {
  const location = useLocation()
  const formRef = useRef(null)
  const scrollRef = useRef(null)
  const cursorRef = useRef(null)
  const hkwRef = useRef(null)
  const [isAboutScrollContentVisible, setAboutScrollContentVisible] = useState(false)
  const [isWorkScrollContentVisible, setWorkScrollContentVisible] = useState(false)
  const [isFormVisible, setFormVisible] = useState(false)
  const isInView = useInView(scrollRef, { initial: false })
  const [isCursorActive, setCursorActive] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 40)
      cursorY.set(e.clientY - 40)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])


  const handleClick = () => {
    if (formRef.current) {
      formRef.current.classList.toggle('active')
      setFormVisible(!isFormVisible)
    }
  }

  const handleFormClose = () => {
    if (formRef.current) {
      formRef.current.classList.remove('active')
      setFormVisible(false)
    }
  }

  return (
    <div className="app">
      <motion.div
        ref={cursorRef}
        className="cursor"
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
        animate={{
          scale: isCursorActive ? 1 : 0,
        }}
        transition={{
          duration: 0.15,
          ease: "easeOut"
        }}
      ></motion.div>
      <main className={location.pathname === '/' ? 'red' : 'blue'}>
        <NavMenu />
        <Outlet context={{ formRef, isInView, scrollRef, hkwRef, isAboutScrollContentVisible, setAboutScrollContentVisible, isWorkScrollContentVisible, setWorkScrollContentVisible, isFormVisible, handleFormClose }} />
        <Marmot handleClick={handleClick} cursorRef={cursorRef} isInView={isInView} setCursorActive={setCursorActive} />
      </main>
    </div>
  )
}

export default App

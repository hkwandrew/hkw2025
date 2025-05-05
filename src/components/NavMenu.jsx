import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
    { label: 'About', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/work' }
]

const NavMenu = () => {
    const location = useLocation()
    const [selected, setSelected] = useState(0)

    const pillRef = useRef(null)
    const itemsRef = useRef([])
    const menuRef = useRef(null)

    useEffect(() => {
        const currentIndex = navItems.findIndex((item) => item.path === location.pathname)
        setSelected(currentIndex !== -1 ? currentIndex : 0)
    }, [location.pathname])

    useEffect(() => {
        const setPill = () => {
            if (!pillRef.current || !itemsRef.current[selected] || !menuRef.current) return

            const item = itemsRef.current[selected]
            const menuRect = menuRef.current.getBoundingClientRect()
            const { width, height, left } = item.getBoundingClientRect()

            pillRef.current.style.width = `${width}px`
            pillRef.current.style.height = `${height}px`
            pillRef.current.style.left = `${left - menuRect.left}px`
        }

        setPill()
        window.addEventListener('resize', setPill)

        return () => {
            window.removeEventListener('resize', setPill)
        }
    }, [selected])

    return (
        <nav id="menu">
            <div className='content'>
                <div id='pill' ref={pillRef}></div>
                <ul id='items' ref={menuRef}>
                    {navItems.map(({ label, path }, index) => (
                        <li
                            key={label}
                            ref={(el) => (itemsRef.current[index] = el)}
                            className={selected === index ? 'item active' : 'item'}
                            onClick={() => setSelected(index)}
                        >
                            <Link to={path} className='button-large'>{label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavMenu

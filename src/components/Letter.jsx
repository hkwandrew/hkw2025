import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Letter = ({ words, svgProps, pathProps, textX, textY }) => {
    const [word, setWord] = useState('')
    const [index, setIndex] = useState(0)
    const location = useLocation()

    const handleMouseEnter = () => {
        setWord(words[index])
        setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }

    const handleMouseLeave = () => {
        setWord('')
    }

    return (
        <div
            className={`hover-letter-container letter-${svgProps.id}`}
            onMouseEnter={location.pathname === '/' ? handleMouseEnter : undefined}
            onMouseLeave={location.pathname === '/' ? handleMouseLeave : undefined}
        >
            <svg
                {...svgProps}
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    {...pathProps}
                    fill={location.pathname === '/' ? '#982426' : '#013565'}
                />
                <text
                    className='letter'
                    x={textX}
                    y={textY}
                    fill='white'
                    fontSize='22'
                    fontWeight='400'
                    fontFamily='AcuminVF'
                    textAnchor='middle'
                    alignmentBaseline='middle'
                >
                    {word}
                </text>
            </svg>
        </div>
    )
}

export default Letter

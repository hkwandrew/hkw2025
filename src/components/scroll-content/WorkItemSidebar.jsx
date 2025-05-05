import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WorkItemSidebar = ({ item, onClose }) => {
    const sidebarRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        // Run only when the component is actually visible
        if (!item) return

        const sidebar = sidebarRef.current
        const content = contentRef.current

        if (!sidebar || !content) {
            console.warn('[ERROR] Sidebar or content ref is null')
            return
        }

        // Log DOM presence
        console.log('[DEBUG] Sidebar and content are ready')

        // Force render completion
        requestAnimationFrame(() => {
            const ctx = gsap.context(() => {
                gsap.set(sidebar, { rotate: -10, yPercent: -5, transformOrigin: 'top center' })

                gsap.to(sidebar, {
                    rotate: 0,
                    yPercent: 0,
                    ease: 'sine.out',
                    scrollTrigger: {
                        id: 'sidebar-rotate-trigger',
                        trigger: sidebar,
                        scroller: sidebar,
                        start: 'top top',
                        end: '+=300',
                        scrub: true,
                    },
                })
                gsap.to(content, {
                    rotate: -4,
                    yPercent: 0,
                    ease: 'sine.out',
                    scrollTrigger: {
                        id: 'sidebar-rotate-trigger',
                        trigger: content,
                        scroller: sidebar,
                        start: 'top top',
                        end: '+=300',
                        scrub: true,
                    },
                })
            }, sidebar)

            return () => ctx.revert()
        })
    }, [item]) // Only run when item is present

    return (
        <div>
            {item && (
                <aside
                    ref={sidebarRef}
                    className="offcanvas"
                    style={{
                        height: '100vh',
                        width: '58.82%',
                        overflowY: 'auto',
                        position: 'fixed',
                        right: 0,
                        transformOrigin: 'top center',
                        zIndex: 1000,
                    }}
                >
                    <button className="close-btn" onClick={onClose}>Close</button>

                    <div
                        className="sidebar-content"
                        ref={contentRef}
                        style={{ minHeight: '200vh', padding: '4rem' }}
                    >
                        <h2 className="sidebar-title">{item.title || ''}</h2>

                        {Array.isArray(item.tags) && item.tags.length > 0 && (
                            <div className='services-list'>
                                <h3 className='button-small'>Services:</h3>
                                <ul className="tags">
                                    {item.tags.map((tag) => (
                                        <li key={tag} className="tag button-small">{tag}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {item.description && (
                            <p className="body-medium">{item.description}</p>
                        )}

                        {Array.isArray(item.content) &&
                            item.content.map((block, i) => {
                                switch (block.type) {
                                    case 'sidebarText':
                                        return (
                                            <p key={`${item.id}-text-${i}`}>{block.content}</p>
                                        )
                                    case 'divider':
                                        return (
                                            <hr
                                                key={`${item.id}-divider-${i}`}
                                                style={{
                                                    width: '100%',
                                                    height: '1px',
                                                    backgroundColor: '#0460A1',
                                                    margin: '48px 0',
                                                }}
                                            />
                                        )
                                    case 'video':
                                        return (
                                            <video
                                                key={`${item.id}-video-${i}`}
                                                controls
                                                style={{ width: '100%' }}
                                            >
                                                <source src={block.src} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        )
                                    case 'sidebarImage':
                                    default:
                                        return (
                                            <img
                                                key={`${item.id}-image-${i}`}
                                                src={block.src?.startsWith('/')
                                                    ? block.src
                                                    : `/images/${block.src}`}
                                                alt=""
                                                style={{
                                                    width: '100%',
                                                    marginBottom: '1.5rem',
                                                    position: 'relative',
                                                }}
                                            />
                                        )
                                }
                            })}
                    </div>
                </aside>
            )}
        </div>
    )
}

export default WorkItemSidebar

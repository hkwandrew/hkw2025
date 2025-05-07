const workItems = [
    {
        id: 'lumierework',
        title: 'LumiereWork',
        tags: ['Logo Design', 'Website Design', 'Development'],
        thumb: 'lumiereworks-buttons.png',
        description: 'We partnered with LumiereWork to illuminate their bold vision for leadership development through immersive, human-centered experiences. From brand identity to a clean, modern website and compelling collateral, we helped them explore the vibrant design and confident voice that brought their story to life. The result is a brand that feels both expansive and grounded—ready to guide individuals and organizations toward deeper growth and transformation.',
        content: [
            {
                tag: 'Logo Design',
                blocks: [
                    {
                        type: 'sidebarImage',
                        src: 'horizontal-logo.png',
                        width: '305px',
                        height: '253px',
                        className: 'horizontal-logo'
                    },
                    {
                        type: 'sidebarImage',
                        src: 'lumierework-logo.png',
                        width: '305px',
                        height: '253px',
                        className: 'lumierework-logo'
                    },
                    {
                        type: 'sidebarImage',
                        src: 'lumierework-pin-button-mockup.png',
                        width: '670px',
                        height: '391px',
                        className: 'lumierework-pin-button-mockup'
                    },
                    {
                        type: 'sidebarText',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.',
                    },
                    {
                        type: 'sidebarImage',
                        src: 'lumierework-screen.png',
                        width: '305px',
                        heuight: '366px',
                        className: 'lumierework-screen'
                    },
                    {
                        type: 'html',
                        content: '<div className="placeholder"></div>',
                    }



                ]

            },
        ],
    },
]

const workScrollContent = [
    {
        id: 'lumierework-scroll-1',
        workItemId: 'lumierework',
        type: 'scrollImage',
        content: 'lumierework.png',
    },
]


export { workItems, workScrollContent }

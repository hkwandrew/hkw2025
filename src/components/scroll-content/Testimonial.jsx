const Testimonial = ({ ...props }) => {
    return (
        <>
            <div className={`testimonial-container ${props.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div
                    className='testimonial'
                    style={{ backgroundColor: props.testimonialBackgroundColor, }}
                >
                    <div
                        className='text'
                        style={{ color: props.textColor, }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="41" viewBox="0 0 46 41" fill="none">
                            <path d="M0 41V20.1378C0 7.19552 5.81609 0.531212 17.4483 0.144874L19.8997 0V9.99647H17.5925C13.4587 10.3828 11.3919 13.4735 11.3919 19.2685V21.5866H19.8997V41H0ZM46 9.99647H43.6928C39.559 10.3828 37.4922 13.4735 37.4922 19.2685V21.5866H46V41H26.2445V20.1378C26.2445 7.29211 32.0125 0.627795 43.5486 0.144874L46 0V9.99647Z" fill={props.textColor} />
                        </svg><br />
                        {props.quote}
                    </div>
                </div>
                <div
                    className='attr-container'
                    style={{
                        color: props.attrContainerColor,
                        // width: props.attrContainerWidth,
                        // height: props.attrContainerHeight,
                        // bottom: props.attrContainerBottom,
                        // left: props.attrContainerLeft,
                    }}
                >
                    <div
                        className='attr'
                        style={{
                            // bottom: props.attrBottom,
                            backgroundColor: props.attrBackgroundColor,
                            // transform: props.attrTransform,
                            // right: props.attrRight,
                        }}

                    >
                        <div
                            className='text'
                            style={{
                                // transform: props.attrTextTransform,
                                // top: props.textTop,
                                // left: props.textLeft,
                                color: props.attrTextColor,
                                width: props.attrTextWidth,
                            }}
                        >
                            <p className='name'>{props.name}</p>
                            <p className='role'>{props.role}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Testimonial

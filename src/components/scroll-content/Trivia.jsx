const Trivia = ({ ...props }) => {
    return (
        <>
            <div
                className={`trivia-container trivia-${props.index}`}
                style={{
                    backgroundColor: props.triviaBackgroundColor,
                }}
            >
                <p
                    className='text'
                    style={{ color: props.triviaTextColor }}
                >
                    {props.trivia}
                </p>
            </div>


        </>
    )
}

export default Trivia

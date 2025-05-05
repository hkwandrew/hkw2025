const Logo = ({ title, src }) => {
    return (
        <div className="logo">
            {src ? <img src={src} alt={title} style={{ pointerEvents: 'none' }} /> : <div>{title}</div>}
        </div>
    )
}
export default Logo

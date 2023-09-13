const CircleRandom = ({left, bottom, duration}) => {
    return (
        <>
            <div 
                className="circle -z-50"
                style={{ 
                    position: 'fixed',
                    left:`${left}px`,
                    bottom:`${bottom}px`,
                    animationDuration: `${duration}s`
                 }}
            ></div>
        </>
    )
}

export default CircleRandom
const CircleRandom = ({left, bottom, duration, onAnimationIteration}) => {
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
                 onAnimationIteration={onAnimationIteration}
            ></div>
        </>
    )
}

export default CircleRandom
const { useState, useEffect } = React

export const MouseMonitor = () => {

    const [position, setPosition] = useState ({x:0, y:0})
    const [isOn, setIsOn] = useState(true)

    useEffect(()=> {
        const updatePos = (event) => {
            setPosition({x:event.clientX ,y:event.clientY})
        }
        
        if (isOn) {
            document.addEventListener('mousemove', updatePos)
        }

        return () => {
            document.removeEventListener('mousemove', updatePos)
        }

    }, [isOn])

    function onClick()
    {
        setIsOn(prev => !prev)
    }
    

    return (
        <div className = "mouse-monitor">
            <h5>Mouse Position</h5>
            <div className = "mouse-monitor-control">
                <button onClick = {onClick}>{isOn ? "Pause" : "Resume"}</button>
            </div>
            {isOn && 
            <div className = "mouse-position">
                {position.x}, {position.y}
            </div>}
            
        </div>
            
    )
}
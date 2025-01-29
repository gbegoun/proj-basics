const { useState, useEffect, useRef } = React

export function Countdown({startFrom, toTime, onDone, low})
{
    const [count, setCount] = useState(toTime ? Math.ceil((toTime - Date.now()) / 1000) : startFrom);


    const intervalIdRef = useRef()
    
    useEffect(() => {

        intervalIdRef.current = setInterval(() => {
            setCount(count => count - 1)
        }, 1000);
        
        return() => {
            clearInterval(intervalIdRef.current)
        }
    },[])

    useEffect(() => {
        if(count === 0)
        {
            clearInterval(intervalIdRef.current)
            onDone()
        }
    }, [count])


    function formatTime(seconds) {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
        const secs = String(seconds % 60).padStart(2, "0");
    
        return `${hours}:${minutes}:${secs}`;
    }

    const timeArray = formatTime(count).split(":")
    return (
        <div className="countdown">
            {toTime ? (
                <React.Fragment>
                    <span className="hours">{timeArray[0]}:</span>
                    <span className="minutes">{timeArray[1]}:</span>
                    <span className={`seconds ${timeArray[2] <= low ? "red" : ""}`}>
                        {timeArray[2]}
                    </span>
                </React.Fragment>
            ) : (
                <span className={`seconds ${count <= low ? "red" : ""}`}>{count}</span>
            )}
        </div>
    )
}
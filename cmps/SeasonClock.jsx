const { useState, useEffect, useRef } = React

export function SeasonClock({datetime}){

    const [isDark, setIsDark] = useState(false);
    const [count, setCount] = useState(0)

    
    const intervalIdRef = useRef()
    
    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            setCount(count => count + 1)
        }, 1000);
        
        return() => {
            clearInterval(intervalIdRef.current)
        }
    },[])
    
    function getMonthName(monthIndex) {
        const months = [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            return months[monthIndex] || "Invalid month"
        }
        
        function getDayName(dayIndex) {
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            
            return days[dayIndex] || "Invalid day"
        }
        
        function getSeason(monthIndex) {
            const seasons = ["Winter", "Spring", "Summer", "Fall"]
            return seasons[Math.floor(monthIndex / 3)] || "Invalid season"
        }
        
        function onClick() {
            setIsDark(isDark => !isDark)
        }
        
        
        const monthName = getMonthName(datetime.getMonth())
        const seasonName = getSeason(datetime.getMonth())
        const seasonImage = `/assets/img/season-imgs/${seasonName}.png`
        const dayName = getDayName(datetime.getDay())
        const darkClass = isDark ? 'dark' : ''    

    return (
        <section className={`season-clock ${darkClass}`} onClick={onClick}>
            <span className="month">{`${monthName} (${seasonName})`}</span>
            <img className="season" src={seasonImage} />
            <span className="day">{dayName}</span>
            <span className="timer">{count}</span>
        </section>
    )
}

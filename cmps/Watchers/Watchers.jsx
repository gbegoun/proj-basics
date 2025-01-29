const { useState, useEffect, useRef } = React
import { WatcherList } from "./WatcherList.jsx"

const Watchers = () => {

    const [watchers,setWatchers] = useState([])
    const [selectedWatcher, setSelectedWatcher] = useState(null);

    useEffect(() => {
        setWatchers([
            { id: 1, name: "Alice", movies: ["Inception", "Avatar"] },
            { id: 2, name: "Bob", movies: ["The Matrix", "Interstellar"] },
        ])
    }, [])
    return (
        <div>
            <h1>Watchers</h1>
            <WatcherList watchers={watchers} onSelect={setSelectedWatcher} />
        </div>
    )
}
export default Watchers

const { useState, useEffect, useRef } = React
import { WatcherList } from "./WatcherList.jsx"
import { WatcherModal } from "./WatcherModal.jsx";
import { watcherService } from "../../services/watcher.service.js"

export const Watchers = () => {

    const [watchers,setWatchers] = useState([])
    const [selectedWatcher, setSelectedWatcher] = useState(null);
    
    useEffect(() => {
        watcherService.query()
        .then(setWatchers)
        .catch(err=> {
            console.log(err)
        })
        console.log(watchers)
    }, [])

    function onAddWatcher()
    {
        const name = prompt("Watcher Name");
        const movies = []
        let movieName

        while((movieName = prompt("Add Movie. [leave blank to skip]"))!=="" && movieName!==null) {          
            movies.push(movieName)
        }

        watcherService.save({name:name, movies:movies})
            .then(newWatcher => {
                setWatchers(prevWatchers => [...prevWatchers, newWatcher])
            })
            .catch(err => {
                console.log(err)
            })
    }

    function onRemove(watcherToRemove)
    {
        watcherService.remove(watcherToRemove.id)
            .then(()=>{
                setWatchers(watchers => watchers.filter(watcher=>watcher.id!==watcherToRemove.id)) //why not take back from storage?
            })
            .catch (err => {
                console.log(err)
            })
    }

    return (
        <React.Fragment>
        <div className = "watcher-index">
            <h1>Watcher App</h1>
            <button className = "button-add-watcher" onClick={onAddWatcher}>Add Watcher</button>
            <WatcherList watchers={watchers} onSelect={setSelectedWatcher} onRemove = {onRemove} />
        </div>

        {selectedWatcher && 
            <WatcherModal watcher={ selectedWatcher } onModalClose={()=>setSelectedWatcher(null)}/>
        }
        </React.Fragment>
    )
}


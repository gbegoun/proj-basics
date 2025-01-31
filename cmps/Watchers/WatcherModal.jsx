export const WatcherModal = ({ watcher, onModalClose }) => {

    console.log(watcher)

    return(
        <div className = "watcher-modal">  
            <h3>{watcher.name}</h3>
            <ul>
                {watcher.movies.map((movie,idx) => (
                    <li key={idx}>{movie}</li>
                ))}
            </ul>
            <button className = "button-close" onClick={onModalClose}>X</button>
        </div>
    )
}
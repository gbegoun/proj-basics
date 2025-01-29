
export function WatcherItem({watcher})
{
    return (
        <div>
            <p>{watcher.name}</p>
            <div className="watcher-controls">
                <button onClick={() => watcher.onRemove(watcher.id)}>x</button>
                <button onClick={() => watcher.onSelect(watcher.id)}>Select</button>
            </div>
        </div>
    )
}
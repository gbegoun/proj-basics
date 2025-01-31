
export function WatcherPreview({watcher , onSelect, onRemove})
{
    return (
        <div className = "watcher-preview">
            <p>{watcher.name}</p>
            <div className="watcher-preview-controls">
                <button onClick={() => onSelect(watcher)}>Select</button>
                <button onClick={() => onRemove(watcher)}>X</button>
            </div>
        </div>
    )
}
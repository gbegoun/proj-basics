const { useState, useEffect, useRef } = React
import { WatcherPreview } from "./WatcherPreview.jsx"

export function WatcherList({watchers, onSelect, onRemove})
{
    return (
        <div className="watcher-list">
            {watchers.map(watcher => (
                <WatcherPreview key={watcher.id} watcher={watcher} onSelect={()=>onSelect(watcher)} onRemove={()=>onRemove(watcher)}/>
            ))}
        </div>
    )
}
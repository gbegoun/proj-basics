const { useState, useEffect, useRef } = React
import {WatcherItem} from "./WatcherItem.jsx"

export function WatcherList({watchers, onSelect })
{
    return (
        <div>
            {watchers.map(watcher => (
            <WatcherItem key={watcher.id} watcher={watcher} onSelect={()=>onSelect(watcher)}/>
            ))}
        </div>
    )
}
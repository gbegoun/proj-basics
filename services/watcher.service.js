import { storageService } from "./async-storage.service.js"
import { utilService } from "./util.service.js"


export const watcherService = {
    query,
    get,
    remove,
    save,
}

const STORAGE_KEY = 'watchers'

_createWatchers()

function query()
{
    return storageService.query(STORAGE_KEY)
}

function get(watcherId)
{
    return storageService.get(STORAGE_KEY,watcherId)
}

function remove(watcherId)
{
    return storageService.remove(STORAGE_KEY,watcherId)
}

function save(watcher) {
    if (watcher.id) {
        return storageService.put(STORAGE_KEY, watcher)
    } else {
        return storageService.post(STORAGE_KEY, watcher)
    }
}

function _createWatchers() {
    console.log("Creating watchers")
    let watchers = utilService.loadFromStorage(STORAGE_KEY)
    if (!watchers || !watchers.length) {
        watchers = [
        
            { id: 1, name: "Alice", movies: ["Inception", "Avatar"] },
            { id: 2, name: "Bob", movies: ["The Matrix", "Interstellar"] },
            { id: 3, name: "Carl", movies: ["Up", "Down"] },
        ]
        utilService.saveToStorage(STORAGE_KEY, watchers)
    }
}
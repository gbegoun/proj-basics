
import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./cmps/Home.jsx"
import { AnimalTable } from "./cmps/AnimalTable.jsx"
import { SeasonClock } from "./cmps/SeasonClock.jsx"
import { Countdown } from "./cmps/Countdown.jsx"
import { Watchers } from "./cmps/Watchers/WatcherIndex.jsx";
import { MouseMonitor } from "./cmps/MouseMonitor.jsx"

const animalInfos = [
    {type: 'Malayan Tiger', count: 787},
    {type: 'Mountain Gorilla', count: 212},
    {type: 'Fin Whale', count: 28},
    ]

export function RootCmp() {
    return (
        <section className="app main-layout">
            <AppHeader />
            <main>
                {/* <AnimalTable data={animalInfos}/> */}
                {/* {<SeasonClock datetime={new Date()} />} */}
                {/* {<Countdown toTime={Date.now()+10*1000} low={5} onDone={() => console.log('done')} />} */}
                {/* {<Countdown startFrom={6} low={3} onDone={() => console.log('done')} />} */}
                {<Watchers />}
                {<MouseMonitor/>}
            </main>
        </section>
    )
}
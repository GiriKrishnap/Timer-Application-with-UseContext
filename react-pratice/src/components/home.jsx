import { useContext } from "react"
import { CounterContext } from '../context/counterContext'

function Home() {

    const { count, startCounter, stopCounter, restartCounter } = useContext(CounterContext);

    return (
        <>
            <div className="flex flex-row min-h-screen w-screen justify-center place-items-center">
                <div className="bg-gray-600 text-center rounded-lg overflow-hidden">

                    <div className="w-full bg-orange-600 p-5 ">
                        <div className="flex text-center">
                            <p className="font-mono text-gray-300 tracking-widest" style={{ transform: `rotate(${count * 20}deg)` }}>c</p>
                            <p className="font-mono text-gray-300 tracking-widest" style={{ transform: `rotate(${count * 20}deg)` }}>o</p>
                            <p className="font-mono text-gray-300 tracking-widest" style={{ transform: `rotate(${count * 20}deg)` }}>u</p>
                            <p className="font-mono text-gray-300 tracking-widest" style={{ transform: `rotate(${count * 20}deg)` }}>n</p>
                            <p className="font-mono text-gray-300 tracking-widest" style={{ transform: `rotate(${count * 20}deg)` }}>t</p>
                        </div>
                        <p className="font-bold text-7xl drop-shadow-lg">{count}</p>
                    </div>

                    <div className="w-full p-6 flex gap-2 ">
                        <button className="p-3 hover:bg-green-500" onClick={startCounter}>S T A R T</button>
                        <button className="p-3 hover:bg-red-500" onClick={stopCounter}>S T O P</button>
                        <button className="p-3 hover:bg-orange-600" onClick={restartCounter}>R E S T A R T</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home
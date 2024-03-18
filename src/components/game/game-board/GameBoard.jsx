import { useState } from 'react'
import GameBoardButton from './GameBoardButton'
import cross from './img/cross-icon.svg'
import zero from './img/zero-icon.svg'
import { UserStepIcon } from '@/shared/components'

const GameBoard = () => {
    const [currentProgress, setCurrentProgress] = useState(cross)
    const [nextProgress, setNextProgress] = useState(zero)

    const sizeBoard = 19
    const cells = new Array(sizeBoard * sizeBoard).fill(null)

    return (
        <div>
            <div className="mt-6 p-3 flex justify-between items-center shadow-lg rounded-md">
                <div>
                    <h4 className="text-teal-900 text-xl flex items-center gap-2">
                        Current progress: <UserStepIcon icon={currentProgress} width={9} style="shadow-none" />
                    </h4>
                    <h4 className="text-gray-400 text-2xs flex items-center gap-2">
                        Next: <UserStepIcon icon={nextProgress} width={9} style="shadow-none" />
                    </h4>
                </div>
                <div className="flex gap-2">
                    <GameBoardButton text="Draw" className="bg-teal-600 text-white hover:bg-teal-500 transition-all" />
                    <GameBoardButton
                        text="Give up"
                        className="bg-white text-teal-600 border rounded-md border-teal-600 hover:text-white hover:bg-teal-600 transition-all"
                    />
                </div>
            </div>
            <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px mt-4">
                {cells.map((__, index) => (
                    <button key={index} className="border border-stale-200 -ml-px -mt-px flex items-center justify-center">
                        <UserStepIcon icon={currentProgress} style="shadow-none" width={20} />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default GameBoard

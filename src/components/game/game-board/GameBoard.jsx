import { useState } from 'react'
import GameBoardButton from './GameBoardButton'
import cross from './img/cross-icon.svg'
import zero from './img/zero-icon.svg'
import { UserStepIcon } from '@/shared/components'

const GameBoard = () => {
    const [currentProgress, setCurrentProgress] = useState(cross)
    const [nextProgress, setNextProgress] = useState(zero)

    return (
        <div>
            <div className="mt-3 flex justify-between items-center">
                <div>
                    <h4 className="text-teal-900 text-xl flex items-center gap-2">
                        Current progress: <UserStepIcon icon={currentProgress} style="shadow-none" />
                    </h4>
                    <h4 className="text-gray-400 text-2xs flex items-center gap-2">
                        Next: <UserStepIcon icon={nextProgress} style="shadow-none" />
                    </h4>
                </div>
                <div className="flex gap-2">
                    <GameBoardButton text="Draw" style="bg-teal-600 text-white hover:bg-teal-500 transition-all" />
                    <GameBoardButton
                        text="Give up"
                        style="bg-white text-teal-600 border rounded-md border-teal-600 hover:text-white hover:bg-teal-600 transition-all"
                    />
                </div>
            </div>
        </div>
    )
}

export default GameBoard

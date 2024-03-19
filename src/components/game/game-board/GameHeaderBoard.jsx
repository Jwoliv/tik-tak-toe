import { UserStepIcon } from '../game-header/icons'
import GameBoardButton from './GameBoardButton'

const GameHeaderBoard = ({ currentProgress, nextProgress }) => {
    return (
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
    )
}

export default GameHeaderBoard

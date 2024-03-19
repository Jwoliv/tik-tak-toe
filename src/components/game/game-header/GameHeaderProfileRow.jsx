import { GameHeaderTimerBlock } from '..'
import GameHeaderProfileItem from './GameHeaderProfileItem'

const GameHeaderProfileRow = ({ players }) => {
    const player1 = players[0]
    const player2 = players[1]
    return (
        <div className="flex justify-between mt-4 p-2 rounded-md bg-gray-100">
            <GameHeaderProfileItem player={player1} />
            <GameHeaderTimerBlock />
            <GameHeaderProfileItem player={player2} />
        </div>
    )
}

export default GameHeaderProfileRow

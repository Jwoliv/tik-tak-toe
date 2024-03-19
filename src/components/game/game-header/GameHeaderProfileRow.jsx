import { GameHeaderTimerBlock } from '..'
import GameHeaderProfileItem from './GameHeaderProfileItem'

const GameHeaderProfileRow = ({ players, icon1, icon2 }) => {
    const player1 = players[0]
    const player2 = players[1]
    return (
        <div className="flex justify-between mt-4 p-2 rounded-md bg-gray-100">
            <GameHeaderProfileItem icon={icon1} username={player1.username} rating={player1.ratings} />
            <GameHeaderTimerBlock />
            <GameHeaderProfileItem icon={icon2} username={player2.username} rating={player2.ratings} />
        </div>
    )
}

export default GameHeaderProfileRow

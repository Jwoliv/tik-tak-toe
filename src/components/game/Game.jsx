import { useState } from 'react'
import { GameHeader, GameBoard } from '.'

const Game = () => {
    const [playersCount, setPlayersCount] = useState(3)

    return (
        <div className="pt-6 mx-auto w-max">
            <GameHeader playersCount={playersCount} />
            <GameBoard playersCount={playersCount} />
        </div>
    )
}

export default Game

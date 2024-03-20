import { useState } from 'react'
import { GameHeader, GameBoard } from '.'
import { GAME_SYMBOLS } from './game-board/constants'

const Game = () => {
    const [playersCount, setPlayersCount] = useState(4)
    const [gameState, setGameState] = useState(() => ({
        cells: new Array(19 * 19).fill(null),
        currentProgress: GAME_SYMBOLS.CROSS,
    }))

    return (
        <div className="pt-6 mx-auto w-max">
            <GameHeader gameState={gameState} playersCount={playersCount} />
            <GameBoard gameState={gameState} setGameState={setGameState} playersCount={playersCount} />
        </div>
    )
}

export default Game

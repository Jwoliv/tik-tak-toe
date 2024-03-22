import { useState } from 'react'
import { GameHeader, GameBoard } from '.'
import { GAME_SYMBOLS } from './game-board/constants'
import WinnerService from '@/service/WinnerService'

const Game = () => {
    const [playersCount, setPlayersCount] = useState(2)
    const [gameState, setGameState] = useState(() => ({
        cells: new Array(19 * 19).fill(null),
        currentProgress: GAME_SYMBOLS.CROSS,
    }))

    const computeWinner = WinnerService(gameState)
    const winnerIndexes = computeWinner(gameState)
    const isWinnerState = winnerIndexes.every((item) => item == -1)

    return (
        <div className="pt-6 mx-auto w-max">
            <GameHeader gameState={gameState} playersCount={playersCount} isWinnerState={isWinnerState} />
            <GameBoard
                gameState={gameState}
                setGameState={setGameState}
                playersCount={playersCount}
                winnerIndexes={winnerIndexes}
                isWinnerState={isWinnerState}
            />
        </div>
    )
}

export default Game

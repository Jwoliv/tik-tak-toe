import { useState } from 'react'
import { GameHeader, GameBoard } from '.'
import { GAME_SYMBOLS, ICONS_PROGRESS } from './game-board/constants'
import WinnerService from '@/service/WinnerService'

const Game = () => {
    const [playersCount, setPlayersCount] = useState(2)
    const [gameState, setGameState] = useState(() => ({
        cells: new Array(19 * 19).fill(null),
        currentProgress: GAME_SYMBOLS.CROSS,
    }))

    const players = [
        {
            username: 'Username1',
            rating: 1200,
            symbolName: GAME_SYMBOLS.CROSS,
            symbol: ICONS_PROGRESS['cross'],
        },
        {
            username: 'Username2',
            rating: 1300,
            symbolName: GAME_SYMBOLS.ZERO,
            symbol: ICONS_PROGRESS['zero'],
        },
        {
            username: 'Username2151235233',
            rating: 1400,
            symbolName: GAME_SYMBOLS.TRINGLE,
            symbol: ICONS_PROGRESS['tringle'],
        },
        {
            username: 'Username4',
            rating: 1500,
            symbolName: GAME_SYMBOLS.SQUARE,
            symbol: ICONS_PROGRESS['square'],
        },
    ]

    const computeWinner = WinnerService(gameState)
    const winnerIndexes = computeWinner(gameState)
    const isNotWinnerState = winnerIndexes.every((item) => item == -1)

    return (
        <div className="pt-6 mx-auto w-max">
            <GameHeader gameState={gameState} playersCount={playersCount} isNotWinnerState={isNotWinnerState} players={players} />
            <GameBoard
                gameState={gameState}
                setGameState={setGameState}
                playersCount={playersCount}
                winnerIndexes={winnerIndexes}
                isNotWinnerState={isNotWinnerState}
                players={players}
            />
        </div>
    )
}

export default Game

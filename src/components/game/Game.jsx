import { useEffect, useState } from 'react'
import { GameHeader, GameBoard } from '.'
import { GAME_SYMBOLS, ICONS_PROGRESS, MOVE_ORDER } from './game-board/constants'
import WinnerService from '@/service/WinnerService'
import { UIModal } from '@/uikit'

const Game = () => {
    const [playersCount, setPlayersCount] = useState(4)
    const [gameState, setGameState] = useState(() => ({
        cells: new Array(19 * 19).fill(null),
        currentProgress: GAME_SYMBOLS.CROSS,
        playersTimeOver: [],
    }))
    const ORDER = MOVE_ORDER.slice(0, playersCount)

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

    function getNextProgress(currentProgress) {
        let nextIndex = ORDER.indexOf(currentProgress) + 1
        return ORDER[nextIndex] ?? ORDER[0]
    }

    const hadlePlayerTimeOver = (symbol) => {
        setGameState((lgs) => {
            return {
                ...lgs,
                playersTimeOver: [...lgs.playersTimeOver, symbol],
                currentProgress: getNextProgress(lgs.currentProgress),
            }
        })
    }
    const computeWinner = WinnerService(gameState)
    const winnerIndexes = computeWinner(gameState)
    const [isNotWinnerState, setIsNotWinnerState] = useState(winnerIndexes.every((item) => item == -1))

    useEffect(() => {
        if (gameState.playersTimeOver.length === players.length - 1) {
            setIsNotWinnerState(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameState.playersTimeOver])

    return (
        <div className="pt-6 mx-auto w-max">
            <GameHeader
                gameState={gameState}
                playersCount={playersCount}
                isNotWinnerState={isNotWinnerState}
                players={players}
                onTimeOver={hadlePlayerTimeOver}
            />
            <UIModal width="md" />
            <GameBoard
                gameState={gameState}
                setGameState={setGameState}
                playersCount={playersCount}
                winnerIndexes={winnerIndexes}
                isNotWinnerState={isNotWinnerState || gameState.playersTimeOver.length !== players.length - 1}
                players={players}
            />
        </div>
    )
}

export default Game

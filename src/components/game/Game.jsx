import { useEffect, useState } from 'react'
import { GameHeader, GameBoard } from '.'
import { GAME_SYMBOLS, ICONS_PROGRESS, MOVE_ORDER } from './game-board/constants'
import WinnerService from '@/service/WinnerService'
import { UIModal } from '@/uikit'
import GameBoardButton from './game-board/GameBoardButton'

const Game = () => {
    const [playersCount, setPlayersCount] = useState(2)
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
        let nextIndex = ORDER.filter.indexOf(currentProgress) + 1
        return ORDER[nextIndex] ?? ORDER[0]
    }

    function hadlePlayerTimeOver(symbol) {
        setGameState((lgs) => {
            return {
                ...lgs,
                playersTimeOver: [...lgs.playersTimeOver, symbol],
                currentProgress: getNextProgress(lgs.currentProgress),
            }
        })
    }

    function onCloseModalWinnerWindow() {
        console.log('AAAA')
    }

    const computeWinner = WinnerService(gameState)
    const winnerIndexes = computeWinner(gameState)
    let isNotWinnerState = winnerIndexes.every((item) => item == -1)

    useEffect(() => {
        if (gameState.playersTimeOver.length === playersCount - 1) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            isNotWinnerState = false
        }
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
            <UIModal width="md" isOpen={!isNotWinnerState} onClose={onCloseModalWinnerWindow}>
                <UIModal.Header>Game over</UIModal.Header>
                <UIModal.Body>
                    <div>
                        <h4 className="text-sm">
                            Winner: <span className="text-teal-600">Username1</span>
                        </h4>
                    </div>
                </UIModal.Body>
                <UIModal.Footer>
                    <GameBoardButton text="Come back" className="bg-teal-600 text-white hover:bg-teal-500 transition-all" />
                    <GameBoardButton
                        text="Play again"
                        className="bg-white text-teal-600 border-teal-600 border-2 hover:bg-teal-600 transition-all hover:text-white"
                    />
                </UIModal.Footer>
            </UIModal>
            <GameBoard
                gameState={gameState}
                setGameState={setGameState}
                playersCount={playersCount}
                winnerIndexes={winnerIndexes}
                isNotWinnerState={isNotWinnerState || gameState.playersTimeOver.length !== playersCount - 1}
                players={players}
            />
        </div>
    )
}

export default Game

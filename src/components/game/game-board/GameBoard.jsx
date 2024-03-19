import { useState } from 'react'
import GameHeaderBoard from './GameHeaderBoard'
import GameBoardSymbol from './GameBoardSymbol'
import { GAME_SYMBOLS, ICONS_PROGRESS, MOVE_ORDER } from './constants'

const GameBoard = ({ playersCount }) => {
    const ORDER = MOVE_ORDER.slice(0, playersCount)

    const getNextProgress = (currentProgress) => {
        let nextIndex = ORDER.indexOf(currentProgress) + 1
        return ORDER[nextIndex] ?? ORDER[0]
    }

    const [gameState, setGameState] = useState(() => ({
        cells: new Array(19 * 19).fill(null),
        currentProgress: GAME_SYMBOLS.CROSS,
    }))

    const nextProgress = getNextProgress(gameState.currentProgress)

    const clickOnCell = (index) => {
        setGameState((lastGameState) => ({
            ...lastGameState,
            cells: updateCells(lastGameState, index),
            currentProgress: updateCurrentProgress(lastGameState, index),
        }))
    }

    const updateCells = (lastGameState, index) => {
        return lastGameState.cells[index] === null
            ? lastGameState.cells.map((cell, idx) => (idx === index ? ICONS_PROGRESS[lastGameState.currentProgress] : cell))
            : lastGameState.cells
    }

    const updateCurrentProgress = (lastGameState, index) => {
        return lastGameState.cells[index] === null ? getNextProgress(lastGameState.currentProgress) : lastGameState.currentProgress
    }

    return (
        <div>
            <GameHeaderBoard currentProgress={ICONS_PROGRESS[gameState.currentProgress]} nextProgress={ICONS_PROGRESS[nextProgress]} />
            <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px mt-4">
                {gameState.cells.map((symbol, index) => (
                    <GameBoardSymbol
                        className="shadow-none"
                        width={20}
                        key={index}
                        icon={symbol}
                        onClick={() => clickOnCell(index)}
                    ></GameBoardSymbol>
                ))}
            </div>
        </div>
    )
}

export default GameBoard

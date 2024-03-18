import { useState } from 'react'
import GameHeaderBoard from './GameHeaderBoard'
import GameBoardSymbol from './GameBoardSymbol'
import { GAME_SYMBOLS, MOVE_ORDER, ICONS_PROGRESS } from './constants'
import emptyField from './img/empty-field.svg'

const getNextProgress = (currentProgress) => {
    let nextIndex = MOVE_ORDER.indexOf(currentProgress) + 1
    return MOVE_ORDER[nextIndex] ?? MOVE_ORDER[0]
}

const GameBoard = () => {
    const [gameState, setGameState] = useState(() => ({
        cells: new Array(19 * 19).fill(null),
        currentProgress: GAME_SYMBOLS.CROSS,
    }))

    const nextProgress = getNextProgress(gameState.currentProgress)

    const clickOnCell = (index) => {
        setGameState((lastGameState) => ({
            ...lastGameState,
            cells: getCells(lastGameState, index),
            currentProgress: getNextProgress(lastGameState.currentProgress),
        }))
    }

    const getCells = (lastGameState, index) => {
        return lastGameState.cells[index] === null
            ? lastGameState.cells.map((cell, idx) => (idx === index ? ICONS_PROGRESS[lastGameState.currentProgress] : cell))
            : lastGameState.cells
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

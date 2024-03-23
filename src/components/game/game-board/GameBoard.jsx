import GameHeaderBoard from './GameHeaderBoard'
import GameBoardSymbol from './GameBoardSymbol'
import GameWinnerBlock from './GameWinnerBlock'
import { ICONS_PROGRESS, MOVE_ORDER } from './constants'
import { useState } from 'react'

const GameBoard = ({ playersCount, gameState, setGameState, winnerIndexes, isNotWinnerState, players }) => {
    let ORDER = MOVE_ORDER.slice(0, playersCount).filter((symbol) => !gameState.playersTimeOver.includes(symbol))
    const nextProgress = ICONS_PROGRESS[getNextProgress(gameState.currentProgress)]
    const [prevProgress, setPrevProgress] = useState(ICONS_PROGRESS[0])

    function clickOnCell(index) {
        setPrevProgress(gameState.currentProgress)
        setGameState((lastGameState) => ({
            ...lastGameState,
            cells: updateCells(lastGameState, index),
            currentProgress: updateCurrentProgress(lastGameState, index),
        }))
    }

    function updateCells(lastGameState, index) {
        return lastGameState.cells[index] === null
            ? lastGameState.cells.map((cell, idx) => (idx === index ? ICONS_PROGRESS[lastGameState.currentProgress] : cell))
            : lastGameState.cells
    }

    function updateCurrentProgress(lastGameState, index) {
        return lastGameState.cells[index] === null ? getNextProgress(lastGameState.currentProgress) : lastGameState.currentProgress
    }

    function getNextProgress(currentProgress) {
        ORDER = MOVE_ORDER.slice(0, playersCount).filter((symbol) => !gameState.playersTimeOver.includes(symbol))
        let nextIndex = ORDER.indexOf(currentProgress) + 1
        return ORDER[nextIndex] ?? ORDER[0]
    }

    function determiteWinner() {
        if (gameState.playersTimeOver.length !== players.length - 1) {
            return players.filter((player) => player.symbolName === gameState.currentProgress)[0]
        }
        if (typeof players !== 'undefined') {
            return players.filter((x) => x.symbolName === prevProgress)[0]
        }
        return {}
    }

    const winnerUser = determiteWinner()

    return (
        <div>
            <GameHeaderBoard currentProgress={ICONS_PROGRESS[gameState.currentProgress]} nextProgress={nextProgress} />
            <GameWinnerBlock isNotWinnerState={isNotWinnerState} prevProgress={prevProgress} winnerUser={winnerUser} />
            <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px mt-4">
                {gameState.cells.map((symbol, index) => (
                    <GameBoardSymbol
                        className={`shadow-none ${winnerIndexes && winnerIndexes.includes(index) ? 'winner-cell' : ''}`}
                        width={20}
                        key={index}
                        icon={symbol}
                        onClick={() => clickOnCell(index)}
                        isWinnerPosition={winnerIndexes.includes(index)}
                        disabled={!isNotWinnerState}
                    ></GameBoardSymbol>
                ))}
            </div>
        </div>
    )
}

export default GameBoard

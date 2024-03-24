import { useState } from 'react'
import { MOVE_ORDER, ICONS_PROGRESS } from '@/components/game/game-board/constants'

const useGameBoard = (gameState, playersCount, players, setGameState) => {
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

    function determiteWinner() {
        if (gameState.playersTimeOver.length !== players.length - 1) {
            return players.filter((player) => player.symbolName === gameState.currentProgress)[0]
        }
        if (typeof players !== 'undefined') {
            return players.filter((x) => x.symbolName === prevProgress)[0]
        }
        return {}
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

    return {
        prevProgress,
        nextProgress,
        clickOnCell,
        determiteWinner,
    }
}

export default useGameBoard

import GameHeaderBoard from './GameHeaderBoard'
import GameBoardSymbol from './GameBoardSymbol'
import { ICONS_PROGRESS, MOVE_ORDER } from './constants'
import WinnerService from '../../../service/WinnerService'

const GameBoard = ({ playersCount, gameState, setGameState }) => {
    const ORDER = MOVE_ORDER.slice(0, playersCount)
    const computeWinner = WinnerService(gameState)
    const nextProgress = ICONS_PROGRESS[getNextProgress(gameState.currentProgress)]
    const winnerIndexes = computeWinner(gameState)

    function clickOnCell(index) {
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
        let nextIndex = ORDER.indexOf(currentProgress) + 1
        return ORDER[nextIndex] ?? ORDER[0]
    }

    console.log(computeWinner())

    return (
        <div>
            <GameHeaderBoard currentProgress={ICONS_PROGRESS[gameState.currentProgress]} nextProgress={nextProgress} />
            <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px mt-4">
                {gameState.cells.map((symbol, index) => (
                    <GameBoardSymbol
                        className={`shadow-none ${winnerIndexes && winnerIndexes.includes(index) ? 'winner-cell' : ''}`}
                        width={20}
                        key={index}
                        icon={symbol}
                        onClick={() => clickOnCell(index)}
                        isWinnerPosition={winnerIndexes.includes(index)}
                    ></GameBoardSymbol>
                ))}
            </div>
        </div>
    )
}

export default GameBoard

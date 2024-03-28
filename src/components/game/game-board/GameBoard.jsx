import GameHeaderBoard from './GameHeaderBoard'
import GameBoardSymbol from './GameBoardSymbol'
import GameWinnerBlock from './GameWinnerBlock'
import { ICONS_PROGRESS } from './constants'
import useGameBoard from '@/hook/useGameBoard'

const GameBoard = ({ playersCount, gameState, setGameState, winnerIndexes, isNotWinnerState, players }) => {
    const { prevProgress, nextProgress, clickOnCell, determineWinner } = useGameBoard(gameState, playersCount, players, setGameState)
    const winnerUser = determineWinner()

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

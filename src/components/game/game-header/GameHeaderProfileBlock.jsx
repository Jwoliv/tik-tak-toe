import { ICONS_PROGRESS } from '../game-board/constants.js'
import { GameHeaderProfileItem } from '..'
import { GAME_SYMBOLS } from '../game-board/constants.js'

const GameHeaderProfileBlock = ({ playersCount, currentProgress, isNotWinnerState, players }) => {
    return (
        <div className="grid grid-cols-2">
            {players.slice(0, playersCount).map((player, index) => (
                <div key={index}>
                    <GameHeaderProfileItem
                        isTimerNow={player.symbolName == currentProgress && isNotWinnerState}
                        player={player}
                        index={index}
                        isRight={index % 2 === 0}
                    />
                </div>
            ))}
        </div>
    )
}

export default GameHeaderProfileBlock

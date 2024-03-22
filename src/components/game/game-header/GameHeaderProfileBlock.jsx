import { ICONS_PROGRESS } from '../game-board/constants.js'
import { GameHeaderProfileItem } from '..'
import { GAME_SYMBOLS } from '../game-board/constants.js'

const GameHeaderProfileBlock = ({ playersCount, currentProgress, isWinnerState }) => {
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

    return (
        <div className="grid grid-cols-2">
            {players.slice(0, playersCount).map((player, index) => (
                <div key={index}>
                    <GameHeaderProfileItem
                        isTimerNow={player.symbolName == currentProgress && isWinnerState}
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

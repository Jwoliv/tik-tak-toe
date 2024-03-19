import { ICONS_PROGRESS } from '../game-board/constants'
import { GameHeaderProfileItem } from '..'

const GameHeaderProfileBlock = ({ playersCount }) => {
    const players = [
        {
            username: 'Username1',
            rating: 1200,
            symbol: ICONS_PROGRESS['cross'],
        },
        {
            username: 'Username2',
            rating: 1300,
            symbol: ICONS_PROGRESS['zero'],
        },
        {
            username: 'Username2151235233',
            rating: 1400,
            symbol: ICONS_PROGRESS['tringle'],
        },
        {
            username: 'Username4',
            rating: 1500,
            symbol: ICONS_PROGRESS['square'],
        },
    ]

    return (
        <div className="grid grid-cols-2">
            {players.slice(0, playersCount).map((player, index) => (
                <div key={index}>
                    <GameHeaderProfileItem player={player} index={index} isRight={index % 2 === 0} />
                </div>
            ))}
        </div>
    )
}

export default GameHeaderProfileBlock

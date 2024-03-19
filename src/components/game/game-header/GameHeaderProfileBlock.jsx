import { ICONS_PROGRESS } from '../game-board/constants'
import { GameHeaderProfileItem } from '..'

const GameHeaderProfileBlock = () => {
    const players = [
        {
            username: 'Username1',
            rating: 1200,
            symbol: ICONS_PROGRESS['cross'],
        },
        {
            username: 'Username2',
            rating: 1200,
            symbol: ICONS_PROGRESS['tringle'],
        },
        {
            username: 'Username2151235233',
            rating: 1200,
            symbol: ICONS_PROGRESS['square'],
        },
        {
            username: 'Username4',
            rating: 1200,
            symbol: ICONS_PROGRESS['zero'],
        },
    ]

    return (
        <div className="grid grid-cols-2">
            {players.map((player, index) => (
                <div key={index}>
                    <GameHeaderProfileItem player={player} index={index} isRight={index % 2 === 0} />
                </div>
            ))}
        </div>
    )
}

export default GameHeaderProfileBlock

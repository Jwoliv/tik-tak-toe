import { GameHeaderTimerBlock, GameHeaderProfileItem } from '..'
import GameHeaderProfileRow from './GameHeaderProfileRow'
import { ICONS_PROGRESS } from '../game-board/constants'

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
        <div>
            <GameHeaderProfileRow players={players.slice(0, 2)} />
            <GameHeaderProfileRow players={players.slice(2)} />
        </div>
    )
}

export default GameHeaderProfileBlock

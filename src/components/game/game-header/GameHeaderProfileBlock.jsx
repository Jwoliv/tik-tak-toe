import { GameHeaderTimerBlock, GameHeaderProfileItem } from '..'
import GameHeaderProfileRow from './GameHeaderProfileRow'
import { ICONS_PROGRESS } from '../game-board/constants'
import cross from './img/cross-icon.svg'
import zero from './img/zero-icon.svg'

const GameHeaderProfileBlock = () => {
    const players = [
        {
            username: 'Username1',
            ratings: 1200,
        },
        {
            username: 'Username2',
            ratings: 1200,
        },
        {
            username: 'Username3',
            ratings: 1200,
        },
        {
            username: 'Username4',
            ratings: 1200,
        },
    ]

    return (
        <div>
            <GameHeaderProfileRow players={players.slice(0, 2)} icon1={ICONS_PROGRESS['cross']} icon2={ICONS_PROGRESS['zero']} />
            <GameHeaderProfileRow players={players.slice(2)} icon1={ICONS_PROGRESS['tringle']} icon2={ICONS_PROGRESS['square']} />
        </div>
    )
}

export default GameHeaderProfileBlock

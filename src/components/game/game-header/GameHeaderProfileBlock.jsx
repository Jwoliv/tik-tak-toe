import { GameHeaderTimerBlock, GameHeaderProfileItem } from '..'
import cross from './img/cross-icon.svg'
import zero from './img/zero-icon.svg'

const GameHeaderProfileBlock = () => {
    return (
        <div>
            <div className="flex justify-between mt-4 p-2 rounded-md bg-gray-100">
                <GameHeaderProfileItem icon={cross} />
                <GameHeaderTimerBlock />
                <GameHeaderProfileItem icon={zero} />
            </div>
            <div className="flex justify-between mt-4 p-2 rounded-md bg-gray-100">
                <GameHeaderProfileItem icon={cross} />
                <GameHeaderTimerBlock />
                <GameHeaderProfileItem icon={zero} />
            </div>
        </div>
    )
}

export default GameHeaderProfileBlock

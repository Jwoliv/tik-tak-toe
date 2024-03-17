import { ProfileBlock } from '@/shared/components'
import { GameHeaderTimerBlock } from '.'

const GameProfileBlock = () => {
    return (
        <div className="flex justify-between mt-4 p-2 border-gray border-2 rounded-md">
            <ProfileBlock />
            <GameHeaderTimerBlock />
            <ProfileBlock />
        </div>
    )
}

export default GameProfileBlock

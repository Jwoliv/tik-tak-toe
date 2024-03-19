import { ProfileBlock, UserStepIcon } from '@/shared/components'

const GameHeaderProfileItem = ({ player }) => {
    return (
        <div className="relative">
            <UserStepIcon style="absolute -left-1 -top-1" icon={player.symbol} width={9} />
            <ProfileBlock player={player} />
        </div>
    )
}

export default GameHeaderProfileItem

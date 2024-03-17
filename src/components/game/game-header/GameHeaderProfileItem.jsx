import { ProfileBlock, UserStepIcon } from '@/shared/components'

const GameHeaderProfileItem = ({ icon }) => {
    return (
        <div className="relative">
            <UserStepIcon style="absolute -left-1 -top-1" icon={icon} />
            <ProfileBlock />
        </div>
    )
}

export default GameHeaderProfileItem

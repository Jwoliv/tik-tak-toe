import { ProfileBlock } from '@/shared/components'
import { UserStepIcon } from './icons'

const GameHeaderProfileItem = ({ icon }) => {
    return (
        <div className="relative">
            <UserStepIcon icon={icon} />
            <ProfileBlock />
        </div>
    )
}

export default GameHeaderProfileItem

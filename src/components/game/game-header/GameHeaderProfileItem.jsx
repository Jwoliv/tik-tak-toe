import { ProfileBlock, UserStepIcon } from '@/shared/components'

const GameHeaderProfileItem = ({ icon, username, rating }) => {
    return (
        <div className="relative">
            <UserStepIcon style="absolute -left-1 -top-1" icon={icon} width={9} />
            <ProfileBlock username={username} rating={rating} />
        </div>
    )
}

export default GameHeaderProfileItem

import { ProfileBlock } from '@/shared/components'

const GameProfileBlock = () => {
    return (
        <div className="flex justify-between mt-4">
            <ProfileBlock showArrow={false} />
            <ProfileBlock showArrow={false} />
        </div>
    )
}

export default GameProfileBlock

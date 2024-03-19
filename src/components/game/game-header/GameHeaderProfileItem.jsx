import { ProfileBlock, UserStepIcon } from '@/shared/components'
import { GameHeaderTimerBlock } from '..'

const GameHeaderProfileItem = ({ player, isRight }) => {
    return (
        <div className="relative mt-3">
            <div className={'flex items-center justify-between '}>
                <div className={('flex relative', !isRight && 'order-1')}>
                    <UserStepIcon style={isRight ? 'absolute right-1 -top-1' : 'absolute left-1 -top-1'} icon={player.symbol} width={9} />
                    <ProfileBlock player={player} />
                </div>
                <GameHeaderTimerBlock isPositionRight={isRight} className={isRight && 'order-0'} />
            </div>
        </div>
    )
}

export default GameHeaderProfileItem

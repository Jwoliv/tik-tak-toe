import { ProfileBlock, UserStepIcon } from '@/shared/components'
import { useEffect, useState } from 'react'
import { TimerUtils } from '../../../utils'
import { ONE_MINUTE_IN_SECONDS } from '@/utils/constant'

const GameHeaderProfileItem = ({ player, isRight, isTimerNow }) => {
    const { getMinutes, getSeconds } = TimerUtils()

    const [seconds, setSeconds] = useState(ONE_MINUTE_IN_SECONDS)

    const minutesView = getMinutes(seconds)
    const secondsView = getSeconds(seconds)

    const getFullTimerView = () => `${minutesView}:${secondsView}`

    const isLowThan10Seconds = () => seconds < 10

    useEffect(() => {
        if (isTimerNow) {
            const interval = setInterval(() => {
                setSeconds((ls) => Math.max(ls - 1, 0))
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [isTimerNow])

    const getTimerColor = () => {
        if (isLowThan10Seconds()) return 'text-red-500'
        else if (isTimerNow) return 'text-green-500'
        return 'text-teal-900'
    }

    return (
        <div className="relative mt-3">
            <div className={'flex items-center justify-between '}>
                <div className={('flex relative', !isRight ? 'order-1' : '')}>
                    <UserStepIcon style={isRight ? 'absolute right-1 -top-1' : 'absolute left-1 -top-1'} icon={player.symbol} width={9} />
                    <ProfileBlock player={player} />
                </div>
                <div className="flex items-center gap-10">
                    <h3 className={`text-xl ${getTimerColor()} ${isRight ? 'pr-2' : 'pl-3'}`}>{getFullTimerView()}</h3>
                </div>
            </div>
        </div>
    )
}

export default GameHeaderProfileItem

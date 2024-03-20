import { FILLED_SYMBOL, ONE_MINUTE_IN_SECONDS, SIZE_PART_TIMER } from './constant'

const TimerUtils = () => {
    const getTimerPart = (time) => {
        return String(Math.floor(time)).padStart(SIZE_PART_TIMER, FILLED_SYMBOL)
    }

    const getMinutes = (seconds) => {
        return getTimerPart(seconds / ONE_MINUTE_IN_SECONDS)
    }

    const getSeconds = (seconds) => {
        return getTimerPart(seconds % ONE_MINUTE_IN_SECONDS)
    }

    return {
        getTimerPart,
        getMinutes,
        getSeconds,
    }
}

export default TimerUtils

const GameHeaderTimer = ({ isActive, isPositionRight }) => {
    return <h3 className={`text-xl ${isActive ? 'text-red-500' : 'text-teal-900'} ${isPositionRight ? 'pr-2' : 'pl-3'}`}>0:56</h3>
}

export default GameHeaderTimer

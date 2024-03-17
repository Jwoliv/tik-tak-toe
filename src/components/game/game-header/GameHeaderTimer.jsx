const GameHeaderTimer = ({ isActive }) => {
    return <h3 className={isActive ? 'text-red-500 text-xl' : 'text-teal-900 text-xl'}>0:56</h3>
}

export default GameHeaderTimer

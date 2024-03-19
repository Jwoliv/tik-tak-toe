import { GameHeaderTimer } from '..'

const GameHeaderTimerBlock = ({ isPositionRight }) => {
    return (
        <div className="flex items-center gap-10">
            <GameHeaderTimer isActive={false} isPositionRight={isPositionRight} />
        </div>
    )
}

export default GameHeaderTimerBlock

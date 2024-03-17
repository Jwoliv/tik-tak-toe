import { GameHeaderTimer } from '.'

const GameHeaderTimerBlock = () => {
    return (
        <div className="flex items-center gap-10">
            <GameHeaderTimer isActive={false} />
            <GameHeaderTimer isActive={true} />
        </div>
    )
}

export default GameHeaderTimerBlock

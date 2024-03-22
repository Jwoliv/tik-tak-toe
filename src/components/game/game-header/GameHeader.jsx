import Link from 'next/link'
import { ArrowToLeft, Star, PersonIcon, WatchTimeIcon } from './icons'
import GameHeaderProfileBlock from './GameHeaderProfileBlock'

const GameHeader = ({ playersCount, gameState, setGameState, isWinnerState }) => {
    return (
        <div>
            <Link href="#" class="flex gap-2 items-center text-xs">
                <ArrowToLeft />
                <span class="text-teal-600">To main page</span>
            </Link>
            <h1 className="text-4xl text-black leading-tight">Tic-tac-toe</h1>
            <div className="flex gap-2">
                <Star />
                <PersonIcon playersCount={playersCount} />
                <WatchTimeIcon />
            </div>
            <GameHeaderProfileBlock
                currentProgress={gameState.currentProgress}
                setGameState={setGameState}
                playersCount={playersCount}
                isWinnerState={isWinnerState}
            />
        </div>
    )
}

export default GameHeader

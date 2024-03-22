import Link from 'next/link'
import { ArrowToLeft, Star, PersonIcon, WatchTimeIcon } from './icons'
import GameHeaderProfileBlock from './GameHeaderProfileBlock'

const GameHeader = ({ playersCount, gameState, setGameState, isNotWinnerState, players }) => {
    return (
        <div>
            <Link href="#" className="flex gap-2 items-center text-xs">
                <ArrowToLeft />
                <span className="text-teal-600">To main page</span>
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
                isNotWinnerState={isNotWinnerState}
                players={players}
            />
        </div>
    )
}

export default GameHeader

import Image from 'next/image'
import { ICONS_PROGRESS } from './constants'

const GameWinnerBlock = ({ isNotWinnerState, prevProgress, winnerUser }) => {
    return (
        <div>
            {!isNotWinnerState && (
                <div className="mt-6 shadow-lg bg-white rounded-md p-3">
                    <h3 className="text-xm text-center font-bold mb-2">
                        Winner: <span className="text-teal-500">{winnerUser.username}</span>
                    </h3>
                    <div className="flex items-center justify-center">
                        <h3 className="text-xm font-bold mr-2">Symbol:</h3>
                        <span>
                            <Image src={ICONS_PROGRESS[prevProgress]} alt="Error" width={15} height={15} />
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GameWinnerBlock

import Image from 'next/image'
import { ProfileBlock } from '@/shared/components'

const GameHeaderProfileItem = ({ icon }) => {
    return (
        <div className="relative">
            <div className="w-4 h-4 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
                <Image className="flex items-center justify-center" src={icon} alt="Error uploading zero icon" width={9} />
            </div>
            <ProfileBlock />
        </div>
    )
}

export default GameHeaderProfileItem

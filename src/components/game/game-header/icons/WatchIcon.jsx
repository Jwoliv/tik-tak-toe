import Image from 'next/image'
import watchIcon from '../img/watch-icon.svg'

const WatchTimeIcon = () => {
    return (
        <div className="flex items-center gap-1">
            <Image src={watchIcon} alt="Error uploading" />
            <h4 className="text-gray-400 text-xs">1 minute per step</h4>
        </div>
    )
}

export default WatchTimeIcon

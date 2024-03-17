import Image from 'next/image'
import personIcon from '../img/person-icon.svg'

const PersonIcon = () => {
    return (
        <div className="flex gap-1 items-center">
            <Image src={personIcon} alt="Error uploading person icon" />
            <h5 className="text-gray-400 text-xs">2</h5>
        </div>
    )
}

export default PersonIcon

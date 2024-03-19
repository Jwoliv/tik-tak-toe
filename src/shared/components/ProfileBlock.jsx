import Image from 'next/image'
import avatar from './img/avatar.png'

const ProfileBlock = ({ player }) => {
    const sizeAvatar = 48

    const getUsername = (username) => {
        return username.length > 10 ? username.substring(0, 10) + '...' : username
    }

    return (
        <div className="flex mb-3 gap-2">
            <Image src={avatar} alt="Error uploading avatar" width={sizeAvatar} height={sizeAvatar} unoptimized />
            <div>
                <h2 className="text-teal-600 text-lg hover:text-teal-500 transition-all">{getUsername(player.username)}</h2>
                <h3 className="text-xs">Rating: {player.rating}</h3>
            </div>
        </div>
    )
}

export default ProfileBlock

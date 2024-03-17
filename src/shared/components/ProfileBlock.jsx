import Image from 'next/image'
import avatar from './img/avatar.png'

const ProfileBlock = () => {
    const sizeAvatar = 48
    return (
        <div className="flex gap-2">
            <Image src={avatar} alt="Error uploading avatar" width={sizeAvatar} height={sizeAvatar} unoptimized />
            <div>
                <h2 className="text-teal-600 text-lg hover:text-teal-500 transition-all">Username</h2>
                <h3 className="text-xs">Rating: 1230</h3>
            </div>
        </div>
    )
}

export default ProfileBlock

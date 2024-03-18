import Image from 'next/image'

const UserStepIcon = ({ icon, style, width }) => {
    return (
        <div className={`w-4 h-4 rounded-full bg-white shadow flex items-center justify-center ${style}`}>
            <Image className="flex items-center justify-center" src={icon} alt="Error uploading zero icon" width={width} />
        </div>
    )
}

export default UserStepIcon

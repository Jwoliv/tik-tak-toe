import Image from 'next/image'

const GameBoardSymbol = ({ icon, width, style, onClick }) => {
    return (
        <button onClick={onClick} className="border border-stale-200 -ml-px -mt-px flex items-center justify-center">
            <div className={`w-4 h-4 rounded-full bg-white shadow-none flex items-center justify-center ${style}`}>
                {icon && <Image className="flex items-center justify-center" src={icon} alt="Error uploading zero icon" width={width} />}
            </div>
        </button>
    )
}

export default GameBoardSymbol

import Image from 'next/image'
import logo from './img/logo.svg'
import avatar from './img/avatar.png'
import arrow from './img/arrow.svg'

const Header = () => {
    const sizeAvatar = 48

    return (
        <header className="flex justify-between h-24 items-center px-8 bg-white shadow-lg">
            <div className="flex">
                <a href="#">
                    <Image src={logo} alt="Error uploading a logo" />
                </a>
                <div className="w-px h-8 bg-slate-200 mx-6" />
                <button className="w-44 bg-teal-600 text-white rounded-lg px-5 py-2 cursor-pointer text-2xl leading-tight hover:bg-teal-500 transition-all">
                    Play
                </button>
            </div>
            <button className="mi-auto flex items-center text-left gap-2">
                <Image src={avatar} alt="Error uploading avatar" width={sizeAvatar} height={sizeAvatar} unoptimized />
                <div>
                    <h2 className="text-teal-600 text-lg hover:text-teal-500 transition-all">Username</h2>
                    <h3 className="text-xs">Rating: 1230</h3>
                </div>
                <Image src={arrow} alt="Error uploading arrow" />
            </button>
        </header>
    )
}

export default Header

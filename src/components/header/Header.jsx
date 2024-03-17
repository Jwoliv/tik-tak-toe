import Image from 'next/image'
import logo from './img/logo.svg'
import { ProfileBlock } from '@/shared/components'
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
                <ProfileBlock />
                <Image src={arrow} alt="Error uploading arrow" />
            </button>
        </header>
    )
}

export default Header

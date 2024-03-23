import clsx from 'clsx'
import Image from 'next/image'
import claseModalIcon from './img/close-modal-icon.svg'

/**
 *
 * @param {width} 'md' | 'full'
 * @returns
 */
const UIModal = ({ width }) => {
    return (
        <div className="fixed inset-0 p-20 bg-gray-900/60 backdrop-blur">
            <div
                className={clsx(
                    'bg-white pt-40 pb-20 rounded-lg min-h-[320px] mx-auto relative',
                    { md: 'max-w-[640px] w-full', full: 'mx-5' }[width],
                )}
            >
                <button
                    className="
                    flex items-center justify-center absolute top-0 w-8 h-8 
                    left-[calc(100%+12px)] rounded-sm bg-gray-400 
                    hover:bg-gray-600 transition-colors"
                >
                    <Image src={claseModalIcon} alt="error" width={16} height={16} />
                </button>
            </div>
        </div>
    )
}

export default UIModal

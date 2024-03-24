import clsx from 'clsx'
import Image from 'next/image'
import claseModalIcon from './img/close-modal-icon.svg'
import { createPortal } from 'react-dom'

/**
 *
 * @param {width} 'md' | 'full'
 * @param {isOpen} boolean
 * @returns
 */
const UIModal = ({ width, className, children, isOpen = false, onClose }) => {
    function handleClose(e) {
        if (!e.target.closest('[data-id=winner-modal-w]') || e.target.closest('[data-id=winner-modal-btn]')) {
            onClose()
        }
    }

    const modalBody = (
        <div className={clsx('fixed inset-0 p-20 bg-gray-900/60 backdrop-blur overflow-y-auto', className)} onClick={handleClose}>
            <div
                data-id="winner-modal-w"
                className={clsx(
                    'bg-white rounded-lg min-h-[320px] mx-auto relative flex flex-col',
                    { md: 'max-w-[640px] w-full', full: 'mx-5' }[width],
                )}
            >
                <button
                    data-id="winner-modal-btn"
                    className="
                    flex items-center justify-center absolute top-0 w-8 h-8 
                    left-[calc(100%+12px)] rounded-sm bg-gray-400 
                    hover:bg-gray-600 transition-colors"
                >
                    <Image src={claseModalIcon} alt="error" width={16} height={16} />
                </button>
                {children}
            </div>
        </div>
    )

    return isOpen ? createPortal(modalBody, document.getElementById('modals-context')) : null
}

UIModal.Header = function UIModalHeader({ children, className }) {
    return <div className={clsx(className, 'px-6 pt-6 pb-6 font-2xl')}>{children}</div>
}

UIModal.Body = function UIModalBody({ children, className }) {
    return <div className={(clsx(className), 'px-6')}>{children}</div>
}

UIModal.Footer = function UIModalFooter({ children, className }) {
    return <div className={(clsx(className), 'mt-auto p-6 flex gap-4 justify-end')}>{children}</div>
}

export default UIModal

'use client'

import { useEffect, useState } from 'react'

interface ConfirmationModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    title: string
    confirmText: string
    cancelText: string
    isDanger?: boolean
}

export function ConfirmationModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    confirmText,
    cancelText,
    isDanger = false
}: ConfirmationModalProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true)
        } else {
            const timer = setTimeout(() => setIsVisible(false), 200)
            return () => clearTimeout(timer)
        }
    }, [isOpen])

    if (!isVisible && !isOpen) return null

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />
            <div className="relative bg-white rounded-xl shadow-lg p-8 max-w-sm w-full mx-4 flex flex-col items-center">
                <h3 className="text-xl font-bold text-center mb-8 text-black">{title}</h3>
                
                <div className="flex gap-4 w-full justify-center">
                    <button
                        onClick={onConfirm}
                        className={`px-6 py-2 rounded font-medium text-white transition-colors ${
                            isDanger 
                                ? 'bg-[#981B1B] hover:bg-[#7a1515]' 
                                : 'bg-[#2E5843] hover:bg-[#234333]'
                        }`}
                    >
                        {confirmText}
                    </button>
                    <button
                        onClick={onClose}
                        className="px-6 py-2 rounded font-medium text-black border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                        {cancelText}
                    </button>
                </div>
            </div>
        </div>
    )
}

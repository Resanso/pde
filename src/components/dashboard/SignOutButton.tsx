'use client'

import { useState } from 'react'
import { signOut } from '@/app/dashboard/actions'
import { ConfirmationModal } from '@/components/ui/ConfirmationModal'

export function SignOutButton() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSignOut = async () => {
        await signOut()
    }

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
            >
                Sign Out
            </button>

            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleSignOut}
                title="Are you sure want to log out ?"
                confirmText="Log Out"
                cancelText="Cancel"
                isDanger={false}
            />
        </>
    )
}

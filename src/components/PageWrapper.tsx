'use client'

import { usePathname } from 'next/navigation'

export function PageWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const hiddenPaths = ["/login", "/dashboard"]
    const shouldRemovePadding = hiddenPaths.some((path) => pathname.startsWith(path))

    return (
        <div className={`bg-gray-50 ${shouldRemovePadding ? '' : 'pt-24'}`}>
            {children}
        </div>
    )
}

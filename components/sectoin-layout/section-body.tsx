import React from 'react'

type Props = { children: React.ReactNode, className?: string, footerNext?: boolean }

const SectionBody = ({ children, className, footerNext = false }: Props) => {
    return (
        <div
            className={`section-body-bg w-screen min-h-screen  rounded-[6rem] md:rounded-[9rem]
            py-36 leading-6 ${className} ${footerNext && "pb-72 lg:pb-56"} `}
        >
            {children}
        </div>
    )
}

export default SectionBody
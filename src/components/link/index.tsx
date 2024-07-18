import React from 'react'

import "./index.css"

type LinkProps = {
    children: React.ReactNode
    url: string
    size: string
}

export const Link = ({ children, url, size }: LinkProps) => {
    return (
        <a style={{ fontSize: size }} className='link' href={url} target='_blank'>
            {children}
        </a>
    )
}

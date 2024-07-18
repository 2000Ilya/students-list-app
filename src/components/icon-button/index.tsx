import React from 'react'

import "./index.css"

export type IconButtonProps = {
    onClick: () => void
}

export const IconButton = ({ onClick, children }: React.PropsWithChildren<IconButtonProps>) => {
    return (
        <button className='icon-button' onClick={onClick}>
            {children}
        </button>
    )
}

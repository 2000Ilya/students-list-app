import React, { useMemo, useState } from 'react'
import { isMobile } from 'react-device-detect';
import { SortObject, SortVariants } from '@contexts/sort'
import { SortAscIcon } from '@static/icons/sort-asc-icon'
import { SortDescIcon } from '@static/icons/sort-desc-icon'
import { CheckIcon } from '@static/icons/check-icon'
import { SortDefaultIcon } from '@static/icons/sort-def-icon'
import { useClickOutside } from '@hooks/use-click-outside';

import "./index.css"

type ChildrenProps = {
    children: React.ReactNode
}

const DropdownContainer = React.forwardRef<HTMLDivElement, ChildrenProps>(({ children }, ref) => {
    return <div ref={ref} className={`dropdown-container ${(isMobile && 'dropdown__mobile-view') || ''}`}>{children}</div>
})

type DropdownHeaderProps = {
    onClick: React.MouseEventHandler
} & ChildrenProps

const DropdownHeader = ({ onClick, children }: DropdownHeaderProps) => {
    return <div className='dropdown-header' onClick={onClick}>{children}</div>
}

const DropdownListContainer = ({ children }: ChildrenProps) => {
    return <div className='dropdown-list-container'>{children}</div>
}

const DropdownList = ({ children }: ChildrenProps) => {
    return <div className='dropdown-list'>{children}</div>
}

type ListItemProps = {
    onClick: React.MouseEventHandler
    isSelected: boolean
} & ChildrenProps

const ListItem = ({ onClick, children, isSelected }: ListItemProps) => {
    return <div className={`list-item ${(isSelected && ' list-item__selected') || ''}`} onClick={onClick}>{children}</div>
}


type DropdownItem = {
    value: string
    title: React.ReactNode
}

type DropdownProps = {
    value: SortObject
    onChange: (value: SortObject) => void
    items: DropdownItem[]
}

export const Dropdown = ({ value, onChange, items }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useClickOutside({ onOutsideClick: () => setIsOpen(false) })

    const toggleOpenDropdown = () => setIsOpen(!isOpen)

    const selectedOption = useMemo(() => items.find(item => item.value === `${value?.key}_${value?.variant}`), [items, value])
    const selectedOptionTitle = useMemo(() => selectedOption?.title || "Не выбрано", [selectedOption])

    const sortIcon = useMemo(() => {
        if (value) {
            if (value.variant === 'asc') {
                return <SortAscIcon size={20} fill={'#000'} />
            } else {
                return <SortDescIcon size={20} fill={'#000'} />
            }
        }
        return <div className='dropdown__sort-default-icon-container'><SortDefaultIcon size={20} fill={'#000'} /></div>
    }, [value])

    const handleClickListItem = (dropdownValue: string) => {
        const [key, variant] = dropdownValue.split("_")
        onChange({ key, variant: variant as SortVariants })
    }

    const dropdownItems = useMemo(() => {
        return items.map(item => {
            const isItemSelected = item.value === `${value?.key}_${value?.variant}`
            return (
                <ListItem
                    key={item.value}
                    onClick={() => handleClickListItem(item.value)}
                    isSelected={isItemSelected}
                >
                    {item.title}
                    {isItemSelected ? <CheckIcon fill={"#49C2E8"} size={10} /> : null}
                </ListItem>)
        }
        )
    }, [items, onChange])

    return (
        <DropdownContainer ref={dropdownRef as React.RefObject<HTMLDivElement> | undefined}>
            <DropdownHeader onClick={toggleOpenDropdown}>
                <span className='dropdown-title'>{selectedOptionTitle}</span>
                {sortIcon}
            </DropdownHeader>
            {isOpen && (
                <DropdownListContainer>
                    <DropdownList>
                        {dropdownItems}
                    </DropdownList>
                </DropdownListContainer>
            )}
        </DropdownContainer>
    )
}

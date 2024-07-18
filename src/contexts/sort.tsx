import React, { createContext, useState } from 'react'

export enum SortVariants {
    "ASC" = "asc",
    "DESC" = "desc",
}

export type SortObject = {
    key: string
    variant: SortVariants
} | null

type SortContext = {
    sortObject: SortObject
    updateSortObject: (sortObject: SortObject) => void
}

export const SortContext = createContext<SortContext | null>(null)

type StudentsProviderProps = {
    children: React.ReactNode
}

export const SortProvider = ({ children }: StudentsProviderProps) => {
    const [sortObject, updateSortObject] = useState<SortObject>(null)

    return (
        <SortContext.Provider value={{ sortObject, updateSortObject }}>
            {children}
        </SortContext.Provider>
    )
}
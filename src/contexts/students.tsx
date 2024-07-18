import React, { createContext, useState } from 'react'
import { Student } from '@api/students/contracts'

type StudentsContext = {
    students: Student[]
    deleteStudent: (id: number) => void
    updateStudents: (students: Student[]) => void
}

export const StudentsContext = createContext<StudentsContext | null>(null)

type StudentsProviderProps = {
    children: React.ReactNode
}

export const StudentsProvider = ({ children }: StudentsProviderProps) => {
    const [students, updateStudents] = useState<Student[]>([])

    const deleteStudent = (studentId: number) => {
        updateStudents(students => students?.filter(student => student.id !== studentId))
    }

    return (
        <StudentsContext.Provider value={{ students, deleteStudent, updateStudents }}>
            {children}
        </StudentsContext.Provider>
    )
}
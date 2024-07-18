import { Student } from "./contracts"

type StudentsApi = {
    getStudents: () => Promise<Student[] | undefined>
}

export const studentsApi: StudentsApi = {
    getStudents: async function (): Promise<Student[] | undefined> {
        return fetch('https://front-assignment-api.2tapp.cc/api/persons')
            .then(data => data.json())
            .then(data => data.students)
            .catch(() => { });
    }
}

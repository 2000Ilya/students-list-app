enum Sex {
    "Male" = "m",
    "Female" = "f"
}

export type Student = {
    id: number
    avatar: string
    name: string
    specialty: string
    group: string
    birthday: string
    rating: number
    color: string
    email: string
    sex: Sex
}
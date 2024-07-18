export type Specialty = {
    short: string
    full: string
}

export const specialties: Record<string, Specialty> = {
    kn: {
        short: "КН",
        full: "Компьютерные науки",
    },
    mt: {
        short: "МТ",
        full: "Математика",
    },
    kb: {
        short: "КБ",
        full: "Компьютерная безопасность",
    },
}
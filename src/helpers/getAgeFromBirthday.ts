export const getAgeFromBirthday = (birthday: string) => {
    const period = Number(new Date()) - Number(new Date(birthday))
    return new Date(period).getFullYear() - new Date(0).getFullYear()
}
export const defaultSortFunctions = {
    sortString: (str1: string, str2: string) => {
        return str1.localeCompare(str2);
    },
    sortNumbers(num1: number, num2: number) {
        return num1 - num2;
    }
}
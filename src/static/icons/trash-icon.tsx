type TrashIconProps = {
    fill: string
    size: number
}

export const TrashIcon = ({ fill, size }: TrashIconProps) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.91178 13.16C1.95918 13.6463 2.38582 14 2.90726 14H11.0924C11.6138 14 12.0404 13.6315 12.0879 13.16L13.0043 4.19997H0.9953L1.91178 13.16ZM9.00659 6.99997C9.00659 6.74944 9.22781 6.52839 9.51223 6.52839C9.78085 6.52839 10.0179 6.7347 10.0179 6.99997V11.2C10.0179 11.4505 9.79665 11.6715 9.51223 11.6715C9.24361 11.6715 9.00659 11.4652 9.00659 11.2V6.99997ZM6.49417 6.99997C6.49417 6.74944 6.71539 6.52839 6.99981 6.52839C7.26844 6.52839 7.50546 6.7347 7.50546 6.99997V11.2C7.50546 11.4505 7.28424 11.6715 6.99981 11.6715C6.73119 11.6715 6.49417 11.4652 6.49417 11.2V6.99997ZM3.99756 6.99997C3.99756 6.74944 4.21878 6.52839 4.5032 6.52839C4.77182 6.52839 5.00884 6.7347 5.00884 6.99997V11.2C5.00884 11.4505 4.78763 11.6715 4.5032 11.6715C4.23458 11.6715 3.99756 11.4652 3.99756 11.2V6.99997Z" fill={fill} />
        <path d="M13.0045 1.4H9.00677V0.928421C9.00677 0.412632 8.56433 0 8.01129 0H6.00451C5.45147 0 5.00903 0.412632 5.00903 0.928421V1.4H0.995485C0.442438 1.4 0 1.81263 0 2.32842C0 2.84421 0.442438 3.25684 0.995485 3.25684H13.0045C13.5576 3.25684 14 2.84421 14 2.32842C14 1.81263 13.5576 1.4 13.0045 1.4Z" fill={fill} />
    </svg>
)

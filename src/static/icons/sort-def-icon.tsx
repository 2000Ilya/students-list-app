type SortDefaultIconProps = {
    fill: string
    size: number
}

export const SortDefaultIcon = ({ fill, size }: SortDefaultIconProps) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.09769 15.1866H12.1595V13.16H1.09769C0.491482 13.16 0 13.6137 0 14.1732C0 14.7328 0.491482 15.1866 1.09769 15.1866Z" fill={fill} />
        <path d="M1.09769 10.6263H12.1595V8.59967H1.09769C0.491482 8.59967 0 9.05335 0 9.61298C0 10.1726 0.491482 10.6263 1.09769 10.6263Z" fill={fill} />
        <path d="M1.09769 6.06656H12.1595V4.03998H1.09769C0.491481 4.03998 0 4.49366 0 5.05329C0 5.61292 0.491481 6.06656 1.09769 6.06656Z" fill={fill} />
    </svg>
)
type SortAscIconProps = {
    fill: string
    size: number
}

export const SortAscIcon = ({ fill, size }: SortAscIconProps) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.09769 15.1866H12.1595V13.16H1.09769C0.491482 13.16 0 13.6137 0 14.1732C0 14.7328 0.491482 15.1866 1.09769 15.1866Z" fill={fill} />
        <path d="M1.09769 10.6263H12.1595V8.59967H1.09769C0.491482 8.59967 0 9.05335 0 9.61298C0 10.1726 0.491482 10.6263 1.09769 10.6263Z" fill={fill} />
        <path d="M1.11053 4.03998C0.49723 4.03998 0 4.49366 0 5.05329C0 5.61292 0.49723 6.06656 1.11053 6.06656H9.41547C8.81564 5.40119 8.81564 5.10018 8.81564 5.05327C8.81564 4.97344 8.81564 4.60113 9.03039 4.03998H1.11053Z" fill={fill} />
        <path d="M10.6619 6.9819C11.3169 7.62412 12.1818 6.9819 12.6885 6.47526L13.7017 5.46197L14.2599 4.87815L14.2599 17.2392C14.2599 18.01 14.4805 18.6348 15.2667 18.6348C16.0529 18.6348 16.3241 18.0099 16.3241 17.2392V4.87815L17.8591 6.45677C18.415 7.00176 19.2253 7.52693 19.7812 6.9819C20.2877 6.48519 19.8301 5.50035 19.2742 4.95532L16.2345 1.4088C15.6797 0.864677 14.7642 0.86282 14.2079 1.4088L11.168 4.95532C10.6121 5.50035 10.1059 6.43688 10.6619 6.9819Z" fill={fill} />
    </svg>
)
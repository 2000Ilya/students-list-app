type CheckIconProps = {
    fill: string
    size: number
}

export const CheckIcon = ({ fill, size }: CheckIconProps) => (
    <svg width={size} height={size * 0.8} viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.49373 0.758435C8.83831 0.413855 9.39698 0.413855 9.74156 0.758435C10.0861 1.10302 10.0861 1.66169 9.74156 2.00627L4.44745 7.30039C4.10287 7.64497 3.54419 7.64497 3.19961 7.30039L0.258435 4.35921C-0.0861451 4.01463 -0.0861451 3.45596 0.258435 3.11138C0.603015 2.7668 1.16169 2.7668 1.50627 3.11138L3.82353 5.42863L8.49373 0.758435Z" fill={fill} />
    </svg>
)
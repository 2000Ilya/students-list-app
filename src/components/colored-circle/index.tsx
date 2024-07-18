import "./index.css"

type ColoredCircleProps = {
    color: string
    size: string
}

export const ColoredCircle = ({ color, size }: ColoredCircleProps) => {
    return (
        <div
            className='colored-circle'
            style={{
                height: size,
                width: size,
                background: color
            }}
        ></div>
    )
}

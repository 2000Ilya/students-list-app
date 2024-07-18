import "./index.css"

export type AvatarProps = {
    url: string
}

export const Avatar = ({ url }: AvatarProps) => {
    return (
        <img src={url} className='avatar' alt='avatar' />
    )
}

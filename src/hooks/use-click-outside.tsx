import { useEffect, useRef } from 'react'

type useClickOutsideProps = {
    onOutsideClick: () => void
}

export const useClickOutside = ({ onOutsideClick }: useClickOutsideProps) => {
    const ref = useRef<HTMLElement>()
    const handleClickOutside = (event: MouseEvent) => {
        if (ref?.current && !ref.current.contains(event?.target as Node)) {
            onOutsideClick()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [])

    return ref
}
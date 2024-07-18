import React from "react"
import { Student } from "@api/students/contracts"
import { Avatar } from "@components/avatar"
import { ColoredCircle } from "@components/colored-circle"
import { IconButton } from "@components/icon-button"
import { getAgeFromBirthday } from "@helpers/getAgeFromBirthday"
import { TrashIcon } from "@static/icons/trash-icon"
import { specialties } from "./specialties"

export interface Column<T> {
    key: string
    title: string
    width?: number
    render?: (item: T) => React.ReactNode
    style?: React.CSSProperties
}

type TableData = Student & { onDelete: () => void }

export const columns: Column<TableData>[] = [
    {
        key: "avatar",
        title: "",
        render: ({ avatar }) => <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}><Avatar url={avatar} /></div>,
        style: {
            width: '40px',
        }
    },
    {
        key: "name",
        title: "ФИО",
        style: {
            width: '300px'
        }
    },
    {
        key: "specialty",
        title: "Специальность",
        render: ({ specialty }) => specialties[specialty]?.full || specialty,
        style: {
            width: '280px'
        }
    },
    {
        key: "group",
        title: "Группа",
        render: ({ group }) => {
            const [groupPrefix, groupNum] = group.split("-")
            return `${specialties[groupPrefix]?.short || groupPrefix}-${groupNum}`
        },
        style: {
            width: '100px'
        }
    },
    {
        key: "age",
        title: "Возраст",
        render: ({ birthday }) => getAgeFromBirthday(birthday),
        style: {
            width: '100px'
        }
    },
    {
        key: "rating",
        title: "Рейтинг",
        style: {
            width: '100px'
        }
    },
    {
        key: "color",
        title: "",
        render: ({ color }) => <ColoredCircle size={'30px'} color={color} />,
        style: {
            width: '30px'
        }
    },
    {
        key: "delete",
        title: "",
        render: ({ onDelete }) => <IconButton onClick={onDelete}> <TrashIcon fill={'#000'} size={14} /> </IconButton>,
        style: {
            width: '30px'
        }
    }
]
import React from "react"
import { Student } from "@api/students/contracts"
import { ColoredCircle } from "@components/colored-circle"
import { getAgeFromBirthday } from "@helpers/getAgeFromBirthday"
import { StarIcon } from "@static/icons/star-icon"
import { specialties } from "../specialties"

import "./index.css"

export interface Column<T> {
    key: string
    title: string
    width?: number
    render?: (item: T) => React.ReactNode
    style?: React.CSSProperties
}

type TableData = Student

export const unorderedList: Column<TableData>[] = [
    {
        key: "age",
        title: "Возраст",
        render: ({ birthday }) => `${getAgeFromBirthday(birthday)} год`,
        style: {
            width: '100px'
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
    }
]

export const metaInfo: Column<TableData>[] = [
    {
        key: "color",
        title: "",
        render: ({ color }) => <ColoredCircle size={'12px'} color={color} />,
        style: {
            width: '30px'
        }
    },
    {
        key: "rating",
        title: "Рейтинг",
        render: ({ rating }) => (
            <div className="meta-info-rating">
                <StarIcon fill={'#000000'} size={10} />
                <div className="meta-info-rating-value">
                    {rating}
                </div>
            </div>
        ),
        style: {
            width: '100px'
        }
    }
]
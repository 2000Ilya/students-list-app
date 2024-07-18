import { Student } from '@api/students/contracts'
import { Avatar } from '@components/avatar'
import { IconButton } from '@components/icon-button'
import { TrashIcon } from '@static/icons/trash-icon'
import { metaInfo, unorderedList } from '@constants/card'

import "./index.css"

type CardUserMetaSectionProps = {
    cardData: Student
}

const CardUserMetaSection = ({ cardData }: CardUserMetaSectionProps) => (
    <div className='card__user-meta'>
        {metaInfo.map(item => {
            const value = cardData[item.key as keyof Student];
            return <div key={item.key}>{item.render ? item.render(cardData) : `${value}`}</div>
        })}
    </div>
)

type CardListSectionProps = {
    cardData: Student
}

const CardListSection = ({ cardData }: CardListSectionProps) => (
    <ul className="card__bottom-content">
        {unorderedList.map(item => {
            const value = cardData[item.key as keyof Student];
            return (
                <li key={item.key}>
                    {item.render ? item.render(cardData) : `${value}`}
                </li>
            )
        })}
    </ul>
)

type CardData = Student & { onDelete: () => void }

type CardProps = {
    cardData: CardData
}

export const Card = ({ cardData }: CardProps): JSX.Element => {
    return (
        <div className="card">
            <div className="card__top-content">
                <div className="card__top-left-content">
                    <Avatar url={cardData.avatar} />
                    <div className="card__user-info">
                        <div className='card__user-name'>{cardData.name}</div>
                        <CardUserMetaSection cardData={cardData} />
                    </div>
                </div>
                <IconButton onClick={cardData.onDelete}>
                    <TrashIcon fill={'#000'} size={14} />
                </IconButton>
            </div>
            <hr className='card-delimeter' />
            <CardListSection cardData={cardData} />
        </div>
    );
}

type ListProps = {
    data: Student[]
    onDelete: (id: number) => void
};

export const List = ({ data, onDelete }: ListProps) => {
    return (
        <div className='list'>
            {data.map((cardData) => (
                <Card key={cardData.id} cardData={{ ...cardData, onDelete: () => onDelete(cardData.id) }} />
            ))}
        </div>
    );
};
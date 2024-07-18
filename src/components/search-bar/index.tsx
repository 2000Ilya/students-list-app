import { SearchIcon } from '@static/icons/search-icon'

import "./index.css"

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className='search-bar-container'>
      <SearchIcon fill={"#000000"} size={18} />
      <input
        className='search-bar-input'
        type="text"
        placeholder="Поиск по имени"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  )
}

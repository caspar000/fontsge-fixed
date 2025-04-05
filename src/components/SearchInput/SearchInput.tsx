import cn from 'classnames'

import { IconSearch } from '@/assets/IconSearch'

interface ISearchInput {
  onSearch: (value: string) => void
  className?: string
}

export const SearchInput = ({ onSearch, className }: ISearchInput) => {
  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-2xl border border-solid border-black p-4',
        className
      )}
    >
      <IconSearch />
      <input
        type="text"
        className="w-full outline-0"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="მოძებნე ფონტი სახელით"
      />
    </div>
  )
}

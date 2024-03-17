import { ChangeEvent, FC } from 'react';
import { SearchBox } from './styles';

interface SearchBarProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ onChange }) => (
    <SearchBox placeholder="Search product" onChange={onChange} />
);
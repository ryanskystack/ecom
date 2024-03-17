import { ChangeEvent, FC } from 'react';
import { CategoryDropdown as Dropdown } from './styles';

interface CategoryDropdownProps {
    categories: string[];
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const CategoryDropdown: FC<CategoryDropdownProps> = ({ categories, onChange }) => (
    <Dropdown onChange={onChange}>
        <option value="">All categories</option>
        {categories.map((title) => (
            <option key={title} value={title}>
                {title}
            </option>
        ))}
    </Dropdown>
);
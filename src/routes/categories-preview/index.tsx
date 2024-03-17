import { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import {
    selectCategoriesMap,
    selectCategoriesIsLoading,
} from '../../store/categories/category.selector';
import CategoryPreview from '../../components/category-preview';
import Spinner from '../../components/spinner';
import { SearchBar } from '../../components/search-bar';
import { CategoryDropdown } from '../../components/filter-dropdown';
import { FilterGroup } from './styles';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

    const filteredCategories = Object.keys(categoriesMap)
        .filter((title) => categoriesMap[title].some(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())))
        .map((title) => ({
            title,
            products: categoriesMap[title].filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }))
        .filter((category) => !selectedCategory || category.title === selectedCategory);

    return (
        <Fragment>
            <FilterGroup>
                <SearchBar onChange={handleSearchChange} />
                <CategoryDropdown categories={Object.keys(categoriesMap)} onChange={handleCategoryChange} />
            </FilterGroup>
            {isLoading ? (
                <Spinner />
            ) : (
                filteredCategories.map((category) => {
                    const { title, products } = category;
                    // Check if products is an array before passing it to CategoryPreview
                    if (Array.isArray(products)) {
                        return (
                            <CategoryPreview key={title} title={title} products={products} />
                        );
                    } else {
                        console.error(`products for title ${title} is not an array:`, products);
                        return null;
                    }
                })
            )}
        </Fragment>
    );
};

export default CategoriesPreview;
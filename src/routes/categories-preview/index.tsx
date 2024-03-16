import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import {
    selectCategoriesMap,
    selectCategoriesIsLoading,
} from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview';
import Spinner from '../../components/spinner';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    console.log('categoriesMap', categoriesMap);
    return (
        <Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
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
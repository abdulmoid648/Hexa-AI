import React from 'react';
import ProductHero from '../pages/Product/ProductHero';
import Difference from '../pages/Product/Difference';
import Setup from '../pages/Product/Setup';

const ProductPage = () => {
    return (
        <div className="bg-white">
            <ProductHero />
            <Difference />
            <Setup />
        </div>
    );
};

export default ProductPage;

import React from 'react';
import Sorter from '../components/sorter';
import Category from '../partials/Category';

function ProductList() {
    return (
        <section>
            <div className="flex items-center my-12">
                <div className="flex">
                    <h2 className="font-archivo font-bold text-black md:text-3xl text-base mr-2">
                        Photography
                    </h2>
                    <span className="font-archivo font-semibold text-black md:text-4xl text-xl">/</span>
                    <p className="font-archivo font-normal text-gray-600 md:text-3xl text-base ml-2">
                        Premium Photos
                    </p>
                </div>
                <Sorter />
            </div>
                <Category />

        </section>
    );
}

export default ProductList;
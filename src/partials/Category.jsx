import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Category() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    const categories = ['people', 'premium', 'pets', 'food', 'landmarks', 'cities', 'nature'];

    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchFilteredProducts = async () => {

                    const filterOptions = {
                        sort: {
                            key: 'price',
                            type: 'DESC'
                        },
                        categories: selectedCategories
                    };

                    const filteredResponse = await axios.post('https://technical-frontend-api.bokokode.com/api/products', filterOptions);
                    const filteredProducts = Object.values(filteredResponse.data);
                    setFilteredProducts(filteredProducts[0].data || []);
                    console.log('Productos filtrados: ', filteredProducts[0].data);

                };

                const fetchAllProducts = async () => {
                    try {
                        const response = await axios.post('https://technical-frontend-api.bokokode.com/api/products');
                        const responseData = response.data;
                        if (Array.isArray(responseData)) {
                            setAllProducts(responseData);
                        } else if (typeof responseData === 'object') {
                            const productList = Object.values(responseData);
                            setAllProducts(productList[0].data);
                        }
                    } catch (error) {
                        console.error(error);
                    }
                };

                if (selectedCategories.length === 0) {
                    fetchAllProducts();
                } else {
                    fetchFilteredProducts();
                }
                
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [selectedCategories]);


    return (
        <div className='grid grid-cols-4'>
            <div className='span-cols-1'>
                <h2 className="font-archivo font-bold text-black pb-4 text-base">Category</h2>

                {categories.map((category) => (
                    <label key={category} className="flex items-center mt-10">
                        <input
                            type="checkbox"
                            value={category}
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                            className="form-checkbox h-5 w-5 accent-white border-black border rounded"
                        />
                        <span className="font-archivo font-normal capitalize text-black text-base ml-5 md:text-sm">
                            {category}
                        </span>
                    </label>
                ))}
            </div>
            <div className="col-span-3 grid grid-cols-3 mt-8 gap-12 px-12">
                {(selectedCategories.length === 0 ? allProducts : filteredProducts).map((product) => (
                    <div key={product._id} className="md:w-full w-1/3 p-4">
                        <img src={product.image.src} alt={product.image.alt} className="product-image" />
                        <h3 className="font-archivo font-bold text-gray-400 capitalize text-base">{product.category}</h3>
                        <h2 className="font-archivo font-bold text-black md:text-2xl text-base">{product.name}</h2>
                        <p className="font-archivo font-normal text-gray-500 md:text-xl text-base">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;

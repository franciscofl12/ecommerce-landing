import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import { Pagination } from 'flowbite-react';

function ProductList({ onAddToCart }) {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [selectedOption, setSelectedOption] = useState('price');
    const [filterType, setFilterType] = useState('ASC');
    const [rotateIcon, setRotateIcon] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [paginationData, setPaginationData] = useState(null);
    const categories = ['people', 'premium', 'pets', 'food', 'landmarks', 'cities', 'nature'];

    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleSaveClick = () => {
        setMenuVisible(false);
    };

    const handleClearClick = () => {
        setSelectedCategories([]);
    };

    const handleSortToggle = () => {
        const newFilterType = filterType === 'ASC' ? 'DESC' : 'ASC';
        setFilterType(newFilterType);
        setRotateIcon(!rotateIcon);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchFilteredProducts = async () => {
                    const filterOptions = {
                        sort: {
                            key: selectedOption,
                            type: filterType,
                        },
                        categories: selectedCategories,
                    };

                    const filteredResponse = await axios.post(
                        'https://technical-frontend-api.bokokode.com/api/products',
                        filterOptions
                    );
                    const filteredProducts = Object.values(filteredResponse.data);
                    setFilteredProducts(filteredProducts[0].data || []);
                    console.log('Productos filtrados: ', filteredProducts[0].data);
                };

                const fetchAllProducts = async () => {
                    const filterOptions = {
                        sort: {
                            key: selectedOption,
                            type: filterType,
                        },
                        categories: ['people', 'premium', 'pets', 'food', 'landmarks', 'cities', 'nature'],
                    };



                    const filteredResponse = await axios.post(
                        'https://technical-frontend-api.bokokode.com/api/products',
                        filterOptions
                    );
                    const filteredProducts = Object.values(filteredResponse.data);
                    setAllProducts(filteredProducts[0].data || []);
                    console.log(filteredProducts[0]);
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
    }, [selectedCategories, selectedOption, filterType]);




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
                <div className='ml-auto flex items-center'>
                    <div className="flex items-center">
                        <svg
                            onClick={handleSortToggle}
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            className={`w-5 h-5 text-gray-400 mr-2 hidden md:block cursor-pointer`}
                            fill="none"
                            style={{
                                transform: `rotate(${rotateIcon ? '180deg' : '0deg'})`,
                                transition: 'transform 0.5s',
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_122_12)">
                                <path d="M3.64807 14.3734V1.5347L5.90435 3.79098C5.97793 3.86456 6.07296 3.90134 6.17106 3.90134C6.26916 3.90134 6.36419 3.86456 6.43777 3.79098C6.58492 3.64383 6.58492 3.40778 6.43777 3.26063L3.54077 0.363637C3.39976 0.222619 3.15144 0.222619 3.01042 0.363637L0.110362 3.26063C-0.0367873 3.40778 -0.0367873 3.64383 0.110362 3.79098C0.257511 3.93813 0.493562 3.93813 0.640711 3.79098L2.897 1.5347V14.3734C2.897 14.5819 3.0656 14.7505 3.27407 14.7505C3.47946 14.7474 3.64807 14.5788 3.64807 14.3734Z" fill="#9B9B9B" />
                                <path d="M11.4592 14.6367C11.5328 14.7103 11.6278 14.7471 11.7259 14.7471C11.824 14.7471 11.919 14.7103 11.9926 14.6367L14.8896 11.7397C15.0368 11.5926 15.0368 11.3565 14.8896 11.2094C14.7425 11.0622 14.5064 11.0622 14.3593 11.2094L12.103 13.4657V0.626917C12.103 0.418456 11.9344 0.249847 11.7259 0.249847C11.5174 0.249847 11.3488 0.418456 11.3488 0.626917V13.4657L9.09561 11.2094C8.94846 11.0622 8.71241 11.0622 8.56526 11.2094C8.41811 11.3565 8.41811 11.5926 8.56526 11.7397L11.4592 14.6367Z" fill="#9B9B9B" />
                            </g>
                            <defs>
                                <clipPath id="clip0_122_12">
                                    <rect width="15" height="15" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="font-archivo font-normal text-gray-400 text-base mr-4 hidden md:block">
                            Sort By
                        </p>
                        <select className='font-archivo font-normal border-0 mr-2 text-black hidden md:block'
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}>
                            <option value="price">Price</option>
                            <option value="name">Name</option>
                        </select>

                        <div>
                            <svg width="29" height="29" viewBox="0 0 29 29" className="w-5 h-5 mr-1 block md:hidden cursor-pointer" onClick={toggleMenu} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.8119 0H5.18805C2.32736 0 0 2.32736 0 5.18805V23.812C0 26.6726 2.32736 29 5.18805 29H23.812C26.6726 29 29 26.6726 29 23.8119V5.18805C29 2.32736 26.6726 0 23.8119 0ZM27.3008 23.8119C27.3008 25.7357 25.7357 27.3008 23.8119 27.3008H5.18805C3.26431 27.3008 1.69922 25.7357 1.69922 23.8119V5.18805C1.69922 3.26431 3.26431 1.69922 5.18805 1.69922H23.812C25.7357 1.69922 27.3008 3.26431 27.3008 5.18805V23.8119Z" fill="black" />
                                <path d="M24.5103 6.3702H11.5701C11.2143 5.31357 10.2149 4.55017 9.03986 4.55017C7.86479 4.55017 6.86537 5.31357 6.50961 6.3702H4.48975C4.02054 6.3702 3.64014 6.7506 3.64014 7.21981C3.64014 7.68902 4.02054 8.06942 4.48975 8.06942H6.50966C6.86542 9.12605 7.86485 9.88946 9.03991 9.88946C10.215 9.88946 11.2144 9.12605 11.5702 8.06942H24.5103C24.9795 8.06942 25.3599 7.68902 25.3599 7.21981C25.3599 6.7506 24.9795 6.3702 24.5103 6.3702V6.3702ZM9.03986 8.19024C8.50477 8.19024 8.06943 7.7549 8.06943 7.21981C8.06943 6.68473 8.50477 6.24939 9.03986 6.24939C9.57494 6.24939 10.0103 6.68473 10.0103 7.21981C10.0103 7.7549 9.57494 8.19024 9.03986 8.19024Z" fill="black" />
                                <path d="M24.5103 13.6504H22.4904C22.1346 12.5938 21.1351 11.8304 19.9601 11.8304C18.7851 11.8304 17.7857 12.5938 17.4299 13.6504H4.48975C4.02054 13.6504 3.64014 14.0308 3.64014 14.5C3.64014 14.9692 4.02054 15.3496 4.48975 15.3496H17.4299C17.7857 16.4063 18.7852 17.1697 19.9602 17.1697C21.1352 17.1697 22.1347 16.4063 22.4904 15.3496H24.5103C24.9795 15.3496 25.3599 14.9692 25.3599 14.5C25.3599 14.0308 24.9795 13.6504 24.5103 13.6504ZM19.9602 15.4704C19.4251 15.4704 18.9897 15.0351 18.9897 14.5C18.9897 13.9649 19.4251 13.5296 19.9602 13.5296C20.4953 13.5296 20.9306 13.9649 20.9306 14.5C20.9306 15.0351 20.4953 15.4704 19.9602 15.4704Z" fill="black" />
                                <path d="M24.5103 20.9306H15.2102C14.8545 19.8739 13.855 19.1105 12.68 19.1105C11.5049 19.1105 10.5055 19.8739 10.1497 20.9306H4.48975C4.02054 20.9306 3.64014 21.311 3.64014 21.7802C3.64014 22.2494 4.02054 22.6298 4.48975 22.6298H10.1497C10.5055 23.6864 11.5049 24.4498 12.68 24.4498C13.855 24.4498 14.8545 23.6864 15.2102 22.6298H24.5103C24.9795 22.6298 25.3599 22.2494 25.3599 21.7802C25.3599 21.311 24.9795 20.9306 24.5103 20.9306ZM12.68 22.7507C12.1449 22.7507 11.7096 22.3153 11.7096 21.7802C11.7096 21.2452 12.1449 20.8098 12.68 20.8098C13.2151 20.8098 13.6504 21.2451 13.6504 21.7802C13.6504 22.3153 13.2151 22.7507 12.68 22.7507V22.7507Z" fill="black" />
                            </svg>
                        </div>
                        {menuVisible && (
                            <div className="fixed z-50 inset-0 bg-black/20 pt-20">
                                <div className='bg-white h-full'>

                                    <div className='flex justify-between pt-6 px-8'>
                                        <h2 className='filterHeader'>Filter</h2>
                                        <svg className='cursor-pointer' onClick={toggleMenu} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L20 20" stroke="black" stroke-width="4" />
                                            <path d="M2 20L20 2" stroke="black" stroke-width="4" />
                                        </svg>
                                    </div>
                                    <div className='border-b pb-12'>
                                        {categories.map((category) => (
                                            <label key={category} className="flex items-center mt-8 ml-8">
                                                <input
                                                    type="checkbox"
                                                    value={category}
                                                    checked={selectedCategories.includes(category)}
                                                    onChange={() => handleCategoryChange(category)}
                                                    className="form-checkboxMenu h-5 w-5 accent-white border-black border rounded"
                                                />
                                                <span className=" font-normal capitalize text-black category pl-5">
                                                    {category}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                    <div className='border-t-4 pt-5 grid grid-cols-2 gap-4 px-4 border-gray-200'>
                                        <button className="menuButton w-full text-base tracking-widest bg-white border-black border-4 text-black py-2 mr-60 uppercase" onClick={handleClearClick}>CLEAR</button>
                                        <button className="menuButton w-full text-base tracking-widest bg-black border-black border-4 text-white py-2 mr-60 uppercase" onClick={handleSaveClick}>SAVE</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4'>
                <div className='span-col-1 hidden md:block'>
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
                <div className="md:col-span-3 col-span-4 grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 mt-8 gap-0 md:gap-12 px-0 md:px-12">
                    {(selectedCategories.length === 0 ? allProducts : filteredProducts).map((product) => (
                        <Product key={product._id} product={product} onAddToCart={onAddToCart} />
                    ))}
                    <div className='md:col-span-2 xl:col-span-3 col-span-1 inline-flex'>
                        <div>
                            {/* Renderizar la paginación */}
                            {paginationData && (
                                <nav>
                                    <ul className="pagination">
                                        {/* Flecha de página anterior */}
                                        {paginationData.links[0].url && (
                                            <li className="page-item">
                                                <button
                                                    className="page-link"
                                                    onClick={() => handlePageChange(paginationData.prev_page_url)}
                                                >
                                                    &laquo; Previous
                                                </button>
                                            </li>
                                        )}

                                        {/* Números de página */}
                                        {paginationData.links.map((link) => (
                                            <li key={link.label} className={`page-item ${link.active ? 'active' : ''}`}>
                                                <button
                                                    className="page-link"
                                                    onClick={() => handlePageChange(link.url)}
                                                >
                                                    {link.label}
                                                </button>
                                            </li>
                                        ))}

                                        {/* Flecha de página siguiente */}
                                        {paginationData.links[paginationData.links.length - 1].url && (
                                            <li className="page-item">
                                                <button
                                                    className="page-link"
                                                    onClick={() => handlePageChange(paginationData.next_page_url)}
                                                >
                                                    Next &raquo;
                                                </button>
                                            </li>
                                        )}
                                    </ul>
                                </nav>
                            )}
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}
export default ProductList;
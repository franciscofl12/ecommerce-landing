import React from 'react';

const Product = ({ product,onAddToCart  }) => {

    const handleAddToCart = () => {
        onAddToCart(product);
      };

    return (
        <div className="mx-auto">
            <div className="w-72 h-fit group">
                <div className="relative overflow-hidden">
                    <img className="h-96 w-full object-cover" src={product.image.src}
                        alt={product.image.alt} />
                    <div className="absolute h-full w-full flex items-end justify-bottom -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="font-archivo w-full text-base tracking-widest bg-black text-white py-2 px-8 uppercase" onClick={() => handleAddToCart(product)}>ADD TO CART</button>
                    </div>
                </div>
                <div className="mt-2">
                    <h3 className="font-archivo font-bold text-gray-400 capitalize text-base">{product.category}</h3>
                    <h2 className="font-archivo font-bold text-black md:text-2xl text-xl truncate">{product.name}</h2>
                    <p className="font-archivo font-normal text-gray-500 md:text-xl text-base">${product.price}</p>
                </div>
            </div>
        </div>
    );
};


export default Product;
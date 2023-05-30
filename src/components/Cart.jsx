import React, { useState } from 'react';

const ShoppingCart = ({ cartItems, onClearCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const clearCart = () => {
    onClearCart();
  };

  return (
    <div className='relative mr-14'>
      <div className="md:flex hidden items-center justify-center mt-4 w-4 h-4 bg-black text-white relative">
        <div className="cart-badge cursor-pointer" onClick={toggleCart}>
          {cartItems.length}
        </div>
      </div>
      {isCartOpen && (
        <div className="absolute border-gray-200 border-2 p-4 mt-2 z-20 bg-white right-0 float-right">
          <div className='flex justify-end'>
            <svg className='cursor-pointer' onClick={toggleCart} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L20 20" stroke="black" stroke-width="4" />
              <path d="M2 20L20 2" stroke="black" stroke-width="4" />
            </svg>
          </div>
          <div className="pb-3">
            {cartItems.map((item, index) => (
              <div key={index} className='grid grid-cols-5 pt-3'>
                <div className='col-span-3'>
                  <h2 className='productName pt-1 truncate '>{item.name}</h2>
                  <h3 className='productPrice'>${item.price}</h3>
                </div>
                <div className='col-span-2'>
                  <img className='w-full h-20 object-cover' src={item.image.src} alt={item.image.alt}/>
                </div>
              </div>
            ))}
          </div>
          <div className='border-t pt-3 border-gray-200'>
            <button className=" w-full text-base tracking-widest bg-white border-black border-4 text-black py-2 mr-60 uppercase" onClick={clearCart}>CLEAR</button>
          </div>

        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

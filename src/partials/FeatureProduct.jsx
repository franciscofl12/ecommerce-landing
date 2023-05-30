import React from "react";
import imageDay from '../assets/imageday.png';

function FeatureProduct() {
    return (
        <section>
            <div className="grid grid-cols-2 items-center space-between pt-12">
                <h2 className="font-archivo col-span-2 md:col-span-1 font-bold text-2xl leading-9 text-black">Samurai King Resting</h2>
                <div className="flex justify-end col-span-2 md:col-span-1 order-last md:order-none">
                    <button className="font-archivo md:w-1/3 w-full text-base tracking-widest bg-black text-white py-2 px-8 uppercase">Add to cart</button>
                </div>
                <div className="relative py-6 col-span-2">
                    <img src='https://gyazo.com/784307061eb5f953965c3c9998c7c63b.png' alt="Photo of the day" className="w-full" />
                    <div className="absolute bg-white flex items-center bottom-0 left-0 py-4 px-8">
                        <p className="font-archivo font-bold text-black text-base pb-4">
                            Photo of the day
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-12 mt-6 border-b-4 pb-40 border-secondary">
                <div className="md:col-span-2 col-span-3 md:w-4/5 w-full">
                    <h2 className="font-archivo font-bold text-black text-lg mb-8">
                        About the Samurai King Resting
                    </h2>
                    <p className="font-archivo font-bold text-gray-600 text-lg mb-2">Pets</p>
                    <p className="font-archivo font-normal text-gray-600 text-base mb-8">
                        So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book. So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder
                    </p>
                    <p className='font-archivo font-normal text-gray-600 text-base mb-4'>
                        text to mockup various fonts for a type specimen book. So how did the classical Latin become so incoherent? According to McClintock.
                    </p>
                </div>
                <div className="col-span-3 md:col-span-1">
                    <h2 className="font-archivo font-bold text-black text-left md:text-right text-lg mb-8">
                        People also buy
                    </h2>
                    <div className='grid grid-cols-3 gap-6'>
                        <div className="flex flex-col items-start">
                            <img src="https://technical-frontend-api.bokokode.com/img/Product_3.png" alt="Product" className="w-117 h-147 mb-2" />
                            <p className="font-archivo font-bold text-gray-600 text-xs mb-1">Food</p>
                            <p className="font-archivo font-bold text-black text-sm mb-1">Egg Balloon</p>
                            <p className="font-archivo font-normal text-gray-600 text-sm">$93.89</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <img src="https://technical-frontend-api.bokokode.com/img/Product_3.png" alt="Product" className="w-117 h-147 mb-2" />
                            <p className="font-archivo font-bold text-gray-600 text-xs mb-1">Food</p>
                            <p className="font-archivo font-bold text-black text-sm mb-1">Egg Balloon</p>
                            <p className="font-archivo font-normal text-gray-600 text-sm">$93.89</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <img src="https://technical-frontend-api.bokokode.com/img/Product_3.png" alt="Product" className="w-117 h-147 mb-2" />
                            <p className="font-archivo font-bold text-gray-600 text-xs mb-1">Food</p>
                            <p className="font-archivo font-bold text-black text-sm mb-1">Egg Balloon</p>
                            <p className="font-archivo font-normal text-gray-600 text-sm">$93.89</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}


export default FeatureProduct;
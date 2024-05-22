

import React, { useRef } from 'react';
import Cart from './Cart';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const HorizontallScollCard = ({ data = [], heading, trending,media_type }) => {
    const containerRef = useRef();

    const handleNext = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 300;
        }
    };

    const handlePrevious = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 300;
        }
    };

    return (
        <div>
            <div className='container mx-auto px-3 py-10'>
                <h2 className='text-xl lg:text-2xl font-bold mb-3 text-white'>{heading}</h2>
                <div className='relative'>
                    <div
                        ref={containerRef}
                        className='grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-x-scroll relative z-10 scroll-smooth transition-all'
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {data.map((item, index) => (
                            <Cart key={item.id + "heading" + index} data={item} index={index + 1} trending={trending} media_type={media_type}/>
                        ))}
                    </div>
                    <div className='absolute top-0 w-full h-full hidden lg:flex items-center justify-between px-5'>
                        <button
                            onClick={handlePrevious}
                            className='bg-white p-1 rounded-full text-xl z-10 text-black'
                        >
                            <FaAngleLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            className='bg-white p-1 rounded-full text-xl z-10 text-black'
                        >
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontallScollCard;

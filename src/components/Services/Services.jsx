import React from 'react';
import { FaBeer, FaCoffee,  FaLemon } from 'react-icons/fa';


const Services = () => {
    return (
        <div>
            <h1 className='mt-24 mb-5 text-5xl font-bold'>Our Services</h1>
            <h4 className='text-xl mb-10'>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</h4>
            <div className='grid grid-cols-3 mb-24'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                    <FaCoffee className='text-6xl'></FaCoffee>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Breakfast</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content.</p> 
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                    {/* <BiRestaurant></BiRestaurant> */}
                    <FaLemon className='text-6xl'></FaLemon>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Lunch</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content.</p> 
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                    <FaCoffee className='text-6xl'></FaCoffee>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Dinner</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content.</p> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
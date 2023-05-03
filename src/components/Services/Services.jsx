import React from 'react';

const Services = () => {
    return (
        <div>
            <h1 className='mt-24 mb-5 text-5xl font-bold'>Our Services</h1>
            <h4 className='text-xl'>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</h4>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
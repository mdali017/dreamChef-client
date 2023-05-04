import React from 'react';

const AllChefInfo = ({allChef}) => {
    console.log(allChef)
    const {ChefName, ChefPicture} = allChef;
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-5 pt-10 ">
                    <img src={ChefPicture} alt="Shoes" className="rounded-xl" style={{height: '400px', width: '500px'}} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{ChefName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllChefInfo;
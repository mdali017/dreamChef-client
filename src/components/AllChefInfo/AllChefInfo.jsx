import React from 'react';
import { Link } from 'react-router-dom';

const AllChefInfo = ({allChef}) => {
    // console.log(allChef)
    const {id, ChefName, ChefPicture, YearsOfExperiance, NumbersOfRecipes, Likes} = allChef;
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-5 pt-10 ">
                    <img src={ChefPicture} alt="Shoes" className="rounded-xl" style={{height: '400px', width: '500px'}} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{ChefName}</h2>
                    <p>{YearsOfExperiance}</p>
                    <div>
                        <p>Numbers of Recipes: {NumbersOfRecipes}</p>
                        <p>Likes: {Likes}</p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/allChef/${id}`} className="btn btn-primary"> View Recipes Button</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllChefInfo;
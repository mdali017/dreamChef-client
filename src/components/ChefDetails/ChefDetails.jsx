import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ChefDetails = () => {
    const { id } = useParams()
    const [details, setDetails] = useState([])
    const [buttonState,setButtonState]=useState(false)


    console.log(details)
    const { ChefName, ChefPicture, NumbersOfRecipes, Likes, YearsOfExperiance } = details

    useEffect(() => {
        fetch(`https://dreamchefserver-mdali017.vercel.app/allChef/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    

    const handleFavorite = () =>{
        toast(`Added To Your Favorite: ${ChefName}!`)
        setButtonState(true)
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={ChefPicture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='p-14 border'>
                        <h1 className="text-5xl font-bold">Hi This is {ChefName}</h1>
                        <p className="py-6 text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='grid grid-cols-2 mt-16 mb-10'>
                            <p className='text-xl'>Likes : <span className='text-green-600 font-bold'>{Likes}</span></p>
                            <p className='text-xl'>Number of Recipes : <span className='text-green-600 font-bold'>{NumbersOfRecipes}</span></p>
                        </div>
                        <div>
                            <h3>Recipe Name: </h3>
                            <ul className="menu  w-[50%] p-2 rounded-box">
                                <li><a>1. Garlic Butter Shrimp Scampi</a></li>
                                <li><a>2. Slow Cooker Beef Stew</a></li>
                                <li><a>3. Lemon Herb Roasted Chicken</a></li>
                               
                            </ul>
                        </div>
                        <p className='text-left font-bold mb-3'>Exparience:{YearsOfExperiance}</p>
                        <p className='text-left font-extrabold'>Rating: 4.5/5</p>
                        <div className='text-left mt-10'>
                            <button onClick={handleFavorite}  disabled={buttonState} className="btn btn-primary">Favorite</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ChefDetails;
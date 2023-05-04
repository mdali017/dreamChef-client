import React, { useEffect, useState } from 'react';
import AllChefInfo from '../AllChefInfo/AllChefInfo';

const AllChef = () => {
    const [allChefData, setAllChefData] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/allChef')
            .then(res => res.json())
            .then(data => setAllChefData(data))
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div>
            <h1 className='mt-24 mb-5 text-5xl font-bold'>Our Services</h1>
            <h4 className='text-xl mb-10'>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</h4>

            <div className='grid md:grid-cols-3 gap-10 mb-24'>
                {
                    allChefData.map(allChef => <AllChefInfo
                        key={allChef.id}
                        allChef={allChef}
                    ></AllChefInfo>)
                }
            </div>
        </div>
    );
};

export default AllChef;
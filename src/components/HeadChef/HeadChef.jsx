import React from 'react';

const HeadChef = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mb-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg?auto=compress&cs=tinysrgb&w=600" className="w-50 rounded-lg shadow-2xl" />
                    <div className='p-10'>
                        <h1 className="text-5xl font-bold">Our Head Chef</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden.</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search</p>
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadChef;
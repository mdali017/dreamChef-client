import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card w-full bg-primary text-primary-content mt-24">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-extralight"> *** Tell us the differences between uncontrolled and controlled components.</h2>
                    <div className='grid grid-cols-2 gap-20'>
                        <div className='text-left'>
                            <h4 className='mt-5 mb-5 text-xl font-bold'>Controlled Components</h4>
                            <p className='mb-4'>1. A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a dumb component.</p>
                            <p className='mb-4'>2. A controlled component is a component that renders form elements and controls them by keeping the form data in the component's state.</p>
                            <p className='mb-4'>3. Without complex words, Controlled components are components rendering form elements such as input tag whose value is controlled by react and react alone</p>
                        </div>
                        <div className='text-left'>
                            <h4 className='mt-5 mb-5 text-xl font-bold'>Controlled Components</h4>
                            <p className='mb-4'>1. Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.</p>
                            <p className='mb-4'>2. An uncontrolled component is a component that renders form elements, where the form element's data is handled by the DOM (default DOM behavior). To access the input's DOM node and extract its value you can use a ref.</p>
                            <p className='mb-4'>3. Uncontrolled components are components that render form elements such as <input /> whose value can be handled by the Dom element and one major difference between controlled and uncontrolled is the value attribute definition. for uncontrolled, we have a defaultValue instead or no value at all sometimes.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card w-[50%] bg-primary text-primary-content mt-10">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-extralight">How to validate React props using PropTypes??</h2>
                    <div className='text-left'>
                        <p className='mb-4'>1. Installing the prop-types Library and Basic Usage To install the prop-types library, we run: npm i prop-types ...</p>
                        <p className='mb-4'>2. More Complex Prop Types In addition to validating arrays and primitive value prop types, we can also use prop-types to validate more complex types. Validate React Entity Types</p>
                        <p className='mb-4'>3. Validate Enum Value</p>
                        <p className='mb-4'>4. Validate Props That Can Be One of Multiple Types</p>
                        <p className='mb-4'>5. Required Props</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
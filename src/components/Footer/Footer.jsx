import React from 'react';
import {  FaRebel  } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div className='grid justify-center'>
                <FaRebel className='h-16 w-16 mx-auto text-blue-500'></FaRebel>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/register' className="link link-hover">Register</Link>
                    <Link to='/login' className="link link-hover">Login</Link>
                    <Link to='/blog' className="link link-hover">Blog</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/register' className="link link-hover">Register</Link>
                    <Link to='/login' className="link link-hover">Login</Link>
                    <Link to='/blog' className="link link-hover">Blog</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/register' className="link link-hover">Register</Link>
                    <Link to='/login' className="link link-hover">Login</Link>
                    <Link to='/blog' className="link link-hover">Blog</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const SocialLogIn = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Log In with </h2>

            <div className='space-y-3'>
                <button className='btn btn-outline w-full'><FaGoogle /> Log In with Google</button>
                <button className='btn btn-outline w-full'><FaFacebook /> Log In with Facebook</button>
            </div>
        </div>
    );
};

export default SocialLogIn;
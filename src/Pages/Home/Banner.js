import React from 'react';
import './Banner.css'
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import Button from '../Shared/Button';

const Banner = () => {
    return (
        <div>
            <div style={{
                background: `url(${bg})`
            }} class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className='max-w-sm' src={chair} />
                    <div className='px-12'>
                        <h1 class="text-5xl font-bold">When you need answers, Best Doctors can help</h1>
                        <p class=" py-6">Get an Expert Medical Opinion from one of our world-renowned specialists so you can have the answers and confidence to make informed decisions about your health.</p>
                        <Button></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

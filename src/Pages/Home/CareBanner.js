import React from 'react';
import Button from '../Shared/Button';
import treatment from '../../assets/images/treatment.png'

const CareBanner = () => {
    return (
        <div class="hero h-75">
            <div class="hero-content flex-col lg:flex-row">
                <img className='max-w-sm' src={treatment} />
                <div className='ml-32 mr-12'>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, <br /> on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button></Button>
                </div>
            </div>
        </div>
    );
};

export default CareBanner;
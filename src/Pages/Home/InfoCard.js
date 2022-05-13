import React from 'react';
import './InfoCard.css'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const InfoCard = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 m-12 justify-center'>
            <div class="clock card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='pt-3 lg:pl-3' src={clock} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Opening Hour</h2>
                    <p>Corporate Office Hour: 9 am To 6 pm.</p>
                </div>
            </div>
            <div class= "location card lg:card-side bg-base-100 shadow-xl bg-accent">
                <figure><img className='pt-3 lg:pl-3' src={marker} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Visit Our Location</h2>
                    <p>Kallyanpur, 1207 Mirpur,<br /> Dhaka Division, Bangladesh</p>
                </div>
            </div>
            <div class="contact card lg:card-side bg-base-100 shadow-xl bg-accent">
                <figure><img className='pt-3 lg:pl-3' src={phone} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Helpline</h2>
                    <p>09606 35 35 35</p>
                    <p>01757 11 11 77</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
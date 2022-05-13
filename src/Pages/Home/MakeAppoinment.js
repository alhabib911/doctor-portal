import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';
import './MakeAppoinment.css'

const MakeAppoinment = () => {
    return (
        <section className='appionment'>
            <div style={{
                background: `url(${appointment})`
            }} className='make-appoinment m-12'>
                <div className="image">
                    <img src={doctor} alt="" />
                </div>
                <div className="appionment-details">
                    <h1 className='text-primary text-xl'>Appointment</h1>
                    <h2 className='text-white text-2xl	'>Make an appointment Today</h2>
                    <p className='text-white mt-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className='mt-4'>
                        <Button></Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;
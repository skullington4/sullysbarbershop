import React from 'react';
import SullyLogo from '../Images/SullyLogo.JPG';

const Home = () => {

    return (
        <div className="top centerC">
            <img className='brandLogo' src={SullyLogo} alt="Sully's Logo" />

            <div className='hours centerC'>
                <h2>Hours</h2>
                <p>Monday: Closed</p>
                <p>Tuesday: 9am-5pm</p>
                <p>Wednesday: 9am-5pm</p>
                <p>Thursday: 9am-5pm</p>
                <p>Friday: 9am-5pm</p>
                <p>Saturday: 9am-6pm</p>
                <p>Sunday: Closed</p>
            </div>

            <div className='location centerC'>
                <h2>Location</h2>
                <p>4606 W Ridge Rd, Spencerport, NY 14559</p>
            </div>

            <div className='services centerC'>
                <h2>Services</h2>
                <div className='services centerC'>
                    <div className='service centerR'>
                        <div className='service-name'>HAIRCUT</div>
                        <div>.....................................</div>
                        <div className='service-price'>$17</div>
                    </div>
                    <div className='service centerR'>
                        <div className='service-name'>THE FULL SHOW</div>
                        <div>......................</div>
                        <div className='service-price'>$25</div>
                    </div>
                    <div className='service centerR'>
                        <div className='service-name'>TAPER & EDGE UP</div>
                        <div>..................</div>
                        <div className='service-price'>$15</div>
                    </div>
                    <div className='service centerR'>
                        <div className='service-name'>FIRST RESPONDERS</div>
                        <div>...............</div>
                        <div className='service-price'>$15</div>
                    </div>
                    <div className='service centerR'>
                        <div className='service-name'>SENIORS (OVER 65)</div>
                        <div>................</div>
                        <div className='service-price'>$15</div>
                    </div>
                    <div className='service centerR'>
                        <div className='service-name'>FACE SHAVE</div>
                        <div>...............................</div>
                        <div className='service-price'>$20</div>
                    </div>
                    <div className='service centerR'>
                        <div className='service-name'>BEARD</div>
                        <div>.............................................</div>
                        <div className='service-price'>$8</div>
                    </div>
                    <div className='service centerR'>
                        <div className='service-name'>WASH</div>
                        <div>..............................................</div>
                        <div className='service-price'>$5</div>
                    </div>
                </div>
            </div>

            <div className='contact'>
            </div>

        </div>
    )
}


export default Home;
import TimsBarberShop from '../Images/TimsBarberShop.JPG'

const About = () => {


    return (
        <div className="top centerC">
            <h1>Meet Tim</h1>
            <div>
                <img className='timLogo' src={TimsBarberShop} alt="Sully's Logo" />

                <p className='aboutP'>Tim is a life long barber who got his master barber certificate in 2015.
                    He enjoys cutting hair and making people feel good about themselves.
                    He has been cutting hair for over 20 years and founded Sully's over 8 years ago.
                    He is a father of 1 and enjoys spending time with his son.
                    When Tim is not at the shop, you can find him fishing, hunting or anything in the outdoors.

                </p>
            </div>
        </div>
    );
}

export default About;
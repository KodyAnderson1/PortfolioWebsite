import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='main-info'>
                <h1>Software Development</h1>
                <Typed
                    className='typed-text'
                    strings={['Java', 'C++', 'JavaScript', 'HTML / CSS', 'React / Bootstrap']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className='btn-main-offer'>Contact Me</a>
            </div>
        </div>
    )
}

export default Header
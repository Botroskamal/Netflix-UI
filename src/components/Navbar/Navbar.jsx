import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    
    window.onscroll = () => {
        setIsScrolled((prevState) => {
            return window.scrollY === 0 ? false : true;
        })
        return () => (window.onscroll = null);
    }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className='left'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" />
                    <ul>
                        <li><a>Homepage</a></li>
                        <li><a>Series</a></li>
                        <li><a>Movies</a></li>
                        <li><a>New and Popular</a></li>
                        <li><a>My List</a></li>
                    </ul>
                </div>
                <div className="right">
                    <Search className='icon' />
                    <span>Kid</span>
                    <Notifications className='icon' />
                    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className="profile">
                        <ArrowDropDown className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar

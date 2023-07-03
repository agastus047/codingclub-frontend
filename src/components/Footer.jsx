import Logo from '../assets/coding club dp copy 2.svg'
import { Link } from 'react-router-dom';

const Footer = () => {

    return(
        <div className='flex flex-col sm:flex-row sm:justify-center items-center min-[840px]:gap-28 px-7 relative pb-24'>
            <img src={Logo} className='h-40 sm:h-64'></img>
            <div className='flex gap-10 min-[850px]:gap-28 max-[640px]:text-center'>
                <div className='flex flex-col gap-2 sm:gap-7'>
                <Link to="/" className="hover:opacity-70">Home</Link>
                <Link to="/events" className="hover:opacity-70">Events</Link>
                <Link to="/execom" className="hover:opacity-70">Team</Link>
                <Link to="/resources" className="hover:opacity-70">Resources</Link>
                </div>
                <div className="flex flex-col gap-2 sm:gap-7">
                    <Link to="/" className="hover:opacity-70">Terms and Conditions</Link>
                    <Link to="/" className="hover:opacity-70">Privacy Policy</Link>
                </div>
            </div>
            <div className='absolute bottom-10 sm:left-1/2 sm:translate-x-[-50%] flex flex-col'>
                <hr className='border-white border-t-2'></hr>
                <div className='text-center text-xs mt-2'>Coding Club TKMCE - All Rights Reserved</div>
            </div>
        </div>
    );
};

export default Footer;
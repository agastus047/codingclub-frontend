import { Link } from "react-router-dom";
import Logo from '../assets/coding club dp copy 2.svg'

const Header = ({setVisible}) => {

    return(
        <div className="flex h-24 xl:h-28 items-center px-9 xl:px-14">
            <img src={Logo} className="h-full mr-auto" alt="logo"></img>
            <button className="sm:hidden" onClick={()=> setVisible(true)}><span className="pi pi-bars"></span></button>
            <div className="hidden sm:flex sm:gap-11">
                {/* <Link to=''>Link 1</Link>
                <Link to=''>Link 2</Link> */}
                <div>Link 1</div>
                <div>Link 2</div>
            </div>
        </div>
    );
};

export default Header;
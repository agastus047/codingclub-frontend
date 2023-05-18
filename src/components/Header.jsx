import { Link } from "react-router-dom";

const Header = ({setVisible}) => {

    return(
        <div>
            <div>LOGO</div>
            <button className="sm:hidden" onClick={()=> setVisible(true)}><span className="pi pi-bars"></span></button>
            <div className="hidden sm:block">
                {/* <Link to=''>Link 1</Link>
                <Link to=''>Link 2</Link> */}
                <div>Link 1</div>
                <div>Link 2</div>
            </div>
        </div>
    );
};

export default Header;
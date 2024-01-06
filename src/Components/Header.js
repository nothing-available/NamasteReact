import HeaderLogo from "../Images/header.png";


const Title = () => {
    return (
        <a href="/">
            <img className="logo" src={HeaderLogo} alt="Header Logo" />
        </a>
    );
};



const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
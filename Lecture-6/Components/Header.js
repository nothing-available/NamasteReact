const Tittle = () => {
    return (
      <a href='/'>
        <img
          className='logo'
          alt='logo'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwIQUR_NLPVdFuaW26sMK8p895Orkh1NWLa3NoNFHKfM2_WyPLZPfTVEUrZ5C_fUIQN64' />
      </a>
    );
  };
  
  const Header = () => {
    return (
      <div className='header'>
        <Tittle />
        <div className='nav-items'>
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
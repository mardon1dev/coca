import Logo from "./logo.svg"
const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
            <div className='nav'>
                <img src={Logo} alt="Coca" />
                <ul className="nav__menu">
                    <li className="nav__menu--item"><a className="nav__menu--link" href=""></a></li>
                    <li className="nav__menu--item"><a className="nav__menu--link" href=""></a></li>
                    <li className="nav__menu--item"><a className="nav__menu--link" href=""></a></li>
                    <li className="nav__menu--item"><a className="nav__menu--link" href=""></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header;
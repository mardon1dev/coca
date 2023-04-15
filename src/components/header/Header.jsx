import Logo from "./logo.svg"
const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
            <div className='nav'>
                <img src={Logo} alt="Coca" />
            </div>
        </div>
    </div>
  )
}

export default Header;
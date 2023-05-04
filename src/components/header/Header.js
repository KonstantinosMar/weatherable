import Logo from "../../assets/images/weatherable-logo.png"
import LogoMobile from "../../assets/images/weatherable-logo-mobile.png"

import './Header.scss'

const Header = () => {
    return (
        <header>
            {/*<img src={Logo} alt="Weatherable Logo" />*/}
            <picture>
                <source media="(min-width:650px)" srcSet={Logo} />
                <img src={LogoMobile} alt="Logo"/>
            </picture>
        </header>
    )
}

export default Header
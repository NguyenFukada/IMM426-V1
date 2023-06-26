import logo from "../../src/assets/images/logo.png"
import './Header.scss'
const Header = () => {
    return (
        <div>
            <div className="header-content">
                <div className="title1">
                    OFFICIAL: Sensitive
                    Personal Privacy
                </div>
                <div className="title2">
                    <img src={logo} className="image"></img>
                    <h1 id="_1b" className="wc-heading">Online Lodgement</h1>
                </div>
                <div className="title3">Application for a Work and Holiday visa</div>
            </div>
        </div>
    )
}
export default Header;
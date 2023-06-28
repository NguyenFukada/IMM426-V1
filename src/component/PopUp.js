import zalo from '../assets/images/558_6.png'
import facebook from '../assets/images/blue-social-media-logo_197792-1759.png'
import qrcode from '../assets/images/QRcode.png'
import facebookimg from '../assets/images/FaceBookImg.png'
import './PopUp.scss'
import { useNavigate } from 'react-router-dom';
const PopUp = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className='head'></div>
            <div style={{ backgroundColor: "#e4e8ec" }}>
                <div className='homepage-container' >
                    <div className='f1'></div>
                    <div className='homepage-content'>
                        <div className='title-1'>
                            THEO DÕI CHÚNG TÔI ĐỂ NHẬN ĐƯỢC CÁC THÔNG TIN MỚI NHẤT
                        </div>
                        <div className='title-3'>
                            <div className='editfacebook'
                                onClick={() => window.open('https://www.facebook.com/vassvisa')}>
                                <button className='btn'>
                                    Fanpage FaceBook
                                </button>
                                <img src={facebook} className='facebook' />
                            </div>
                            <div className='editzalo'
                                onClick={() => window.open('https://zalo.me/g/raoxbr701')}>
                                <button className='btn' >
                                    App Auto Call IMMI
                                </button>
                                <img src={zalo} className='zalo'></img>
                            </div>
                            <div className='edit-demo'>
                                <button className='btn'
                                    onClick={() => navigate('/demopage')}>
                                    ĐI ĐẾN TRANG DEMO
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='content-right'>
                        <img src={qrcode} className='up-img' />
                        <img src={facebookimg} className='down-img' />
                    </div>
                    <div className='f2'></div>
                </div>
            </div>

        </>
    )
}

export default PopUp
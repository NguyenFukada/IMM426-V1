import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './SubmitPage.scss'
const SubmitPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className='submit-content'>
                <div className='left'>
                    <span>Transaction Reference Number (TRN): EGOY85FCFC</span>
                    <div className='title-submit'>Submit Application</div>
                    <div>This application is now ready to submit. You can submit it now or return to your account and submit it at a later date.</div>
                    <div>Your application will not be processed until after it is submitted.</div>
                    <button onClick={() => navigate('/fourteenpage')} style={{ marginLeft: "10px" }}>Previous</button>
                    <button style={{marginLeft:"30em", marginTop: "10px"}}>Submit Now</button>
                </div>
                <div className="right">
                    <div className="up-content">
                        <div className="title-right">Related Links</div>
                        <div className="content-right">
                            <div>Subclass 462 information</div>
                            <div>Health details</div>
                            <div>Visa Pricing Estimator</div>
                            <div>Processing times</div>
                        </div>
                    </div>
                    <div className="down-content">
                        <div className="title-right">Help and Support</div>
                        <div className="content-right">
                            <div>Contact us</div>
                            <div>Client service charter</div>
                            <div>Client feedback</div>
                            <div>ImmiAccount support</div>
                            <div>Translation services</div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default SubmitPage;
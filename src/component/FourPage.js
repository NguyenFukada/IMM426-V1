import { Form } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import './FourPage.scss'
import Header from "./Header";
const FourPage = () => {
    const navigate = useNavigate();
    return (
        <>
        <Header/>
            <div className="fourth-content">
                <div className="left"><div className="fourth-page" style={{ fontSize: "20px", fontWeight: "600" }}>Additional identity questions</div>
                    <div className="fourth-page">Provide further details below, where available.</div>
                    <div className="fourth-page">Previous travel to Australia</div>
                    <div className="fourth-page">Has this applicant previously travelled to Australia or previously applied for a visa?</div>
                    <div class="form-check-label" >
                        <div className="check-radio"></div>
                        <Form className="check-radio-answer">
                            {['radio'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                    <Form.Check
                                        type={type}
                                        id={`question1-${type}`}
                                        label={"Yes"}

                                    />
                                    <Form.Check
                                        type={type}
                                        id={`question1-${type}`}
                                        label={"No"}
                                    />
                                </div>
                            ))}
                        </Form>
                    </div>
                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                        <button onClick={() => navigate('/thirdpage')} >Previous</button>
                        <button onClick={() => navigate('/fifthpage')} style={{ marginLeft: "60em" }}>Next</button>

                    </div>
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

export default FourPage;
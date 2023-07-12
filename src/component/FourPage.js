import { Form } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import './FourPage.scss'
import { useEffect } from 'react';
import { useState } from 'react';
import Header from "./Header";
import _, { cloneDeep } from "lodash"
const FourPage = () => {
    const navigate = useNavigate();

    const [SaveDataPageFour, setSaveDataPageFour] = useState({
        QP4: {
            Yes: false,
            No: false
        }
    })
    const handleOnChange = (Flag, Question) => {
        let CloneState = _.cloneDeep(SaveDataPageFour);

        if (Flag === "Yes") {
            CloneState[Question].Yes = true;
            CloneState[Question].No = false;
        } else if (Flag === "No") {
            CloneState[Question].Yes = false;
            CloneState[Question].No = true;
        }
        setSaveDataPageFour(CloneState)
    }
    useEffect(() => {
        const items = window.localStorage.getItem('SaveDataPageFour');
        console.log("get local storage: ", items);
        if (items) {
            setSaveDataPageFour(JSON.parse(items));
        }
    }, [])
    useEffect(() => {
        window.localStorage.setItem('SaveDataPageFour', JSON.stringify(SaveDataPageFour))
    }, [SaveDataPageFour])

    return (
        <>
            <Header />
            <div className="fourth-content">
                <div className="left"><div className="fourth-page" style={{ fontSize: "20px", fontWeight: "600" }}>Additional identity questions</div>
                    <div style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>5/16</div>
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
                                        onChange={() => handleOnChange("Yes", "QP4")} checked={SaveDataPageFour.QP4.Yes}
                                    />
                                    <Form.Check
                                        type={type}
                                        id={`question1-${type}`}
                                        label={"No"}
                                        onChange={() => handleOnChange("No", "QP4")} checked={SaveDataPageFour.QP4.No}
                                    />
                                </div>
                            ))}
                        </Form>
                    </div>
                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                        <button onClick={() => navigate('/thirdpage')} style={{ marginLeft: "10px" }}>Previous</button>
                        <button onClick={() => navigate('/fifthpage')} style={{ marginLeft: "auto", marginRight: "auto" }}>Next</button>

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
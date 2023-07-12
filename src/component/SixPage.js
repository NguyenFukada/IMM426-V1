
import "react-datepicker/dist/react-datepicker.css";
import './SixPage.scss'
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import _, { cloneDeep } from "lodash"
import { useEffect, useState } from "react";
const SixPage = () => {

    const data = {
        QM: {
            Ans1: false,
            Ans2: false,
            Ans3: false,
            Ans4: false,
        },
        Email: "",
    }
    const [SaveDataPageSix, setSaveDataPageSix] = useState(data)
    const handleOnChange = (Flag, Question) => {
        let CloneState = _.cloneDeep(SaveDataPageSix);
        if (Question === "QM") {
            CloneState.QM.Ans1 = false;
            CloneState.QM.Ans2 = false;
            CloneState.QM.Ans3 = false;
            CloneState.QM.Ans4 = false;
            CloneState[Question][Flag] = true;
        }
        setSaveDataPageSix(CloneState)
    }
    const HandleChangeInputText = (value, Title) => {
        let CloneState = _.cloneDeep(SaveDataPageSix);
        CloneState[Title] = value;

        setSaveDataPageSix(CloneState)
    }

    useEffect(() => {
        const items = window.localStorage.getItem('SaveDataPageSix');
        if (items) {
            setSaveDataPageSix(JSON.parse(items));
        }
    }, [])
    useEffect(() => {
        window.localStorage.setItem('SaveDataPageSix', JSON.stringify(SaveDataPageSix))
    }, [SaveDataPageSix])

    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className="sixpage-container">
                <div className="left">
                    <div style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>7/16</div>
                    <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Authorised recipient</div>
                    <div style={{ paddingLeft: "10px" }}>Does the applicant authorise another person to receive written correspondence on their behalf?</div>
                    <div style={{ paddingLeft: "10px" }}>This authorises the department to send the authorised person all written correspondence that would otherwise be sent directly to the applicant.</div>
                    <div className="check-radio-answer">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault2"
                                checked={SaveDataPageSix.QM.Ans1}
                                onChange={() => handleOnChange("Ans1", "QM")} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                No
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault2_1"
                                checked={SaveDataPageSix.QM.Ans2}
                                onChange={() => handleOnChange("Ans2", "QM")} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Yes, a registered migration agent
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault2_2"
                                checked={SaveDataPageSix.QM.Ans3}
                                onChange={() => handleOnChange("Ans3", "QM")} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Yes, a legal practitioner
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault2_3"
                                checked={SaveDataPageSix.QM.Ans4}
                                onChange={() => handleOnChange("Ans4", "QM")} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Yes, another person
                            </label>
                        </div>
                    </div>
                    <div style={{ paddingLeft: "10px" }}>This person is referred to as the 'authorised recipient'</div>
                    <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Electronic communication</div>
                    <div style={{ paddingLeft: "10px" }}>The Department prefers to communicate electronically as this provides a faster method of communication.</div>
                    <div style={{ paddingLeft: "10px" }}>All correspondence, including notification of the outcome of the application will be sent to:</div>
                    <div className='parent'>
                        <label className="title">Email address</label>
                        <span className="inputform"><input className='form-control col-6'
                            value={SaveDataPageSix.Email}
                            onChange={(Event) => HandleChangeInputText(Event.target.value, "Email")}></input></span>
                    </div>
                    <div style={{ paddingLeft: "10px" }}>Note: The holder of this email address may receive a verification email from the Department if the address has not already been verified. If the address holder receives a verification email, they should click on the link to verify their address before this application is submitted.</div>
                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                        <button onClick={() => navigate('/fifthpage')} style={{ marginLeft: "10px" }}>Previous</button>
                        <button onClick={() => navigate('/sevenpage')} style={{ marginLeft: "auto", marginRight: "auto" }}>Next</button></div>
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
export default SixPage;
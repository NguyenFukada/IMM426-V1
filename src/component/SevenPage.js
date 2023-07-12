import "react-datepicker/dist/react-datepicker.css";
import './SevenPage.scss'
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import { useSelector } from "react-redux";
import _, { cloneDeep } from "lodash"
import { useEffect, useState } from "react";
const SevenPage = () => {
    const account = useSelector(state => state.user.account);
    const navigate = useNavigate();

    const data = {
        Q1: {
            Yes: false,
            No: false
        },
    }
    const [SaveDataPageSeven, setSaveDataPageSeven] = useState(data)

    const handleOnChange = (Flag, Question) => {
        let CloneState = _.cloneDeep(SaveDataPageSeven);

        if (Flag === "Yes") {
            CloneState[Question].Yes = true;
            CloneState[Question].No = false;
        } else if (Flag === "No") {
            CloneState[Question].Yes = false;
            CloneState[Question].No = true;
        }
        setSaveDataPageSeven(CloneState)
    }

    useEffect(() => {
        const items = window.localStorage.getItem('SaveDataPageSeven');
        if (items) {
            setSaveDataPageSeven(JSON.parse(items));
        }
    }, [])
    useEffect(() => {
        window.localStorage.setItem('SaveDataPageSeven', JSON.stringify(SaveDataPageSeven))
    }, [SaveDataPageSeven])

    return (
        <>
            <Header />
            <div className="sevenpage-container">
                <div className="left">
                    <div style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>9/16</div>
                    <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Education</div>
                    <div className='Current-location'>
                        <span>Does the applicant meet the education requirements for this visa?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q1")} checked={SaveDataPageSeven.Q1.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q1")} checked={SaveDataPageSeven.Q1.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingLeft: "10px" }}>Give details of all past and current studies undertaken at secondary level or above.</div>
                    <table style={{ paddingLeft: "20px" }} className="table-second-page">
                        <tr>
                            <th>Qualification</th>
                            <th>Institution name</th>
                            <th>Course name</th>
                            <th>Date from</th>
                            <th>Date to</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <th>{account?.Qualification?.label ? account.Qualification.label : "default"}</th>
                            <th>{account?.Institution ? account.Institution : "default"}</th>
                            <th>{account?.Course ? account.Course : "default"}</th>
                            <th>{account?.DateFrom ? account.DateFrom : "default"}</th>
                            <th>{account?.DateTo ? account.DateTo : "default"}</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </table>
                    <button onClick={() => navigate('/detail-studies')}>Add</button>
                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                        <button onClick={() => navigate('/sixthpage')} style={{ marginLeft: "10px" }}>Previous</button>
                        <button onClick={() => navigate('/eightpage')} style={{ marginLeft: "auto", marginRight: "auto" }}>Next</button></div>
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
export default SevenPage;
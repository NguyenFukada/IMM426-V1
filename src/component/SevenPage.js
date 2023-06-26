import "react-datepicker/dist/react-datepicker.css";
import './SevenPage.scss'
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import { useSelector } from "react-redux";

const SevenPage = () => {
    const account = useSelector(state => state.user.account);
    const navigate = useNavigate();
    return (
        <>
        <Header/>
            <div className="sevenpage-container">
                <div className="left"><div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Education</div>
                    <div className='Current-location'>
                        <span>Does the applicant meet the education requirements for this visa?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
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
                        <button onClick={() => navigate('/sixthpage')} >Previous</button>
                        <div><button onClick={() => navigate('/eightpage')} style={{ marginLeft: "60em" }}>Next</button></div></div>
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
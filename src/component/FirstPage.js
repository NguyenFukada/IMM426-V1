import { useMemo, useState } from "react"
import { Form } from "react-bootstrap"
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
import countryList from 'react-select-country-list'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './FirstPage.scss'
import Header from "./Header";
const FirstPage = (props) => {
    const navigate = useNavigate();
    const options = [
        { value: 'Permanent Resident', label: 'Permanent Resident' },
        { value: 'Citizen', label: 'Citizen' },
        { value: 'Visitor', label: 'Visitor' },
        { value: 'Work Visa', label: 'Work Visa' },
        { value: 'No Legal Status', label: 'No Legal Status' },
        { value: 'Other', label: 'Other' },
        { value: 'Student', label: 'Student' }
    ]
    const [isSelected,setIsSelected] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [value, setValue] = useState('')
    const optionsCountry = useMemo(() => countryList().getData(), [])
    const changeHandler = value => {
        setValue(value)
    }
    
    return (
        <>
        <Header/>
            <div className="first-content">
                <div className="left" >
                    <div className="Current-location" style={{ fontSize: "20px", fontWeight: "600" }}>Application context</div>
                    <div className="Current-location">Current location</div>
                    <div className="Current-location">Give details of the applicant's current location.</div>
                    <div className='status'>
                        <span className='title-status'>Current location:</span>
                        <Select options={optionsCountry} className="select" />
                    </div>
                    <div className='status'>
                        <span className='title-status'>Legal status:</span>
                        <Select options={options} className="select" />
                    </div>
                    <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Current application</div>
                    <div className='Current-location'>
                        <span>Will the applicant be accompanied by dependent children at any time during their stay in Australia on this visa?</span>
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

                        <span>
                            Has the applicant been granted and entered Australia on a Working Holiday visa (subclass 417) before?
                        </span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" />
                                <label class="form-check-label" >
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" />
                                <label class="form-check-label" >
                                    No
                                </label>
                            </div>
                        </div>
                    </div>

                    <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Application Type</div>
                    <div className="Current-location">Select the type of work and holiday visa the applicant is applying for:</div>
                    <div className="check-radio-answer" style={{ paddingLeft: "20em" }}>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                First Work and Holiday visa (subclass 462)
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Second Work and Holiday visa (subclass 462)
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Third Work and Holiday visa (subclass 462)
                            </label>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Has the applicant been granted and entered Australia on a first Work and Holiday visa (subclass 462) before?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault3" />
                                    <label class="form-check-label" >
                                        Yes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault3" />
                                    <label class="form-check-label">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="Current-location" style={{ fontSize: "20px", fontWeight: "600" }}>Proposed arrival date</div>
                    <div className="DatePicker" style={{display:"flex"}}>
                        <div style={{paddingRight: "16em", paddingLeft: "10px"}}>Proposed arrival date</div>
                        <div className="child-date" ><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />  </div>
                    </div>
                    <div className='Current-location' style={{ fontSize: "20px", fontWeight: "600" }}>Government support</div>
                    <div className='Current-location'>
                        <span>Does the applicant have a letter of government support to attach to this visa application?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault4" />
                                    <label class="form-check-label" >
                                        Yes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault4" />
                                    <label class="form-check-label" >
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => navigate('/secondpage')} style={{ marginLeft: "60em", marginBottom: "10px" }}>Next</button>
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
export default FirstPage;
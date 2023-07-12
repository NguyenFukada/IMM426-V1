import { useEffect, useMemo, useState } from "react"
import { Form } from "react-bootstrap"
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
import countryList from 'react-select-country-list'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './FirstPage.scss'
import Header from "./Header";
import _, { cloneDeep } from "lodash"
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
    const [startDate, setStartDate] = useState(new Date());
    const optionsCountry = useMemo(() => countryList().getData(), [])



    const data = {
        currentLocation: "",
        LegalStatus: "",
        date: startDate,
        Q1: {
            Yes: false,
            No: false
        },
        Q2: {
            Yes: false,
            No: false
        },

        Q4: {
            Yes: false,
            No: false
        },
        Q5: {
            Yes: false,
            No: false
        },
        QM: {
            Ans1: false,
            Ans2: false,
            Ans3: false
        }
    }
    const [SaveDataPageOne, setSaveDataPageOne] = useState(data)

    const handleOnChange = (Flag, Question) => {
        let CloneState = _.cloneDeep(SaveDataPageOne);

        if (Flag === "Yes") {
            CloneState[Question].Yes = true;
            CloneState[Question].No = false;
        } else if (Flag === "No") {
            CloneState[Question].Yes = false;
            CloneState[Question].No = true;
        }
        if (Question === "QM") {
            CloneState.QM.Ans1 = false;
            CloneState.QM.Ans2 = false;
            CloneState.QM.Ans3 = false;
            CloneState[Question][Flag] = true;
        }
        setSaveDataPageOne(CloneState)
    }

    const ChangeNation = (value, Id) => {

        let CloneState = _.cloneDeep(SaveDataPageOne);
        CloneState[Id] = value;
        setSaveDataPageOne(CloneState)
    }

    const handleSetStartDate = (value) => {
        let CloneState = _.cloneDeep(SaveDataPageOne);

        CloneState.date = new Date(value);
        setSaveDataPageOne(CloneState)
    }

    useEffect(() => {
        const items = window.localStorage.getItem('SaveDataPageOne');

        if (items) {
            setSaveDataPageOne(JSON.parse(items));
        }
    }, [])
    useEffect(() => {
        window.localStorage.setItem('SaveDataPageOne', JSON.stringify(SaveDataPageOne))
    }, [SaveDataPageOne])

    return (
        <>
            <Header />

            <div className="first-content">
                <div className="left" >
                    <div style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>2/16</div>
                    <div className="Current-location" style={{ fontSize: "20px", fontWeight: "600" }}>Application context</div>
                    <div className="Current-location">Current location</div>
                    <div className="Current-location">Give details of the applicant's current location.</div>
                    <div className='status'>
                        <span className='title-status'>Current location:</span>
                        <Select options={optionsCountry} className="select"
                            value={SaveDataPageOne.currentLocation}
                            //selected={SaveDataPageOne.currentLocation}
                            //defaultValue={SaveDataPageOne.currentLocation}
                            onChange={(Event) => ChangeNation(Event, "currentLocation")} />

                    </div>
                    <div className='status'>
                        <span className='title-status'>Legal status:</span>
                        <Select options={options} className="select"
                            value={SaveDataPageOne.LegalStatus}
                            onChange={(Event) => ChangeNation(Event, "LegalStatus")} />
                    </div>
                    <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Current application</div>
                    <div className='Current-location'>
                        <span>Will the applicant be accompanied by dependent children at any time during their stay in Australia on this visa?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q1")} checked={SaveDataPageOne.Q1.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q1")}
                                    checked={SaveDataPageOne.Q1.No} />
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
                                <input class="form-check-input" type="radio" name="flexRadioDefault2"
                                    onChange={() => handleOnChange("Yes", "Q2")} checked={SaveDataPageOne.Q2.Yes} />
                                <label class="form-check-label" >
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q2")} checked={SaveDataPageOne.Q2.No} />
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
                            <input class="form-check-input" type="radio" name="flexRadioDefaultType" id="ans1"
                                checked={SaveDataPageOne.QM.Ans1}
                                onChange={() => handleOnChange("Ans1", "QM")}
                            />
                            <label class="form-check-label" for="flexRadioDefault2">
                                First Work and Holiday visa (subclass 462)
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefaultType"
                                onChange={() => handleOnChange("Ans2", "QM")}
                                checked={SaveDataPageOne.QM.Ans2} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Second Work and Holiday visa (subclass 462)
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefaultTypeAns3"
                                onChange={() => handleOnChange("Ans3", "QM")}
                                checked={SaveDataPageOne.QM.Ans3} />
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
                                    <input class="form-check-input" type="radio" name="flexRadioDefault3"
                                        onChange={() => handleOnChange("Yes", "Q4")} checked={SaveDataPageOne.Q4.Yes} />
                                    <label class="form-check-label" >
                                        Yes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault3"
                                        onChange={() => handleOnChange("No", "Q4")} checked={SaveDataPageOne.Q4.No} />
                                    <label class="form-check-label">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="Current-location" style={{ fontSize: "20px", fontWeight: "600" }}>Proposed arrival date</div>
                    <div className="DatePicker" style={{ display: "flex" }}>
                        <div style={{ paddingRight: "16em", paddingLeft: "10px" }}>Proposed arrival date</div>
                        <div className="child-date" ><DatePicker
                            selected={Date.parse(SaveDataPageOne.date)} onChange={(date) => handleSetStartDate(date)} />  </div>
                    </div>



                    <div className='Current-location' style={{ fontSize: "20px", fontWeight: "600" }}>Government support</div>
                    <div className='Current-location'>
                        <span>Does the applicant have a letter of government support to attach to this visa application?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault4"
                                        onChange={() => handleOnChange("Yes", "Q5")} checked={SaveDataPageOne.Q5.Yes} />
                                    <label class="form-check-label" >
                                        Yes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault4"
                                        onChange={() => handleOnChange("No", "Q5")} checked={SaveDataPageOne.Q5.No} />
                                    <label class="form-check-label" >
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div style={{ display: "flex", paddingBottom: "10px", paddingTop: "10px" }}>
                        <button onClick={() => navigate('/signaturepage')} style={{ marginLeft: "10px" }}>Previous</button>
                        <button onClick={() => navigate('/secondpage')} style={{ marginLeft: "auto", marginRight: "auto" }}>Next</button></div>
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
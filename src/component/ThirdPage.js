import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './ThirPage.scss'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import _, { cloneDeep } from "lodash"
const ThirdPage = (props) => {
    const navigate = useNavigate();
    
    const formatDate = (input) => {
        let datePart = input.match(/\d+/g),
            year = datePart[0].substring(2), // get only two digits
            month = datePart[1], day = datePart[2];

        return day + '/' + month + '/' + "20"+year;
    }

    


    const handleOnChange = (Flag, Question) => {
        let CloneState = _.cloneDeep(SaveDataPageThree);

        if (Flag === "Yes") {
            CloneState[Question].Yes = true;
            CloneState[Question].No = false;
        } else if (Flag === "No") {
            CloneState[Question].Yes = false;
            CloneState[Question].No = true;
        }
        setSaveDataPageThree(CloneState)
    }
    const [SaveDataPageThree, setSaveDataPageThree] = useState({
        QP3: {
            Yes: false,
            No: false
        }
    })
    useEffect(() => {
        const items = window.localStorage.getItem('SaveDataPageThree');
        if (items) {
            setSaveDataPageThree(JSON.parse(items));
        }
    }, [])
    useEffect(() => {
        window.localStorage.setItem('SaveDataPageThree', JSON.stringify(SaveDataPageThree))
    }, [SaveDataPageThree])

    let CloneData = _.cloneDeep(window.localStorage.getItem('SaveDataPageTwo'));
    CloneData = JSON.parse(CloneData)
    return(
        <>
        <Header/>
        <div className='third-content'>
                <div className='left'> <div>
                    <div style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>4/15</div>
                    <div style={{ fontSize: "20px", fontWeight: "600" }}>Critical data confirmation</div>
                    <div>All information provided is important to the processing of this application.</div>
                    <div>If the information included on this page is incorrect, it may lead to denial of permission to board an aircraft to Australia, even if a visa has been granted.</div>
                    <div>Confirm that the following information is correct and that it is in the correct fields.</div>

                    <div style={{display: "flex"}}>
                        <span>Family name:</span>
                        <span style={{ paddingLeft: "50px" }}>
                            {CloneData?.familyName ? CloneData?.familyName : "default"}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                        <span>Given names:</span>
                        <span style={{ paddingLeft: "50px" }}>
                            {CloneData.givenName ? CloneData.givenName : "default"}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                        <span>Sex:</span>
                        <span style={{ paddingLeft: "115px" }}>
                            {CloneData?.Q1?.Yes === false ? 
                            <span>Male</span> :
                            <span>Female</span>}
                        </span>
                    </div>
                    <div style={{ display: "flex" }}>
                        <span>Date of birth:</span>
                        <span style={{ paddingLeft: "50px" }}>{CloneData?.dateOfBirth ? 
                            formatDate(CloneData.dateOfBirth.substring(0, 10)) : "default"}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                        <span>Country of birth:</span>
                        <span style={{ paddingLeft: "30px" }}>{CloneData?.CountryofPassport.label ? CloneData.CountryofPassport.label : "default"}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                        <span>Passport number:</span>
                        <span style={{ paddingLeft: "20px" }}>{CloneData.passportNumber ? CloneData.passportNumber : "default"}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                        <span>Country of passport:</span>
                        <span style={{ paddingLeft: "30px" }}>{CloneData?.CountryofPassport.label ? CloneData.CountryofPassport.label : "default"}</span>
                    </div>
                    <div >Is the above information corrected?</div>
                    <div class="form-check-label" >
                        <div className="check-radio"></div>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" 
                                    onChange={() => handleOnChange("Yes", "QP3")} checked={SaveDataPageThree.QP3.Yes}/>
                                <label class="form-check-label" >
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" 
                                    onChange={() => handleOnChange("No", "QP3")} checked={SaveDataPageThree.QP3.No}/>
                                <label class="form-check-label" >
                                    No
                                </label>
                            </div>

                        </div>
                    </div>
                    <div style={{ display: "flex" , paddingBottom:"10px"}}>
                        <button onClick={() => navigate('/secondpage')} style={{ marginLeft: "10px" }}>Previous</button>
                        <button onClick={() => navigate('/fourthpage')} style={{ marginLeft: "60em" }}>Next</button>
                    </div>
                    
                </div></div>
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
export default ThirdPage;
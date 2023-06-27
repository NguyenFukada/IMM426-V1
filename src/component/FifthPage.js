import { useMemo, useState } from "react"
import Select from 'react-select'
import countryList from 'react-select-country-list'
import "react-datepicker/dist/react-datepicker.css";
import './FifthPage.scss'
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import _, { cloneDeep } from "lodash"
import { useEffect } from "react";
const FifthPage = () => {
    const navigate = useNavigate();
    const optionsCountry = useMemo(() => countryList().getData(), [])
    

    const data = {
        UsualCountryOfResidence :"",
        Office: "",
        Country: "",
        Address1: "",
        Address2: "",
        Town: "",
        StateOrProvince: "",
        PostalCode: "",
        HomePhone: "",
        BusinessPhone : "",
        CellPhone: "",
        Email : "",
        Q1: {
            Yes: false,
            No: false
        },
        

    }
    const [SaveDataPageFive, setSaveDataPageFive] = useState(data)

    const handleOnChange = (Flag, Question) => {
        let CloneState = _.cloneDeep(SaveDataPageFive);

        if (Flag === "Yes") {
            CloneState[Question].Yes = true;
            CloneState[Question].No = false;
        } else if (Flag === "No") {
            CloneState[Question].Yes = false;
            CloneState[Question].No = true;
        }
        setSaveDataPageFive(CloneState)
    }

    const ChangeNation = (value, Id) => {
        let CloneState = _.cloneDeep(SaveDataPageFive);
        CloneState[Id] = value;
        setSaveDataPageFive(CloneState)
    }

    const handleSetStartDate = (value, Title) => {
        let CloneState = _.cloneDeep(SaveDataPageFive);

        CloneState[Title] = new Date(value);
        setSaveDataPageFive(CloneState)
    }

    const HandleChangeInputText = (value, Title) => {
        let CloneState = _.cloneDeep(SaveDataPageFive);
        CloneState[Title] = value;
        setSaveDataPageFive(CloneState)
    }

    useEffect(() => {
        const items = window.localStorage.getItem('SaveDataPageFive');
        if (items) {
            setSaveDataPageFive(JSON.parse(items));
        }
    }, [])
    useEffect(() => {
        window.localStorage.setItem('SaveDataPageFive', JSON.stringify(SaveDataPageFive))
    }, [SaveDataPageFive])





    return (
        <>
        <Header/>
            <div className="fifth-content">
                <div className="left">
                    <div style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>6/15</div>
                    <div className='Current-location' style={{ fontSize: "20px", fontWeight: "600" }}>Contact details</div>
                    <div className='Current-location'>Country of residence</div>
                    <div className='status'>
                        <span className='title-status'>Usual country of residence</span>
                        <Select options={optionsCountry} className="select" 
                            value={SaveDataPageFive.UsualCountryOfResidence}
                            onChange={(Event) => ChangeNation(Event, "UsualCountryOfResidence")}/>
                    </div>
                    <div className='Current-location'>Department office</div>
                    <div className='Current-location'>The applicant may be required to attend an Australian Government Office for an interview. Which is the closest office to the applicant’s current location?</div>
                    <div className='status'>
                        <span className='title-status'>Office</span>
                        <Select options={optionsCountry} className="select" 
                            value={SaveDataPageFive.Office}
                            onChange={(Event) => ChangeNation(Event, "Office")}/>
                    </div>
                    <div className='Current-location' style={{ fontSize: "20px", fontWeight: "600" }}>Residential address</div>
                    <div className='Current-location'>Note that a street address is required. A post office address cannot be accepted as a residential address.</div>
                    <div className='status'>
                        <span className='title-status'>Country</span>
                        <Select options={optionsCountry} className="select" 
                            value={SaveDataPageFive.Country}
                            onChange={(Event) => ChangeNation(Event, "Country")}/>
                    </div>
                    <div className='parent'>
                        <label className="title">Address</label>
                        <span className="inputform"><input className='form-control col-6'
                            value={SaveDataPageFive.Address1}
                            onChange={(Event) => HandleChangeInputText(Event.target.value, "Address1")}></input></span>
                    </div>
                    <div className='parent'>
                        <label className="title"></label>
                        <span className="inputform"><input className='form-control col-6'
                            value={SaveDataPageFive.Address2}
                            onChange={(Event) => HandleChangeInputText(Event.target.value, "Address2")}></input></span>
                    </div>
                    <div className='parent'>
                        <label className="title">Suburb / Town</label>
                        <span className="inputform"><input className='form-control col-6'
                            value={SaveDataPageFive.Town}
                            onChange={(Event) => HandleChangeInputText(Event.target.value, "Town")}></input></span>
                    </div>
                    <div className='parent'>
                        <label className="title">State or Province</label>
                        <span className="inputform"><input className='form-control col-6'
                            value={SaveDataPageFive.StateOrProvince}
                            onChange={(Event) => HandleChangeInputText(Event.target.value, "StateOrProvince")}></input></span>
                    </div>
                    <div className='parent'>
                        <label className="title">Postal code</label>
                        <span className="inputform"><input className='form-control col-6'
                            value={SaveDataPageFive.PostalCode}
                            onChange={(Event) => HandleChangeInputText(Event.target.value, "PostalCode")}></input></span>
                    </div>
                    <div className='Current-location' style={{ fontSize: "20px", fontWeight: "600" }}>Postal address</div>
                    <div className='Current-location'>Is the postal address the same as the residential address?</div>
                    <div class="form-check-label" >
                        <div className="check-radio"></div>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" 
                                    onChange={() => handleOnChange("Yes", "Q1")} checked={SaveDataPageFive.Q1.Yes}/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" 
                                    onChange={() => handleOnChange("No", "Q1")} checked={SaveDataPageFive.Q1.No}/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>Contact telephone numbers</div>
                    <div className='Current-location'>Enter numbers only with no spaces.</div>
                    <div className='parent'>
                        <label className="title">Home phone</label>
                        <span className="inputform"><input className='form-control col-6'
                            value={SaveDataPageFive.HomePhone}
                            onChange={(Event) => HandleChangeInputText(Event.target.value, "HomePhone")}></input></span>
                    </div>
                    <div className='parent'>
                        <label className="title">Business phone</label>
                        <span className="inputform"><input className='form-control col-6'
                            value={SaveDataPageFive.BusinessPhone}
                            onChange={(Event) => HandleChangeInputText(Event.target.value, "BusinessPhone")}
                        ></input></span>
                    </div>
                    <div className='parent'>
                        <label className="title">Mobile / Cell phone</label>
                        <span className="inputform"><input className='form-control col-6'
                            value={SaveDataPageFive.CellPhone}
                            onChange={(Event) => HandleChangeInputText(Event.target.value, "CellPhone")}></input></span>
                    </div>
                    <div className='Current-location'>Email address</div>
                    <div className='parent'>
                        <label className="title">Email address</label>
                        <span className="inputform"><input className='form-control col-6'
                            value={SaveDataPageFive.Email}
                            onChange={(Event) => HandleChangeInputText(Event.target.value, "Email")}></input></span>
                    </div>
                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                        <button onClick={() => navigate('/fourthpage')} style={{ marginLeft: "10px" }} >Previous</button>
                        <button onClick={() => navigate('/sixthpage')} style={{ marginLeft: "60em" }}>Next</button></div>
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
export default FifthPage
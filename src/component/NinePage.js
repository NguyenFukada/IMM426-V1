
import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from "react"
import { Form } from "react-bootstrap"
import Select from 'react-select'
import countryList from 'react-select-country-list'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from './Header';
import './NinePage.scss'
import _, { cloneDeep } from "lodash"
import { useEffect } from "react";

const NinePage = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    
    const optionsCountry = useMemo(() => countryList().getData(), [])
    
    const options = [
        { value: 'Cambridge English: Advanced (CAE)', label: 'Cambridge English: Advanced (CAE)' },
        { value: 'IELTS', label: 'IELTS' },
        { value: 'OET', label: 'OET' },
        { value: 'PTE Academic', label: 'PTE Academic' },
        { value: 'TOEFL iBT', label: 'TOEFL iBT' },
        
    ]
    const options2 = [
        { value: 'Proficient', label: 'Proficient' },
        { value: 'Competent', label: 'Competent' },
        { value: 'Functional', label: 'Functional' },
        { value: 'Vocational', label: 'Vocational' },
        { value: 'Superior', label: 'Superior' },

    ]

    const data = {
        Name : "",
        Date : new Date(),
        NumberOfTest : "",
        Country : "",
        Language: "",
        MainLanguage: "",
        Q1: {
            Yes: false,
            No: false
        },
        Q2: {
            Yes: false,
            No: false
        },
        QM: {
            Ans1: false,
            Ans2: false,
            Ans3: false,
            Ans4: false,
            Ans5: false,
        }
        

    }
    const [SaveDataPageNine, setSaveDataPageNine] = useState(data)

    const handleOnChange = (Flag, Question) => {
        let CloneState = _.cloneDeep(SaveDataPageNine);

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
            CloneState.QM.Ans4 = false;
            CloneState.QM.Ans5 = false;
            CloneState[Question][Flag] = true;
        }
        setSaveDataPageNine(CloneState)
    }

    const ChangeNation = (value, Id) => {
        let CloneState = _.cloneDeep(SaveDataPageNine);
        CloneState[Id] = value;
        setSaveDataPageNine(CloneState)
    }

    const handleSetStartDate = (value, Title) => {
        let CloneState = _.cloneDeep(SaveDataPageNine);

        CloneState[Title] = new Date(value);
        setSaveDataPageNine(CloneState)
    }

    const HandleChangeInputText = (value, Title) => {
        let CloneState = _.cloneDeep(SaveDataPageNine);
        CloneState[Title] = value;
        setSaveDataPageNine(CloneState)
    }

    useEffect(() => {
        const items = window.localStorage.getItem('SaveDataPageNine');
        if (items) {
            setSaveDataPageNine(JSON.parse(items));
        }
    }, [])
    useEffect(() => {
        window.localStorage.setItem('SaveDataPageNine', JSON.stringify(SaveDataPageNine))
    }, [SaveDataPageNine])



    return (
        <>
            <Header/>
            <div className='nine-content'>
                <div className='left'>
                    <div style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>10/15</div>
                    <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Language</div>
                    <div className='Current-location'>
                        <span>Does the applicant hold a current passport from the USA, UK, Canada, New Zealand, or the republic of Ireland?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" 
                                    onChange={() => handleOnChange("Yes", "Q1")} checked={SaveDataPageNine.Q1.Yes}/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
                                    onChange={() => handleOnChange("No", "Q1")} checked={SaveDataPageNine.Q1.No}/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Does the applicant have at least functional English language ability?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1" 
                                    onChange={() => handleOnChange("Yes", "Q2")} checked={SaveDataPageNine.Q2.Yes}/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" 
                                    onChange={() => handleOnChange("No", "Q2")} checked={SaveDataPageNine.Q2.No}/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>Select the options which represent proof of the applicant having functional English</div>
                    <div className="check-radio-answer" style={{ paddingLeft: "18em" }}>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="flexRadioDefault2_1" 
                                checked={SaveDataPageNine?.QM?.Ans1}
                                onChange={() => handleOnChange("Ans1", "QM")} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Completion of an English language proficiency test of at least functional level within the last 12 months
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="flexRadioDefault2_2" 
                                checked={SaveDataPageNine?.QM?.Ans2}
                                onChange={() => handleOnChange("Ans2", "QM")}/>
                            <label class="form-check-label" for="flexRadioDefault2">
                                Completed at least 5 years of secondary education at institutions in which all instruction was conducted in English
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="flexRadioDefault2_3" 
                                checked={SaveDataPageNine?.QM?.Ans3}
                                onChange={() => handleOnChange("Ans3", "QM")}/>
                            <label class="form-check-label" for="flexRadioDefault2">
                                Completed, in Australia, at least 1 year of full-time study or equivalent part-time study towards a degree, higher degree, diploma, or associate diploma, at an institution or institutions where all instruction was conducted in English
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="flexRadioDefault2_4" 
                                checked={SaveDataPageNine?.QM?.Ans4}
                                onChange={() => handleOnChange("Ans4", "QM")}/>
                            <label class="form-check-label" for="flexRadioDefault2">
                                Successfully completed the 'Bagrut Exam' in the level of 3 study units
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="flexRadioDefault2_5" 
                                checked={SaveDataPageNine?.QM?.Ans5}
                                onChange={() => handleOnChange("Ans5", "QM")}/>
                            <label class="form-check-label" for="flexRadioDefault2">
                                Other
                            </label>
                        </div>
                    </div>
                    <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>English test details</div>
                    <div className='Current-location'>Give details of the most recent English test.</div>
                    <div className='status'>
                        <span className='title-status'>Name of test</span>
                        <Select options={options} className="select" 
                            value={SaveDataPageNine.Name}
                            onChange={(Event) => ChangeNation(Event, "Name")}/>
                    </div>
                    <div className="DatePicker" style={{ display: "flex", paddingLeft: "10px" }}>
                        <div >Date of test</div>
                        <div className="child-date" style={{ paddingLeft: "19.2em" }}>
                            <DatePicker 
                                selected={Date.parse(SaveDataPageNine.Date)}
                                onChange={(Date) => handleSetStartDate(Date, "Date")}/>  </div>
                    </div>
                    <div className='parent'>
                        <label className="title" style={{ width: "29.3%" }}>Test reference number</label>
                        <span className="inputform"><input className='form-control col-6' style={{ marginTop: "3px",}}
                            value={SaveDataPageNine.NumberOfTest}
                            onChange={(Event) => HandleChangeInputText(Event.target.value, "NumberOfTest")}></input></span>
                    </div>
                    <div className='status'>
                        <span className='title-status'>Country where test was undertaken</span>
                        <Select options={optionsCountry} className="select" 
                            value={SaveDataPageNine.Country}
                            onChange={(Event) => ChangeNation(Event, "Country")}/>
                    </div>
                    <div className='status'>
                        <span className='title-status'>Language ability</span>
                        <Select options={options2} className="select" 
                            value={SaveDataPageNine.Language}
                            onChange={(Event) => ChangeNation(Event, "Language")}/>
                    </div>
                    <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Main language</div>
                    <div className='status'>
                        <span className='title-status'>Main language</span>
                        <Select options={optionsCountry} className="select" 
                            value={SaveDataPageNine.MainLanguage}
                            onChange={(Event) => ChangeNation(Event, "MainLanguage")}/>
                    </div>
                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                        <button onClick={() => navigate('/eightpage')} style={{ marginLeft: "10px" }}>Previous</button>
                        <button onClick={() => navigate('/tenthpage')} style={{ marginLeft: "60em" }}>Next</button></div>
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
export default NinePage;
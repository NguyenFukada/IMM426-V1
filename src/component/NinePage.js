
import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from "react"
import { Form } from "react-bootstrap"
import Select from 'react-select'
import countryList from 'react-select-country-list'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from './Header';
import './NinePage.scss'
const NinePage = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [value, setValue] = useState('')
    const optionsCountry = useMemo(() => countryList().getData(), [])
    const changeHandler = value => {
        setValue(value)
    }
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
    return (
        <>
            <Header/>
            <div className='nine-content'>
                <div className='left'><div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Language</div>
                    <div className='Current-location'>
                        <span>Does the applicant hold a current passport from the USA, UK, Canada, New Zealand, or the republic of Ireland?</span>
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
                    <div className='Current-location'>
                        <span>Does the applicant have at least functional English language ability?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>Select the options which represent proof of the applicant having functional English</div>
                    <div className="check-radio-answer" style={{ paddingLeft: "18em" }}>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Completion of an English language proficiency test of at least functional level within the last 12 months
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Completed at least 5 years of secondary education at institutions in which all instruction was conducted in English
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Completed, in Australia, at least 1 year of full-time study or equivalent part-time study towards a degree, higher degree, diploma, or associate diploma, at an institution or institutions where all instruction was conducted in English
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Successfully completed the 'Bagrut Exam' in the level of 3 study units
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Other
                            </label>
                        </div>
                    </div>
                    <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>English test details</div>
                    <div className='Current-location'>Give details of the most recent English test.</div>
                    <div className='status'>
                        <span className='title-status'>Name of test</span>
                        <Select options={options} className="select" />
                    </div>
                    <div className="DatePicker" style={{ display: "flex", paddingLeft: "10px" }}>
                        <div >Date of test</div>
                        <div className="child-date" style={{ paddingLeft: "19.5em" }}><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />  </div>
                    </div>
                    <div className='parent'>
                        <label className="title">Test reference number</label>
                        <span className="inputform"><input className='form-control col-6' style={{ marginTop: "3px" }}></input></span>
                    </div>
                    <div className='status'>
                        <span className='title-status'>Country where test was undertaken</span>
                        <Select options={optionsCountry} className="select" />
                    </div>
                    <div className='status'>
                        <span className='title-status'>Language ability</span>
                        <Select options={options2} className="select" />
                    </div>
                    <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Main language</div>
                    <div className='status'>
                        <span className='title-status'>Main language</span>
                        <Select options={optionsCountry} className="select" />
                    </div>
                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                        <button onClick={() => navigate('/eightpage')} >Previous</button>
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
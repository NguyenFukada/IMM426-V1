import { useMemo, useState } from "react"
import Select from 'react-select'
import countryList from 'react-select-country-list'
import "react-datepicker/dist/react-datepicker.css";
import './FifthPage.scss'
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

const FifthPage = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('')
    const optionsCountry = useMemo(() => countryList().getData(), [])
    const changeHandler = value => {
        setValue(value)
    }
    return (
        <>
        <Header/>
            <div className="fifth-content">
                <div className="left"><div className='Current-location' style={{ fontSize: "20px", fontWeight: "600" }}>Contact details</div>
                    <div className='Current-location'>Country of residence</div>
                    <div className='status'>
                        <span className='title-status'>Usual country of residence</span>
                        <Select options={optionsCountry} className="select" />
                    </div>
                    <div className='Current-location'>Department office</div>
                    <div className='Current-location'>The applicant may be required to attend an Australian Government Office for an interview. Which is the closest office to the applicant’s current location?</div>
                    <div className='status'>
                        <span className='title-status'>Office</span>
                        <Select options={optionsCountry} className="select" />
                    </div>
                    <div className='Current-location' style={{ fontSize: "20px", fontWeight: "600" }}>Residential address</div>
                    <div className='Current-location'>Note that a street address is required. A post office address cannot be accepted as a residential address.</div>
                    <div className='status'>
                        <span className='title-status'>Country</span>
                        <Select options={optionsCountry} className="select" />
                    </div>
                    <div className='parent'>
                        <label className="title">Address</label>
                        <span className="inputform"><input className='form-control col-6'></input></span>
                    </div>
                    <div className='parent'>
                        <label className="title"></label>
                        <span className="inputform"><input className='form-control col-6'></input></span>
                    </div>
                    <div className='parent'>
                        <label className="title">Suburb / Town</label>
                        <span className="inputform"><input className='form-control col-6'></input></span>
                    </div>
                    <div className='parent'>
                        <label className="title">State or Province</label>
                        <span className="inputform"><input className='form-control col-6'></input></span>
                    </div>
                    <div className='parent'>
                        <label className="title">Postal code</label>
                        <span className="inputform"><input className='form-control col-6'></input></span>
                    </div>
                    <div className='Current-location' style={{ fontSize: "20px", fontWeight: "600" }}>Postal address</div>
                    <div className='Current-location'>Is the postal address the same as the residential address?</div>
                    <div class="form-check-label" >
                        <div className="check-radio"></div>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" />
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
                        <span className="inputform"><input className='form-control col-6'></input></span>
                    </div>
                    <div className='parent'>
                        <label className="title">Business phone</label>
                        <span className="inputform"><input className='form-control col-6'></input></span>
                    </div>
                    <div className='parent'>
                        <label className="title">Mobile / Cell phone</label>
                        <span className="inputform"><input className='form-control col-6'></input></span>
                    </div>
                    <div className='Current-location'>Email address</div>
                    <div className='parent'>
                        <label className="title">Email address</label>
                        <span className="inputform"><input className='form-control col-6'></input></span>
                    </div>
                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                        <button onClick={() => navigate('/fourthpage')} >Previous</button>
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
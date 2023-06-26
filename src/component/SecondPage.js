import { useMemo, useState } from "react"
import { Form } from "react-bootstrap"
import Select from 'react-select'
import countryList from 'react-select-country-list'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './SecondPage.scss'
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
const SecondPage = () => {

    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const [passportNumber, setPassportNumber] = useState("");
    const [passportCountry, setpassportCountry] = useState("");
    const navigate = useNavigate();
    const options = [
        { value: 'De Facto', label: 'De Facto' },
        { value: 'Divorced', label: 'Divorced' },
        { value: 'Engaged', label: 'Engaged' },
        { value: 'Married', label: 'Married' },
        { value: 'Never Married', label: 'Never Married' },
        { value: 'Separated', label: 'Separated' },
        { value: 'Widowed', label: 'Widowed' }
    ]
    const [value, setValue] = useState('')
    const optionsCountry = useMemo(() => countryList().getData(), [])
    const changeHandler = value => {
        setValue(value)
    }
    const account = useSelector(state => state.user.account);
    const FormatDate = (value) => {
        const today = value;
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '/' + mm + '/' + yyyy;
        return formattedToday;
    }
    const handleNextPage =  async () => {
        let DateOfBirth = FormatDate(startDate);
        let familyName = account.familyName;
        let givenName = account.givenName;
        dispatch({
            type: 'FETCH_SAVE_USER',
            payload: {
                passportNumber, value, DateOfBirth, familyName, givenName
            }
        })
        navigate('/thirdpage');
        
    }

    return (
        <>
            <Header />
            <div className="second-content">
                <div className="left"> <div className="secondpage-container">
                    <div className='Current-location' style={{ fontSize: "20px", fontWeight: "600"}} >Passport details</div>
                    <div className='Current-location'>Enter the following details as they appear in the applicant's personal passport.</div>
                    <div className='parent'>
                        <label className="title">Given names</label>
                        <span className="inputform"><input className='form-control col-6'></input></span>
                    </div>
                    <div className='Sexform'>
                        <div class="form-check-label" >
                            <div className="check-radio">Sex:</div>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"/>
                                    <label class="form-check-label" >
                                        Female
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" />
                                    <label class="form-check-label" >
                                        Male
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="DatePicker2">
                        <div >Date of birth</div>
                        <div className="child-date" ><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />  </div>
                    </div>
                    <div className='parent'>
                        <label className="title">Passport number</label>
                        <span className="inputform"><input className='form-control col-6'
                            onChange={(Event) => setPassportNumber(Event.target.value)}></input></span>
                    </div>
                    <div className='status'>
                        <span className='title-status'>Country of passport</span>
                        <Select options={optionsCountry} className="select"
                        onChange={(Event) => changeHandler(Event)}/>
                    </div>
                    <div className='status'>
                        <span className='title-status'>Nationality of passport holder</span>
                        <Select options={optionsCountry} className="select" />
                    </div>
                    <div className="DatePicker2">
                        <div >Date of issue</div>
                        <div className="child-date" ><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />  </div>
                    </div>
                    <div className="DatePicker2">
                        <div >Date of expiry</div>
                        <div className="child-date" ><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />  </div>
                    </div>
                    <div className='parent'>
                        <label className="title">Place of issue / issuing authority</label>
                        <span className="inputform"><input className='form-control col-6'></input></span>
                    </div>
                    <div className='Current-location'>It is strongly recommended that the passport be valid for at least six months.</div>
                    <div className='Current-location'>National identity card</div>
                    <div className='Current-location'>
                        <span>Does this applicant have a national identity card?</span>
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
                    </div>
                    <table style={{ paddingLeft: "20px" }} className="table-second-page">
                        <tr>
                            <th>Family name</th>
                            <th>Given names</th>
                            <th>Identification number</th>
                            <th>Country of issue</th>
                            <th> Actions</th>
                        </tr>
                        <tr>
                            <td>{account.familyName}</td>
                            <td>{account.givenName}</td>
                            <td>{account.Identification}</td>
                            <td>{account.countryIssue}</td>
                            <td>Edit/Delete</td>
                        </tr>
                    </table>
                    <button onClick={() => navigate('/national-identity-card')}>Add</button>
                    <div className='Current-location'>Place of birth</div>
                    <div className='parent'>
                        <label className="title">Town / City</label>
                        <span className="inputform"><input className='form-control col-6'></input></span>
                    </div>
                    <div className='parent'>
                        <label className="title">State / Province</label>
                        <span className="inputform"><input className='form-control col-6'></input></span>
                    </div>
                    <div className='status'>
                        <span className='title-status'>Country of birth</span>
                        <Select options={optionsCountry} className="select" />
                    </div>
                    <div className='Current-location'>Relationship status</div>
                    <div className='status'>
                        <span className='title-status'>Legal status:</span>
                        <Select options={options} className="select" />
                    </div>
                    <div className='Current-location'>Other names / spellings</div>
                    <div className='Current-location'>
                        <span>Is this applicant currently, or have they ever been known by any other names?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault3" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Yes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault3" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>Citizenship</div>
                    <div className='Current-location'>
                        <span>Is this applicant a citizen of the selected country of passport (INDONESIA)?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault4" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Yes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault4" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Is this applicant a citizen of any other country?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault5" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Yes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault5" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>Other passports</div>
                    <div className='Current-location'>
                        <span>Does this applicant have other current passports?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault6" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Yes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault6" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'> Other identity documents</div>
                    <div className='Current-location'>
                        <span>Does this applicant have other identity documents?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault7" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Yes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault7" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>Health examination</div>
                    <div className='Current-location'>
                        <span>Has this applicant undertaken a health examination for an Australian visa in the last 12 months?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault8" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Yes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault8" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                        <button onClick={() => navigate('/firstpage')} style={{ marginLeft: "10px" }}>Previous</button>
                        <button onClick={() => handleNextPage()} style={{ marginLeft: "60em" }}>Next</button>

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

export default SecondPage;
import { useEffect, useMemo, useState } from "react"
import Select from 'react-select'
import countryList from 'react-select-country-list'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './SecondPage.scss'
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import _, { cloneDeep } from "lodash"
const SecondPage = () => {

    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());

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

    const optionsCountry = useMemo(() => countryList().getData(), [])

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
    const handleNextPage = async () => {
        navigate('/thirdpage');

    }


    const data = {
        familyName: "",
        givenName: "",
        placeOfIssue: "",
        CountryofPassport: "",
        passportHolder: "",
        passportNumber: "",
        Twon: "",
        LegalStatus: "",
        State: "",
        CountryofBirth: "",
        dateOfBirth: startDate,
        dateOfIssue: startDate,
        dateOfExpire: startDate,
        Q1: {
            Yes: false,
            No: false
        },
        Q2: {
            Yes: false,
            No: false
        },
        Q3: {
            Yes: false,
            No: false,
        },
        Q4: {
            Yes: false,
            No: false
        },
        Q5: {
            Yes: false,
            No: false
        },
        Q6: {
            Yes: false,
            No: false
        },
        Q7: {
            Yes: false,
            No: false
        },
        Q8: {
            Yes: false,
            No: false
        },

    }
    const [SaveDataPageTwo, setSaveDataPageTwo] = useState(data)

    const handleOnChange = (Flag, Question) => {
        let CloneState = _.cloneDeep(SaveDataPageTwo);

        if (Flag === "Yes") {
            CloneState[Question].Yes = true;
            CloneState[Question].No = false;
        } else if (Flag === "No") {
            CloneState[Question].Yes = false;
            CloneState[Question].No = true;
        }
        setSaveDataPageTwo(CloneState)
    }

    const ChangeNation = (value, Id) => {
        let CloneState = _.cloneDeep(SaveDataPageTwo);
        CloneState[Id] = value;
        setSaveDataPageTwo(CloneState)
    }

    const handleSetStartDate = (value, Title) => {
        let CloneState = _.cloneDeep(SaveDataPageTwo);

        CloneState[Title] = new Date(value);
        setSaveDataPageTwo(CloneState)
    }

    const HandleChangeInputText = (value, Title) => {
        let CloneState = _.cloneDeep(SaveDataPageTwo);
        CloneState[Title] = value;
        setSaveDataPageTwo(CloneState)
    }

    useEffect(() => {
        const items = window.localStorage.getItem('SaveDataPageTwo');
        if (items) {
            setSaveDataPageTwo(JSON.parse(items));
        }
    }, [])
    useEffect(() => {
        window.localStorage.setItem('SaveDataPageTwo', JSON.stringify(SaveDataPageTwo))
    }, [SaveDataPageTwo])

    let CloneSate = _.cloneDeep(window.localStorage.getItem('SaveDataFormNation'))
    CloneSate = JSON.parse(CloneSate);
    return (
        <>
            <Header />
            <div className="second-content">
                <div className="left">
                    <div className="secondpage-container">
                        <div style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>3/16</div>
                        <div className='Current-location' style={{ fontSize: "20px", fontWeight: "600" }} >Passport details</div>
                        <div className='Current-location'>Enter the following details as they appear in the applicant's personal passport.</div>
                        <div className='parent'>
                            <label className="title">Family names</label>
                            <span className="inputform"><input className='form-control col-6'
                                value={SaveDataPageTwo.familyName}
                                onChange={(Event) => HandleChangeInputText(Event.target.value, "familyName")}></input></span>
                        </div>
                        <div className='parent'>
                            <label className="title">Given names</label>
                            <span className="inputform"><input className='form-control col-6'
                                value={SaveDataPageTwo.givenName}
                                onChange={(Event) => HandleChangeInputText(Event.target.value, "givenName")}></input></span>
                        </div>
                        <div className='Sexform'>
                            <div class="form-check-label" >
                                <div className="check-radio">Sex:</div>
                                <div class="form-check-label" >
                                    <div className="check-radio"></div>
                                    <div className="check-radio-answer">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            onChange={() => handleOnChange("Yes", "Q1")} checked={SaveDataPageTwo.Q1.Yes} />
                                        <label class="form-check-label" >
                                            Female
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            onChange={() => handleOnChange("No", "Q1")} checked={SaveDataPageTwo.Q1.No} />
                                        <label class="form-check-label" >
                                            Male
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="DatePicker2">
                            <div className="title-secondpage" >Date of birth</div>
                            <div className="child-date" ><DatePicker
                                selected={Date.parse(SaveDataPageTwo.dateOfBirth)}
                                onChange={(dateOfBirth) => handleSetStartDate(dateOfBirth, "dateOfBirth")} />  </div>
                        </div>
                        <div className='parent'>
                            <label className="title">Passport number </label>
                            <span className="inputform"><input className='form-control col-6'
                                value={SaveDataPageTwo.passportNumber}
                                onChange={(Event) => HandleChangeInputText(Event.target.value, "passportNumber")}></input></span>
                        </div>
                        <div className='status'>
                            <span className='title-status'>Country of passport</span>
                            <Select options={optionsCountry} className="select"
                                value={SaveDataPageTwo.CountryofPassport}
                                onChange={(Event) => ChangeNation(Event, "CountryofPassport")} />
                        </div>
                        <div className='status'>
                            <span className='title-status'>Nationality of passport holder</span>
                            <Select options={optionsCountry} className="select"
                                value={SaveDataPageTwo.passportHolder}
                                onChange={(Event) => ChangeNation(Event, "passportHolder")} />
                        </div>
                        <div className="DatePicker2">
                            <div className="title-secondpage">Date of issue</div>
                            <div className="child-date" ><DatePicker
                                selected={Date.parse(SaveDataPageTwo.dateOfIssue)}
                                onChange={(dateOfIssue) => handleSetStartDate(dateOfIssue, "dateOfIssue")} />  </div>
                        </div>
                        <div className="DatePicker2">
                            <div className="title-secondpage">Date of expiry</div>
                            <div className="child-date" ><DatePicker
                                selected={Date.parse(SaveDataPageTwo.dateOfExpire)}
                                onChange={(dateOfExpire) => handleSetStartDate(dateOfExpire, "dateOfExpire")} />  </div>
                        </div>
                        <div className='parent'>
                            <label className="title">Place of issue / issuing authority</label>
                            <span className="inputform"><input className='form-control col-6'
                                value={SaveDataPageTwo.placeOfIssue}
                                onChange={(Event) => HandleChangeInputText(Event.target.value, "placeOfIssue")}></input></span>
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
                                        <input class="form-check-input" type="radio" name="flexRadioDefault2"
                                            onChange={() => handleOnChange("Yes", "Q2")} checked={SaveDataPageTwo.Q2.Yes} />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Yes
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault2"
                                            onChange={() => handleOnChange("No", "Q2")} checked={SaveDataPageTwo.Q2.No} />
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
                                <td>{CloneSate?.familyName ? CloneSate.familyName : "default"}</td>
                                <td>{CloneSate?.givenName ? CloneSate.givenName : "default"}</td>
                                <td>{CloneSate?.Identify ? CloneSate.Identify : "default"}</td>
                                <td>{CloneSate?.countryIss ? CloneSate.countryIss : "default"}</td>
                                <td>Edit/Delete</td>
                            </tr>
                        </table>
                        <button onClick={() => navigate('/national-identity-card')}>Add</button>
                        <div className='Current-location'>Place of birth</div>
                        <div className='parent'>
                            <label className="title">Town / City</label>
                            <span className="inputform"><input className='form-control col-6'
                                value={SaveDataPageTwo.Twon}
                                onChange={(Event) => HandleChangeInputText(Event.target.value, "Twon")}></input></span>
                        </div>
                        <div className='parent'>
                            <label className="title">State / Province</label>
                            <span className="inputform"><input className='form-control col-6'
                                value={SaveDataPageTwo.State}
                                onChange={(Event) => HandleChangeInputText(Event.target.value, "State")}></input></span>
                        </div>
                        <div className='status'>
                            <span className='title-status'>Country of birth</span>
                            <Select options={optionsCountry} className="select"
                                value={SaveDataPageTwo.CountryofBirth}
                                onChange={(Event) => ChangeNation(Event, "CountryofBirth")} />
                        </div>
                        <div className='Current-location'>Relationship status</div>
                        <div className='status'>
                            <span className='title-status'>Legal status:</span>
                            <Select options={options} className="select"
                                value={SaveDataPageTwo.LegalStatus}
                                onChange={(Event) => ChangeNation(Event, "LegalStatus")} />
                        </div>
                        <div className='Current-location'>Other names / spellings</div>
                        <div className='Current-location'>
                            <span>Is this applicant currently, or have they ever been known by any other names?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div class="form-check-label" >
                                    <div className="check-radio"></div>
                                    <div className="check-radio-answer">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault3"
                                            onChange={() => handleOnChange("Yes", "Q3")} checked={SaveDataPageTwo.Q3.Yes} />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Yes
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault3"
                                            onChange={() => handleOnChange("No", "Q3")} checked={SaveDataPageTwo.Q3.No} />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>Citizenship</div>
                        <div className='Current-location'>
                            <span>Is this applicant a citizen of the selected country of passport ?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div class="form-check-label" >
                                    <div className="check-radio"></div>
                                    <div className="check-radio-answer">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault4"
                                            onChange={() => handleOnChange("Yes", "Q4")} checked={SaveDataPageTwo.Q4.Yes} />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Yes
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault4"
                                            onChange={() => handleOnChange("No", "Q4")} checked={SaveDataPageTwo.Q4.No} />
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
                                        <input class="form-check-input" type="radio" name="flexRadioDefault5"
                                            onChange={() => handleOnChange("Yes", "Q5")} checked={SaveDataPageTwo.Q5.Yes} />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Yes
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault5"
                                            onChange={() => handleOnChange("No", "Q5")} checked={SaveDataPageTwo.Q5.No} />
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
                                        <input class="form-check-input" type="radio" name="flexRadioDefault6"
                                            onChange={() => handleOnChange("Yes", "Q6")} checked={SaveDataPageTwo.Q6.Yes} />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Yes
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault6"
                                            onChange={() => handleOnChange("No", "Q6")} checked={SaveDataPageTwo.Q6.No} />
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
                                        <input class="form-check-input" type="radio" name="flexRadioDefault7"
                                            onChange={() => handleOnChange("Yes", "Q7")} checked={SaveDataPageTwo.Q7.Yes} />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Yes
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault7"
                                            onChange={() => handleOnChange("No", "Q7")} checked={SaveDataPageTwo.Q7.No} />
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
                                        <input class="form-check-input" type="radio" name="flexRadioDefault8"
                                            onChange={() => handleOnChange("Yes", "Q8")} checked={SaveDataPageTwo.Q8.Yes} />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Yes
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault8"
                                            onChange={() => handleOnChange("No", "Q8")} checked={SaveDataPageTwo.Q8.No} />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", paddingBottom: "10px" }}>
                            <button onClick={() => navigate('/firstpage')} style={{ marginLeft: "10px" }}>Previous</button>
                            <button onClick={() => handleNextPage()} style={{ marginLeft: "auto", marginRight: "auto" }}>Next</button>

                        </div>
                    </div>
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

export default SecondPage;
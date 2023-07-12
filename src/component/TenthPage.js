import { useNavigate } from 'react-router-dom';
import { useMemo, useState, useEffect } from "react"
import Header from './Header';
import _, { cloneDeep } from "lodash"
import './TenthPage.scss'
const TenthPage = () => {
    const navigate = useNavigate();

    const data = {
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
        Q9: {
            Yes: false,
            No: false
        },

    }
    const [SaveDataPageTen, setSaveDataPageTen] = useState(data)

    const handleOnChange = (Flag, Question) => {
        let CloneState = _.cloneDeep(SaveDataPageTen);

        if (Flag === "Yes") {
            CloneState[Question].Yes = true;
            CloneState[Question].No = false;
        } else if (Flag === "No") {
            CloneState[Question].Yes = false;
            CloneState[Question].No = true;
        }
        setSaveDataPageTen(CloneState)
    }



    useEffect(() => {
        const items = window.localStorage.getItem('SaveDataPageTen');
        if (items) {
            setSaveDataPageTen(JSON.parse(items));
        }
    }, [])
    useEffect(() => {
        window.localStorage.setItem('SaveDataPageTen', JSON.stringify(SaveDataPageTen))
    }, [SaveDataPageTen])



    return (
        <div>
            <Header />
            <div className='tent-content'>
                <div className='left'>
                    <div style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>13/16</div>
                    <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Health declarations</div>
                    <div className='Current-location'>
                        <span>In the last five years, has any applicant visited, or lived, outside their
                            country of passport, for more than 3 consecutive months? Do not include time spent in Australia.</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q1")} checked={SaveDataPageTen?.Q1?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q1")} checked={SaveDataPageTen?.Q1?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Does any applicant intend to enter a hospital or a health care facility (including nursing homes) while in Australia?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q2")} checked={SaveDataPageTen?.Q2?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q2")} checked={SaveDataPageTen?.Q2?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Does any applicant intend to work as, or study or train to be, a health care worker or work within a health care facility while in Australia?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q3")} checked={SaveDataPageTen?.Q3?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q3")} checked={SaveDataPageTen?.Q3?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Does any applicant intend to work, study or train within aged care or disability care while in Australia?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q4")} checked={SaveDataPageTen?.Q4?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q4")} checked={SaveDataPageTen?.Q4?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Does any applicant intend to work or be a trainee at a child care centre (including preschools and creches) while in Australia?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q5")} checked={SaveDataPageTen?.Q5?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q5")} checked={SaveDataPageTen?.Q5?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Does any applicant intend to be in a classroom situation for more than 3 months (eg. as either a student, teacher, lecturer or observer)?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q6")} checked={SaveDataPageTen?.Q6?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q6")} checked={SaveDataPageTen?.Q6?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>Has any applicant:</div>
                    <li className='Current-location'>ever had, or currently have, tuberculosis?</li>
                    <li className='Current-location'>been in close contact with a family member that has active tuberculosis?</li>

                    <div className='Current-location'>
                        <span><li>ever had a chest x-ray which showed an abnormality?</li></span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q7")} checked={SaveDataPageTen?.Q7?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q7")} checked={SaveDataPageTen?.Q7?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>During their proposed visit to Australia, does any applicant expect to incur medical costs, or require treatment or medical follow up for:</div>
                    <li className='Current-location'>blood disorder</li>
                    <li className='Current-location'>cancer</li>
                    <li className='Current-location'>heart disease</li>
                    <li className='Current-location'>hepatitis B or C and/or liver disease</li>
                    <li className='Current-location'>HIV infection, including AIDS</li>
                    <li className='Current-location'>kidney disease, including dialysis</li>
                    <li className='Current-location'>mental illness</li>
                    <li className='Current-location'>pregnancy</li>
                    <li className='Current-location'>respiratory disease that has required hospital admission or oxygen therapy</li>
                    <div className='Current-location'>
                        <span><li>other?</li></span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q8")} checked={SaveDataPageTen?.Q8?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q8")} checked={SaveDataPageTen?.Q8?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Does any applicant require assistance with mobility or care due to a medical condition?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q9")} checked={SaveDataPageTen?.Q9?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q9")} checked={SaveDataPageTen?.Q9?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                        <button onClick={() => navigate('/ninethpage')} style={{ marginLeft: "10px" }}>Previous</button>
                        <button onClick={() => navigate('/eleventhpage')} style={{ marginLeft: "auto", marginRight: "auto" }}>Next</button></div>
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
        </div>
    )
}
export default TenthPage;
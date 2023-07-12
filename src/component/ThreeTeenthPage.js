import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './ThreeTeenthPage.scss'
import { useState, useEffect } from "react"
import _, { cloneDeep } from "lodash"
const ThreeteenthPage = () => {
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
        Q10: {
            Yes: false,
            No: false
        },
        Q11: {
            Yes: false,
            No: false
        },
        Q12: {
            Yes: false,
            No: false
        },
        Q13: {
            Yes: false,
            No: false
        },
        Q14: {
            Yes: false,
            No: false
        },
    }
    const [SaveDataPageThirdteen, setSaveDataPageThirdteen] = useState(data)

    const handleOnChange = (Flag, Question) => {
        let CloneState = _.cloneDeep(SaveDataPageThirdteen);

        if (Flag === "Yes") {
            CloneState[Question].Yes = true;
            CloneState[Question].No = false;
        } else if (Flag === "No") {
            CloneState[Question].Yes = false;
            CloneState[Question].No = true;
        }
        setSaveDataPageThirdteen(CloneState)
    }
    useEffect(() => {
        const items = window.localStorage.getItem('SaveDataPageThirdteen');
        if (items) {
            setSaveDataPageThirdteen(JSON.parse(items));
        }
    }, [])
    useEffect(() => {
        window.localStorage.setItem('SaveDataPageThirdteen', JSON.stringify(SaveDataPageThirdteen))
    }, [SaveDataPageThirdteen])




    return (
        <div>
            <Header />
            <div className='thirdteen-content'>
                <div className='left'>
                    <div style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>16/16</div>
                    <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Declarations </div>
                    <div className='Current-location'>Warning:</div>
                    <div className='Current-location'>Giving false or misleading information is a serious offence.</div>
                    <div className='Current-location'>The applicant declares that they:</div>
                    <div className='Current-location'>
                        <span>Have read and understood the information provided to them in this application.</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q1")} checked={SaveDataPageThirdteen?.Q1?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q1")} checked={SaveDataPageThirdteen?.Q1?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Have provided complete and correct information in every detail on this form, and on any attachments to it.</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q2")} checked={SaveDataPageThirdteen?.Q2?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q2")} checked={SaveDataPageThirdteen?.Q2?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Understand that if any fraudulent documents or false or
                            misleading information has been provided with this application,
                            or if any of the applicants fail to satisfy the Minister of their identity,
                            the application may be refused and the applicant(s), and any member of their
                            family unit, may become unable to be granted a visa for a specified period of time.</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q3")} checked={SaveDataPageThirdteen?.Q3?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q3")} checked={SaveDataPageThirdteen?.Q3?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Understand that if documents are found to be fraudulent or information to be
                            incorrect after the grant of a visa, the visa may subsequently be cancelled.</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q4")} checked={SaveDataPageThirdteen?.Q4?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q4")} checked={SaveDataPageThirdteen?.Q4?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Understand that if this application is approved, any person not included in this application will not have automatic right of entry to Australia.</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q5")} checked={SaveDataPageThirdteen?.Q5?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q5")} checked={SaveDataPageThirdteen?.Q5?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Will inform the Department in writing immediately as they become aware of a
                            change in circumstances (including change of address) or if there is any change relating to information they have
                            provided in or with this application, while it is being considered..</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q6")} checked={SaveDataPageThirdteen?.Q6?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q6")} checked={SaveDataPageThirdteen?.Q6?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>
                            Have read the information contained in the Privacy Notice (Form 1442i).</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q7")} checked={SaveDataPageThirdteen?.Q7?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q7")} checked={SaveDataPageThirdteen?.Q7?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>
                            Understand that the department may collect, use and disclose the applicant's personal information
                            (including biometric information and other sensitive information) as outlined in the Privacy Notice (Form 1442i).</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q8")} checked={SaveDataPageThirdteen?.Q8?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q8")} checked={SaveDataPageThirdteen?.Q8?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>
                            Give consent to the collection of their fingerprints and facial image if required.</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q9")} checked={SaveDataPageThirdteen?.Q9?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q9")} checked={SaveDataPageThirdteen?.Q9?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>
                            Understand that, if required to provide their fingerprints and facial image, the
                            applicant's fingerprints and facial image and biographical information held by the Department
                            may be given to Australian law enforcement agencies to help
                            identify the applicant and determine eligibility for grant of the visa being applied for, and for law enforcement purposes.</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q10")} checked={SaveDataPageThirdteen?.Q10?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q10")} checked={SaveDataPageThirdteen?.Q10?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>
                            Give consent to Australian law enforcement agencies disclosing the applicant's biometric,
                            biographical and criminal record information to the Department
                            to help identify the applicant, to determine eligibility for grant of a visa and for law enforcement purposes.</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q11")} checked={SaveDataPageThirdteen?.Q11?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q11")} checked={SaveDataPageThirdteen?.Q11?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>
                            Give consent to the Department using the applicant's biometric, biographical and criminal record
                            information obtained for the purposes of the Migration Act 1958 or the Citizenship Act 2007.</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault11" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q12")} checked={SaveDataPageThirdteen?.Q12?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault11" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q12")} checked={SaveDataPageThirdteen?.Q12?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>As an applicant:</div>
                    <div className='Current-location'>
                        <span>
                            I understand that if my visa ceases to be in effect and I do not hold another
                            visa to remain in Australia at that time, I will be an unlawful non-citizen under the Migration Act 1958. As such,
                            I will be expected to depart from Australia, and be subject to removal under the Migration Act 1958.</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault12" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q13")} checked={SaveDataPageThirdteen?.Q13?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault12" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q13")} checked={SaveDataPageThirdteen?.Q13?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Australian values </div>
                    <div className='Current-location'>
                        <span>
                            Each applicant who is 18 years or over has read, or had explained to them, information provided by the
                            Australian Government on Australian society and values, and agrees to the Australian values statement.</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault13" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q14")} checked={SaveDataPageThirdteen?.Q14?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault13" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q14")} checked={SaveDataPageThirdteen?.Q14?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                        <button onClick={() => navigate('/twelvethpage')} style={{ marginLeft: "10px" }}>Previous</button>
                        <button onClick={() => navigate('/fourteenpage')} style={{ marginLeft: "auto", marginRight: "auto" }}>Next</button></div>
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

export default ThreeteenthPage;
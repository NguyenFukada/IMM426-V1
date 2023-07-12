import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react"
import Header from './Header';
import './EleventhPage.scss'
import _, { cloneDeep } from "lodash"
const EleventhPage = () => {
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
        Q15: {
            Yes: false,
            No: false
        },
        Q16: {
            Yes: false,
            No: false
        },
        Q17: {
            Yes: false,
            No: false
        },


    }
    const [SaveDataPageEleven, setSaveDataPageEleven] = useState(data)

    const handleOnChange = (Flag, Question) => {
        let CloneState = _.cloneDeep(SaveDataPageEleven);

        if (Flag === "Yes") {
            CloneState[Question].Yes = true;
            CloneState[Question].No = false;
        } else if (Flag === "No") {
            CloneState[Question].Yes = false;
            CloneState[Question].No = true;
        }
        setSaveDataPageEleven(CloneState)
    }
    useEffect(() => {
        const items = window.localStorage.getItem('SaveDataPageEleven');
        if (items) {
            setSaveDataPageEleven(JSON.parse(items));
        }
    }, [])
    useEffect(() => {
        window.localStorage.setItem('SaveDataPageEleven', JSON.stringify(SaveDataPageEleven))
    }, [SaveDataPageEleven])

    return (
        <div>
            <Header />
            <div className='ele-content'>
                <div className='left'>
                    <div style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>14/16</div>
                    <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Character declarations</div>
                    <div className='Current-location'>If the applicant answers ‘Yes’ to any of the character declarations they must give all relevant details.
                        For combined applications, state which applicant the declaration applies to</div>
                    <div className='Current-location'>If the matter relates to a criminal conviction, provide:</div>
                    <li className='Current-location'>the date and nature of the offence</li>
                    <li className='Current-location'>full details of the sentence</li>
                    <li className='Current-location'>dates of any period of imprisonment or other detention.</li>

                    <div className='Current-location'>
                        <span>Has any applicant ever been charged with any offence that is currently awaiting legal action?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q1")} checked={SaveDataPageEleven?.Q1?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q1")} checked={SaveDataPageEleven?.Q1?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Has any applicant ever been convicted of an offence in any country (including any conviction which is now removed from official records)?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q2")} checked={SaveDataPageEleven?.Q2?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q2")} checked={SaveDataPageEleven?.Q2?.No}
                                />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Has any applicant ever been the subject of a domestic violence or family violence order, or any other order, of a tribunal or court or other similar authority, for the personal protection of another person?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q3")} checked={SaveDataPageEleven?.Q3?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q3")} checked={SaveDataPageEleven?.Q3?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Has any applicant ever been the subject of an arrest warrant or Interpol notice?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q4")} checked={SaveDataPageEleven?.Q4?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q4")} checked={SaveDataPageEleven?.Q4?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Has any applicant ever been found guilty of a sexually based offence involving a child (including where no conviction was recorded)?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q5")} checked={SaveDataPageEleven?.Q5?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q5")} checked={SaveDataPageEleven?.Q5?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Has any applicant ever been named on a sex offender register?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q6")} checked={SaveDataPageEleven?.Q6?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q6")} checked={SaveDataPageEleven?.Q6?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Has any applicant ever been acquitted of any offence on the grounds of unsoundness of mind or insanity?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q7")} checked={SaveDataPageEleven?.Q7?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q7")} checked={SaveDataPageEleven?.Q7?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Has any applicant ever been found by a court not fit to plead?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q8")} checked={SaveDataPageEleven?.Q8?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q8")} checked={SaveDataPageEleven?.Q8?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Has any applicant ever been directly or indirectly involved in, or associated with, activities which would represent
                            a risk to national security in Australia or any other country?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q9")} checked={SaveDataPageEleven?.Q9?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q9")} checked={SaveDataPageEleven?.Q9?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Has any applicant ever been charged with, or indicted for: genocide, war crimes, crimes against humanity,
                            torture, slavery, or any other crime that is otherwise of a serious international concern?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q10")} checked={SaveDataPageEleven?.Q10?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q10")} checked={SaveDataPageEleven?.Q10?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Has any applicant ever been associated with a person, group or organisation that has been or is involved in criminal conduct?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q11")} checked={SaveDataPageEleven?.Q11?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q11")} checked={SaveDataPageEleven?.Q11?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Has any applicant ever been associated with an organisation engaged in violence or engaged in acts of violence (including war, insurgency,
                            freedom fighting, terrorism, protest) either overseas or in Australia?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault11" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q12")} checked={SaveDataPageEleven?.Q12?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault11" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q12")} checked={SaveDataPageEleven?.Q12?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Has any applicant ever undergone any military/paramilitary training,
                            been trained in weapons/explosives or in the manufacture of chemical/biological products?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault12" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q13")} checked={SaveDataPageEleven?.Q13?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault12" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q13")} checked={SaveDataPageEleven?.Q13?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Has any applicant ever been involved in people smuggling or people trafficking offences?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault13" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q14")} checked={SaveDataPageEleven?.Q14?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault13" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q14")} checked={SaveDataPageEleven?.Q14?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Has any applicant ever been removed, deported or excluded from any country (including Australia)?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault14" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q15")} checked={SaveDataPageEleven?.Q15?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault14" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q15")} checked={SaveDataPageEleven?.Q15?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Has any applicant ever overstayed a visa in any country (including Australia)?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault15" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q16")} checked={SaveDataPageEleven?.Q16?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault15" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q16")} checked={SaveDataPageEleven?.Q16?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Has any applicant ever had any outstanding debts to the Australian Government or any public authority in Australia?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault16" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q17")} checked={SaveDataPageEleven?.Q17?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault16" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q17")} checked={SaveDataPageEleven?.Q17?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                        <button onClick={() => navigate('/tenthpage')} style={{ marginLeft: "10px" }}>Previous</button>
                        <button onClick={() => navigate('/twelvethpage')} style={{ marginLeft: "auto", marginRight: "auto" }}>Next</button></div>
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
export default EleventhPage
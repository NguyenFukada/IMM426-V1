import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { useState, useEffect } from "react"
import './TwelvethPage.scss'
import _, { cloneDeep } from "lodash"
const TwelvethPage = () => {

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



    }
    const [SaveDataPageTwel, setSaveDataPageTwel] = useState(data)

    const handleOnChange = (Flag, Question) => {
        let CloneState = _.cloneDeep(SaveDataPageTwel);

        if (Flag === "Yes") {
            CloneState[Question].Yes = true;
            CloneState[Question].No = false;
        } else if (Flag === "No") {
            CloneState[Question].Yes = false;
            CloneState[Question].No = true;
        }
        setSaveDataPageTwel(CloneState)
    }



    useEffect(() => {
        const items = window.localStorage.getItem('SaveDataPageTwel');
        if (items) {
            setSaveDataPageTwel(JSON.parse(items));
        }
    }, [])
    useEffect(() => {
        window.localStorage.setItem('SaveDataPageTwel', JSON.stringify(SaveDataPageTwel))
    }, [SaveDataPageTwel])

    console.log("check data 123: ", SaveDataPageTwel);
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <div className='twel-content'>
                <div className='left'>
                    <div style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>15/16</div>
                    <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Work and Holiday declarations</div>
                    <div className='Current-location'>Warning:</div>
                    <div className='Current-location'>Giving false or misleading information is a serious offence.</div>
                    <div className='Current-location'>The applicant declares that they:</div>
                    <div className='Current-location'>
                        <span>Understand that they must abide by the conditions of the visa.</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q1")} checked={SaveDataPageTwel?.Q1?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q1")} checked={SaveDataPageTwel?.Q1?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Understand that the visa they are applying for does not permit
                            them to be employed in Australia with one employer for more than 6 months without prior permission.</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q2")} checked={SaveDataPageTwel?.Q2?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q2")} checked={SaveDataPageTwel?.Q2?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Understand that the visa they are applying for does not
                            permit them to undertake studies or training for more than 4 months.</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q3")} checked={SaveDataPageTwel?.Q3?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q3")} checked={SaveDataPageTwel?.Q3?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Have sufficient funds for the initial period of their
                            stay in Australia and for the fare to their intended overseas destination on leaving Australia.</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q4")} checked={SaveDataPageTwel?.Q4?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q4")} checked={SaveDataPageTwel?.Q4?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='Current-location'>
                        <span>Understand that any employment is incidental to their holiday in Australia and the purpose of
                            working is to supplement their holiday funds..</span>
                        <div class="form-check-label" style={{ width: "50%" }}>
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault1"
                                    onChange={() => handleOnChange("Yes", "Q5")} checked={SaveDataPageTwel?.Q5?.Yes} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault2"
                                    onChange={() => handleOnChange("No", "Q5")} checked={SaveDataPageTwel?.Q5?.No} />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                        <button onClick={() => navigate('/eleventhpage')} style={{ marginLeft: "10px" }}>Previous</button>
                        <button onClick={() => navigate('/threeteenthpage')} style={{ marginLeft: "auto", marginRight: "auto" }}>Next</button></div>
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

export default TwelvethPage;
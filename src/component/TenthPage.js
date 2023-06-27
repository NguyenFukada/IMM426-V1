import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from "react"
import Header from './Header';
import './TenthPage.scss'
const TenthPage = () => {
    const navigate = useNavigate();
return(
    <div>
        <Header/>
        <div className='tent-content'>
            <div className='left'>
                <div style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>11/15</div>
                <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Health declarations</div>
                <div className='Current-location'>
                    <span>In the last five years, has any applicant visited, or lived, outside their
                        country of passport, for more than 3 consecutive months? Do not include time spent in Australia.</span>
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
                    <span>Does any applicant intend to enter a hospital or a health care facility (including nursing homes) while in Australia?</span>
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
                <div className='Current-location'>
                    <span>Does any applicant intend to work as, or study or train to be, a health care worker or work within a health care facility while in Australia?</span>
                    <div class="form-check-label" >
                        <div className="check-radio"></div>
                        <div className="check-radio-answer">
                            <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault2" />
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
                            <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault2" />
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
                            <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault2" />
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
                            <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault2" />
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
                            <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault2" />
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
                            <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault2" />
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
                            <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                No
                            </label>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", paddingBottom: "10px" }}>
                    <button onClick={() => navigate('/ninethpage')} style={{ marginLeft: "10px" }}>Previous</button>
                    <button onClick={() => navigate('/eleventhpage')} style={{ marginLeft: "60em" }}>Next</button></div>
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
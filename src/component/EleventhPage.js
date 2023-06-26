import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from "react"
import Header from './Header';
import './EleventhPage.scss'
const EleventhPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header/>
            <div className='ele-content'>
                <div className='left'><div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Character declarations</div>
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
                        <span>Has any applicant ever been convicted of an offence in any country (including any conviction which is now removed from official records)?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" />
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
                        <span>Has any applicant ever been the subject of an arrest warrant or Interpol notice?</span>
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
                        <span>Has any applicant ever been found guilty of a sexually based offence involving a child (including where no conviction was recorded)?</span>
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
                        <span>Has any applicant ever been named on a sex offender register?</span>
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
                        <span>Has any applicant ever been acquitted of any offence on the grounds of unsoundness of mind or insanity?</span>
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
                    <div className='Current-location'>
                        <span>Has any applicant ever been found by a court not fit to plead?</span>
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
                    <div className='Current-location'>
                        <span>Has any applicant ever been directly or indirectly involved in, or associated with, activities which would represent
                            a risk to national security in Australia or any other country?</span>
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
                        <span>Has any applicant ever been charged with, or indicted for: genocide, war crimes, crimes against humanity,
                            torture, slavery, or any other crime that is otherwise of a serious international concern?</span>
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
                    <div className='Current-location'>
                        <span>Has any applicant ever been associated with a person, group or organisation that has been or is involved in criminal conduct?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadioDefault2" />
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
                                <input class="form-check-input" type="radio" name="flexRadioDefault11" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault11" id="flexRadioDefault2" />
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
                                <input class="form-check-input" type="radio" name="flexRadioDefault12" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault12" id="flexRadioDefault2" />
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
                                <input class="form-check-input" type="radio" name="flexRadioDefault13" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault13" id="flexRadioDefault2" />
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
                                <input class="form-check-input" type="radio" name="flexRadioDefault14" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault14" id="flexRadioDefault2" />
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
                                <input class="form-check-input" type="radio" name="flexRadioDefault15" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault15" id="flexRadioDefault2" />
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
                                <input class="form-check-input" type="radio" name="flexRadioDefault16" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault16" id="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex",  paddingBottom: "10px" }}>
                        <button onClick={() => navigate('/tenthpage')} >Previous</button>
                        <button onClick={() => navigate('/twelvethpage')} style={{ marginLeft: "60em" }}>Next</button></div>
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
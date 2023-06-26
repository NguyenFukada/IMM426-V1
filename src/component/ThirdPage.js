import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './ThirPage.scss'
import { useSelector } from 'react-redux';
const ThirdPage = (props) => {
    const navigate = useNavigate();
    const account = useSelector(state => state.user.account);
    return(
        <>
        <Header/>
        <div className='third-content'>
                <div className='left'> <div>
                    <div style={{ fontSize: "20px", fontWeight: "600" }}>Critical data confirmation</div>
                    <div>All information provided is important to the processing of this application.</div>
                    <div>If the information included on this page is incorrect, it may lead to denial of permission to board an aircraft to Australia, even if a visa has been granted.</div>
                    <div>Confirm that the following information is correct and that it is in the correct fields.</div>

                    <div style={{display: "flex"}}>
                        <span>Family name:</span>
                        <span style={{paddingLeft: "50px"}}>{account?.familyName ? account.familyName : "default"}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                        <span>Given names:</span>
                        <span style={{ paddingLeft: "50px" }}>
                            {account?.givenName ? account.givenName : "default"}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                        <span>Sex:</span>
                        <span style={{ paddingLeft: "115px" }}>Female</span>
                    </div>
                    <div style={{ display: "flex" }}>
                        <span>Date of birth:</span>
                        <span style={{ paddingLeft: "50px" }}>{account?.datOfBirth ? account.datOfBirth : "default"}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                        <span>Country of birth:</span>
                        <span style={{ paddingLeft: "30px" }}>{account?.CountryOfPassport.label ? account.CountryOfPassport.label : "default"}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                        <span>Passport number:</span>
                        <span style={{ paddingLeft: "20px" }}>{account?.Passportnumber ? account.Passportnumber : "default"}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                        <span>Country of passport:</span>
                        <span style={{ paddingLeft: "30px" }}>{account?.CountryOfPassport.label ? account.CountryOfPassport.label : "default"}</span>
                    </div>
                    <div >Is the above information corrected?</div>
                    <div class="form-check-label" >
                        <div className="check-radio"></div>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" />
                                <label class="form-check-label" >
                                    Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" />
                                <label class="form-check-label" >
                                    No
                                </label>
                            </div>

                        </div>
                    </div>
                    <div style={{ display: "flex" , paddingBottom:"10px"}}>
                        <button onClick={() => navigate('/secondpage')} style={{ marginLeft: "10px" }}>Previous</button>
                        <button onClick={() => navigate('/fourthpage')} style={{ marginLeft: "60em" }}>Next</button>
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
export default ThirdPage;
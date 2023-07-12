import { useEffect, useMemo, useState } from "react"
import { useNavigate } from 'react-router-dom';
import './SignNaturePage.scss'
import Header from "./Header";
import _, { cloneDeep } from "lodash"
import logoSign from '../assets/images/People smiling on a stripey blue background.jpg'
const SignNaturePage = (props) => {
    const navigate = useNavigate();
    return (

        <>
        <Header/>
                <div className="content-sign" >
                    <div className="left">
                    <div className="title-sign">Transaction Reference Number (TRN): </div>
                    <div className="title-sign-upper">Terms and Conditions</div>
                    <div className="title-sign">View Terms and Conditions</div>
                    <div className="title-sign">View Privacy statement</div>
                    <div class="form-check" style={{paddingLeft: "25em"}}>
                        <input class="form-check-input" type="checkbox" name="sign" checked/>
                        <label class="form-check-label" for="sign">
                            I have read and agree to the terms and conditions
                        </label>
                    </div>
                    <img src={logoSign} style={{paddingLeft: "10px",paddingTop: "5px"}}/>
                    <div className="btn-sign">
                        <button onClick={() => navigate('/firstpage')}
                         className="button-sign"  >Next</button>
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
                <div className="footer">
                <span className="content-foot">Accessibility</span>
                <span className="content-foot">Online Security</span>
                <span className="content-foot">Privacy</span>
                <span className="content-foot">Copyright & Disclaimer</span>
                <span className="content-footer">(E-1208 (Internet) 18/11/2016.1)</span>
                </div>
        </>
    )
   
}
export default SignNaturePage;
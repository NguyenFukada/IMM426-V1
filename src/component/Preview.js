import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { useSelector } from "react-redux";
import './Preview.scss'
import _, { cloneDeep } from "lodash"
const Preview = () => {
    const formatDate = (input) => {
        let datePart = input.match(/\d+/g),
            year = datePart[0].substring(2), // get only two digits
            month = datePart[1], day = datePart[2];

        return day + '/' + month + '/' + "20" + year;
    }
    const account = useSelector(state => state.user.account);
    const navigate = useNavigate();
    let CloneData = _.cloneDeep(window.localStorage.getItem('SaveDataPageOne'));
    CloneData = JSON.parse(CloneData)
    let CloneData2 = _.cloneDeep(window.localStorage.getItem('SaveDataPageTwo'));
    CloneData2 = JSON.parse(CloneData2)
    
    let CloneData3 = _.cloneDeep(window.localStorage.getItem('SaveDataFormNation'));
    CloneData3 = JSON.parse(CloneData3)
    let CloneData4 = _.cloneDeep(window.localStorage.getItem('SaveDataPageThree'));
    CloneData4 = JSON.parse(CloneData4)
    let CloneData5 = _.cloneDeep(window.localStorage.getItem('SaveDataPageFour'));
    CloneData5 = JSON.parse(CloneData5)
    let CloneData6 = _.cloneDeep(window.localStorage.getItem('SaveDataPageFive'));
    CloneData6 = JSON.parse(CloneData6)
    let CloneData7 = _.cloneDeep(window.localStorage.getItem('SaveDataPageSix'));
    CloneData7 = JSON.parse(CloneData7)
    let CloneData8 = _.cloneDeep(window.localStorage.getItem('SaveDataPageSeven'));
    CloneData8 = JSON.parse(CloneData8)
    let CloneData9 = _.cloneDeep(window.localStorage.getItem('SaveDataPageEight'));
    CloneData9 = JSON.parse(CloneData9)
    let CloneData10 = _.cloneDeep(window.localStorage.getItem('SaveDataPageNine'));
    CloneData10 = JSON.parse(CloneData10)
    let CloneData11 = _.cloneDeep(window.localStorage.getItem('SaveDataPageTen'));
    CloneData11 = JSON.parse(CloneData11)
    let CloneData12 = _.cloneDeep(window.localStorage.getItem('SaveDataPageEleven'));
    CloneData12 = JSON.parse(CloneData12)
    let CloneData13 = _.cloneDeep(window.localStorage.getItem('SaveDataPageTwel'));
    CloneData13 = JSON.parse(CloneData13)
    let CloneData14 = _.cloneDeep(window.localStorage.getItem('SaveDataPageThirdteen'));
    CloneData14 = JSON.parse(CloneData14)
    return (
        <>
            <Header />
            <div className='Review-title'>Review Page</div>
            <div style={{ paddingLeft: "10px", paddingBottom: "2em" }}>Please check that the information provided is correct before you continue.</div>
            <div className='content-preview'>
                <div className="left" >
                    <div className='flow2' style={{ fontSize: "20px" }}>Application context</div>
                    <div className="Current-location">Give details of the applicant's current location.</div>
                    <div className='status'>
                        <span className='title-status'>Current location:</span>
                        {CloneData?.currentLocation ? CloneData?.currentLocation.label : "default"}

                    </div>
                    <div className='status'>
                        <span className='title-status'>Legal status:</span>
                        {CloneData?.LegalStatus ? CloneData?.LegalStatus.label : "default"}
                    </div>
                    <div className='flow2' style={{ fontSize: "20px" }}>Current application</div>
                    <div className='Current-location'>
                        <span>Will the applicant be accompanied by dependent children at any time during their stay in Australia on this visa?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    {CloneData?.Q1?.Yes ? "Yes" : "No"}
                                </label>
                            </div>
                        </div>

                        <span>
                            Has the applicant been granted and entered Australia on a Working Holiday visa (subclass 417) before?
                        </span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    {CloneData?.Q2?.Yes ? "Yes" : "No"}
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className='flow2' style={{ fontSize: "20px" }}>Application Type</div>
                    <div className="Current-location">Select the type of work and holiday visa the applicant is applying for:</div>
                    <div className="check-radio-answer" style={{ paddingLeft: "20em" }}>
                        <div class="form-check">
                            <label class="form-check-label" for="flexRadioDefault2">
                                {CloneData.QM.Ans1 ? "First Work and Holiday visa (subclass 462)" : ""}
                                {CloneData.QM.Ans2 ? "Second Work and Holiday visa (subclass 462)" : ""}
                                {CloneData.QM.Ans3 ? "Third Work and Holiday visa (subclass 462)" : ""}
                            </label>
                        </div>


                    </div>
                    <div className='Current-location'>
                        <span>Has the applicant been granted and entered Australia on a first Work and Holiday visa (subclass 462) before?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    {CloneData?.Q4?.Yes ? "Yes" : "No"}
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="DatePicker" style={{ display: "flex" }}>
                        <div style={{ paddingRight: "15em", paddingLeft: "10px" }}>Proposed arrival date:</div>
                        <div className="child-date" >
                            {CloneData?.date ? formatDate(CloneData?.date) : ""}
                        </div>
                    </div>

                    <div className='flow2' style={{ fontSize: "20px" }}>Government support</div>
                    <div className='Current-location'>
                        <span>Does the applicant have a letter of government support to attach to this visa application?</span>
                        <div class="form-check-label" >
                            <div className="check-radio"></div>
                            <div className="check-radio-answer">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    {CloneData?.Q5?.Yes ? "Yes" : "No"}
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="secondpage-container">
                        <div className='flow2' style={{ fontSize: "20px" }}>Passport details</div>
                        <div className='Current-location'>Enter the following details as they appear in the applicant's personal passport.</div>
                        <div className='parent'>
                            <label className="title">Family names</label>
                            {CloneData2?.familyName ? CloneData2.familyName : ""}

                        </div>
                        <div className='parent'>
                            <label className="title">Given names</label>
                            {CloneData2?.givenName ? CloneData2.givenName : ""}
                        </div>
                        <div class="form-check-label" >
                            <div className="check-radio">Sex:</div>
                            <div class="form-check-label" >
                                <div className="check-radio-answer">
                                    <label class="form-check-label" >
                                        {CloneData2?.Q1?.Yes ? "Female" : "Male"}
                                    </label>
                                </div>


                            </div>
                        </div>

                        <div className="DatePicker" style={{ display: "flex" }}>
                            <div style={{ paddingRight: "15em", paddingLeft: "10px" }}>Date of birth:</div>
                            <div className="child-date" >
                                {CloneData2?.dateOfBirth ? formatDate(CloneData2?.dateOfBirth) : ""}
                            </div>
                        </div>

                        <div className='parent'>
                            <label className="title">Passport number </label>
                            {CloneData2?.passportNumber ? CloneData2.passportNumber : ""}
                        </div>
                        <div className='status'>
                            <span className='title-status'>Country of passport</span>
                            {CloneData2?.CountryofPassport ? CloneData2.CountryofPassport.label : ""}
                        </div>
                        <div className='status'>
                            <span className='title-status'>Nationality of passport holder</span>
                            {CloneData2?.passportHolder ? CloneData2.passportHolder.label : ""}
                        </div>
                        <div className="DatePicker" style={{ display: "flex" }}>
                            <div style={{ paddingRight: "15em", paddingLeft: "10px" }}>Date of issue:</div>
                            <div className="child-date" >
                                {CloneData2?.dateOfIssue ? formatDate(CloneData2?.dateOfIssue) : ""}
                            </div>
                        </div>
                        <div className="DatePicker" style={{ display: "flex" }}>
                            <div style={{ paddingRight: "14.5em", paddingLeft: "10px" }}>Date of expiry:</div>
                            <div className="child-date" >
                                {CloneData2?.dateOfExpire ? formatDate(CloneData2?.dateOfExpire) : ""}
                            </div>
                        </div>
                        
                        <div className='parent'>
                            <label className="title">Place of issue / issuing authority</label>
                            {CloneData2?.placeOfIssue ? CloneData2.placeOfIssue : ""}
                        </div>
                        <div className='Current-location'>It is strongly recommended that the passport be valid for at least six months.</div>
                        <div className='Current-location'>National identity card</div>
                        <div className='Current-location'>
                            <span>Does this applicant have a national identity card?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div class="form-check-label" >
                                    <div className="check-radio-answer">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            {CloneData2?.Q2?.Yes ? "Yes" : "No"}
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='thirdpage-container'>
                        <div className='flow2' style={{ fontSize: "20px" }}>National identity card</div>
                        <div className='flow'>Enter details exactly as shown on the national identity card</div>
                        <div className='parent'>
                            <label className="title">Family names</label>
                            {CloneData2?.familyName ? CloneData2.familyName : ""}

                        </div>
                        <div className='parent'>
                            <label className="title">Given names</label>
                            {CloneData2?.givenName ? CloneData2.givenName : ""}
                        </div>
                        <div className='parent'>
                            <label className="title">Identification number</label>
                            {CloneData3?.Identify ? CloneData3.Identify : ""}
                        </div>
                        <div className='parent'>
                            <label className="title">Country of issue</label>
                            {CloneData3?.countryIss ? CloneData3.countryIss : ""}
                        </div>
                        <div className='flow'>Note: If the National identity card does not have a Date of issue or a Date of expiry, do not enter a date. Leave the field/s blank.</div>
                        <div className="DatePicker" style={{ display: "flex" }}>
                            <div style={{ paddingRight: "18em", paddingLeft: "10px" }}>Date of issue:</div>
                            <div className="child-date" >
                                {CloneData3?.DateStart ? formatDate(CloneData3?.DateStart) : ""}
                            </div>
                        </div>
                        <div className="DatePicker" style={{ display: "flex" }}>
                            <div style={{ paddingRight: "17.5em", paddingLeft: "10px" }}>Date of expiry:</div>
                            <div className="child-date" >
                                {CloneData3?.DateEnd ? formatDate(CloneData3?.DateEnd) : ""}
                            </div>
                        </div>
                        <div className='flow' style={{  fontWeight: "600", color:"rgb(110, 110, 233)" }}>Place of birth</div>
                        <div className='parent'>
                            <label className="title">Town / City</label>
                            {CloneData2?.Twon ? CloneData2.Twon : ""}
                        </div>
                        <div className='parent'>
                            <label className="title">State / Province</label>
                            {CloneData2?.State ? CloneData2.State : ""}
                        </div>
                        <div className='parent'>
                            <label className="title">Country of birth</label>
                            {CloneData2?.CountryofBirth ? CloneData2.CountryofBirth.label : ""}
                        </div>
                        <div className='flow2' >Relationship status</div>
                        <div className='parent'>
                            <label className="title">Relationship status</label>
                            {CloneData2?.LegalStatus ? CloneData2.LegalStatus.label : ""}
                        </div>
                        <div className='flow2' >Other names / spellings</div>
                        <div className='Current-location'>
                            <span>Is this applicant currently, or have they ever been known by any other names?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div class="form-check-label" >
                                    <div className="check-radio-answer">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            {CloneData2?.Q3?.Yes ? "Yes" : "No"}
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flow2' >Citizenship</div>
                        <div className='Current-location'>
                            <span>Is this applicant a citizen of the selected country of passport?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div class="form-check-label" >
                                    <div className="check-radio-answer">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            {CloneData2?.Q4?.Yes ? "Yes" : "No"}
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
                                    <div className="check-radio-answer">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            {CloneData2?.Q5?.Yes ? "Yes" : "No"}
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flow2'>Other passports</div>
                        <div className='Current-location'>
                            <span>Does this applicant have other current passports?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div class="form-check-label" >
                                    <div className="check-radio-answer">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            {CloneData2?.Q5?.Yes ? "Yes" : "No"}
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flow2'>Other identity documents</div>
                        <div className='Current-location'>
                            <span>Does this applicant have other identity documents?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div class="form-check-label" >
                                    <div className="check-radio-answer">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            {CloneData2?.Q5?.Yes ? "Yes" : "No"}
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flow2'>Health examination</div>
                        <div className='Current-location'>
                            <span>Has this applicant undertaken a health examination for an Australian visa in the last 12 months?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div class="form-check-label" >
                                    <div className="check-radio-answer">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            {CloneData2?.Q5?.Yes ? "Yes" : "No"}
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='fourthpage-container'>
                    <div className='flow2' style={{fontSize: "20px"}}>Critical data confirmation</div>
                    <div className='flow'>All information provided is important to the processing of this application.</div>
                    <div className='flow'>If the information included on this page is incorrect, it may lead to denial of permission to board an aircraft to Australia, even if a visa has been granted.</div>
                    <div className='flow' style={{fontWeight: "bold"}}>Confirm that the following information is correct and that it is in the correct fields.</div>
                    <div className='parent'>
                        <label className="title">Family names</label>
                        {CloneData2?.familyName ? CloneData2.familyName : ""}

                    </div>
                    <div className='parent'>
                        <label className="title">Given names</label>
                        {CloneData2?.givenName ? CloneData2.givenName : ""}
                    </div>
                    <div class="form-check-label" >
                        <div className="check-radio">Sex:</div>
                        <div class="form-check-label" >
                            <div className="check-radio-answer">
                                <label class="form-check-label" >
                                    {CloneData2?.Q1?.Yes ? "Female" : "Male"}
                                </label>
                            </div>


                        </div>
                    </div>

                    <div className="DatePicker" style={{ display: "flex" }}>
                        <div style={{ paddingRight: "15em", paddingLeft: "10px" }}>Date of birth:</div>
                        <div className="child-date" >
                            {CloneData2?.dateOfBirth ? formatDate(CloneData2?.dateOfBirth) : ""}
                        </div>
                    </div>
                    <div className='status'>
                        <span className='title-status'>Country of birth</span>
                        {CloneData2?.CountryofBirth ? CloneData2.CountryofBirth.label : ""}
                    </div>
                    <div className='parent'>
                        <label className="title">Passport number </label>
                        {CloneData2?.passportNumber ? CloneData2.passportNumber : ""}
                    </div>
                    <div className='status'>
                        <span className='title-status'>Country of passport</span>
                        {CloneData2?.CountryofPassport ? CloneData2.CountryofPassport.label : ""}
                    </div>
                        <div className='Current-location'>
                            <span>Is the above information correct?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div class="form-check-label" >
                                    <div className="check-radio-answer">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            {CloneData4?.QP3?.Yes ? "Yes" : "No"}
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='fifthpage-container'>
                        <div className='flow2' style={{ fontSize: "20px" }}>Additional identity questions</div>
                        <div className='flow'>Provide further details below, where available.</div>
                        <div className='flow2'>Previous travel to Australia</div>
                        <div className='Current-location'>
                            <span>Has this applicant previously travelled to Australia or previously applied for a visa?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div class="form-check-label" >
                                    <div className="check-radio-answer">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            {CloneData5?.QP4?.Yes ? "Yes" : "No"}
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='sixthpage-container'>
                        <div className='flow2' style={{ fontSize: "20px" }}>Contact details</div>
                        <div className='flow2'>Country of residence</div>
                        <div className='status'>
                            <span className='title-status'>Usual country of residence:</span>
                            {CloneData6?.UsualCountryOfResidence ? CloneData6?.UsualCountryOfResidence.label : ""}
                        </div>
                        <div className='flow2'>Department office</div>
                        <div className='flow'>The applicant may be required to attend an Australian Government Office for an interview. Which is the closest office to the applicant’s current location?</div>
                        <div className='status'>
                            <span className='title-status'>Office</span>
                            {CloneData6?.Office ? CloneData6?.Office.label : ""}
                        </div>
                        <div className='flow2'>Residential address</div>
                        <div className='flow'>Note that a street address is required. A post office address cannot be accepted as a residential address.</div>
    
                        <div className='status'>
                            <span className='title-status'>Country</span>
                            {CloneData6?.Country ? CloneData6?.Country.label : ""}
                        </div>
                        <div className='status'>
                            <span className='title-status'>Address</span>
                            {CloneData6?.Address1 ? CloneData6?.Address1 : ""}
                        </div>
                        <div className='status'>
                            <span className='title-status'></span>
                            {CloneData6?.Address2 ? CloneData6?.Address2 : ""}
                        </div>
                        <div className='status'>
                            <span className='title-status'>Suburb / Town</span>
                            {CloneData6?.Town ? CloneData6?.Town : ""}
                        </div>
                        <div className='status'>
                            <span className='title-status'>State or Province</span>
                            {CloneData6?.StateOrProvince ? CloneData6?.StateOrProvince.label : ""}
                        </div>
                        <div className='status'>
                            <span className='title-status'>Postal code</span>
                            {CloneData6?.PostalCode ? CloneData6?.PostalCode : ""}
                        </div>
                        <div className='flow2'>Postal address</div>
                        <div className='Current-location'>
                            <span>Is the postal address the same as the residential address?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData6?.Q1?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flow2'>Contact telephone numbers</div>
                        <div className='flow'>Enter numbers only with no spaces.</div>
                        <div className='status'>
                            <span className='title-status'>Home phone</span>
                            {CloneData6?.HomePhone ? CloneData6?.HomePhone : ""}
                        </div>
                        <div className='status'>
                            <span className='title-status'>Mobile / Cell phone</span>
                            {CloneData6?.CellPhone ? CloneData6?.CellPhone : ""}
                        </div>
                        <div className='status'>
                            <span className='title-status'>Business phone</span>
                            {CloneData6?.BusinessPhone ? CloneData6?.BusinessPhone : ""}
                        </div>
                        <div className='flow2'>Email address</div>
                        <div className='status'>
                            <span className='title-status'>Email address</span>
                            {CloneData6?.Email ? CloneData6?.Email : ""}
                        </div>
                    </div>
                    <hr/>
                    <div className='seventhpage-container'>
                        <div className='flow2' style={{ fontSize: "20px" }}>Authorised recipient</div>
                        <div className='flow'>Does the applicant authorise another person to receive written correspondence on their behalf?</div>
                        <div className='Current-location'>
                            <span>This authorises the department to send the authorised person all written correspondence that would otherwise be sent directly to the applicant.</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData7?.QM?.Ans1 ? "No" : ""}
                                        {CloneData7?.QM?.Ans2 ? "Yes, a registered migration agent" : ""}
                                        {CloneData7?.QM?.Ans3 ? "Yes, a legal practitioner" : ""}
                                        {CloneData7?.QM?.Ans4 ? "Yes, another person" : ""}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flow'>This person is referred to as the 'authorised recipient'</div>
                        <div className='flow2'>Electronic communication</div>
                        <div className='flow'>The Department prefers to communicate electronically as this provides a faster method of communication.</div>
                        <div className='flow'>All correspondence, including notification of the outcome of the application will be sent to:</div>
                        <div className='flow'>Email address</div>
                        <div className='status'>
                            <span className='title-status'>Email address</span>
                            {CloneData7?.Email ? CloneData7?.Email : ""}
                        </div>
                    </div>
                    <hr/>
                    <div className='page-eight-container'>
                        <div className='flow2' style={{ fontSize: "20px" }}>Education</div>
                        <div className='Current-location'>
                            <span>Does the applicant meet the education requirements for this visa?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData8?.Q1?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flow'>Give details of all past and current studies undertaken at secondary level or above.</div>
                        <div className='flow2'>Education history</div>
                        <div className='status'>
                            <span className='title-status'>Qualification</span>
                            {account?.Qualification?.label ? account.Qualification.label : "default"}
                        </div>
                        <div className='status'>
                            <span className='title-status'>Institution name</span>
                            {account?.Institution ? account.Institution : "default"}
                        </div>
                        <div className='status'>
                            <span className='title-status'>Course name</span>
                            {account?.Course ? account.Course : "default"}
                        </div>
                        <div className='status'>
                            <span className='title-status'>Date from</span>
                            {account?.DateFrom ? account.DateFrom : "default"}
                        </div>
                        <div className='status'>
                            <span className='title-status'>Date to</span>
                            {account?.DateTo ? account.DateTo : "default"}
                        </div>
                        <div className='status'>
                            <span className='title-status'>Status</span>
                            Graduated
                        </div>
                        <div className='flow2'>Employment</div>
                        <div className='flow2'>Usual occupation</div>
                        <div className='status'>
                            <span className='title-status'>Usual occupation</span>
                            {CloneData9?.Occupation ? CloneData9.Occupation : ""}
                        </div>
                        <div className='flow2'>Intended employment</div>
                        <div className='status'>
                            <span className='title-status'>Industry type</span>
                            {CloneData9?.IndustryType ? CloneData9.IndustryType.label : ""}
                        </div>

                    </div>
                    <hr/>
                    <div className='language-container'>
                        <div className='flow2' style={{ fontSize: "20px" }}>Language</div>
                        <div className='Current-location'>
                            <span>
                                Does the applicant hold a current passport from the USA, UK, Canada, New Zealand, or the republic of Ireland?
                            </span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData10?.Q1?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flow2'>Main language</div>
                        <div className='status'>
                            <span className='title-status'>Main language</span>
                            {CloneData10?.MainLanguage ? CloneData10?.MainLanguage.label : ""}
                        </div>
                    </div>
                     <hr/>
                    <div className='health-declarations'>
                        <div className='flow2' style={{ fontSize: "20px" }}>Health declarations</div>
                        <div className='Current-location'>
                            <span>
                                In the last five years, has any applicant visited, or lived, outside their country of passport, for more than 3 
                                consecutive months? Do not include time spent in Australia.
                            </span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData11?.Q1?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>
                                Does any applicant intend to enter a hospital or a health care facility 
                                (including nursing homes) while in Australia?
                            </span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData11?.Q2?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>
                                Does any applicant intend to work as, or study or train to be, a 
                                health care worker or work within a health care facility while in Australia?
                            </span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData11?.Q3?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>
                                Does any applicant intend to work, study or train within aged care 
                                or disability care while in Australia?
                            </span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData11?.Q4?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>
                                Does any applicant intend to work or be a trainee at a 
                                child care centre (including preschools and creches) while in Australia?
                            </span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData11?.Q5?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>
                                Does any applicant intend to be in a classroom 
                                situation for more than 3 months (eg. as either a student, teacher, lecturer or observer)?
                            </span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData11?.Q6?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>Has any applicant:</div>
                        <li className='Current-location'>ever had, or currently have, tuberculosis?</li>
                        <li className='Current-location'>been in close contact with a family member that has active tuberculosis?</li>
                        <div className='Current-location'>
                            <li>
                                ever had a chest x-ray which showed an abnormality?
                            </li>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData11?.Q7?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flow'>
                            During their proposed visit to Australia, does any applicant expect 
                            to incur medical costs, or require treatment or medical follow up for:
                        </div>
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
                            <li >other?</li>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData11?.Q8?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>
                                Does any applicant require assistance with mobility or care due to a medical condition?
                            </span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData11?.Q9?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='character-declartions-container'>
                        <div className='flow2' style={{ fontSize: "20px" }}>Character declarations</div>
                        <div className='flow'>If the applicant answers ‘Yes’ to any of the character declarations they must give all relevant details. 
                        For combined applications, state which applicant the declaration applies to.</div>
                        <div className='flow'>If the matter relates to a criminal conviction, provide:</div>
                        <li className='flow'>the date and nature of the offence</li>
                        <li className='flow'>full details of the sentence</li>
                        <li className='flow'>dates of any period of imprisonment or other detention</li>
                        <div className='Current-location'>
                            <span>Has any applicant ever been charged with any offence that is currently awaiting legal action?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData12?.Q1?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Has any applicant ever been convicted of an offence in any country 
                                (including any conviction which is now removed from official records)?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData12?.Q2?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Has any applicant ever been the subject of a domestic violence or family violence order, or any other order, 
                                of a tribunal or court or other similar authority, for the personal protection of another person?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData12?.Q3?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Has any applicant ever been the subject of an arrest warrant or Interpol notice?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData12?.Q4?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Has any applicant ever been found guilty of a sexually based offence involving a child (including where no conviction was recorded)?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData12?.Q5?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Has any applicant ever been named on a sex offender register?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData12?.Q6?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Has any applicant ever been acquitted of any offence on the grounds of unsoundness of mind or insanity?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData12?.Q7?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Has any applicant ever been found by a court not fit to plead?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData12?.Q8?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Has any applicant ever been directly or indirectly involved in, or associated with, 
                                activities which would represent a risk to national security in Australia or any other country?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData12?.Q9?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Has any applicant ever been charged with, or indicted for: genocide, war crimes, crimes 
                                against humanity, torture, slavery, or any other crime that is otherwise of a serious international concern?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData12?.Q10?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Has any applicant ever been associated with a person, group or organisation that has been or is involved in criminal conduct?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData12?.Q11?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Has any applicant ever been associated with an organisation engaged in violence or engaged in acts of violence 
                                (including war, insurgency, freedom fighting, terrorism, protest) either overseas or in Australia?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData12?.Q12?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Has any applicant ever served in a military force, police force, state sponsored / private militia 
                                or intelligence agency (including secret police)?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData12?.Q13?.Yes ? "Yes" : "No"}
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
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData12?.Q14?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Has any applicant ever been involved in people smuggling or people trafficking offences?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData12?.Q15?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Has any applicant ever been removed, deported or excluded from any country (including Australia)?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData12?.Q16?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Has any applicant ever overstayed a visa in any country (including Australia)?</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData12?.Q17?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='work-holiday-declaration'>
                        <div className='flow2' style={{ fontSize: "20px" }}>Work and Holiday declarations</div>
                        <div className='flow'>Warning:</div>
                        <div className='flow'>Giving false or misleading information is a serious offence.</div>
                        <div className='flow'>The applicant declares that they:</div>
                        <div className='Current-location'>
                            <span>Understand that they must abide by the conditions of the visa</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData13?.Q1?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Understand that the visa they are applying for does not permit them to be 
                                employed in Australia with one employer for more than 6 months without prior permission.</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData13?.Q2?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Understand that the visa they are applying for does not permit 
                                them to undertake studies or training for more than 4 months.</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData13?.Q3?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Have sufficient funds for the initial period of their stay in 
                                Australia and for the fare to their intended overseas destination on leaving Australia.</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData13?.Q4?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Understand that any employment is incidental to their holiday in 
                                Australia and the purpose of working is to supplement their holiday funds.</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData13?.Q5?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='declarations-container'>
                    <div className='flow2' style={{ fontSize: "20px" }}>Declarations</div>
                    <div className='flow'>Warning:</div>
                    <div className='flow'>Giving false or misleading information is a serious offence.</div>
                    <div className='flow'>The applicants declare that they:</div>
                        <div className='Current-location'>
                            <span>Have read and understood the information provided to them in this application.</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData14?.Q1?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Have provided complete and correct information in every detail on this form, and on any attachments to it.</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData14?.Q2?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Understand that if any fraudulent documents or false or misleading information has been provided with this application, or if any of the applicants fail to satisfy the Minister of their identity, the application may be refused and the applicant(s), 
                                and any member of their family unit, may become unable to be granted a visa for a specified period of time</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData14?.Q3?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Understand that if documents are found to be fraudulent or information to be 
                                incorrect after the grant of a visa, the visa may subsequently be cancelled.</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData14?.Q4?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Understand that if this application is approved, any person not 
                                included in this application will not have automatic right of entry to Australia.</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData14?.Q5?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Will inform the Department in writing immediately as they become aware of a 
                                change in circumstances (including change of address) or if there is any change relating to 
                                information they have provided in or with this application, while it is being considered.</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData14?.Q6?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Have read the information contained in the Privacy Notice (Form 1442i).</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData14?.Q7?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Understand that the department may collect, use and disclose the applicant's personal information 
                                (including biometric information and other sensitive information) as outlined in the Privacy Notice (Form 1442i)</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData14?.Q8?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Give consent to the collection of their fingerprints and facial image if required.</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData14?.Q9?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Understand that, if required to provide their fingerprints and facial image, the applicant's fingerprints and facial image and biographical information held by the Department may be given to Australian law enforcement agencies to help identify the 
                                applicant and determine eligibility for grant of the visa being applied for, and for law enforcement purposes.</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData14?.Q10?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Give consent to Australian law enforcement agencies disclosing the applicant's biometric, 
                                biographical and criminal record information to the Department to help identify the applicant, 
                                to determine eligibility for grant of a visa and for law enforcement purposes</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData14?.Q11?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='Current-location'>
                            <span>Give consent to the Department using the applicant's biometric, biographical and criminal record 
                                information obtained for the purposes of the Migration Act 1958 or the Citizenship Act 2007.</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData14?.Q12?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flow'>As an applicant:</div>
                        <div className='Current-location'>
                            <span>I understand that if my visa ceases to be in effect and I do not hold another visa to remain in Australia at 
                                that time, I will be an unlawful non-citizen under the Migration Act 1958. As such, I will be expected to 
                                depart from Australia, and be subject to removal under the Migration Act 1958.</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData14?.Q13?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flow2'>Australian values</div>
                        <div className='Current-location'>
                            <span>Each applicant who is 18 years or over has read, or had explained to them, information 
                                provided by the Australian Government 
                                on Australian society and values, and agrees to the Australian values statement.</span>
                            <div class="form-check-label" >
                                <div className="check-radio"></div>
                                <div className="check-radio-answer">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        {CloneData14?.Q14?.Yes ? "Yes" : "No"}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div style={{ display: "flex", paddingBottom: "10px", paddingTop: "10px" }}>
                        <button onClick={() => navigate('/fourteenpage')} style={{ marginLeft: "10px" }}>Previous</button>
                        <button onClick={() => navigate('/submitpage')} style={{ marginLeft: "auto", marginRight: "auto" }}>Next</button></div>
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

export default Preview;
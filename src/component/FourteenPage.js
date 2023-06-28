import Header from "./Header"
import { useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
const FourteenPage = () => {
    const navigate = useNavigate();
    const options = [
        { value: 'Accepted and deferred', label: 'Accepted and deferred' },
        { value: 'Enrolled and deferred', label: 'Enrolled and deferred' },
        { value: 'Currently enrolled', label: 'Currently enrolled' },
        { value: 'Graduated', label: 'Graduated' },
    ]
    return (
        <>
            <Header />
            <div className="fourtee-content">
                <div style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>15/15</div>
                <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Attach documents</div>
                <div style={{ paddingLeft: "10px" }}>Transaction Reference Number (TRN): </div>
                <div style={{ paddingLeft: "10px" }}>Attach the documents listed below then click Next to pay for and submit the application.</div>
                <div style={{ paddingLeft: "10px" }}>If you choose to submit the application without attaching all required documents, you will need to provide a reason.</div>
                <div style={{ paddingLeft: "10px" }}>Applications submitted without all the required documents may take longer to process.</div>
                <div style={{ paddingLeft: "10px" }}>There are specific quality and formatting requirements when scanning documents.</div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Travel Document
                        </Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Add documents</div>
                                <div style={{ display: "flex", paddingTop: "5px" }}>
                                    <div style={{ paddingLeft: "10px", paddingRight: "20em" }}>Document Type</div>
                                    <select >
                                        <option value="Please">Please select a value...</option>
                                        <option value="Passport">Passport</option>
                                        <option value="Other">Other (specify)</option>
                                    </select>
                                </div>
                                <div style={{ display: "flex", paddingTop: "5px" }}>
                                    <div style={{ paddingLeft: "10px", paddingRight: "22em" }}>Description</div>
                                    <input></input>
                                </div>
                                <div style={{ display: "flex", paddingTop: "5px" }}>
                                    <div style={{ paddingLeft: "10px", paddingRight: "22.4em" }}>File names</div>
                                    <input type='file'></input>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="2">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Photograph - Passport	
                        </Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Add documents</div>
                                <div style={{ display: "flex", paddingTop: "5px" }}>
                                    <div style={{ paddingLeft: "10px", paddingRight: "20em" }}>Document Type</div>
                                    <select >
                                        <option value="Please">Please select a value...</option>
                                        <option value="Photograph">Photograph - Passport</option>
                                        <option value="Other">Other (specify)</option>
                                    </select>
                                </div>
                                <div style={{ display: "flex", paddingTop: "5px" }}>
                                    <div style={{ paddingLeft: "10px", paddingRight: "22em" }}>Description</div>
                                    <input></input>
                                </div>
                                <div style={{ display: "flex", paddingTop: "5px" }}>
                                    <div style={{ paddingLeft: "10px", paddingRight: "22.4em" }}>File names</div>
                                    <input type='file'></input>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey="3">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Evidence of funds for stay in Australia and departure
                        </Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Add documents</div>
                                <div style={{ display: "flex", paddingTop: "5px" }}>
                                    <div style={{ paddingLeft: "10px", paddingRight: "20em" }}>Document Type</div>
                                    <select >
                                        <option value="Please">Please select a value...</option>
                                        <option value="Bank">Bank Statement - Personal</option>
                                        <option value="Other">Other (specify)</option>
                                    </select>
                                </div>
                                <div style={{ display: "flex", paddingTop: "5px" }}>
                                    <div style={{ paddingLeft: "10px", paddingRight: "22em" }}>Description</div>
                                    <input></input>
                                </div>
                                <div style={{ display: "flex", paddingTop: "5px" }}>
                                    <div style={{ paddingLeft: "10px", paddingRight: "22.4em" }}>File names</div>
                                    <input type='file'></input>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey="4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Language Ability - English, Evidence of	
                        </Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Add documents</div>
                                <div style={{ display: "flex", paddingTop: "5px" }}>
                                    <div style={{ paddingLeft: "10px", paddingRight: "20em" }}>Document Type</div>
                                    <select >
                                        <option value="Please">Please select a value...</option>
                                        <option class="wc-option" value="DT050">Evidence of Australian Qualifications</option>
                                        <option class="wc-option" value="DT051">Evidence of Australian Work Experience</option>
                                        <option class="wc-option" value="DT083">International English Language Testing System (IELTS)</option>
                                        <option class="wc-option" value="DT125">Occupational English Test Certificate</option>
                                        <option class="wc-option" value="DT127">Other (specify)</option>
                                        <option class="wc-option" value="DT128">Other English Language Test Document</option>
                                        <option class="wc-option" value="DT132">Passport</option>
                                        <option class="wc-option" value="DT335">Pearson Test of English Academic (PTE Academic)</option>
                                        <option class="wc-option" value="DT336">Cambridge English: Advanced (CAE) Test</option>
                                        <option class="wc-option" value="DT337">Test of English as a Foreign Language internet-based test (TOEFL iBT)</option>
                                    </select>
                                </div>
                                <div style={{ display: "flex", paddingTop: "5px" }}>
                                    <div style={{ paddingLeft: "10px", paddingRight: "22em" }}>Description</div>
                                    <input></input>
                                </div>
                                <div style={{ display: "flex", paddingTop: "5px" }}>
                                    <div style={{ paddingLeft: "10px", paddingRight: "22.4em" }}>File names</div>
                                    <input type='file'></input>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey="5">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Qualifications - Overseas, Evidence of	
                        </Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Add documents</div>
                                <div style={{ display: "flex", paddingTop: "5px" }}>
                                    <div style={{ paddingLeft: "10px", paddingRight: "20em" }}>Document Type</div>
                                    <select >
                                        <option class="wc-option" value="" selected="">Please select a value...</option>
                                        <option class="wc-option" value="DT001">Academic Transcript</option>
                                        <option class="wc-option" value="DT018">CADGEC</option>
                                        <option class="wc-option" value="DT041">Educational Certificate (Degree, Diploma etc)</option>
                                        <option class="wc-option" value="DT097">Letter/Statement - Education Institution</option>
                                        <option class="wc-option" value="DT127">Other (specify)</option>
                                    </select>
                                </div>
                                <div style={{ display: "flex", paddingTop: "5px" }}>
                                    <div style={{ paddingLeft: "10px", paddingRight: "22em" }}>Description</div>
                                    <input></input>
                                </div>
                                <div style={{ display: "flex", paddingTop: "5px" }}>
                                    <div style={{ paddingLeft: "10px", paddingRight: "22.4em" }}>File names</div>
                                    <input type='file'></input>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <div style={{ display: "flex", paddingBottom: "10px", paddingTop: "10px" }}>
                    <button onClick={() => navigate('/threeteenthpage')} style={{ marginLeft:"10px"}}>Previous</button>
                    <button onClick={() => navigate('/submitpage')} style={{ marginLeft: "60em" }}>Next</button></div>
            </div>
        </>
    )
}

export default FourteenPage
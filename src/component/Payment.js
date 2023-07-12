import { useEffect, useMemo, useState } from "react"
import Select from 'react-select'
import countryList from 'react-select-country-list'
import './Payment.scss'
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import _, { cloneDeep } from "lodash"
import visa from '../assets/images/visa.png'
import jcb from '../assets/images/jcb.png'
import diners from '../assets/images/diners.png'
import american_express from '../assets/images/american_express.png'
import mastercard from '../assets/images/mastercard.png'
const Payment = () => {

    const navigate = useNavigate();
    const formatDate = (input) => {
        let datePart = input.match(/\d+/g),
            year = datePart[0].substring(2), // get only two digits
            month = datePart[1], day = datePart[2];

        return day + '/' + month + '/' + "20" + year;
    }
    const optionsCountry = useMemo(() => countryList().getData(), [])
    let CloneData = _.cloneDeep(window.localStorage.getItem('SaveDataPageTwo'));
    CloneData = JSON.parse(CloneData)
    return (
        <>
            <Header />
            <div className="payment-content">
                <div >
                    <table className="table-payment">
                            <tr >
                                <th className="align-left ">Reference <abbr title="number">no.</abbr></th>
                                <th className="align-left">Name</th>
                                <th className="align-left">Date of birth</th>
                                <th className="align-left">Amount (<abbr title="Australian Dollars">AUD</abbr>)</th>
                            </tr>
                        
                        <tbody>

                            <tr>
                                <td className="align-left">EGOWKWNV3R2</td>
                                <td className="align-left">{CloneData?.familyName 
                                && CloneData?.givenName ? CloneData?.familyName+" "+CloneData.givenName : "default"}</td>
                                <td className="align-left">{CloneData?.dateOfBirth ?
                                    formatDate(CloneData.dateOfBirth.substring(0, 10)) : "default"}</td>
                                <td className="align-left">XXX.XX</td>
                                
                            </tr>

                        </tbody>
                        <tfoot>
                        </tfoot></table>

                </div>
                <div className="flow">Total application charges: $xxx.00 (AUD)</div>
                <div className="payment-detail">
                    <div className="flow">Payment options</div>
                    <div className="flow"> If you pay now, your application will be sent to the Australian Government.</div>
                    <div className="flow">Your decision to pay will be final, your payment cannot be disputed, even if you change your mind about your application.</div>
                    <div className="form-check-label" >
                        <div className="check-radio"></div>
                        <div className="form-check-label" >
                            <div className="check-radio-answer">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"/>
                                <label className="form-check-label" >
                                    Debit/credit card
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                    />
                                <label className="form-check-label" >
                                    PayPal
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
/>
                                <label className="form-check-label" >
                                    UnionPay
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                />
                                <label className="form-check-label" >
                                    BPAY (Australian bank accounts only)
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="flow">Payment by debit/credit card</div>
                    <div>
                        <img src={visa} className="img-payment"/>
                        <img src={mastercard} className="img-payment" />
                        <img src={american_express} className="img-payment" />     
                        <img src={diners} className="img-payment" />
                        <img src={jcb} className="img-payment" />
                    </div>
                    <div className="flow">Required field *</div>
                    <div className="flow">Cardholder Address</div>
                    <div className='status'>
                        <span className='title-status'>Country</span>
                        <Select options={optionsCountry} className="select"/>
                    </div>
                    <div className='parent'>
                        <label className="title">Address 1*</label>
                        <span className="inputform"><input className='form-control col-6' 
                        placeholder="require"
                        ></input></span>
                    </div>
                    <div className='parent'>
                        <label className="title">Address 2</label>
                        <span className="inputform"><input className='form-control col-6'
                        ></input></span>
                    </div>
                    <div className='parent'> 
                        <label className="title">City*</label>
                        <span className="inputform"><input className='form-control col-6'
                            placeholder="require"
                        ></input></span>
                    </div>
                    <div className='parent'> 
                        <label className="title">State/Province/Region *</label>
                        <span className="inputform"><input className='form-control col-6'
                            placeholder="require"
                        ></input></span>
                    </div>
                    <div className='parent'>
                        <label className="title">Postcode/ Zip Code *</label>
                        <span className="inputform"><input className='form-control col-6'
                            placeholder="require"
                        ></input></span>
                    </div>
                    <div className="flow">Card Details</div>
                    <div className='parent'>
                        <label className="title">Debit/credit card number *</label>
                        <span className="inputform"><input className='form-control col-6'
                            placeholder="require"
                        ></input></span>
                    </div>
                    <div className='parent'>
                        <label className="title">Name on debit/credit card *</label>
                        <span className="inputform"><input className='form-control col-6'
                            placeholder="require"
                        ></input></span>
                    </div>
                    <div className='parent'>
                        <label className="title">Card security code (CSC) *</label>
                        <span className="inputform"><input className='form-control col-6'
                            placeholder="require"
                        ></input></span>
                    </div>
                    <div >
                        <span className="flow">Credit card surcharge (AUD)</span>
                        <span className="dollar-symbol">$</span>
                        <span className="money-pay">0.00</span>
                    </div>
                    <div >
                        <span className="flow">Total payment amount (AUD)</span>
                        <span className="dollar-symbol-2">$</span>
                        <span className="money-pay">xxx.xx</span>
                    </div>
                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                        <button onClick={() => navigate('/submitpage')} style={{ marginLeft: "10px" }}>Cancle</button>
                        <button onClick={() => navigate('/demo')} style={{ marginLeft: "40em" }}>Submit</button>
                    </div>
                </div>
                
            </div> 
        </>

    )
}

export default Payment;
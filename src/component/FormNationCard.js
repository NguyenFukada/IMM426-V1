import { useState } from "react"
import './SecondPage.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
const NationCard = (props) => {
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [familyName,setFamilyName] = useState('')
    const [givenName,setGivenname] = useState('')
    const [Identification, setIdenfication] = useState('')
    const [countryIssue, setContryIssue] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const handleOnChange = () => {
        dispatch({
            type: 'FETCH_SAVE_USER',
            payload: {
                familyName, givenName, Identification, countryIssue
            }
        })
        navigate('/secondpage')
    }
    return (
        <div className="secondpage-container">
            <div className='Current-location'>National identity card</div>
            <div className='Current-location'>Enter details exactly as shown on the national identity card   </div>
            <div className='parent'>
                <label className="title">Family name</label>
                <span className="inputform"><input className='form-control col-6'
                onChange={(Event) => setFamilyName(Event.target.value)}></input></span>
            </div>
            <div className='parent'>
                <label className="title">Given names</label>
                <span className="inputform"><input className='form-control col-6'
                    onChange={(Event) => setGivenname(Event.target.value)}></input></span>
            </div>
            <div className='parent'>
                <label className="title">Identification number</label>
                <span className="inputform"><input className='form-control col-6'
                    onChange={(Event) => setIdenfication(Event.target.value)}></input></span>
            </div>
            <div className='parent'>
                <label className="title">Country of issue</label>
                <span className="inputform"><input className='form-control col-6'
                    onChange={(Event) => setContryIssue(Event.target.value)}></input></span>
            </div>
            <div className='Current-location'>Note: If the National identity card does not have a Date of issue or a Date of expiry, do not enter a date. Leave the field/s blank.</div>
            <div className="DatePicker2" style={{display: "flex"}}>
                <div style={{paddingRight: "31em"}}>Date of issue</div>
                <div className="child-date" ><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />  </div>
            </div>
            <div className="DatePicker2" style={{ display: "flex" }}>
                <div style={{ paddingRight: "30.5em" }}>Date of expiry</div>
                <div className="child-date" ><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />  </div>
            </div>
            <button onClick={() => navigate('/secondpage')}>Cancle</button>
            <button onClick={() => handleOnChange()}>Confirm</button>
        </div>

    )
}
export default NationCard;
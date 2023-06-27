import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { useMemo, useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux'
import './DetailPicker.scss'
const DetailStudy = () => {

    const [Qualification, setQualification] = useState("");
    const [Institution, setInstitution] = useState("");
    const [Course, setCourse] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [startDateTo, setStartDateTo] = useState(new Date());
    const optionsCountry = useMemo(() => countryList().getData(), [])

    const FormatDate = (value) => {
        const today = value;
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '/' + mm + '/' + yyyy;
        return formattedToday;
    }

    const options = [
        {
            value: 'Doctoral Degree (Other)', label: 'Doctoral Degree(Other) ' },
        { value: 'Doctoral Degree in Science, Business or Technology', label: 'Doctoral Degree in Science, Business or Technology' },
        { value: 'Masters Degree in Science, Business or Technology', label: 'Masters Degree in Science, Business or Technology' },
        { value: 'Masters Degree (Other)', label: 'Masters Degree (Other)' },
        { value: 'Honours Degree in Science, Business or Technology', label: 'Honours Degree in Science, Business or Technology' },
        { value: 'Honours Degree (Other)', label: 'Honours Degree (Other)' },
        { value: 'Bachelor Degree in Science, Business or Technology', label: 'Bachelor Degree in Science, Business or Technology' },
        { value: 'Bachelor Degree (Other)', label: 'Bachelor Degree (Other)' },
        { value: 'Graduate Diploma', label: 'Graduate Diploma' },
        { value: 'Other qualification or award recognised by assessing authority', label: 'Other qualification or award recognised by assessing authority' },
        { value: 'Advanced Diploma', label: 'Advanced Diploma' },
        { value: 'Associate Degree', label: 'Associate Degree' },
        { value: 'Diploma', label: 'Diploma' },
        { value: 'AQF Certificate IV', label: 'AQF Certificate IV' },
        { value: 'AQF Certificate III', label: 'AQF Certificate III' },
        { value: 'Certificate III (non-AQF)', label: 'Certificate III (non-AQF)' },
        { value: 'Senior Secondary School Certificate', label: 'Senior Secondary School Certificate' },
        { value: 'Other - Non AQF accreditation', label: 'Other - Non AQF accreditation' },
        { value: 'Other', label: 'Other' },
    ]
    const options2 = [
        { value: 'Accepted and deferred', label: 'Accepted and deferred' },
        { value: 'Enrolled and deferred', label: 'Enrolled and deferred' },
        { value: 'Currently enrolled', label: 'Currently enrolled' },
        { value: 'Graduated', label: 'Graduated' },
    ]
    const handleOnChange = () => {
        
        let startDate_Clone = FormatDate(startDate);
        
        let  startDateTo_Clone = FormatDate(startDateTo);
        dispatch({
            type: 'FETCH_DEGREE',
            payload: {
                Qualification, Institution, Course, startDate_Clone, startDateTo_Clone,
            }
        })
        navigate('/sevenpage')
    }
    return (
        
        <div className="detailstudies-container">
            <div style={{ fontSize: "20px", fontWeight: "600", paddingLeft: "10px" }}>Education history</div>
            <div className='status'>
                <span className='title-status'>Qualification</span>
                <Select options={options} className="select" 
                onChange={(Event) => setQualification(Event)}/>
            </div>
            <div className='parent'>
                <label className="title">Course name</label>
                <span className="inputform"><input className='form-control col-12'
                onChange={(Event) => setCourse(Event.target.value)}></input></span>
            </div>
            <div className='parent'>
                <label className="title">Institution name</label>
                <span className="inputform"><input className='form-control col-12'
                    onChange={(Event) => setInstitution(Event.target.value)}></input></span>
            </div>
            <div className='status'>
                <span className='title-status'>Country of institution</span>
                <Select options={optionsCountry} className="select" />
            </div>
            <div className="DatePicker2">
                <div >Date from</div>
                <div className="child-date" ><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} 
/>  </div>
            </div>
            <div className="DatePicker2">
                <div >Date to</div>
                <div className="child-date2" ><DatePicker selected={startDateTo} onChange={(date) => setStartDateTo(date)} 
/>  </div>
            </div>
            <div className='status'>
                <span className='title-status'>Qualification</span>
                <Select options={options2} className="select" />
            </div>
            <button onClick={() => navigate('/sevenpage')}>Cancel</button>
            <button onClick={() => handleOnChange()}>Confirm</button>
        </div>

    )
}
export default DetailStudy;
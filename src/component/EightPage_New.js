import { defaultsDeep } from "lodash"
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import './EightPage.scss'
import _, { cloneDeep } from "lodash"
import { useEffect, useState } from "react";
const EightPage_New = () => {
    const navigate = useNavigate();
    const options = [
        { value: 'Accommodation and Food Services', label: 'Accommodation and Food Services' },
        { value: 'Administrative and Support Services', label: 'Administrative and Support Services' },
        { value: 'Agriculture, Forestry and Fishing', label: 'Agriculture, Forestry and Fishing' },
        { value: 'Arts and Recreation Services', label: 'Arts and Recreation Services' },
        { value: 'Construction', label: 'Construction' },
        { value: 'Education and Training', label: 'Education and Training' },
        { value: 'Electricity, Gas, Water and Waste Services', label: 'Electricity, Gas, Water and Waste Services' },
        { value: 'Financial and Insurance Services', label: 'Financial and Insurance Services' },
        { value: 'Health Care and Social Assistance', label: 'Health Care and Social Assistance' },
        { value: 'Information Media and Telecommunications', label: 'Information Media and Telecommunications' },
        { value: 'Manufacturing', label: 'Manufacturing' },
        { value: 'Mining', label: 'Mining' },
        { value: 'Other Services', label: 'Other Services' },
        { value: 'Professional, Scientific and Technical Services', label: 'Professional, Scientific and Technical Services' },
        { value: 'Public Administration and Safety', label: 'Public Administration and Safety' },
        { value: 'Rental, Hiring and Real Estate Services', label: 'Rental, Hiring and Real Estate Services' },
        { value: 'Retail Trade', label: 'Retail Trade' },
        { value: 'Transport, Postal and Warehousing', label: 'Transport, Postal and Warehousing' },
        { value: 'Wholesale Trade', label: 'Wholesale Trade' },
    ]

    const data = {
        Occupation: "",
        IndustryType: "",
    }
    const [SaveDataPageEight, setSaveDataPageEight] = useState(data)
    const ChangeNation = (value, Id) => {

        let CloneState = _.cloneDeep(SaveDataPageEight);
        CloneState[Id] = value;
        setSaveDataPageEight(CloneState)
    }

    const HandleChangeInputText = (value, Title) => {
        let CloneState = _.cloneDeep(SaveDataPageEight);
        CloneState[Title] = value;
        setSaveDataPageEight(CloneState)
    }

    useEffect(() => {
        const items = window.localStorage.getItem('SaveDataPageEight');
        if (items) {
            setSaveDataPageEight(JSON.parse(items));
        }
    }, [])
    useEffect(() => {
        window.localStorage.setItem('SaveDataPageEight', JSON.stringify(SaveDataPageEight))
    }, [SaveDataPageEight])


    return (
        <>
            <Header />
            <div className="eightpage-container">
                <div className="left">
                    <div style={{ justifyContent: "center", alignContent: "center", display: "flex" }}>10/16</div>
                    <div style={{ paddingLeft: "10px", fontSize: "20px", fontWeight: "600" }} >Employment</div>
                    <div style={{ paddingLeft: "10px" }}>Usual occupation</div>
                    <div className='parent'>
                        <label className="title">Usual occupation</label>
                        <span className="inputform"><input className='form-control col-6'
                            value={SaveDataPageEight.Occupation}
                            onChange={(Event) => HandleChangeInputText(Event.target.value, "Occupation")}></input></span>
                    </div>
                    <div style={{ paddingLeft: "10px" }}>Intended employment</div>
                    <div className='status'>
                        <span className='title-status'>Industry type</span>
                        <Select options={options} className="select"
                            value={SaveDataPageEight.IndustryType}
                            onChange={(Event) => ChangeNation(Event, "IndustryType")} />
                    </div>
                    <div style={{ display: "flex", paddingBottom: "10px" }}>
                        <button onClick={() => navigate('/sevenpage')} style={{ marginLeft: "10px" }} >Previous</button>
                        <button onClick={() => navigate('/ninethpage')} style={{ marginLeft: "auto", marginRight: "auto" }}>Next</button></div>
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
export default EightPage_New;
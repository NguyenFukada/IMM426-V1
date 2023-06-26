import { defaultsDeep } from "lodash"
import Header from "./Header";

const EightPage = () => {
    return (
        <>
        <Header/>
            <div className="eightpage-container">
                <div style={{ fontSize: "20px", fontWeight: "600" }}>Employment</div>
                <div>Usual occupation</div>
                <div className='parent'>
                    <label className="title">Usual occupation</label>
                    <span className="inputform"><input className='form-control col-6'></input></span>
                </div>
                <div>Intended employment</div>
            </div>
        </>
    )
}
export default EightPage;
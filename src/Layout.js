import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import App from './App';
import SecondPage from './component/SecondPage';
import NationCard from './component/FormNationCard';
import ThirdPage from './component/ThirdPage';
import FourPage from './component/FourPage';
import FifthPage from './component/FifthPage';
import SixPage from './component/SixPage';
import SevenPage from './component/SevenPage';
import DetailStudy from './component/DetailStudies';
import EightPage_New from './component/EightPage_New';
import NinePage from './component/NinePage';
import TenthPage from './component/TenthPage';
import EleventhPage from './component/EleventhPage';
import TwelvethPage from './component/TwelvethPage';
import ThreeteenthPage from './component/ThreeTeenthPage';
import Header from './component/Header';
import FirstPage from './component/FirstPage';
import FourteenPage from './component/FourteenPage';
import SubmitPage from './component/SubmitPage';
import _, { cloneDeep } from "lodash"
import PopUp from './component/PopUp';
import SignNaturePage from './component/SignNaturePage';
import Payment from './component/Payment';
import Preview from './component/Preview';
const Notfound = () => {
    return (
        <div className='container mt-3 d-flex justify-content-center alert alert-danger '>404.Not found data with your current URL</div>
    )
}
const Layout = () => {
    return (
        <Routes>
            <Route path='/demo' element={<PopUp />}></Route>
            <Route path='/462demo' element={<PopUp />}></Route>
            <Route path="/demopage" element={<App />}></Route>
            <Route path="/signaturepage" element={<SignNaturePage />}></Route>
            <Route path="/firstpage" element={<FirstPage />}></Route>
            <Route path="/secondpage" element={<SecondPage />}></Route>
            <Route path="/national-identity-card" element={<NationCard />}></Route>
            <Route path="/thirdpage" element={<ThirdPage />}></Route>
            <Route path="/fourthpage" element={<FourPage />}></Route>
            <Route path="/fifthpage" element={<FifthPage />}></Route>
            <Route path="/sixthpage" element={<SixPage />}></Route>
            <Route path="/sevenpage" element={<SevenPage />}></Route>
            <Route path="/detail-studies" element={<DetailStudy />}></Route>
            <Route path="/eightpage" element={<EightPage_New />}></Route>
            <Route path="/ninethpage" element={<NinePage />}></Route>
            <Route path="/tenthpage" element={<TenthPage />}></Route>
            <Route path="/eleventhpage" element={<EleventhPage />}></Route>
            <Route path="/twelvethpage" element={<TwelvethPage />}></Route>
            <Route path="/threeteenthpage" element={<ThreeteenthPage />}></Route>
            <Route path="/fourteenpage" element={<FourteenPage />}></Route>
            <Route path="/review-page" element={<Preview />}></Route>
            <Route path="/submitpage" element={<SubmitPage />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
            <Route
                path="/"
                element={<Navigate to="/462demo" replace />}
            />
            <Route
                path="/"
                element={<Navigate to="/demo" replace />}
            />
            <Route path='*' element={<Notfound />} />
        </Routes>
    )
}

export default Layout;
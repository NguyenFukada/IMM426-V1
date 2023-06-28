import Header from "./component/Header";
import './App.scss'
import { useNavigate } from 'react-router-dom';
import Notice from "./component/Notice";
const App = (props) => {
    const navigate = useNavigate();
    return (
            <div className="app-container">
                <div className="header-container">
                    <Header />
                </div>
                <Notice />
            </div>
    )
}

export default App;
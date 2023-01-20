import './App.css';
import {Outlet, useNavigate} from "react-router-dom";

function App() {
    let navigate = useNavigate();
    return (
        <div className="App">
            <nav className={"nav"}>
                <div className={"main-nav"}>
                    <button onClick={() => {
                        navigate("")
                    }}>Home
                    </button>
                    <button onClick={() => {
                        navigate("playground")
                    }}>Play Ground
                    </button>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
}

export default App;

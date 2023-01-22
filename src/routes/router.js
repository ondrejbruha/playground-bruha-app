import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "../App";
import Home from "./home/home";
import Playground from "./playground/playground";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App/>}>
                    <Route path={""} element={<Home/>}></Route>
                    <Route path={"playground"} element={<Playground/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
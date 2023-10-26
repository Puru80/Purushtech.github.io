import './App.scss';
import {HashRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;

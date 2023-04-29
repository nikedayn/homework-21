//header
import Header from "./Components/Header/Header";

//страницы сайта
import NotesPage from "./Components/NotesPage/NotesPage";
import MainPage from "./Components/MainPage/MainPage";

//footer
import Footer from "./Components/Footer/Footer";

//для новых страниц
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
    return(
        <div className="wraper">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/notes" element={<NotesPage/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;
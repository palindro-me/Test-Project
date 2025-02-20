import './App.css';
import {GlobalStyles} from "./styles/GlobalStyles";
import {Main} from "./layout/sections/main/Main";
import {Header} from "./layout/header/headerMenu/Header";
import {Projects} from "./layout/sections/projects/Projects";
import {Skills} from "./layout/sections/skills/Skills";


function App() {
    return (
        <div className="App">
            <GlobalStyles/>
            <Header/>
            <Main/>
            <Projects/>
            <Skills/>
            {/*<Contact/>*/}
            {/*<Footer/>*/}
        </div>
    );
}



export default App;


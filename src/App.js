import './App.css';
import Navigator from './navbar/navbar';
import Galery from './galery/galery';
import PanelArticles from './listproject/ListProjects';
import PanelContact from './contact/panelContact';
import MainContent from './maincontent/maincontent';

function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Navigator />
                <div className="tm-main">
                    <MainContent/>
                    <PanelArticles/>
                    <PanelContact 
                    Phone="541136695771" 
                    Email="pgnahuel@gmail.com" 
                    Instagram="_nacho.png" 
                    X="NachoPNG" 
                    Youtube="NahuelGomez94" 
                    Linkedin="nahuel-g%C3%B3mez-a869617b"
                    Podcast="escuchar-audios-nahuel-gomez_al_15792872_1.html"/>
                </div>
            </div>
        </div>
    );
}

export default App;

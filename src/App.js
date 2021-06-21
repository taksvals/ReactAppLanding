import './App.css';
import ReactDOM from 'react-dom';
import Navbar from './components/sections/navbar';
import Home from './components/sections/home';
import Partners from './components/sections/parthers';
import AwesomeFeatures from './components/sections/awesome-features';
import Jackpot from './components/sections/jackpot';
import JackpotFeatures from './components/sections/jackpot-features';
import Integration from './components/sections/integration';
import Advantages from './components/sections/advantages';
import UltimateFeatures from './components/sections/ultimate-features';
import Pricing from './components/sections/pricing';
import Testiminial from './components/sections/testiminial';
import FAQ from './components/sections/faq';
import Download from './components/sections/download';
import Footer from './components/sections/footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Partners />
            <AwesomeFeatures />
            <Jackpot />
            <JackpotFeatures />
            <Integration />
            <Advantages />
            <UltimateFeatures />
            <Pricing />
            <Testiminial />
            <FAQ />
            <Download />
            <Footer />

        </div>
    );
}

export default App;

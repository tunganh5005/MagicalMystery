import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/routes/Home/Home'
import About from './components/routes/About/About'
import Gallery from './components/routes/Gallery/Gallery'
import Contact from './components/routes/Contact/Contact'
import Business from './components/routes/Business'
import Packages from './components/routes/Packages'
import NavBar from './components/utils/NavBar'
import Footer from './components/routes/Footer'
import PrePlanned from './components/routes/Planning/PrePlanned/PrePlanned'
import Known from './components/routes/Planning/PrePlanned/Known/Known';
import KnownFullPlan from './components/routes/Planning/PrePlanned//Known/Full/Plan';
import KnownLastMinutePlan from './components/routes/Planning/PrePlanned//Known/LastMinute/Plan';

import UnKnown from './components/routes/Planning/PrePlanned/UnKnown/UnKnown';
import UnKnownFullPlan from './components/routes/Planning/PrePlanned/UnKnown/Full/Plan';
import UnKnownLastMinutePlan from './components/routes/Planning/PrePlanned//UnKnown/LastMinute/Plan';
import TailorMade from './components/routes/Planning/TailorMade/TailorMade';
import Call from './components/routes/Planning/TailorMade/Call/Call';
import Form from './components/routes/Planning/TailorMade/Form/Form';
import CreateExperience from './components/routes/Planning/CreateExperience/CreateExperience';

import CreateExperienceFullPlan from './components/routes/Planning/CreateExperience/Full/Plan';
import CreateExperienceLastMinutePlan from './components/routes/Planning/CreateExperience/LastMinute/Plan';
import Experiences from './components/routes/Experiences/Experiences';
import Romantic from './components/routes/Planning/TailorMade/Form/Romantic';
import PrePlannedExperienceRoute from './components/routes/Experiences/PrePlannedExperienceRoute';
import CreateYourExperienceRoute from './components/routes/Experiences/CreateYourExperienceRoute';
import PuzzledExperienceRouteCopy from './components/routes/Experiences/PuzzledExperienceRoute copy';
import TailorMadeExperienceRoute from './components/routes/Experiences/TailorMadeExperienceRoute';

function App() {
  return (
    <div className="App" style={{minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: '#F6F1EA'}}>
      <NavBar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/experiences" exact>
          <Experiences/>
        </Route>
        <Route path="/experiences/preplanned" exact>
          <PrePlannedExperienceRoute/>
        </Route>
        <Route path="/experiences/create" exact>
          <CreateYourExperienceRoute/>
        </Route>
        <Route path="/experiences/puzzled" exact>
          <PuzzledExperienceRouteCopy/>
        </Route>
        <Route path="/experiences/tailormade" exact>
          <TailorMadeExperienceRoute/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/packages">
          <Packages/>
        </Route>
        <Route path="/gallery">
          <Gallery/>
        </Route>
        <Route path="/business">
          <Business/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/preplanned" exact>
          <PrePlanned/>
        </Route>
        <Route path="/preplanned/known" exact>
          <Known/>
        </Route>
        <Route path="/preplanned/known/fullexperience" exact>
          <KnownFullPlan/>
        </Route>
        <Route path="/preplanned/known/lastminute" exact>
          <KnownLastMinutePlan/>
        </Route>
        <Route path="/preplanned/unknown" exact>
          <UnKnown/>
        </Route>
        <Route path="/preplanned/unknown/fullexperience" exact>
          <UnKnownFullPlan/>
        </Route>
        <Route path="/preplanned/unknown/lastminute" exact>
          <UnKnownLastMinutePlan/>
        </Route>
        <Route path="/tailormade" exact>
          <TailorMade/>
        </Route>
        <Route path="/tailormade/call" exact>
          <Call/>
        </Route>
        <Route path="/tailormade/form" exact>
          <Form/>
        </Route>
        <Route path="/tailormade/form/romantic" exact>
          <Romantic/>
        </Route>
        <Route path="/createexperience" exact>
          <CreateExperience/>
        </Route>
        <Route path="/createexperience/fullexperience" exact>
          <CreateExperienceFullPlan/>
        </Route>
        <Route path="/createexperience/lastminute" exact>
          <CreateExperienceLastMinutePlan/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

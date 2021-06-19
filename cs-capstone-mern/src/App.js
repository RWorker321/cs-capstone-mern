// Template provided by Beau Carnes on June 5, 2019 from the YouTube Channel freeCodeCamp.org 
// https://www.youtube.com/watch?v=7CqJlxBYj-M&ab_channel=freeCodeCamp.org 55:56

import React from 'react';
// Import bootstrap and custom css for styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css"
import { BrowserRouter as Router, Route} from "react-router-dom";


// Import Components
import Navbar from "./components/navbar.component";
import SleepGoalList from "./components/sleepgoal-list.component";
import SleepJournalList from "./components/sleepjournal-list.component";
import CreateUser from "./components/create-user.component";
import CreateSleepGoal from "./components/create-sleepgoal.component";

import CreateSleepJournal from "./components/create-sleepjournal.component";
import EditSleepGoal from "./components/edit-sleepgoal.component";
import EditSleepJournal from "./components/edit-sleepjournal.component";


import UsernameList from "./components/user-list.component"


import NasaImage from "./components/image-nasa.component";
import sleepMetrics from "./components/sleep-metrics.component";
import dreamInterp from "./components/dream-interpreter.components";



// ReactRouter load components from route element for path attribute. rootUrl + route element = loads path component
function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={SleepGoalList} />
      <Route path="/" exact component={SleepJournalList} />
      <Route path="/" exact component={UsernameList} />
      <Route path="/editsleepgoal/:id" component={EditSleepGoal} />
      <Route path="/editsleepjournal/:id" component={EditSleepJournal} />
      <Route path="/user" component={CreateUser} />
      <Route path="/createSleepGoal" component={CreateSleepGoal} />
      <Route path="/createSleepJournal" component={CreateSleepJournal} />
      <Route path="/editSleepGoal" component={EditSleepGoal} />
      <Route path="/editSleepJournal" component={EditSleepJournal} />
      <Route path="/NasaImage" component={NasaImage} />
      <Route path="/dreamInterp" component={dreamInterp} />
      </div>
      <div className="sleepMetrics">
        <Route component={sleepMetrics} />
      </div>
    </Router>
  );
}

export default App;

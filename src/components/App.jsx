import React from 'react';
import Header from "./Header"
import LearnForm from './LearnForm';
import { Switch, Route } from "react-router-dom";
import PracticeForm from './PracticeForm';
import UniversityForm from './UniversityForm';

function App() {
  return <>
    <Header />
    <Switch>
      <Route exact path="/" component={PracticeForm} />
      <Route exact path="/learn" component={LearnForm} />
      <Route exact path="/university" component={UniversityForm} />
    </Switch>
  </>
}

export default App;

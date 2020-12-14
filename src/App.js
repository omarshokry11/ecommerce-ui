import React, { useState } from "react";
import TopBar from './Layout/components/TopBar.js'
import MainNav from './Layout/components/MainNav.js';
import Home from './Layout/components/Blocks/Home.js'
import Shope from './Layout/components/Blocks/Shope.js';
import Features from './Layout/components/Blocks/Features.js';
import About from './Layout/components/Blocks/About.js';
import Contact from './Layout/components/Blocks/Contact.js';
import Login from './Layout/components/Blocks/Login.js';
import Forgotten from './Layout/components/Blocks/Forgotten.js';
import Create from './Layout/components/Blocks/Create.js';
import Footer from './Layout/components/Footer.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export default () => {
  const [userPlace, setUserPlace] = useState(false);

  const handleUserPlace = (state) => {
    setUserPlace(state)
  }

  return (
    <BrowserRouter>
      {!userPlace ? <><TopBar />
      <MainNav /></> : null}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shope" exact component={Shope} />
        <Route path="/features" exact  component={Features} />
        <Route path="/about" exact  component={About} />
        <Route path="/contact" exact  component={Contact} />
        <Route path="/login" exact  component={(props) => <Login {...props} handleUserPlace={(e) => handleUserPlace(e)} />} />
        <Route path="/forgotten" exact  component={(props) => <Forgotten {...props} handleUserPlace={(e) => handleUserPlace(e)} />} />
        <Route path="/create" exact  component={(props) => <Create {...props} handleUserPlace={(e) => handleUserPlace(e)} />} />
      </Switch>
      {!userPlace ? <Footer /> : null}
    </BrowserRouter>
  );
}

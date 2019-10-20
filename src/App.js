import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/global.scss';

import Menu from './components/menu';
import ComboMeals from './components/comboMeals';
import Navigation from './components/navigation';
import FlameGrilledBeef from './components/flameGrilledBeef';
import ChickenFish from './components/chickenFish';

const App = () => {
  return (
    <div>
      <Navigation />
      <Route exact path="/" component={Menu} />
      <Route path="/combomeals" component={ComboMeals} />
      <Route path="/flamegrilledbeef" component={FlameGrilledBeef} />
      <Route path="/chickenfish" component={ChickenFish} />
      {/* flamegrilledbeef
      chickenfish
      saladsmore
      drinkscoffee
      sweets
      sides
      kingjr.
      specialoffers */}
    </div>
  );
};

export default App;

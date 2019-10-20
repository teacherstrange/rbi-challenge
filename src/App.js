import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/global.scss';

import Menu from './components/menu';
import ComboMeals from './components/comboMeals';
import Navigation from './components/navigation';
import FlameGrilledBeef from './components/flameGrilledBeef';
import ChickenFish from './components/chickenFish';
import SaladsMore from './components/saladsMore';
import DrinksCoffee from './components/drinksCoffee';
import Sweets from './components/sweets';
import Sides from './components/sides';
import KingJr from './components/kingJr';
import SpecialOffers from './components/specialOffers';

const App = () => {
  return (
    <div>
      <Navigation />
      <Route exact path="/" component={Menu} />
      <Route path="/combomeals" component={ComboMeals} />
      <Route path="/flamegrilledbeef" component={FlameGrilledBeef} />
      <Route path="/chickenfish" component={ChickenFish} />
      <Route path="/saladsmore" component={SaladsMore} />
      <Route path="/drinkscoffee" component={DrinksCoffee} />
      <Route path="/sweets" component={Sweets} />
      <Route path="/sides" component={Sides} />
      <Route path="/kingjr." component={KingJr} />
      <Route path="/specialoffers" component={SpecialOffers} />
    </div>
  );
};

export default App;

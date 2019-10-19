import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/menu';
import ComboMeals from './components/comboMeals';
import Navigation from './components/navigation';
import './styles/global.scss';

const App = () => {
  return (
    <div>
      <Navigation />
      <Route exact path="/" component={Menu} />
      <Route path="/combomeals" component={ComboMeals} />
    </div>
  );
};

export default App;

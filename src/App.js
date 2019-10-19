import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/menu';
import Navigation from './components/navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <Route path="/" component={Menu} />
      {/* <Route path="/sample/:id" component={SomeComponent} /> */}
    </div>
  );
};

export default App;

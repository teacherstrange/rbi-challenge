import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/menu';

const App = () => {
  return (
    <div>
      <Route path="/" component={Menu} />
      {/* <Route path="/sample/:id" component={SomeComponent} /> */}
    </div>
  );
};

export default App;

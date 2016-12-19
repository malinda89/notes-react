import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';
import App from './components/App';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App}/>
        <Match exactly pattern="/contact" component={Contact}/>
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  ) 
}

ReactDOM.render(<Root />, document.getElementById('root'));


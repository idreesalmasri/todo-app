import React from 'react';
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import ToDo from './components/todo.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';

export default class App extends React.Component {
  render() {
    return (
      <>
      <Header/>
      <ToDo />
      <Footer/>
      </>
    );
  }
}
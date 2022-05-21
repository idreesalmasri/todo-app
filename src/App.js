
import React from 'react';


import ToDo from './components/todo.js';
import "./App.css"
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import StateProvider from "./context/setting";
export default class App extends React.Component {
  render() {
    return (
      <>
      <Header/>
      <StateProvider>
      <ToDo />
      </StateProvider>
      <Footer/>
      </>
    );
  }
}
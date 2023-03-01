// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Search from './components/search/Search';
import SurveyTable from './components/survey_table/SurveyTable';

function App() {
  const surveys = [
    {status: "Active", title: 'PSYCH 101: COURSE EVAL', dateC: 'Jan 12, 2021', hyperlink: 'https://www.figma.com/1'},
    {status: "Pending", title: 'BIOCHEM 12A: COURSE EVAL', dateC: 'Feb 12, 2021', hyperlink: 'https://www.figma.com/2'},
    {status: "Disabled", title: 'LATIN 482: COURSE EVAL', dateC: 'March 12, 2021', hyperlink: 'https://www.figma.com/3'},
    {status: "Deleted", title: 'PSYCH 101: COURSE EVAL', dateC: 'April 12, 2021', hyperlink: 'https://www.figma.com/4'}
  ];
  return (
    <div className="App">
      <Header />
      <Search />
      <SurveyTable data={surveys}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

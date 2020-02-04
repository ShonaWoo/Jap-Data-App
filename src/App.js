import React, { Component } from 'react';
import './App.css';

import ChoroplethMap from './components/ChoroplethMap';
import Statistics from './components/Statistics'
import { SampleData } from './sample-data';

class App extends Component {

  constructor() {
    super();
    this.callbackFunction = this.callbackFunction.bind(this);
  }

  defaultStateStats = {

    below20Female: 32,
    female20to40: 26,
    female40to60: 29,
    above60Female: 34,
    below20Male: 38,
    male20to40: 28,
    male40to60: 29,
    above60Male: 35,

  };
  state = {
    data: SampleData,
    stateStats: this.defaultStateStats

  }

  callbackFunction = (id) => {
    if (id) {
      const hoveredState = this.state.data.find(japState => japState[0] === id)
      if (hoveredState) {
        const stateStatsProperty = { ...this.state.stateStats };
        stateStatsProperty.below20Female = hoveredState[1];
        stateStatsProperty.female20to40 = hoveredState[2];
        stateStatsProperty.female40to60 = hoveredState[3];
        stateStatsProperty.above60Female = hoveredState[4];
        stateStatsProperty.below20Male = hoveredState[5];
        stateStatsProperty.male20to40 = hoveredState[6];
        stateStatsProperty.male40to60 = hoveredState[7];
        stateStatsProperty.above60Male = hoveredState[8];
        this.setState({ stateStats: stateStatsProperty })
        console.log(this.state.stateStats);
        return
      }
      // else{
      //   this.setState({stateStats: this.defaultStateStats});

      // }

    }
    this.setState({ stateStats: this.defaultStateStats });
    // else{
    //   //set to default values
    //   this.setState({stateStats: this.defaultStateStats});
    // }
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>      <div style={{
              height: "100vh",
              width: "50vw"
            }}>
              <ChoroplethMap parentCallback={this.callbackFunction} data={this.state.data} />
            </div></td>
            <td>      <div style={{
              height: "100vh",
              width: "50vw"
            }}>
              <Statistics stateStats={this.state.stateStats} />
            </div></td>
          </tr>
        </tbody>
      </table>

    );
  }
}

export default App;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

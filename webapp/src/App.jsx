import React from 'react';
import EnergyUsage from './components/energy-usage';
import MeterReadings from './components/meter-readings';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      meterReadings: []
    }
  }

  componentDidMount() {
    fetch('https://storage.googleapis.com/bulb-interview/meterReadings.json')
      .then(response => response.json())
      .then(data => this.setState({ meterReadings: data.electricity }));
  }

  render() {
    return (
      <div>
        <EnergyUsage meterReadings={this.state.meterReadings} />
        <MeterReadings meterReadings={this.state.meterReadings} />
      </div>
    );
  }
};

export default App;
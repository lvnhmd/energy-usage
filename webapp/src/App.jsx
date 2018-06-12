import React from 'react';
import EnergyUsageChart from './components/energy-usage-chart';
import MeterReadingsTable from './components/meter-readings-table';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      meterReadings: []
    }
  }

  componentDidMount() {
    fetch('https://storage.googleapis.com/bulb-interview/meterReadingsReal.json')
      .then(response => response.json())
      .then(data => this.setState({ meterReadings: data.electricity }));
  }

  render() {
    return (
      <div>
        <EnergyUsageChart meterReadings={this.state.meterReadings} />
        <MeterReadingsTable meterReadings={this.state.meterReadings} />
      </div>
    );
  }
};

export default App;
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import "isomorphic-fetch";

import App from './App';
import EnergyUsageChart from './components/energy-usage-chart';
import MeterReadingsTable from './components/meter-readings-table';

describe('<App />', () => {

  it('renders one <EnergyUsageChart /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(EnergyUsageChart)).to.have.length(1);
  });

  it('renders one <MeterReadingsTable /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(MeterReadingsTable)).to.have.length(1);
  });

});
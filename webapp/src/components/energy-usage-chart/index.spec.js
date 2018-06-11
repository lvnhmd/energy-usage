import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { BarChart } from 'recharts';

import meterReadingsData from '../../data/meterReadingsSample.json';

import EnergyUsageChart from './index';

const meterReadings = meterReadingsData.electricity;

describe('<EnergyUsageChart />', () => {

    it('renders one <BarChart /> component', () => {
        const wrapper = shallow(<EnergyUsageChart meterReadings={meterReadings} />);
        expect(wrapper.find(BarChart)).to.have.length(1);
    });

});
import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';

import meterReadingsData from '../../data/meterReadingsSample.json';
import MeterReadingsTable from './index';

const meterReadings = meterReadingsData.electricity;

describe('<MeterReadingsTable />', () => {
    it('renders one <table>', () => {
        const wrapper = render(<MeterReadingsTable meterReadings={meterReadings} />);
        expect(wrapper.find('table').length).to.equal(1);
    });
});
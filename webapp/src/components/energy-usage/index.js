import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class EnergyUsage extends React.Component {

    render() {

        const meterReadings = this.props.meterReadings;
        const energyUsageData = [];
        for (let i = 0; i < meterReadings.length - 2; i++) {
            const energyUsage =
                meterReadings[i + 1].cumulative - meterReadings[i].cumulative;
            energyUsageData.push({
                date: meterReadings[i + 1].readingDate,
                energyUsage,
            });
        }

        return (<div>
            <h2>Energy Usage</h2>
            <BarChart width={1400} height={400} data={energyUsageData}>
                <XAxis dataKey="date" />
                <YAxis dataKey="energyUsage" />
                <CartesianGrid horizontal={false} />
                <Tooltip />
                <Bar dataKey="energyUsage" fill="#03ad54" isAnimationActive={false} />
            </BarChart>
        </div>);
    }
}
export default EnergyUsage;

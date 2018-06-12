import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import moment from 'moment';

class EnergyUsageChart extends React.Component {

    render() {

        /**
         * Check whether a moment object is the end of the month.
         * Ignore the time part.
         * @param {moment} mmt
         */
        function isEndOfMonth(mmt) {
            // startOf allows to ignore the time component
            // we call moment(mmt) because startOf and endOf mutate the momentj object.
            return moment.utc(mmt).startOf('day').isSame(moment.utc(mmt).endOf('month').startOf('day'));
        }

        /**
         * Returns the difference between two moment objects in number of days.
         * @param {moment} mmt1
         * @param {moment} mm2
         */
        function getDiffInDays(mmt1, mm2) {
            return mmt1.diff(mm2, 'days');
        }

        /**
         * Return the number of days between the given moment object
         * and the end of the month of this moment object.
         * @param {moment} mmt
         */
        function getDaysUntilMonthEnd(mmt) {
            return getDiffInDays(moment.utc(mmt).endOf('month'), mmt);
        }

        const meterReadings = this.props.meterReadings;
        const energyUsageData = [];

        for (let i = 1; i < meterReadings.length - 1; i++) {

            let dailyUsage = Math.round((meterReadings[i].cumulative - meterReadings[i - 1].cumulative) /
                getDiffInDays(
                    moment(meterReadings[i].readingDate), moment(meterReadings[i].readingDate).startOf('month')));

            meterReadings[i].estimate = meterReadings[i].cumulative + getDaysUntilMonthEnd(meterReadings[i].readingDate) * dailyUsage;


            const estimate =
                meterReadings[i].estimate - meterReadings[i - 1].estimate;

            energyUsageData.push({
                date: meterReadings[i].readingDate,
                energyUsage: estimate
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
export default EnergyUsageChart;

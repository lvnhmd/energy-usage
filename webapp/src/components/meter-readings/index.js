import React from 'react';

class MeterReadings extends React.Component {

    render() {

        const meterReadings = this.props.meterReadings;
        const meterReadingsRows = meterReadings.map(reading => (
            <tr key={reading.readingDate}>
                <td>{reading.readingDate}</td>
                <td>{reading.cumulative}</td>
                <td>{reading.unit}</td>
            </tr>
        ));

        return (
            <div>
                <h2>Meter Readings</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Reading</th>
                            <th>Unit</th>
                        </tr>
                        {meterReadingsRows}
                    </tbody>
                </table>
            </div>);
    }
}
export default MeterReadings;

import React, { Component } from 'react';

class Statistics extends Component {

    getTotalPopulation() {
        const stateStats = this.props.stateStats;
        return (stateStats.below20Female + stateStats.female20to40
            + stateStats.female40to60 + stateStats.above60Female
            + stateStats.below20Male + stateStats.male20to40
            + stateStats.male40to60 + stateStats.above60Male).toFixed(0)

    }

    getMalePopulation() {
        const stateStats = this.props.stateStats;

        return (stateStats.below20Male + stateStats.male20to40
            + stateStats.male40to60 + stateStats.above60Male).toFixed(0)
    }

    getFemalePopulation() {
        const stateStats = this.props.stateStats;

        return (stateStats.below20Female + stateStats.female20to40
            + stateStats.female40to60 + stateStats.above60Female).toFixed(0)

    }

    render() {
        return (
            <div>
                <h1 style={{ color: "red" }}>Total Population</h1>
                <h1 style={{ color: "CornflowerBlue" }}>{this.getTotalPopulation() + 'M'}</h1>
                <br></br>
                <table><tbody><tr>
                    <td><h2>Male</h2><h2 style={{ color: "CornflowerBlue" }}>{this.getMalePopulation() + 'M'}</h2></td>
                    <td></td>
                    <td><h2>Female</h2><h2 style={{ color: "CornflowerBlue" }}>{this.getFemalePopulation() + 'M'}</h2></td>
                </tr></tbody>
                </table>
                <table><tbody><tr>
                    <td><h4>Age</h4></td>
                    <td><h4>Male</h4></td>
                    <td><h4>Female</h4></td>
                    <td><h4>Total</h4></td>
                    </tr>
                    <tr>
                    <td>Below 20</td>
                    <td style={{ color: "CornflowerBlue" }}>{this.props.stateStats.below20Male.toFixed(0) + 'M'}</td>
                    <td style={{ color: "CornflowerBlue" }}>{this.props.stateStats.below20Female.toFixed(0) + 'M'}</td>
                    <td style={{ color: "CornflowerBlue" }}>{(this.props.stateStats.below20Male + this.props.stateStats.below20Female).toFixed(0) + 'M'}</td>

                    </tr>
                    <tr>
                    <td>20 - 40</td>
                    <td style={{ color: "CornflowerBlue" }}>{this.props.stateStats.male20to40.toFixed(0) + 'M'}</td>
                    <td style={{ color: "CornflowerBlue" }}>{this.props.stateStats.female20to40.toFixed(0) + 'M'}</td>
                    <td style={{ color: "CornflowerBlue" }}>{(this.props.stateStats.male20to40 + this.props.stateStats.female20to40).toFixed(0) + 'M'}</td>
                    </tr>
                    <tr>
                    <td>40 - 60</td>
                    <td style={{ color: "CornflowerBlue" }}>{this.props.stateStats.male40to60.toFixed(0) + 'M'}</td>
                    <td style={{ color: "CornflowerBlue" }}>{this.props.stateStats.female40to60.toFixed(0) + 'M'}</td>
                    <td style={{ color: "CornflowerBlue" }}>{(this.props.stateStats.male40to60 + this.props.stateStats.female40to60).toFixed(0) + 'M'}</td>
                    </tr>
                    <tr>
                    <td>Above 60</td>
                    <td style={{ color: "CornflowerBlue" }}>{this.props.stateStats.above60Male.toFixed(0) + 'M'}</td>
                    <td style={{ color: "CornflowerBlue" }}>{this.props.stateStats.above60Female.toFixed(0) + 'M'}</td>
                    <td style={{ color: "CornflowerBlue" }}>{(this.props.stateStats.above60Male + this.props.stateStats.above60Female).toFixed(0) + 'M'}</td>
                    </tr>
                

                </tbody>

                </table>
            </div>
        );

    }

}

export default Statistics;
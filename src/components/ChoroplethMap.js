import React, { Component } from 'react';
import Datamap from 'datamaps/dist/datamaps.world.min.js';
import d3 from 'd3';
import JapanJson from './Japan.topo.json';

class ChoroplethMap extends Component {


    popUpEvent(id) {
        console.log(id);
        this.props.parentCallback(id);
    }

    componentDidMount() {
        // Datamaps expect data in format:
        // { "USA": { "fillColor": "#42a844", numberOfWhatever: 75},
        //   "FRA": { "fillColor": "#8dc386", numberOfWhatever: 43 } }
        let dataset = {};

        // colors should be uniq for every value.
        // For this purpose we create palette(using min/max this.props.data-value)
        let onlyValues = this.props.data.map((obj) => { return obj[1]; });
        let minValue = Math.min.apply(null, onlyValues),
            maxValue = Math.max.apply(null, onlyValues);

        // create color palette function
        let paletteScale = d3.scale.linear()
            .domain([minValue, maxValue])
            .range(["#EFEFFF", "#02386F"]); // blue color

        // fill dataset in appropriate format
        this.props.data.forEach((item) => { //
            let iso = item[0],
                value = item[1] + item[2] + item[3] + item[4] + item[5] + item[6] + item[7] + item[8];
            dataset[iso] = { numberOfThings: value, fillColor: paletteScale(value) };
        });

        let map = new Datamap({
            element: document.getElementById('cloropleth_map'),
            scope: 'japan',
            geographyConfig: {
                popupOnHover: true,
                highlightOnHover: true,
                borderColor: '#444',
                highlightBorderWidth: 1,
                borderWidth: 0.5,
                dataJson: JapanJson,
                popupTemplate: (geo, data) => {
                    console.log(geo.id)
                    // don't show tooltip if country not present in dataset
                    if (!data) { return; }
                    this.popUpEvent(geo.id);
                    // tooltip content
                    return ['<div class="hoverinfo">',
                        '<strong>', geo.properties.name, '</strong>',
                        '<br>Count: <strong>', data.numberOfThings.toFixed(1) + 'M', '</strong>',
                        '</div>'].join('');
                }
            },
            fills: {
                HIGH: '#00336f',
                LOW: '#123456',
                MEDIUM: 'blue',
                UNKNOWN: 'rgb(0,0,0)',
                defaultFill: '#eee'
            },
            data: dataset,
            setProjection: (element) => {
                var projection = d3.geo.mercator()
                    .center([138.2529, 36.2048]) //[East Latitude, North Longitude]
                    .scale(1000)
                    .translate([element.offsetWidth / 2, element.offsetHeight / 3]);

                var path = d3.geo.path().projection(projection);
                return { path: path, projection: projection };
            }
        });
        d3.selectAll('div').on('mouseout', (info) => {
            console.log('MOUSEOUT');
            this.props.parentCallback("");
        })
        //this.prepareLegend();
    }

    prepareLegend() {
        // const svg = d3.create("svg").attr("viewBox", [0, 0, 975, 610]);
        // svg.append("g")
        // .attr("transform", "translate(610,20)")
        // .append(() => legend({color: d3.scaleSequentialLog([1, 100], d3.interpolateBlues), title: "Total Population", width: 260}));

        // return svg.node()

        var sequentialScale = d3.scaleSequential(d3.interpolateBlues)
            .domain([0, 10]);

        var svg = d3.select("svg");

        svg.append("g")
            .attr("class", "legendSequential")
            .attr("transform", "translate(20,20)");

        var legendSequential = d3.legendColor()
            .shapeWidth(30)
            .cells(10)
            .orient("horizontal")
            .scale(sequentialScale)

        svg.select(".legendSequential")
            .call(legendSequential);

    }


    render() {
        return (    
            <div id="cloropleth_map" style={{
                height: "100%",
                width: "100%",
            }}><h1 align="center" style={{color: "red"}}>JAPAN</h1></div>
        );
    }
}

export default ChoroplethMap;
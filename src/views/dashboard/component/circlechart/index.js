import React, { Component } from "react";
import Chart from 'react-apexcharts';

export default class CircleChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [80, 20],
            options: {
                chart: {
                    height: 350,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                formatter: function (w) {
                                    return 249
                                }
                            }
                        }
                    }
                },
                labels: ['עובדים', 'לא עובדים'],
            },


        };
    }



    render() {
        return (

            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
            </div>

        );
    }
}
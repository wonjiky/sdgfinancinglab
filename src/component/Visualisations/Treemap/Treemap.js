import React, { Component } from 'react';
import { Treemap, BarChart  } from 'd3plus-react';


var data = [
    {id: "alpha", x: 4, y:  7},
    {id: "alpha", x: 5, y: 25},
    {id: "alpha", x: 6, y: 13},
    {id: "beta",  x: 4, y: 17},
    {id: "beta",  x: 5, y:  8},
    {id: "beta",  x: 6, y: 13}
  ];

class Treemaps extends Component {

    render() {
        let barchartData = this.props.data.map(el => ({ id: el.RecipientName, x: el.value, y: 10}));
		const build = {
            data: barchartData,
            
            // groupBy: 'Name',
            // discrete: ''
            // size: d => d.value,
			// on: {
			// 	click: d => this.props.clicked(d.City_ID), 
				// mouseover: d => this.props.hovered(d.City_ID)
			// },
			// tooltip: true,
			tooltipConfig: ({ 
                body: d => {
                    let table = "<table class='tooltip-table'>";
                    // table += "<tr><td class='title'>Year:</td><td class='data'>" + d.RecipientName + "</td></tr>";
                    table += "<tr><td class='title'>Value:</td><td class='data'>" + d.x + "</td></tr>";
                    table += "</table>";
                        return table;
                    },
                    // footer: function(d) {
                    //     return "<sub class='tooltip-footer'>Data Collected in 2012</sub>";
                    // },
                    // title: function(d) {
                    // var txt = d.id;
                    //     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
                    // }
            }),
			legend: false,
			// fill: d => d.Color,
			// shapeConfig: {
            //     fill:d => d.Color,
            //     labelConfig: {
            //         fontResize:false,
            //         fontSize:13,
            //         width:50,
            //         height:1000,
            //         padding:0.2
            // }}
        };
        
        // return <div>hello</div>
        
        return <BarChart config={build} /> ;
	}
    // render() {
	// 	const build = {
	// 		groupBy: 'Name',
	// 		data: this.props.data,
    //         size: d => d.value,
	// 		// on: {
	// 		// 	click: d => this.props.clicked(d.City_ID), 
	// 			// mouseover: d => this.props.hovered(d.City_ID)
	// 		// },
	// 		// tooltip: true,
	// 		tooltipConfig: ({ 
    //             body: d => {
    //                 let table = "<table class='tooltip-table'>";
    //                 // table += "<tr><td class='title'>Year:</td><td class='data'>" + d.RecipientName + "</td></tr>";
    //                 table += "<tr><td class='title'>Value:</td><td class='data'>" + d.value + "</td></tr>";
    //                 table += "</table>";
    //                     return table;
    //                 },
    //                 // footer: function(d) {
    //                 //     return "<sub class='tooltip-footer'>Data Collected in 2012</sub>";
    //                 // },
    //                 // title: function(d) {
    //                 // var txt = d.id;
    //                 //     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
    //                 // }
    //         }),
	// 		legend: false,
	// 		// fill: d => d.Color,
	// 		// shapeConfig: {
    //         //     fill:d => d.Color,
    //         //     labelConfig: {
    //         //         fontResize:false,
    //         //         fontSize:13,
    //         //         width:50,
    //         //         height:1000,
    //         //         padding:0.2
    //         // }}
    //     };
        
    //     // return <div>hello</div>
        
    //     return <Treemap config={build} /> ;
	// }
}

export default Treemaps;


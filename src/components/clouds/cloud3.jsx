import React from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'

class Cloud3 extends React.Component{

    constructor(){
        super();

        this.width = 1000;
        this.height = 800;

        this.x = d3.scale.linear()
            .domain([0, 1])
            .range([0, this.width])

        this.drop = d3.scale.linear()
            .domain([0, 1])
            .range([150, this.height - 150]),

        this.radius = d3.scale.sqrt()
            .domain([0, 1])
            .range([0, 30])

        this.state = { data: [] }
    }

    add() {
        var i = {key: Date.now(), x: this.x(Math.random()), y: this.drop(Math.random()), r: this.radius(Math.random()) }
        this.setState({ data: this.state.data.concat(i)});
    }

    remove(){
        let data = this.state.data.slice(1);
        this.setState({ data });
    }

    componentDidMount(){

        this.int = setInterval(() => {
            this.state.data.length < 10 ? this.add() : this.remove()
        }, 100);
    }

    componentWillUnmount(){
        clearInterval(this.int);
    }

    componentDidUpdate(){

        let n = ReactDOM.findDOMNode(this);

        let item = d3.select(n).selectAll('circle')
            .data(this.state.data, (d) => d.key);

        item.enter().append('circle')
            .attr('class', 'item')
            .attr('r', (d) =>  { return d.r; })
            .attr('cx', (d) =>  { return d.x; })
            .attr('cy', (d) => { return d.r; })
            .style('stroke', '#3E6E9C')
            .transition().duration(500)
            .attr('cy', (d) => { return d.y; })
            .style('stroke', '#81E797');

        item.exit().filter(':not(.exiting)') // Don't select already exiting nodes
            .classed('exiting', true)
            .transition().duration(4000)
            .attr('cy', (d) => this.height - d.r)
            .style('stroke', '#3E6E9C')
            .remove();
    }

    render(){
        return React.createElement('svg', {
            width: this.width,
            height: this.height
        });
    }
}

export { Cloud3 };
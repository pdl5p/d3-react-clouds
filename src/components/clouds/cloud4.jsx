
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import collide from '../../common/collide.js';

class Cloud4 extends Component {

    componentDidMount() {
        const self = this;
        self.collide = collide;
        console.log("MOUNTED");

        const svg = d3.select(ReactDOM.findDOMNode(this));

        svg.on("mousemove", (e) => {
            let p = d3.mouse(svg.node())
            //root.px = p[0];
            //root.py = p[1];
            //force.resume();
        });


        var width = 960,
            height = 500;

        var nodes = d3.range(200).map(function () { return { radius: Math.random() * 12 + 4 }; }),
            root = nodes[0],
            color = d3.scale.category20c();

        root.radius = 0;
        root.fixed = true;

        var force = d3.layout.force()
            .gravity(0.05)
            .charge(function (d, i) { return i ? 0 : -1000; })
            .nodes(nodes)
            .size([width, height]);

        force.start();

        svg.selectAll("circle")
            .data(nodes.slice(1))
            .enter().append("circle")
            .attr("r", function (d) { return d.radius; })
            .style("fill", function (d, i) { return color(i % 5); })
            .on("click", function(d, i, n) {

                d.radius = d.radius * 3;
                d3.select(this).attr("r", d.radius);
                force.resume();

            });

        let recalc = (nodes, svg, collide) => {
            var q = d3.geom.quadtree(nodes),
                i = 0,
                n = nodes.length;

            while (++i < n) q.visit(collide(nodes[i]));

            svg.selectAll("circle")
                .attr("cx", function (d) { return d.x; })
                .attr("cy", function (d) { return d.y; });
        }

        force.on("tick", function (e) {
            recalc(nodes, svg, self.collide);
        });
    }

    render() {
        return (
            React.createElement('svg', {
                width: 900,
                height: 700
            })
        );
    }


}

export { Cloud4 };
import React from 'react';
import ReactDOM from 'react-dom';

import * as d3 from "d3";

import styles from './pie.component.less';


var width = window.innerWidth;
var height = window.innerHeight*0.7;
var radius = Math.min(width*0.7, height*0.7) / 2;
height = radius*2.2;


class Pie extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {

    this.svg = d3.select(ReactDOM.findDOMNode(this.refs.graph))
      .attr("class", styles.pie);

    this.svg.append("g")
      .attr("class", "slices");
      this.svg.append("g")
      .attr("class", "labels");
      this.svg.append("g")
      .attr("class", "lines");

    this.pie = d3.layout.pie()
      .sort(null)
      .value(function(d) {
        return d.value;
      });

    this.arc = d3.svg.arc()
      .outerRadius(radius * 0.8)
      .innerRadius(radius * 0.4);

    this.outerArc = d3.svg.arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);

    this.svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    this.key = function(d){ return d.data.index; };

    this.color = d3.scale.ordinal()
      .range(["rgba(0,0,0, 0.2)", "rgba(0,0,0, 0.3)", "rgba(0,0,0, 0.4)", "rgba(0,0,0, 0.5)"]);

    this.change(this.props.data);

  }

  componentDidUpdate() {
    this.change(this.props.data);
  }


  change(data) {
    let color = this.color;
    let key  = this.key;
    let arc = this.arc; 
    let outerArc = this.outerArc;

    /* ------- PIE SLICES -------*/
    var slice = this.svg.select(".slices").selectAll("path.slice")
      .data(this.pie(data), key);
  
    slice.enter()
      .insert("path")
      .style("fill", (d) => { return color(d.data.label); })
      .attr("class", "slice")
      .on("mouseover", function handleMouseOver(d, i) { 
        d3.select(this).style({
          fill: "#FD625E",
        });
      })
      .on("mouseout", function handleMouseOut(d, i) {
        d3.select(this).style({
          fill:  color(d.data.label),
        });
      });

    slice		
      .transition().duration(1000)
      .attrTween("d", function(d) {
        this._current = this._current || d;
        var interpolate = d3.interpolate(this._current, d);
        this._current = interpolate(0);
        return function(t) {
          return arc(interpolate(t));
        };
      })
  
    slice.exit()
      .remove();
  
    /* ------- TEXT LABELS -------*/
    this.svg.select(".labels").selectAll("text").remove();
    var text = this.svg.select(".labels").selectAll("text")
      .data(this.pie(data), key);
  
    text.enter()
      .append("text")
      .attr("dy", ".35em")
      .attr("class", styles.label)
      .text((d)=> {
        return d.data.label;
      });
    
    function midAngle(d){
      return d.startAngle + (d.endAngle - d.startAngle)/2;
    }
  
    text.transition().duration(1000)
      .attrTween("transform", function(d) {
        this._current = this._current || d;
        var interpolate = d3.interpolate(this._current, d);
        this._current = interpolate(0);


        return function(t) {
          var d2 = interpolate(t);
          var pos = outerArc.centroid(d2);
          pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
          return "translate("+ pos +")";
        };
      })
      .styleTween("text-anchor", function(d){
        this._current = this._current || d;
        var interpolate = d3.interpolate(this._current, d);
        this._current = interpolate(0);

        return function(t) {
          var d2 = interpolate(t);
          return midAngle(d2) < Math.PI ? "start":"end";
        };
      });
  
    text.exit()
      .remove();
  
    /* ------- SLICE TO TEXT POLYLINES -------*/
  
    var polyline = this.svg.select(".lines").selectAll("polyline")
      .data(this.pie(data), key);
    
    polyline.enter()
      .append("polyline");
  
    polyline.transition().duration(1000)
      .attrTween("points", function(d){
        this._current = this._current || d;
        var interpolate = d3.interpolate(this._current, d);
        this._current = interpolate(0);
        
        return function(t) {
          var d2 = interpolate(t);
          var pos = outerArc.centroid(d2);
          pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
          return [arc.centroid(d2), outerArc.centroid(d2), pos];
        };			
      });
    
    polyline.exit()
      .remove();
  };


  render() {
    return (
      <svg width={width} height={height}>
        <g ref='graph' />
      </svg>
    );
  }

}

    
export default Pie;



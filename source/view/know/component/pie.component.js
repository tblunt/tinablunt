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

    this.state = {
      hoveredItemLabel: null
    }
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

    this.change(this.props.data, this.props.selectedTagString);

  }

  componentDidUpdate() {
    this.change(this.props.data, this.props.selectedTagString);
  }


  change(data, selectedTagString = null) {
    let color = this.color;
    let key  = this.key;
    let arc = this.arc; 
    let outerArc = this.outerArc;

    /* ------- PIE SLICES -------*/
    var slice = this.svg.select(".slices").selectAll("path.slice")
      .data(this.pie(data), key);
  
    slice.enter()
      .insert("path")
      .attr("class", "slice")
      .on("mouseover", (d, i) => { 
        this.setState({
          hoveredItemLabel: d.data.label
        })
      })
      .on("mouseout", (d, i) => {
        this.setState({
          hoveredItemLabel: null
        })
      })
      .on("click", (d) => {
        this.props.onSliceClick(d.data.label);
        
      });

      slice.style("fill", (d)=> {
        if(d.data.label == selectedTagString) {
          return "#FD625E";
        }  
        else if(d.data.label == selectedTagString) {
          return "rgba(253, 98, 94, 0.7)";
        }
        else {
          return color(d.data.label); 
        }
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
      });

  
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

      text
        .style("fill", (d)=> {
          if(d.data.label == selectedTagString) {
            return "#FD625E";
          }  
          else if(d.data.label == this.state.hoveredItemLabel) {
            return "#fff";
          } 
          else {
            return "rgba(255,255,255,0.7)"; 
          }
        })
        .style("font-weight", (d)=> {
          if(d.data.label == selectedTagString) {
            return "bold";
          }  
          else {
            return "normal"; 
          }
        })
        .style("font-size", (d)=> {
          if(d.data.label == selectedTagString) {
            return "14px";
          } 
          else {
            return "10px"; 
          }
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



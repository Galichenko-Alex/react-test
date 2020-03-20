import React, {useEffect, useRef} from 'react';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';
import * as d3 from 'd3';

const styles = () => ({
  graphs: {
    width: 210,
    height: 150,
  },
  nodeText: {
    '& > text': {
      whiteSpace: 'break-spaces'
    }
  }
});

const Graph = ({classes}) => {
  const refs = {
    main: useRef(),
    node1: useRef(),
  };

  useEffect(() => {
    const data = [25, 25, 25, 25];
    const text = [
      [
        'GET ',
        '/3.1/lesson',
      ],
      [
        'POST',
        '/3.1/lesson',
      ],
      [
        'PUT',
        '/3.1/lesson',
      ]
    ];
    const arcs = d3.pie()(data);
    const svgElement = d3.select(refs.main.current);
    const g = svgElement.append("g")
      .attr("transform", "translate(105, 75)");

    const arc = d3.arc()
      .innerRadius(50)
      .outerRadius(60)
      .padAngle(0.06);

    g.append('circle')
      .attr('r', 43)
      .attr('fill', '#c5c9e9');

    g.selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .style("fill", function (d, i) {
        if (i === 0) {
          return d3.color('#e88a5f');
        }
        return d3.color('#6cd690');
      })
      .attr("d", arc);

    d3.select(refs.main.current).append("text")
      .attr("x", 69)
      .attr("y", 78)
      .attr("stroke", "#000000")
      .attr("fill", "#000000")
      .attr("font-size", "11px")
      .text("lesson-service");

    for (let i = 0; i < 3; i++) {
      var circle = i;
      const svgElement = d3.select(refs.node1.current);
      const g = svgElement.append("g")
        .attr("transform", "translate(" + (35 + 70 * i) + ", 75)");
      const arc = d3.arc()
        .innerRadius(25)
        .outerRadius(30)
        .padAngle(0.06);

      g.append('circle')
        .attr('r', 22)
        .attr('fill', '#c5c9e9');

      g.selectAll("path")
        .data(arcs)
        .enter()
        .append("path")
        // eslint-disable-next-line no-loop-func
        .style("fill", function (d, i) {
          if (circle === 2 && i === 0) {
            return d3.color('#e88a5f');
          }
          return d3.color('#6cd690');
        })
        .attr("d", arc);

      svgElement.append("text")
        .attr('class', 'nodeText')
        .attr("x", 25 + 70 * i)
        .attr("y", 73)
        .attr("stroke", "#000000")
        .attr("fill", "#000000")
        .attr("font-size", "8px")
        .text(text[i][0]);

      svgElement.append("text")
        .attr('class', 'nodeText')
        .attr("x", 15 + 70 * i)
        .attr("y", 82)
        .attr("stroke", "#000000")
        .attr("fill", "#000000")
        .attr("font-size", "8px")
        .text(text[i][1]);
    }

  }, []);

  return (
    <div>
      <svg
        className={classNames(classes.graphs, classes.nodeText)}
        ref={refs.main}
      />
      <div>
        <svg
          className={classNames(classes.graphs, classes.nodeText)}
          ref={refs.node1}
        />
      </div>
    </div>
  )
};

export default withStyles(styles)(Graph);

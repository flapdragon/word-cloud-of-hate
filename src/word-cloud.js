import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactWordcloud from 'react-wordcloud';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import words from './words';

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#288d63", "#6fd2d4", "#f405c9"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [5, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 0],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};

class WordCloud extends Component {
  render() {
    return (
      <div>
        <div style={{ height: 400, width: 600, marginTop: 20 }}>
          <ReactWordcloud options={options} words={words} />
        </div>
      </div>
    );
  }
}

export default WordCloud;

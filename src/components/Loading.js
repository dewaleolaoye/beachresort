import React, { Component } from 'react';
import LodaingGif from '../images/gif/loading-arrow.gif';

export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <h4>rooms data loading...</h4>
        <img src={LodaingGif} alt="loading" />
      </div>
    );
  }
}

import React, { Component } from "react";
import './Portfolio.css'
import PortfolioProjects from './PortfolioProjects/PortfolioProjects'


class Portfolio extends Component {

  render() {
    return (
      <div>
          <PortfolioProjects />
      </div> 
    );
  }
}

export default Portfolio;
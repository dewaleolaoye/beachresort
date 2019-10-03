import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info:
          'Wake up looking forward to the day ahead in one of our standard, superior, deluxe rooms or suites'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Haiking',
        info:
          'Wake up looking forward to the day ahead in one of our standard, superior, deluxe rooms or suites'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info:
          'Wake up looking forward to the day ahead in one of our standard, superior, deluxe rooms or suites'
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info:
          'Wake up looking forward to the day ahead in one of our standard, superior, deluxe rooms or suites'
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

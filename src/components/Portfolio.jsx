
// Portfolio.js
import React, { Component } from 'react';

const portfolioData = [
  {
    id: 1,
    image: require('../assets/portfolio1.jpg'),
    category: 'App',
  },
  {
    id: 2,
    image: require('../assets/portfolio2.jpg'),
    category: 'Product',
  },
  {
    id: 3,
    image: require('../assets/portfolio4.jpg'),
    category: 'Books',
  },
  {
    id: 4,
    image: require('../assets/portfolio3.jpg'),
    category: 'Product',
  },
  {
    id: 5,
    image: require('../assets/portfolio7.jpg'),
    category: 'Books',
  },
  {
    id: 6,
    image: require('../assets/portfolio5.jpg'),
    category: 'App',
  },
  {
    id: 7,
    image: require('../assets/portfolio8.jpg'),
    category: 'App',
  },
  {
    id: 8,
    image: require('../assets/portfolio9.jpg'),
    category: 'Books',
  },
  {
    id: 9,
    image: require('../assets/portfolio3.jpg'),
    category: 'App',
  },
  {
    id: 10,
    image: require('../assets/portfolio6.jpg'),
    category: 'Branding',
  },
];

const categories = ['All', 'App', 'Product', 'Branding', 'Books'];

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'All',
    };
  }

  handleCategoryClick = (category) => {
    this.setState({ selectedCategory: category });
  };

  getFilteredData() {
    const { selectedCategory } = this.state;
    return selectedCategory === 'All'
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);
  }

  render() {
    const { selectedCategory } = this.state;
    const filteredData = this.getFilteredData();

    return (
      <section className="portfolio">
        <div className="text-center mb-4">
          <h2 className="portfolio-title">PORTFOLIO</h2>
          <p className="portfolio-subtitle">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
          <div className="filters">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`filter ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => this.handleCategoryClick(cat)}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
        <div className="portfolio-grid">
          {filteredData.map((item) => (
            <div key={item.id} className="portfolio-item">
              <img src={item.image} alt={`Portfolio ${item.id}`} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Portfolio;


import React, { Component } from 'react';
import Filter from '../Filter';
import Sort from '../Sorting';
import './style.sass';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostTreding: [
        'anime 1',
        'anime 2',
        'anime 3',
        'anime 4',
        'anime 5',
      ],
      categoryList: [
        {
          img: '',
          title: '',
          description: '',
        },
      ],
    };
  }

  render() {
    const { mostTreding, categoryList } = this.state;
    return (
      <div>
        <h1>Anime</h1>
        <div>
          <h2>Most Trending</h2>
          {mostTreding.map((item) => (
            <div>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <Filter />
        <Sort />
        <div>
          {categoryList.map((item) => (
            <div>
              <figure>
                <img src={item.img} alt="" />
                <figcaption>{item.title}</figcaption>
              </figure>
              <div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Category;

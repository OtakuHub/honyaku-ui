import React, {Component } from 'react';
import "./style.sass";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostTreding: [
        "anime 1",
        "anime 2",
        "anime 3",
        "anime 4",
        "anime 5"
      ],
      items: [
        {
          img: "",
          title: "",
          description: ""
        }
      ]
    };
  }

  render() {
    const { mostTreding, items } = this.state;
    return(
      <div>
        <h1>Anime</h1>
        <div>
            <h2>Most Trending</h2>
            { mostTreding.forEach(item => {
              <div>
                <p>{item}</p>
              </div>
            })}
        </div>
      </div>
    )
  }
}

export default Category;
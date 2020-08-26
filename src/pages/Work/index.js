import React, { Component } from 'react';

class Work extends Component {
  constructor(props) {
    super(props);
      this.state = {
          work: {
              title: "Gintama",
              image: "https://m.media-amazon.com/images/M/MV5BMDkxZTJjZTEtMDRjMy00Yzk1LWI5YjItMjIwYmVlYzhlZWZhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
              description: "The Amanto, aliens from outer space,... ",
              genres: ["Drama", "Comedy", "Action"]
          },
    };
  }

    render() {
        const { work } = this.state;
    return (
        <div>
            
            <table cellspacing="30">
            <tr>
                <td>
                <img
                    src={work.image}
                    alt="Gintama Anime Poster"
                />
                </td>
                <td>
                        <h1>{work.title}</h1>
                        <h2>{this.props.match.params.id}</h2>

                <p>
                    <center>
                    {work.description}
                    </center>
                </p>
                <center>
                    <h4><p>Genres</p></h4>
                </center>
                        <center><p>{work.genres.join(", ")}</p></center>
                <button type="button" onclick="alert('Thanks for your work!')">
                    Join as Translator
                </button>
                </td>
            </tr>
            </table>

            <hr />
            <h2>Comment Section</h2>
            <form action="/action_page.php">
            <label for="comment">Your comment:</label>
            <input type="text" id="comment" name="comment" /><br /><br />
            <input type="submit" value="Submit" />
            </form>

            <p>
            Click the "Submit" button and your comment will be posted.
            </p>

      </div>
    );
  }
}

export default Work;
import React, { useState } from 'react';

const Work = (props) => {
  const [work] = useState({
    title: 'Gintama',
    image: 'https://m.media-amazon.com/images/M/MV5BMDkxZTJjZTEtMDRjMy00Yzk1LWI5YjItMjIwYmVlYzhlZWZhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
    description: 'The Amanto, aliens from outer space,... ',
    genres: [
      'Drama',
      'Comedy',
      'Action',
    ],
  });

  return (
    <div>
      <table cellSpacing="30">
        <tr>
          <td>
            <img src={work.image} alt="Gintama Anime Poster" />
          </td>
          <td>
            <h1>{work.title}</h1>
            <p>
              <center>
                {work.description}
              </center>
            </p>
            <center>
              <h4>
                <p>Genres</p>
              </h4>
            </center>
            <center>
              <p>
                {work.genres.join(', ')}
              </p>
            </center>
            <button type="button">
              Join as Translator
            </button>
          </td>
        </tr>
      </table>
      <hr />
      <h2>Comment Section</h2>
      <form action="#">
        <label htmlFor="comment">
          Your comment:
        </label>
        <input type="text" id="comment" />
        <button type="submit">
          Submit
        </button>
      </form>
      <p>
        Click the Submit button and your comment will be posted.
      </p>
    </div>
  );
};

export default Work;

import React, { Component } from "react";
import styled from "styled-components";

export class CardMovies extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <Card className="card card-body text-center h-100">
          <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
          <h5 className="card-title">
            {movie.Title} - {movie.Year}
          </h5>
          <a
            className="btn"
            style={{ color: "#FFFFFF" }}
            to={"/movie/" + movie.imdbID}
          >
            Detalhes
            <i
              style={{ marginLeft: "10px" }}
              className="fas fa-chevron-right"
            />
          </a>
        </Card>
      </div>
    );
  }
}

export default CardMovies;

const Card = styled.div`
  background: #07070d;
  box-shadow: 0 0.3px 0 0.3px rgba(211, 211, 211);
  .btn {
    background: #17a2b8;
    &:hover {
      background: #127484;
    }
  }

  h5 {
    color: #e0a800;
  }

  &:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: 0.4s ease-in;
    -moz-transition: 0.4s ease-in;
    -o-transition: 0.4s ease-in;
    transition: 0.4s ease-in;
  }

  a {
    display: none;
  }

  &:hover a {
    display: block;
  }

  a {
    background: rgba(0, 0, 0, 0.4);
    top: 0;
  }
`;
